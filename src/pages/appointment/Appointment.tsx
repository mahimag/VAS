import { Typography } from "antd";
import React from "react";
import AppointmentForm from "../../components/appointmentForm/AppointmentForm";

import "./Appointment.css";
const Appointment: React.FC = () => {
  const { Title } = Typography;

  return (
    <div className="appointment">
      <Title className="appointment__title">Schedule Appointment!</Title>
      <AppointmentForm />
    </div>
  );
};
export default Appointment;
