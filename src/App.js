import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import PrecisionFarming from "./components/PrecisionFarming";
import SoilMonitoring from "./components/SoilMonitoring";
import SmartIrrigation from "./components/SmartIrrigation";
import DronesRobotics from "./components/DronesRobotics";
import SupplyChain from "./components/SupplyChain";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/precision-farming" element={<PrecisionFarming />} />
          <Route path="/soil-monitoring" element={<SoilMonitoring />} />
          <Route path="/smart-irrigation" element={<SmartIrrigation />} />
          <Route path="/drones-robotics" element={<DronesRobotics />} />
          <Route path="/supply-chain" element={<SupplyChain />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
