import React from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();
  const navigateToLogin = () => {
    navigate("/login");
  };
  return (
    <div className="dashboard">
      <h1>Welcome to VAS!</h1>
      <button onClick={navigateToLogin}>Go To Login</button>
    </div>
  );
}

export default Dashboard;
