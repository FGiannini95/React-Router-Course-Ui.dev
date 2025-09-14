import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Players } from "./Players";
import { Navbar } from "./Navbar";
import { BasketTeams } from "./BasketTeams";

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/players" element={<Players />} />
          <Route path="/teams" element={<BasketTeams />} />
        </Routes>
      </div>
    </Router>
  );
}
