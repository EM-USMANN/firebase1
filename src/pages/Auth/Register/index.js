import React from 'react'
import { Col, Form, Input, Row, Typography } from 'antd'

const { Title } = Typography

const Register = () => {

    const handleChange = (e) => {
        console.log(e.target.name, e.target.value);
    }

    return (

        <main className='auth p-3 p-md-4 p-md-5' >
            <div className="card p-3 p-md-4 p-md-5">
                <Title level={2} className='text-primary text-center mb-5'>Register</Title>
                <Form layout='vertical'>
                    <Row>
                        <Col span={24}>
                            <Form.Item label="First Name" required>
                                <Input type='text' size='large' placeholder='Enter Your First Name' name='firstName' onChange={handleChange} />
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </div>
        </main >
    )
}

export default Register
