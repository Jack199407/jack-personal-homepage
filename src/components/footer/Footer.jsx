import React, { Component } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Footer.css";
export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="social-icons">
          <a
            href="https://github.com/Jack199407"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github icon"></i>
          </a>
          <a
            href="https://www.youtube.com/@KeZhao-s8z"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-youtube icon"></i>
          </a>
          <a
            href="https://www.instagram.com/zhaoke882/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram icon"></i>
          </a>
        </div>
      </footer>
    );
  }
}
