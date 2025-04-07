// src/components/EmailSignup.jsx
import React, { Component } from "react";
import { sendEmail } from "../../../services/api";
import "./EmailSender.css";

class EmailSender extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      status: "",
    };
  }

  handleChange = (e) => {
    this.setState({ email: e.target.value });
  };

  handleSubmit = async () => {
    const { email } = this.state;

    if (!email || !email.includes("@")) {
      this.setState({ status: "Please enter a valid email." });
      return;
    }

    try {
      await sendEmail(email);
      this.setState({ status: "", email: "" });
    } catch (error) {
      console.error(error);
      this.setState({ status: "Failed to send email." });
    }
  };

  render() {
    const { email, status } = this.state;

    return (
      <div className="email-send">
        <h2>Get my resume by inputing your email!</h2>
        <div className="input-area">
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={this.handleChange}
          />
          <button onClick={this.handleSubmit}>SEND</button>
        </div>
        <p className="input-status">{status}</p>
      </div>
    );
  }
}

export default EmailSender;
