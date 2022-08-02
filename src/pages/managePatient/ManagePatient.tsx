import React from "react";
import ManagePatientForm from "../../components/managePatientForm/ManagePatientForm";
import { Typography } from "antd";
import './ManagePatient.css';

const ManagePatient: React.FC = () => {
  const { Title } = Typography;
  //return statements
  return (
    <div className="managepatient">
      <Title className="managepatient__title">Create a Patient!</Title>
      <ManagePatientForm />
    </div>
  );
};

export default ManagePatient;
