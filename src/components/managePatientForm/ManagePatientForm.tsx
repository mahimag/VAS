import { Button, Form, Input, Select, DatePicker, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import React from "react";
import { useNavigate } from "react-router-dom";
import { setPatientInfo } from "../../features/PatientInfoSlice";
import { useDispatch } from "react-redux";

import "./ManagePatientForm.css";

const ManagePatientForm: React.FC = () => {
  const { Option } = Select;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const normFile = (e: any) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
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
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    dispatch(setPatientInfo(values));
    navigate("../launch");
    console.log("Received values of form: ", values);
  };

  //return statements
  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      scrollToFirstError
      className="patientForm"
      size="large"
    >
      <Form.Item
        name="firstName"
        label="First Name"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>

      <Form.Item name="lastName" label="Last Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item label="Birth Date">
        <DatePicker />
      </Form.Item>

      <Form.Item
        name="ethnicity"
        label="Ethnicity"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="gender"
        label="Gender"
        rules={[{ required: true, message: "Please select gender!" }]}
      >
        <Select placeholder="select your gender">
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
          <Option value="other">Other</Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: "email",
            message: "The input is not valid E-mail!",
          },
          {
            required: true,
            message: "Please input your E-mail!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="address"
        label="Registered Address"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>

      <Form.Item name="street" label="Street" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item name="city" label="City" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item name="state" label="State" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item
        name="paymentInformation"
        label="Payment Information"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="insuranceId"
        label="Insurance Id"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>

      <Form.Item name="memberId" label="Member Id" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item
        name="insuranceProvider"
        label="Insurance Provider"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="upload"
        label="Upload"
        valuePropName="fileList"
        getValueFromEvent={normFile}
      >
        <Upload name="logo" action="/upload.do" listType="picture">
          <Button icon={<UploadOutlined />}>Click to upload</Button>
        </Upload>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ManagePatientForm;
