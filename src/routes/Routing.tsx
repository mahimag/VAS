import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Login from "../components/Login";
import Profile from "../components/Profile";

export default function Routing() {
  return (
    <Routes>
      <Route path="/profile" element={<Profile />} />
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
