import { Route } from "react-router-dom";
import React, { Component } from "react";
import CandyList from "./candy/CandyList";
import LocationList from "./location/LocationList";
import EmployeeList from "./employee/EmployeeList";

export default class ApplicationViews extends Component {
  storeLocationsFromApi = [
    { id: 1, address: "123 Maple Way" },
    { id: 2, address: "543 Main St" },
    { id: 3, address: "983 What Is Up" }
  ];

  employeesFromApi = [
    { id: 1, name: "Jessica Younker" },
    { id: 2, name: "Jordan Nelson" },
    { id: 3, name: "Zoe LeBlanc" },
    { id: 4, name: "Blaise Roberts" }
  ];

  candyTypesFromApi = [
    { id: 1, type: "gum balls" },
    { id: 2, type: "gummies" },
    { id: 3, type: "chocolate" },
    { id: 4, type: "lolli pop" },
    { id: 5, type: "taffy" }
  ];

  individualCandiesFromApi = [
    { id: 1, name: "Tom's Gumballs", candyTypeId: 1},
    { id: 2, name: "Yummy Gummies", candyTypeId: 2 },
    { id: 3, name: "Stephen's Chocolate Bar", candyTypeId: 3 },
    { id: 4, name: "Lil Wayne's lolli pop", candyTypeId: 4 },
    { id: 5, name: "Laffy Taffy", candyTypeId: 5 }
  ];

  state = {
    locations: this.storeLocationsFromApi,
    employees: this.employeesFromApi,
    candyTypes: this.candyTypesFromApi,
    candies: this.individualCandiesFromApi
  };

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
            return <CandyList candies={this.state.candies} candyTypes={this.state.candyTypes}/>;
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
