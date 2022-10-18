import React from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";

import Login from "../Login/Login";
import Dashboard from "../Dashboard/Dashboard";

import { useAuthContext } from "../../hooks/useAuth";

const App = () => {
  const { user } = useAuthContext();

  return (
    <div className="App">
      {!user && <Login />}
      {user && <Dashboard />}
    </div>
  );
};

export default App;
