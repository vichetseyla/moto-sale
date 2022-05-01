import React from 'react'
import { Card,Row,Col } from 'antd';
const { Meta } = Card;

export default function ContactUs() {
  return (
    <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
        <div style={{width:"800px"}}>
        <Row style={{marginTop:"50px"}} justify="space-evenly" align='center'>
            <Col span={24}>
                <h1>Contact Us</h1>
            </Col>
            <Col span={24}>
                    <h3>N.C.X., Co., Ltd. is one of the top famous and largest companies and the first leading company in motorcycle industry in Cambodia. The company was initially established in 1992 by only importing CBU Products of Honda Brand for sales in the market.</h3>
            </Col>
            <Col span={11}>
            <Card
                    hoverable
                    cover={<img alt="example" src="https://www.ncxhonda.com/motorcycles/storage/app/uploads/Posts/60411fc26427fabc5655ae74fdc33eb850c90db5/honda-factory.jpg" />}
                >
                    <Meta title="N.C.X. HONDA CO., LTD." description="Veng Sreng Street, Tropang Thloeung, Sangkat Chom Chao, Khan Pursenchey, Phnom Penh, Cambodia." />
                </Card>
            </Col>
            <Col span={11}>
                <Card
                    hoverable
                    cover={<img alt="example" src="https://www.ncxhonda.com/motorcycles/storage/app/uploads/Posts/df333f8d9a897fa1bd506f83cc6191c4c94f87bf/honda-factory1.jpg" />}
                >
                    <Meta title="Phnom Penh HONDA (Intrnational Airport)" description="Russian Blvd, Phum Kbal Damrey, Sangkat Kakab, Khan Por Senchey, Phnom Penh, Cambodia." />
                </Card>
            </Col>
        </Row>
        </div>
    </div>
  )
}
