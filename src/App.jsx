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
import SettingPage from "./pages/SettingPage";
import EditPage from "./pages/EditPage";

function App() {
  const location = useLocation();
  const isDashboardPage = location.pathname === "/dashboard";
  const isGamePage = location.pathname === "/game";
  const isSettingPage = location.pathname === "/settings";
  const isEdit = location.pathname === "/edit";

  return (
    <div className="App">
      {!isDashboardPage && !isGamePage && !isSettingPage && !isEdit && <Navbar />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/help" element={<Help />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/game" element={<GameSimulation />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/settings" element={<SettingPage />} />
        <Route path="/edit" element={<EditPage />} />
      </Routes>
      {!isDashboardPage && !isGamePage && !isSettingPage && !isEdit && <Footer />}
    </div>
  );
}

export default App;
