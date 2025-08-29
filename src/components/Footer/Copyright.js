import React from 'react'
import { Col, Row, Typography } from 'antd'


const { Paragraph } = Typography

const Copyright = () => {

    return (
        <footer>
            <div className="container">
                <Row>
                    <Col span={24} className="text-center">
                        <Paragraph>
                            &copy; {new Date().getFullYear()} All Rights Reserved.
                        </Paragraph>
                    </Col>
                </Row>
            </div>
        </footer>
    )
}

export default Copyright
