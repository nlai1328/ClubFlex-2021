import { Popconfirm, message, Button } from "antd";

const confirm = (e) => message.success("Member deleted");

const cancel = (e) => message.error("Cancelled");

const Edit = () => <Button type="link">Edit Member</Button>;

export default function Settingstab() {
  return (
    <div>
      <Popconfirm
        title="Are you sure to delete this member?"
        onConfirm={confirm}
        onCancel={cancel}
        okText="Yes"
        cancelText="No"
      >
        <a href="#">Delete Member</a>
      </Popconfirm>
      <Edit />
    </div>
  );
}
