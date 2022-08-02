import React from "react";
import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { setLoggedIn } from "../..//features/Auth/AuthSlice";

const LoginForm: React.FC = () => {
  const test = useSelector((state: RootState) => state.auth.isLoggedIn);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onFinish = (values: any) => {
    if (values.username === "mahima" && values.password === "gurung") {
      //add to Local Storage
      localStorage.setItem("LoggedIn", "true");
      dispatch(setLoggedIn(true));
      navigate("../launch");
    } else {
      dispatch(setLoggedIn(false));
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        {/* <Button onClick={() => onSubmitHandler(ctxValue)} type="primary" htmlType="submit"> */}
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;