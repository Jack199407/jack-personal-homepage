import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import ResumeMenu from "../../../shared/components/resumeMenu/ResumeMenu";
import "./Header.css";

export default class Header extends Component {
  render() {
    return (
      <header className="pc-header">
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
              <NavLink to="/Message">Message</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
