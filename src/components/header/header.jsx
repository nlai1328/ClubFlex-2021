import React from "react";
import { PageHeader, Button } from "antd";
import "antd/dist/antd.css";

export default function ButtonAppBar() {
  return (
    <PageHeader
      className="site-page-header"
      title="ClubFlex"
      subTitle="Badminton Management System"
      extra={[<Button key="4">Log in</Button>]}
    />
  );
}
