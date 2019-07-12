import React, { Component } from "react";
import CandyList from "./candy/CandyList"
import EmployeeList from "./employee/EmployeeList"
import LocationList from "./location/LocationList"

export default class KandyKorner extends Component {
  storeLocationsFromApi = [
    { id: 1, location: "123 Maple Way" },
    { id: 2, location: "543 Main St" },
    { id: 3, location: "983 What Is Up" }
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
    { id: 1, name: "Tom's Gumballs" },
    { id: 2, name: "Yummy Gummies" },
    { id: 3, name: "Stephen's Chocolate Bar" },
    { id: 4, name: "Lil Wayne's lolli pop" },
    { id: 5, name: "Laffy Taffy" }
  ];

  state = {
    locations: this.storeLocationsFromApi,
    employees: this.employeesFromApi,
    types: this.candyTypesFromApi,
    candies: this.individualCandiesFromApi
  };

  render() {
    return (
      <section className="kandyKorner">
        <h3>Kandy Korner</h3>
        <CandyList candies={this.state.candies} />
        <EmployeeList employees={this.state.employees} />
        <LocationList locations={this.state.locations} />
      </section>
    );
  }
}
