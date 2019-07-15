import { Route } from "react-router-dom";
import React, { Component } from "react";
import CandyList from "./candy/CandyList";
import LocationList from "./location/LocationList";
import EmployeeList from "./employee/EmployeeList";
import ApiManager from "../modules/ApiManager"

export default class ApplicationViews extends Component {
  state = {
    locations: [],
    employees: [],
    candyTypes: [],
    candies: []
  }

  componentDidMount() {
    const newState = {}

    fetch("http://localhost:5002/locations")
    .then(r => r.json())
    .then(locations => newState.locations = locations)
    .then(() => fetch("http://localhost:5002/employees")
    .then(r => r.json()))
    .then(employees => newState.employees = employees)
    .then(() => fetch("http://localhost:5002/candyTypes")
    .then(r => r.json()))
    .then(candyTypes => newState.candyTypes = candyTypes)
    .then(() => fetch("http://localhost:5002/candies")
    .then(r => r.json()))
    .then(candies => newState.candies = candies)
    .then(() => this.setState(newState))
  }

  deleteFunc = (entity, id) => {
    ApiManager.delete(entity, id)
    .then(candies =>this.setState({
        candies: candies
    })
  )
}

render() {
    return (
      <React.Fragment>
        <Route
          exact
          path="/"
          render={props => {
            return <LocationList locations={this.state.locations} />;
          }}
        />
        <Route
          path="/candies"
          render={props => {
            return <CandyList deleteFunc={this.deleteFunc} candies={this.state.candies} candyTypes={this.state.candyTypes}/>;
          }}
        />
        <Route
          path="/employees"
          render={props => {
            return <EmployeeList employees={this.state.employees} />;
          }}
        />
      </React.Fragment>
    );
  }
}
