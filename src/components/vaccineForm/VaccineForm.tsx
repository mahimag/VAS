import React from "react";
import {
  Button,
  Form,
  Input,
  DatePicker,
  InputNumber,
  Radio,
  Checkbox,
  Row,
  Col,
} from "antd";
import "./VaccineForm.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setVaccineInfo } from "../../features/VaccineInfoSlice";

const VaccineForm: React.FC = () => {
  const { RangePicker } = DatePicker;
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
    dispatch(setVaccineInfo(values));
    navigate("../vaccinelist");
    console.log("Received values of form: ", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="vaccineForm"
      {...formItemLayout}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      size="large"
      className="vaccineForm"
      //style={{ width: "400px" }}
    >
      <Form.Item
        label="Vaccine Name"
        name="vaccinename"
        rules={[{ required: true, message: "Please input a vaccine name!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Location"
        name="locations"
        rules={[{ required: true, message: "Please input a location!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="distribution"
        label="Distribution"
        rules={[
          { type: "array" as const, required: true, message: "Select time!" },
        ]}
      >
        <RangePicker showTime format="YYYY-MM-DD HH:mm:ss" />
      </Form.Item>

      <Form.Item
        name="dose"
        label="Dose"
        rules={[{ required: true, message: "Please pick an item!" }]}
      >
        <Radio.Group>
          <Radio.Button value="a">Single</Radio.Button>
          <Radio.Button value="b">Multiple</Radio.Button>
        </Radio.Group>
      </Form.Item>

      <Form.Item
        name="duration"
        label="Duration"
        rules={[
          { type: "array" as const, required: true, message: "Select time!" },
        ]}
      >
        <RangePicker showTime format="YYYY-MM-DD HH:mm:ss" />
      </Form.Item>

      <Form.Item name="gender" label="Gender">
        <Radio.Group>
          <Radio value="a">Male Only</Radio>
          <Radio value="b">Female Only</Radio>
          <Radio value="c">Other</Radio>
        </Radio.Group>
      </Form.Item>

      <Form.Item
        name={"age"}
        label="Minimum Age"
        rules={[{ type: "number", min: 0, max: 130 }]}
      >
        <InputNumber />
      </Form.Item>

      <Form.Item name="Ethnicity" label="Checkbox.Group">
        <Checkbox.Group>
          <Row>
            <Col span={8}>
              <Checkbox value="A" style={{ lineHeight: "32px" }}>
                Asian or Pacific Islander
              </Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="B" style={{ lineHeight: "32px" }}>
                Black or African American
              </Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="C" style={{ lineHeight: "32px" }}>
                Hispanic or Latino
              </Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="D" style={{ lineHeight: "32px" }}>
                Native American or Alaskan Native
              </Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="E" style={{ lineHeight: "32px" }}>
                White or Caucasian
              </Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="F" style={{ lineHeight: "32px" }}>
                Not Listed Here
              </Checkbox>
            </Col>
          </Row>
        </Checkbox.Group>
      </Form.Item>

      <Form.Item
        className="vaccineForm__btn"
        wrapperCol={{ offset: 11, span: 16 }}
      >
        {/* <Button onClick={() => onSubmitHandler(ctxValue)} type="primary" htmlType="submit"> */}
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default VaccineForm;
