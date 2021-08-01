import axios from "axios";
import { useState } from "react";
import { Button, Form, Input, Card } from "antd";

function Addplayer() {
    const refreshPage = ()=>{
        window.location.reload();
     }
    return (
      <Card>
        <Form
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
        >
          <Form.Item
            label="First Name"
            name="firstName"
            rules={[
              {
                required: true,
                message: "Please input first name",
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
                message: "Please input last name",
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
                message: "Please input phone number",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="Membership Number" name="membershipNum" rules={[]}>
            <Input disabled />
          </Form.Item>
          <Form.Item
            label="Registeration Date"
            name="registerationDate"
            rules={[]}
          >
            <Input disabled />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" onClick={refreshPage}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    );
  }


export default function Addbutton(props) {
  const [openForm, setOpenForm] = useState(false);
  const onClick = () => {
    setOpenForm(true);
  };

  if (openForm === true) {
    return (<Addplayer/>
       );
  }
  return (
    <div>
      <Button type="link" onClick={onClick}>
        Add Member{" "}
      </Button>
    </div>
  );
}
