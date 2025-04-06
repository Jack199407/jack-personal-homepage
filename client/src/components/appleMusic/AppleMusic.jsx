import React, { Component } from "react";
import "./AppleMusic.css";
export default class AppleMusic extends Component {
  render() {
    return (
      <div className="apple-music-container">
        <div className="playlist-wrapper">
          <p>RECENT SONGS</p>
          <iframe
            className="apple-music-embed"
            title="Ke's Apple Music Playlist"
            allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
            height="450"
            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
            src="https://embed.music.apple.com/ca/playlist/my-page-songs/pl.u-MDAWkxWIA6W3Wdp"
          ></iframe>
        </div>
      </div>
    );
  }
}
