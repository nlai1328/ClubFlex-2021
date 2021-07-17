import { Card, Divider} from 'antd';
import { useState } from 'react';

const content = {
    general: <p>filler</p>,
    membership: <p>fillehr</p>,
    settings: <p>fillerdf</p>,
  };
  
  const tabsList = [
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

export default function Info(){
    const [keys ,setkeys ] = useState('general')

    const onTabChange = (key ) => {
        console.log(key);
        setkeys(key);
      };

    return(
        <Divider orientation="left" style={{paddingTop:40}}> 
            <div>
                <Card title="Name" headStyle = {{textAlign: 'left'}} bodyStyle = {{textAlign: 'left'}} style={{ width: 400 }} type="inner">
                    <p>Phone Number :</p>
                    <p>Member Status :</p>
                    <p>Registeration Date :</p>
                </Card>
                <Card
                    style={{ width: '100%' }}
                    tabList={tabsList}
                    activeTabKey={keys}
                    onTabChange={key => {
                        onTabChange(key);
                    }}
        >
          {content[keys]}
        </Card>
            </div>
        </Divider>
    )
}