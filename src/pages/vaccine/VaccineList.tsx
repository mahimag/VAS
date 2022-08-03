import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const VaccineList: React.FC = () => {
  const getData = useSelector(
    (state: RootState) => state.vaccineInfo.vaccineData
  );
  return (
    <>
      <span>
        <h1> Vaccine Information </h1>
        <h2> Vaccine Name: {getData.vaccineName} </h2>
        <h2> Location: {getData.location} </h2>
        <h2> Distribution: {getData.distribution} </h2>
        <h2> Dose: {getData.dose} </h2>
        <h2> Duration: {getData.duration} </h2>
        <h2> Gender: {getData.gender} </h2>
        <h2> Age: {getData.age} </h2>
        <h2> Ethnicity: {getData.ethnicity} </h2>
      </span>
    </>
  );
};

export default VaccineList;
