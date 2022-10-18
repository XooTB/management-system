import React from "react";
import { Routes, Route } from "react-router-dom";
import "./Dashboard.scss";

//Compoenent Imports
import NavBar from "../../components/NavBar/NavBar";

//Page Imports
import Overview from "../Overview/Overview";
import Inventory from "../Inventory/Inventory";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <NavBar />
      <div className="main">
        <Routes>
          <Route path="/overview" element={<Overview />} />
          <Route path="/inventory" element={<Inventory />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
