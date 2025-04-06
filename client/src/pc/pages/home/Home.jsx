import React, { Component } from "react";

import PhotoWall from "../../../components/photoWall/PhotoWall";
import AppleMusic from "../../../components/appleMusic/AppleMusic";
import { requestSignup, authConfirm } from "../../../services/api";
import "./Home.css";
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
    };
  }

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
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (token) {
      try {
        authConfirm(token);
        alert("Success sign up!");
      } catch (error) {
        console.error(error);
        alert("The link is invalid or has expired.");
      }
    }
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  handleChange = (e) => {
    this.setState({ email: e.target.value });
  };
  handleSubmit = async () => {
    const { email } = this.state;
    await requestSignup(email);
    alert("A confirmation email has been sent.");
  };
  render() {
    const { email } = this.state;
    return (
      <div className="home-page">
        <div className="home-overlay"></div>
        <div className="take-room">
          <div className="sign-up-area">
            <p>Sign up, you'll get a surprise!</p>
            <div className="sign-up-wrapper">
              <input
                type="email"
                value={email}
                onChange={this.handleChange}
                placeholder="Enter your email"
              />
              <button onClick={this.handleSubmit}>SIGN UP</button>
            </div>
          </div>
        </div>
        <AppleMusic />
        <PhotoWall />
      </div>
    );
  }
}
