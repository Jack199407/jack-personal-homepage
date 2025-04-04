import axios from "axios";

/**
 * Get YouTube videos in playlist
 * @param {string} api - API Key
 * @param {string} playlist - playlist ID
 * @returns {Promise<Array>} - videos array
 */
export const fetchYoutubePlaylistItems = async (api, playlist) => {
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

  return res.data.items;
};
