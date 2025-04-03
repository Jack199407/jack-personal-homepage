import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

export default class header extends Component {
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
              <a href="/gigs">Photos</a>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
