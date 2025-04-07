import React, { Component, createRef } from "react";
import { Link } from "react-router-dom";
import "./ResumeMenu.css";

export default class ResumeDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.menuRef = createRef();
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside = (e) => {
    if (this.menuRef.current && !this.menuRef.current.contains(e.target)) {
      this.setState({ open: false });
    }
  };

  toggleDropdown = () => {
    this.setState((prev) => ({ open: !prev.open }));
  };

  render() {
    const { open } = this.state;

    return (
      <div className="resume-dropdown" ref={this.menuRef}>
        <div className={`resume-nav ${open ? "resume-nav--active" : ""}`}>
          <Link to="/resume" className="resume-button">
            Resume
          </Link>
          <button
            onClick={this.toggleDropdown}
            aria-label="Toggle Resume Menu"
            className={`resume-toggle ${open ? "rotate" : ""}`}
          >
            <span className="resume-arrow">▶</span>
          </button>
        </div>

        {open && (
          <div className="resume-menu-wrapper">
            <div className="resume-menu">
              <a href="/Resume-Ke.pdf" download className="resume-menu-item">
                Download
              </a>
            </div>
          </div>
        )}
      </div>
    );
  }
}
