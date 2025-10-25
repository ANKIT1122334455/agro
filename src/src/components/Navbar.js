import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>🌾 AgriSmart</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/precision-farming">Precision Farming</Link></li>
        <li><Link to="/soil-monitoring">Soil Monitoring</Link></li>
        <li><Link to="/smart-irrigation">Smart Irrigation</Link></li>
        <li><Link to="/drones-robotics">Drones & Robotics</Link></li>
        <li><Link to="/supply-chain">Supply Chain</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
