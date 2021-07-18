import { Table } from "antd";
import data from "./paymentlogs.json";

const columns = [
  {
    title: "Action",
    dataIndex: "actionType",
  },
  {
    title: "Amount",
    dataIndex: "amount",
  },
  {
    title: "Date",
    dataIndex: "date",
    render: (text) => (
      <span>
        {new Intl.DateTimeFormat("en-GB", {
          year: "numeric",
          month: "long",
          day: "2-digit",
        }).format(new Date(text))}
      </span>
    ),
  },
];

export default function Activitytab() {
  return <Table columns={columns} dataSource={data} size="middle" />;
}
