import { Card, Row, Col } from "antd";
import { useState } from "react";
import Members from "./members.json";
import React from "react";
import Membershiptab from "./tabs/membershipTab";
import Paymenttab from "./tabs/paymentTab";
import Activitytab from "./tabs/activityTab";
import Settingstab from "./tabs/settingsTab";

const content = {
  membership: <Membershiptab />,
  settings: <Settingstab />,
  payment: <Paymenttab />,
  activity: <Activitytab />,
};

const tabsList = [
  {
    key: "membership",
    tab: "Membership",
  },
  {
    key: "payment",
    tab: "Payment History",
  },
  {
    key: "activity",
    tab: "Activity History",
  },
  {
    key: "settings",
    tab: "Settings",
  },
];

export default function Info() {
  const [keys, setkeys] = useState("membership");

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
              <p>
                Registeration Date :
                {new Intl.DateTimeFormat("en-GB", {
                  year: "numeric",
                  month: "long",
                  day: "2-digit",
                }).format(Members.date)}
              </p>
            </Card>
          );
        })}
      </Col>
      <Col span={12} style={{ paddingRight: "2%", paddingTop: "2%" }}>
        <Card
          style={{ alignItems: "end" }}
          tabList={tabsList}
          type="inner"
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
