import { Col, Row, Typography } from 'antd'
import React from 'react'


const { Title } = Typography

const AboutCompany = () => {
    return (
        <>
            <div className="container">
                <Row>
                    <Col span={24} className="text-center">


                        <Title level={1}>About Company</Title>


                    </Col>
                </Row>
            </div>
        </>
    )
}

export default AboutCompany
