import { Card } from 'antd';
import { useState } from 'react';

const tabList = [
    {
      key: 'general',
      tab: 'general',
    },
    {
      key: 'membership',
      tab: 'membership',
    },
    {
      key: 'settings',
      tab: 'settings',
    },
  ];

  const content = {
    general: <p>filler</p>,
    membership: <p>filler</p>,
    settings: <p>filler</p>,
  };

export default function Details(){
    const [keys ,setkeys ] = useState('general')

    const onTabChange = (key, type) => {
        console.log(key, type);
        setkeys({[type]: key});
      };

    return(
        <Card
          style={{ width: '100%' }}
          tabList={tabList}
          activeTabKey={keys}
          onTabChange={key => {
            onTabChange(key, 'keys');
          }}
        >
          {content[keys]}
        </Card>
    )
}