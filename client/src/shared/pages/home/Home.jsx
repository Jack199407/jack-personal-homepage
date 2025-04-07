import React, { Component } from "react";
import { toast } from "react-toastify";
import PhotoWall from "../../components/photoWall/PhotoWall";
import AppleMusic from "../../components/appleMusic/AppleMusic";
import { requestSignup, authConfirm } from "../../../services/api";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      tokenChecked: false,
    };
  }

  checkTokenFromURL = async () => {
    if (this.state.tokenChecked) return;

    const params = new URLSearchParams(
      this.props.location?.search || window.location.search
    );
    const token = params.get("token");

    if (token) {
      try {
        await authConfirm(token);
        toast.success("Success sign up!");
        const newUrl = window.location.origin + window.location.pathname;
        window.history.replaceState({}, document.title, newUrl);
      } catch (error) {
        console.error(error);
        toast.error("The link is invalid or has expired.");
      }
    }

    this.setState({ tokenChecked: true });
  };

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

  async componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    await this.checkTokenFromURL();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleChange = (e) => {
    this.setState({ email: e.target.value });
  };

  handleSubmit = async () => {
    const { email } = this.state;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    try {
      await requestSignup(email);
      toast.info("A confirmation email has been sent.");
    } catch (err) {
      console.error(err);
      toast.error("Failed to send. Please try again.");
    }
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
