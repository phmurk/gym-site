import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy } from "react";

import "./index.css";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ScrollingText from "./components/ScrollingText/ScrollingText";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

import { AuthProvider } from "./context/AuthContext";
import AuthModal from "./components/Auth/AuthModal";

const Home = lazy(() => import("./pages/Home/Home"));
const Trainers = lazy(() => import("./pages/Trainers/Trainers"));
const Schedule = lazy(() => import("./pages/Schedule/Schedule"));
const Prices = lazy(() => import("./pages/Prices/Prices"));
const Profile = lazy(() => import("./pages/Profile/Profile"));

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trainers" element={<Trainers />} />
          <Route path="/prices" element={<Prices />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <ScrollingText />
        <Footer />
        <AuthModal />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
