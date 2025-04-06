import React, { Component } from "react";

import {
  checkEmail,
  submitMessage,
  fetchMessages,
} from "../../../services/api";
import "./Message.css";

export default class Message extends Component {
  state = {
    email: "",
    message: "",
    messages: [],
    error: "",
    tooLong: false,
  };

  componentDidMount() {
    this.fetchMessages();
  }

  fetchMessages = async () => {
    try {
      const res = await fetchMessages();
      console.log("messages:", res);
      this.setState({ messages: res });
    } catch (error) {
      console.error("Failed to load messages", error);
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    const isMessage = name === "message";
    const tooLong = isMessage && value.length > 200;

    this.setState({
      [name]: value,
      tooLong,
      error:
        isMessage && tooLong ? "Message must be 200 characters or fewer" : "",
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, message, tooLong } = this.state;

    if (!email || !message) {
      return this.setState({ error: "Email and message are required." });
    }

    if (tooLong) {
      return this.setState({ error: "Message exceeds 200 characters." });
    }

    try {
      const res = await checkEmail(email);
      if (!res.data.exists) {
        return this.setState({
          error: "Please register before leaving a message.",
        });
      }

      await submitMessage({ email, content: message });
      this.setState({ email: "", message: "", error: "", tooLong: false });
      this.fetchMessages();
    } catch (err) {
      console.error(err);
      this.setState({ error: "Something went wrong." });
    }
  };

  render() {
    const { email, message, messages, error, tooLong } = this.state;

    return (
      <div className="message-container">
        <div className="message-overlay"></div>
        <form className="message-form" onSubmit={this.handleSubmit}>
          <h2>Leave a Message</h2>
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            placeholder="Your registered email"
          />
          <textarea
            name="message"
            value={message}
            onChange={this.handleChange}
            placeholder="Your message (max 200 chars)"
            className={tooLong ? "error" : ""}
          />
          {error && <div className="error-text">{error}</div>}
          <button type="submit" disabled={tooLong}>
            SUBMIT
          </button>
        </form>

        <div className="message-list">
          <h3>Recent Messages</h3>
          {messages.map((m) => (
            <div key={m.id} className="message-item">
              <div className="msg-content">{m.content}</div>
              <div className="msg-meta">
                {m.email} ·{" "}
                {new Date(m.create_at).toLocaleString("en-CA", {
                  timeZone: "America/Toronto",
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                  hour12: true,
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
