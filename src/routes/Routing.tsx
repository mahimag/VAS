import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import LaunchingPage from "../pages/LaunchingPage";
import Login from "../pages/Login";
import ManagePatient from "../pages/ManagePatient";
import Profile from "../pages/Profile/Profile";

var checkAuth = false;

export default function Routing() {

  if(localStorage.getItem('LoggedIn') === 'true' ){
    checkAuth = true;
  }
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/launch" element={checkAuth ? <LaunchingPage /> : <Navigate to={"/login"} />} />
      <Route path="/create" element={<ManagePatient />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}