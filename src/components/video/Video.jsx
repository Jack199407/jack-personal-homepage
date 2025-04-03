import React, { Component } from "react";
import axios from "axios";
import "./Video.css";

import Grid from "../grid/Grid";

export default class Video extends Component {
  state = {
    title: "",
    videos: [],
    loading: false,
  };
  componentDidMount() {
    this.fetchVideos();
  }
  fetchVideos = async () => {
    const { api, title, playlist } = this.props;
    this.setState({ loading: true, title: title });
    try {
      const res = await axios.get(
        "https://www.googleapis.com/youtube/v3/playlistItems",
        {
          params: {
            key: api,
            playlistId: playlist,
            part: "snippet",
            maxResults: 10,
          },
        }
      );
      let items = res.data.items;
      this.setState({ videos: items, loading: false });
    } catch (err) {
      console.error("Error fetching videos:", err);
      this.setState({ loading: false });
    }
  };

  render() {
    const { videos, loading, title } = this.state;
    return (
      <div className="video-container">
        <p className="video-category">{title}</p>
        {loading ? <p>Loading...</p> : <Grid videos={videos} />}
      </div>
    );
  }
}
