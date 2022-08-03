import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import "./AppointmentList.css";

const AppointmentList: React.FC = () => {
  const getData = useSelector(
    (state: RootState) => state.appointmentInfo.appointmentData
  );
  return (
    <>
      <span>
        <h1> Appointment Information </h1>
        <h2> Patient ID: {getData.patientId} </h2>
        <h2> Location: {getData.location} </h2>
        <h2> Service Type: {getData.serviceType} </h2>
        <h2> Eligibility: {getData.eligibility} </h2>
        <h2> Screening: {getData.screening} </h2>
        <h2> Code: {getData.code} </h2>
      </span>
    </>
  );
};

export default AppointmentList;
