import React, { Component } from "react";
import "./Video.css";

import Grid from "../grid/Grid";

import { fetchYoutubePlaylistItems } from "../../../services/youtube";

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
      const items = await fetchYoutubePlaylistItems(api, playlist);
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
