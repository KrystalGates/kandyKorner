import React, { Component } from "react";
import NavBar from "./nav/NavBar";
import ApplicationViews from "./ApplicationViews";

export default class KandyKorner extends Component {
  render() {
    return (
      <React.Fragment>
          <NavBar />
          <ApplicationViews />
      </React.Fragment>
    );
  }
}
