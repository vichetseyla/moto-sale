import React, { useEffect, useState } from 'react'
import { Card,Row,Col } from 'antd';
import Service from '../services/Service'
import { useNavigate } from 'react-router-dom';
const { Meta } = Card;

export default function Products() {
    let navigate = useNavigate()
    const [Motorcycles, setMotorcycles] = useState([])
    useEffect(() => {
        let motorCycles = Service.getMotorcycles()
        setMotorcycles(motorCycles)
        console.log(Motorcycles)
    }, [])
  return (
    <div>
        <Row style={{marginTop:"100px"}} justify="space-evenly">
            {Motorcycles.map((motorcycle, index) => 
            <Col key={index} span={4}>
                <Card
                    onClick={() => navigate(`/product/${motorcycle.id}`)}
                    hoverable
                    cover={<img alt="example" src={motorcycle.image} />}
                >
                    <Meta title={motorcycle.model} description={`${motorcycle.price}$`} />
                </Card>
            </Col>)}
        </Row>
    </div>
  )
}
