import {
    AutoComplete,
    Button,
    Cascader,
    Checkbox,
    Col,
    Form,
    Input,
    InputNumber,
    Row,
    Select,
    DatePicker,
  } from 'antd';
import React, { useState } from 'react';

    const { Option } = Select;
    
    const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 11 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    },
    };
    
    const ManagePatient: React.FC = () => {

    const [form] = Form.useForm();
    
    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };
    
    //return statements
    return (
        <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        initialValues={{
            residence: ['zhejiang', 'hangzhou', 'xihu'],
            prefix: '86',
        }}
        scrollToFirstError
        >
        <Form.Item name="firstName" label="First Name" rules={[{ required: true }]}>
            <Input />
        </Form.Item>

        <Form.Item name="lastName" label="Last Name" rules={[{ required: true }]}>
            <Input />
        </Form.Item>

        <Form.Item label="Birth Date">
        <DatePicker />
        </Form.Item>

        <Form.Item name="ethnicity" label="Ethnicity" rules={[{ required: true }]}>
            <Input />
        </Form.Item>

        <Form.Item
            name="gender"
            label="Gender"
            rules={[{ required: true, message: 'Please select gender!' }]}
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
                type: 'email',
                message: 'The input is not valid E-mail!',
            },
            {
                required: true,
                message: 'Please input your E-mail!',
            },
            ]}
        >
            <Input />
        </Form.Item>
    
        <Form.Item name="address" label="Registered Address" rules={[{ required: true }]}>
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

        <Form.Item name="paymentInformation" label="Payment Information" rules={[{ required: true }]}>
            <Input />
        </Form.Item>

        <Form.Item name="insuranceId" label="Insurance Id" rules={[{ required: true }]}>
            <Input />
        </Form.Item>

        <Form.Item name="memberId" label="Member Id" rules={[{ required: true }]}>
            <Input />
        </Form.Item>

        <Form.Item name="insuranceProvider" label="Insurance Provider" rules={[{ required: true }]}>
            <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>

        </Form>
    );
};
    
export default ManagePatient;