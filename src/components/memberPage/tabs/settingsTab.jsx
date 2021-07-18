import { Popconfirm, message } from "antd";

const confirm = (e) => message.success("Member deleted");

const cancel = (e) => message.error("Cancelled");

export default function Settingstab() {
  return (
    <Popconfirm
      title="Are you sure to delete this member?"
      onConfirm={confirm}
      onCancel={cancel}
      okText="Yes"
      cancelText="No"
    >
      <a href="#">Delete Member</a>
    </Popconfirm>
  );
}
