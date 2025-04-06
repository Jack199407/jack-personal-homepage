import axios from "axios";

const baseURL = process.env.REACT_APP_API_BASE || "http://localhost:5050";

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

export const sendEmail = async (email) => {
  await axios.post(`${baseURL}/api/email/send-email`, {
    email,
  });
};

export const requestSignup = async (email) => {
  await axios.post(`${baseURL}/api/auth/request-signup`, {
    email,
  });
};

export const authConfirm = async (token) => {
  await axios.post(`${baseURL}/api/auth/confirm`, {
    token,
  });
};
