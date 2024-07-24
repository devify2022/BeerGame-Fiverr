// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

import About from "./pages/About";
import Auth from "./pages/Auth";
import Blogs from "./pages/Blogs";
import Dashboard from "./pages/Dashboard";
import Help from "./pages/Help";
import Landing from "./pages/Landing";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/help" element={<Help />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </div>
  );
}

export default App;
