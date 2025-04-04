import { Route, Routes, Navigate } from "react-router-dom";

import Figure from "./img/figure.png";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Videos from "./pages/videos/Videos";
import About from "./pages/about/About";
import usePageTitle from "./hooks/UsePageTitle";
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
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
