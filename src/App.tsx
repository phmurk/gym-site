import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home/Home";
import Prices from "./pages/Prices/Prices";
import Schedule from "./pages/Schedule/Schedule";
import Trainers from "./pages/Trainers/Trainers";
import Profile from "./pages/Profile/Profile";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      {/* <div className="container"> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trainers" element={<Trainers />} />
        <Route path="/prices" element={<Prices />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      {/* </div> */}

      <Footer />
    </BrowserRouter>
  );
}

export default App;
