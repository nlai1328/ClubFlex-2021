import { Card, Row, Col, Input, Space, Divider, AutoComplete } from "antd";
import { useState, useEffect } from "react";
import React from "react";
import Membershiptab from "./tabs/membershipTab";
import Paymenttab from "./tabs/paymentTab";
import Activitytab from "./tabs/activityTab";
import Settingstab from "./tabs/settingsTab";
import Addplayer from "./Playerform";

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

export default function SearchPlayer() {
  const [options, setOptions] = useState();
  const [show, setShow] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    fetch("http://localhost:4000/members")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          const add = result.map((member) => {
            return { value: member.name };
          });
          setOptions(add);
        },

        (error) => {
          console.log(error);
        }
      );
  }, []);

  const onSelect = (data) => {
    console.log("onSelect", data);
    setShow(true);
    setText(data);
  };

  return (
    <div>
      <Divider orientation="left" style={{ paddingTop: 25 }}>
        <AutoComplete
          options={options}
          style={{
            width: 200,
          }}
          onSelect={onSelect}
          placeholder="Player Search"
          filterOption={(inputValue, option) =>
            option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
          }
        />
      </Divider>
      <Addplayer />
      <Info status={show} text={text} />
    </div>
  );
}

function Info(props) {
  const [keys, setKeys] = useState("membership");
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [members, setMembers] = useState([]);
  const [mStatus, setMStatus] = useState("Active");

  const onTabChange = (key) => {
    console.log(key);
    setKeys(key);
  };
  useEffect(() => {
    fetch("http://localhost:4000/members")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setMembers(result);
        },

        (error) => {
          console.log(error);
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (members.memberStatus === false) {
    setMStatus("Inactive");
  }
  if (props.status === false) {
    return <div></div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <Row>
          <Col span={12} style={{ paddingLeft: "5%", paddingTop: "2%" }}>
            {members.map((members) => {
              if (props.text === members.name) {
                return (
                  <Card
                    title={members.name}
                    headStyle={{ textAlign: "left" }}
                    bodyStyle={{ textAlign: "left" }}
                    style={{ width: 400 }}
                    type="inner"
                  >
                    <p>Membership ID : {members._id}</p>
                    <p>Phone Number : {members.phone}</p>
                    <p>Member Status : {mStatus}</p>
                    <p>
                      Registeration Date :
                      {new Intl.DateTimeFormat("en-GB", {
                        year: "numeric",
                        month: "long",
                        day: "2-digit",
                      }).format(members.date)}
                    </p>
                  </Card>
                );
              }
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
      </div>
    );
  }
}
