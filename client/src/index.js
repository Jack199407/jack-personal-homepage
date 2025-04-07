import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import PCApp from "./pc/App";
import MobileApp from "./mobile/App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

const isMobile = /Mobi|Android|iPhone/i.test(navigator.userAgent);

const getPlatformApp = () => (isMobile ? <MobileApp /> : <PCApp />);
root.render(
  <React.StrictMode>
    <BrowserRouter>{getPlatformApp()}</BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
