import React from "react";
import { Button, Form, Input, Checkbox, Row, Col, Radio } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./AppointmentForm.css";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import { setAppointmentInfo } from "../../features/AppointmentSlice";

const AppointmentForm: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };

  const formItemLayout = {
    labelCol: {
      xs: { span: 8 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 8 },
      sm: { span: 8 },
    },
  };

  const onFinish = (values: any) => {
    dispatch(setAppointmentInfo(values));
    //refactor!
    navigate("../appointmentlist");
    console.log("Received values of form: ", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="appointment"
      {...formItemLayout}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      size="large"
      className="appointmentForm"
    >
      <Form.Item
        name="patientId"
        label="Patient ID"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>

      <Form.Item name="location" label="Location" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item
        name="serviceType"
        label="Service Type"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>

      <h2> Eligibility Screening </h2>

      <Form.Item className="eligibility">
        <Checkbox className="appointmentForm__cb" onChange={onChange}>
          I am...
        </Checkbox>
        <Checkbox className="appointmentForm__cb" onChange={onChange}>
          I am...
        </Checkbox>
        <Checkbox className="appointmentForm__cb" onChange={onChange}>
          I am...
        </Checkbox>
      </Form.Item>

      <h2> Screening Questions </h2>

      <Form.Item className="screening">
        <h3> Have you ever... </h3>
        <Radio.Group>
          <Radio value="yes"> Yes </Radio>
          <Radio value="no"> No </Radio>
        </Radio.Group>
      </Form.Item>

      <Form.Item className="screening">
        <h3> Have you ever... </h3>
        <Radio.Group>
          <Radio value="apple"> Yes </Radio>
          <Radio value="pear"> No </Radio>
        </Radio.Group>
      </Form.Item>

      <Form.Item name="code" label="Code" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item
        className="appointmentForm__btn"
        wrapperCol={{ offset: 11, span: 16 }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AppointmentForm;
