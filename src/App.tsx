import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import "./index.css";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ScrollingText from "./components/ScrollingText/ScrollingText";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

import Home from "./pages/Home/Home";
import Prices from "./pages/Prices/Prices";
import Schedule from "./pages/Schedule/Schedule";
import Trainers from "./pages/Trainers/Trainers";
// import Profile from "./pages/Profile/Profile";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trainers" element={<Trainers />} />
        <Route path="/prices" element={<Prices />} />
        <Route path="/schedule" element={<Schedule />} />
        {/* <Route path="/profile" element={<Profile />} /> */}
      </Routes>
      <ScrollingText />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
