import React, { Component } from "react";

import "./Home.css";
export default class Home extends Component {
  handleScroll = () => {
    const overlay = document.getElementsByClassName("home-overlay")[0];
    if (!overlay) return;

    const scrollY = window.scrollY;
    if (scrollY > 10) {
      overlay.classList.add("active");
    } else {
      overlay.classList.remove("active");
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  render() {
    return (
      <div className="home-page">
        <div className="home-overlay"></div>
      </div>
    );
  }
}
