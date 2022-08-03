import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Dashboard from "../pages/dashboard/Dashboard";
import LaunchingPage from "../pages/launchpage/LaunchingPage";
import Login from "../pages/login/Login";
import ManagePatient from "../pages/managePatient/ManagePatient";
import Profile from "../pages/Profile/Profile";
import VaccineCreate from "../pages/vaccine/VaccineCreate";
import VaccineList from "../pages/vaccine/VaccineList";

var checkAuth = false;

export default function Routing() {
  if (localStorage.getItem("LoggedIn") === "true") {
    checkAuth = true;
  }
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/launch"
        element={checkAuth ? <LaunchingPage /> : <Navigate to={"/login"} />}
      />
      <Route path="/patient/create" element={<ManagePatient />} />
      <Route path="/vaccine/create" element={<VaccineCreate />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/vaccinelist" element={<VaccineList />} />
    </Routes>
  );
}
