import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import ResumeMenu from "../../../shared/components/resumeMenu/ResumeMenu";
import "./Header.css";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    };
  }

  toggleMenu = () => {
    this.setState((prev) => ({ menuOpen: !prev.menuOpen }));
  };

  closeMenu = () => {
    this.setState({ menuOpen: false });
  };

  render() {
    const { menuOpen } = this.state;

    return (
      <header className="mobile-header">
        <div className="mobile-header-top">
          <p className="logo">JACK(KE) ZHAO</p>
          <div className="menu-icon" onClick={this.toggleMenu}>
            &#9776;
          </div>
        </div>

        {menuOpen && (
          <nav className="mobile-nav">
            <ul>
              <li>
                <NavLink to="/home" onClick={this.closeMenu}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/videos" onClick={this.closeMenu}>
                  Videos
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" onClick={this.closeMenu}>
                  About
                </NavLink>
              </li>
              <ResumeMenu onClick={this.closeMenu} />
              <li>
                <NavLink to="/Message" onClick={this.closeMenu}>
                  Message
                </NavLink>
              </li>
            </ul>
          </nav>
        )}
      </header>
    );
  }
}
