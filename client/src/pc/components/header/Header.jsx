import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import ResumeMenu from "../resume/ResumeMenu";
import "./Header.css";

export default class Header extends Component {
  render() {
    return (
      <header>
        <p>JACK(KE) ZHAO</p>
        <nav>
          <ul>
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/videos">Videos</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <ResumeMenu />
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
