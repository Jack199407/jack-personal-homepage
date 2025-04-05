import React, { Component } from "react";
import "./Videos.css";

import Video from "../../components/video/Video";

const API_KEY = "AIzaSyCBneVsoxm6-A4r-ROnf0oecO8TomRE_R0";
const PLAYLISTS = {
  MUSIC: "PLmtWsmN_6KkQ_rLAFqt7kZm7j2FOJ5F6M",
};

export default class Videos extends Component {
  render() {
    return (
      <div className="videos-container">
        <div className="videos-overlay"></div>
        {Object.entries(PLAYLISTS).map(([key, value]) => (
          <Video api={API_KEY} title={key} playlist={value} />
        ))}
      </div>
    );
  }
}
