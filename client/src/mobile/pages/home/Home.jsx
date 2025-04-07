import React, { Component } from "react";
import SharedHome from "../../../shared/pages/home/Home";
import "./Home.css";
export default class Home extends Component {
  render() {
    return (
      <div className="mobile-home">
        <SharedHome />
      </div>
    );
  }
}
