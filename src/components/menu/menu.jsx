import { Menu } from 'antd';
import { useState } from 'react';

export default function Menubar(){
    const [current, setcurrent] = useState('member')

    const handleClick = e => {
      console.log('click ', e);
      setcurrent(e.key)
    };

    return(
        <Menu  selectedKeys={[current]} mode="horizontal" onClick={handleClick}>
          <Menu.Item key="member" >
            Member
          </Menu.Item>
          <Menu.Item key="courts" >
            Courts
          </Menu.Item>
          <Menu.Item key="filler" >
            Filler
          </Menu.Item>
          <Menu.Item key="filler2" >
            Filler
          </Menu.Item>
        </Menu>
    )
}
