import { Button, Form, Input } from 'antd';
import React, { useState, useContext } from 'react';
import { createTextChangeRange } from 'typescript';
import { ContextInterface, LoginContext } from '../contexts/LoginContext';

const changeIsLoggedIn = (ctx: ContextInterface) => {
  ctx.setIsLoggedIn((prev: boolean) => !prev);
  console.log("This user is, ", ctx.isLoggedIn);
}

const onSubmitHandler = (ctxValue: ContextInterface) => {
  ctxValue.setIsLoggedIn((prev) => !prev);
  console.log(ctxValue.isLoggedIn);
}

const Login: React.FC = () => {
  const ctxValue = useContext(LoginContext) as ContextInterface;

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  // return (
  //       <button onClick={() => onSubmitHandler(ctxValue)}>Login</button>

  // );

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
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button onClick={() => onSubmitHandler(ctxValue)} type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );

}
export default Login;

