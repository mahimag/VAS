import { Typography } from "antd";
import React from "react";
import LoginForm from "../../components/loginForm/LoginForm";

import "./Login.css";
const Login: React.FC = () => {
  const { Title } = Typography;

  return (
    <div className="login">
      <Title className="login__title">Welcome to VAS!</Title>
      <LoginForm />
    </div>
  );
};
export default Login;
