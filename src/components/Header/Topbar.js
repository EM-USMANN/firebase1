import React from 'react'
import { Typography, Row, Col } from 'antd'


const { Paragraph } = Typography;

const Topbar = () => {
    return (
        <>
            <div className="container-fluid bg-primary">
                <Row>
                    <Col span={24} className="text-center">
                        <Paragraph className='text-white mb-0  p-2'>10% Off On Advance Payments</Paragraph>
                    </Col >
                </Row>
            </div>
        </>
    )
}

export default Topbar
