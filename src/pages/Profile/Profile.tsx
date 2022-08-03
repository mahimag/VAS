import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const Profile: React.FC = () => {
  const getData = useSelector(
    (state: RootState) => state.patientInfo.patientData
  );
  return (
    <>
      <span>
        <h1> Profile </h1>

        <h2> First Name: {getData.firstName} </h2>
        <h2> Last Name: {getData.lastName} </h2>
        <h2> Birth Date: {getData.birthDate} </h2>
        <h2> Ethnicity: {getData.ethnicity} </h2>
        <h2> Gender: {getData.gender} </h2>
        <h2> Email: {getData.email} </h2>
        <h2> Address: {getData.address} </h2>
        <h2> Street: {getData.street} </h2>
        <h2> City: {getData.city} </h2>
        <h2> State: {getData.state} </h2>
        <h2> Payment Information: {getData.paymentInfo} </h2>
        <h2> Insurance ID: {getData.insuranceId} </h2>
        <h2> City: {getData.city} </h2>
        <h2> Member ID: {getData.memberId} </h2>
        <h2> Insurance Provider: {getData.insuranceProvider} </h2>
      </span>
    </>
  );
};

export default Profile;
