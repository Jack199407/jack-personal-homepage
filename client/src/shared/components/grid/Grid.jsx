import React, { Component } from "react";
import "./Grid.css";
export default class Grid extends Component {
  render() {
    const { videos } = this.props;
    return (
      <div className="grid-container">
        {videos.map((video) => {
          const videoId = video.snippet.resourceId?.videoId;
          const title = video.snippet.title;
          return (
            <div className="video-card">
              <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                title={title}
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          );
        })}
      </div>
    );
  }
}
