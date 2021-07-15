import { Input, Space } from 'antd';

const { Search } = Input;

const onSearch = value => console.log(value);

export default function SearchPlayer(){
    return(
        <Space>
        <Search placeholder="Player name" onSearch={onSearch} enterButton />
        </Space>
    )
}