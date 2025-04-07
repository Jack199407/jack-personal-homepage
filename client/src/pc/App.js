import { Route, Routes, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Figure from "../assets/figure.png";
import Header from "./components/header/Header";
import Footer from "../shared/components/footer/Footer";
import Home from "./pages/home/Home";
import Videos from "./pages/videos/Videos";
import About from "./pages/about/About";
import Message from "./pages/message/Message";
import Resume from "./pages/resume/Resume";
import usePageTitle from "../hooks/usePageTitle";
import "./App.css";

function App() {
  usePageTitle();
  return (
    <div className="App">
      <div className="figure-wrapper">
        <img src={Figure} className="figure" alt="figure" />
      </div>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Navigate to={`/home${window.location.search}`} replace />}
        />
        <Route path="/home" element={<Home />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/about" element={<About />} />
        <Route path="/message" element={<Message />} />
      </Routes>
      <Footer />
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
}

export default App;
