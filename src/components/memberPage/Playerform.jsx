import axios from "axios";
import { useState } from "react";
import { Button, Form, Input, Card, Select, DatePicker } from "antd";
const { Option } = Select;

function Addplayer() {
  const onFinish = (values) => {
    console.log("Success:", values);
    values.name = values.firstName.concat(values.lastName) 
    axios.post("http://localhost:4000/members",values)
  };

  return (
    <Card>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          label="First Name"
          name="firstName"
          rules={[
            {
              required: true,
              message: "Please input first name!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Last Name"
          name="lastName"
          rules={[
            {
              required: true,
              message: "Please input last name!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Phone Number"
          name="phone"
          rules={[
            {
              required: true,
              message: "Please input phone number!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="membership"
          label="Membership"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select allowClear>
            <Option value="Tier 1">Tier 1</Option>
            <Option value="Tier 2">Tier 2</Option>
            <Option value="None">None</Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="Registeration Date "
          name="registerationDate"
          rules={[
            {
              required: true,
              message: "Please input Registeration Date!",
            },
          ]}
        >
          <DatePicker />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
}

export default function Addbutton() {
  const [openForm, setOpenForm] = useState(false);
  const onClick = () => {
    setOpenForm(true);
  };

  if (openForm === true) {
    return <Addplayer />;
  }
  return (
    <div>
      <Button type="link" onClick={onClick}>
        Add Member{" "}
      </Button>
    </div>
  );
}
