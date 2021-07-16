import { Card, Divider} from 'antd';

export default function Info(){
    return(
        <Divider orientation="left" style={{paddingTop:40}}> 
            <div>
                <Card title="Name" headStyle = {{textAlign: 'left'}} bodyStyle = {{textAlign: 'left'}} style={{ width: 400 }} type="inner">
                    <p>Phone Number :</p>
                    <p>Member Status :</p>
                    <p>Registeration Date :</p>
                </Card>
            </div>
        </Divider>
    )
}