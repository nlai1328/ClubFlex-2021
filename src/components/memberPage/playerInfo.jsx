import { Card, Divider, Row, Col } from "antd";
import { useState, useEffect } from "react";
import Members from "./members.json";
import React from "react";

const content = {
  general: <p>filler</p>,
  membership: <p>fillehr</p>,
  settings: <p>fillerdf</p>,
};

const tabsList = [
  {
    key: "general",
    tab: "general",
  },
  {
    key: "membership",
    tab: "membership",
  },
  {
    key: "settings",
    tab: "settings",
  },
];

export default function Info() {
  const [keys, setkeys] = useState("general");

  const onTabChange = (key) => {
    console.log(key);
    setkeys(key);
  };

  return (
    <Row>
      <Col span={12} style={{ paddingLeft: "5%", paddingTop: "2%" }}>
        {Members.map((member) => {
          return (
            <Card
              title={member.name}
              headStyle={{ textAlign: "left" }}
              bodyStyle={{ textAlign: "left" }}
              style={{ width: 400 }}
              type="inner"
            >
              <p>Phone Number : {member.phone}</p>
              <p>Member Status : {member.memberStatus}</p>
              <p>Registeration Date {member.registerationDate}:</p>
            </Card>
          );
        })}
      </Col>
      <Col span={12} style={{ paddingRight: "10%", paddingTop: "2%" }}>
        <Card
          style={{ alignItems: "end" }}
          tabList={tabsList}
          activeTabKey={keys}
          onTabChange={(key) => {
            onTabChange(key);
          }}
        >
          {content[keys]}
        </Card>
      </Col>
    </Row>
  );
}
