import { Routes, Route, useLocation } from "react-router-dom";
import Footer from "./components/global/Footer";
import Navbar from "./components/global/Navbar"; 
import About from "./pages/About";
import Auth from "./pages/Auth";
import Blogs from "./pages/Blogs";
import Dashboard from "./pages/Dashboard";
import Help from "./pages/Help";
import Landing from "./pages/Landing";
import GameSimulation from "./pages/GameSimulation";

function App() {
  const location = useLocation();
  const isDashboardPage = location.pathname === "/dashboard";
  const isGamePage = location.pathname === "/game";

  return (
    <div className="App">
      {!isDashboardPage && !isGamePage && <Navbar />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/help" element={<Help />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/game" element={<GameSimulation />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
      {!isDashboardPage && !isGamePage &&  <Footer />} 
    </div>
  );
}

export default App;
