import { Input, Space, Divider, Row, Col } from "antd";

const { Search } = Input;

const onSearch = (value) => console.log(value);

export default function SearchPlayer() {
  return (
    <Divider orientation="left" style={{ paddingTop: 25 }}>
      <Space>
        <Search
          placeholder="Player name"
          onSearch={onSearch}
          enterButton
          size="medium"
          style={{ width: 300 }}
        />
      </Space>
    </Divider>
  );
}
