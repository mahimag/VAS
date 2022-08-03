import { Typography } from "antd";
import React from "react";
import VaccineForm from "../../components/vaccineForm/VaccineForm";
import "./VaccineCreate.css";

const VaccineCreate: React.FC = () => {
  const { Title } = Typography;

  return (
    <div className="vaccinecreate">
      <Title className="vaccinecreate__title">Create a Vaccine!</Title>
      <VaccineForm />
    </div>
  );
};

export default VaccineCreate;
