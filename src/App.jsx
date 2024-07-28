// src/App.jsx
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Footer from "./components/global/Footer";
import Navbar from "./components/global/Navbar"; // Import Navbar if you have one

import About from "./pages/About";
import Auth from "./pages/Auth";
import Blogs from "./pages/Blogs";
import Dashboard from "./pages/Dashboard";
import Help from "./pages/Help";
import Landing from "./pages/Landing";
import Game from "./pages/Game";

function App() {
  const location = useLocation();
  const isDashboardPage = location.pathname === "/dashboard";

  return (
    <div className="App">
      {!isDashboardPage && <Navbar />} {/* Conditionally render Navbar */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/help" element={<Help />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/animation" element={<Game/>} />
      </Routes>
      {!isDashboardPage && <Footer />} {/* Conditionally render Footer */}
    </div>
  );
}

export default App;
