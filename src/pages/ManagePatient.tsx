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
    
    const residences = [
    {
        value: 'zhejiang',
        label: 'Zhejiang',
        children: [
        {
            value: 'hangzhou',
            label: 'Hangzhou',
            children: [
            {
                value: 'xihu',
                label: 'West Lake',
            },
            ],
        },
        ],
    },
    {
        value: 'jiangsu',
        label: 'Jiangsu',
        children: [
        {
            value: 'nanjing',
            label: 'Nanjing',
            children: [
            {
                value: 'zhonghuamen',
                label: 'Zhong Hua Men',
            },
            ],
        },
        ],
    },
    ];
    
    const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    },
    };
    const tailFormItemLayout = {
    wrapperCol: {
        xs: {
        span: 24,
        offset: 0,
        },
        sm: {
        span: 16,
        offset: 8,
        },
    },
    };
    
    const ManagePatient: React.FC = () => {

    const [form] = Form.useForm();
    
    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };
    
    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
        <Select style={{ width: 70 }}>
            <Option value="86">+86</Option>
            <Option value="87">+87</Option>
        </Select>
        </Form.Item>
    );
    
    const suffixSelector = (
        <Form.Item name="suffix" noStyle>
        <Select style={{ width: 70 }}>
            <Option value="USD">$</Option>
            <Option value="CNY">¥</Option>
        </Select>
        </Form.Item>
    );
    
    const [autoCompleteResult, setAutoCompleteResult] = useState<string[]>([]);
    
    const onWebsiteChange = (value: string) => {
        if (!value) {
        setAutoCompleteResult([]);
        } else {
        setAutoCompleteResult(['.com', '.org', '.net'].map(domain => `${value}${domain}`));
        }
    };
    
    const websiteOptions = autoCompleteResult.map(website => ({
        label: website,
        value: website,
    }));
    
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
        <Form.Item name={['user', 'name']} label="First Name" rules={[{ required: true }]}>
            <Input />
        </Form.Item>

        <Form.Item name={['user', 'name']} label="Last Name" rules={[{ required: true }]}>
            <Input />
        </Form.Item>

        <Form.Item label="Birth Date">
        <DatePicker />
        </Form.Item>

        <Form.Item name={['user', 'name']} label="Ethnicity" rules={[{ required: true }]}>
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
    
        <Form.Item name={['user', 'name']} label="Registered Address" rules={[{ required: true }]}>
            <Input />
        </Form.Item>

    
        <Form.Item name={['user', 'name']} label="Street" rules={[{ required: true }]}>
            <Input />
        </Form.Item>

        <Form.Item name="City" label="City" rules={[{ required: true }]}>
            <Input />
        </Form.Item>

        <Form.Item name="State" label="State" rules={[{ required: true }]}>
            <Input />
        </Form.Item>

        <Form.Item name="PaymentInformation" label="Payment Information" rules={[{ required: true }]}>
            <Input />
        </Form.Item>

        <Form.Item name="InsuranceId" label="Insurance Id" rules={[{ required: true }]}>
            <Input />
        </Form.Item>

        <Form.Item name="MemberId" label="Member Id" rules={[{ required: true }]}>
            <Input />
        </Form.Item>

        <Form.Item name="InsuranceProvider" label="Insurance Provider" rules={[{ required: true }]}>
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