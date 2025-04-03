import React, { Component } from "react";
import "./Videos.css";

import Video from "../../components/video/Video";

const API_KEY = "AIzaSyAqhtFW0Epdtr-CwJsqJPDi-6h5YmTvBnw";
const PLAYLISTS = {
  Rehearsals: "PLWwcLAMRr0oxec5wL-9wTg93CDsZOnZSk",
  Performances: "PLWwcLAMRr0oyq7fsy-lei1Nhbtkpp2WKI",
};

export default class Videos extends Component {
  render() {
    return (
      <div className="video-container">
        <div className="video-overlay"></div>
        {Object.entries(PLAYLISTS).map(([key, value]) => (
          <Video api={API_KEY} title={key} playlist={value} />
        ))}
      </div>
    );
  }
}
