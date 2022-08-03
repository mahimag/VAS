import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import "./LaunchingPage.css";

const LaunchingPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="launch">
      <Button
        className="launch__btn"
        type="primary"
        htmlType="submit"
        onClick={() => navigate("/patient/create")}
      >
        Create Patient Profile
      </Button>

      <Button
        className="launch__btn"
        type="primary"
        htmlType="submit"
        onClick={() => navigate("/vaccine/create")}
      >
        Add Vaccine
      </Button>

      <Button
        className="launch__btn"
        type="primary"
        htmlType="submit"
        onClick={() => navigate("/appointment/create")}
      >
        Schedule Appointment
      </Button>
    </div>
  );
};

export default LaunchingPage;
