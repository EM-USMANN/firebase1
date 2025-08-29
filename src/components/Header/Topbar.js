import { Row, Col } from 'antd'
import React from 'react'


const { Paragraph } = Typography;

const Topbar = () => {
    return (
        <>
            <div className="container">
                <Row>
                    <Col span={24} className="text-center">
                        <Paragraph>Topbar</Paragraph>
                    </Col >
                </Row>
            </div>
        </>
    )
}

export default Topbar
