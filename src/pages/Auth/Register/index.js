import React, { useState } from 'react'
import { Button, Col, Form, Input, Row, Typography } from 'antd'

const { Title } = Typography

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' }

const Register = () => {

    const [state, setState] = useState(initialState)
    const [isProcessing, setIsProcssing] = useState(false)

    const handleChange = e => setState(s => ({ ...s, [e.target.name]: e.target.value }))

    const handleSubmit = e => {
        e.preventDefault()

        let { firstName, lastName, email, password, confirmPassword } = state

        const userData = { uid: "", firstName, lastName, email, password, confirmPassword }

        setIsProcssing(true)

        createDocument(userData)

        // firstName = firstName.trim()
        // lastName = lastName.trim()
        // password = password.trim()
        // confirmPassword = confirmPassword.trim()
        // if (!firstName || !lastName || !email || !password || !confirmPassword) return alert('All fields are required!')
        // if (password !== confirmPassword) return alert('Password and Confirm Password must be same!')
        // if (password.length < 6) return alert('Password must be at least 6 characters long!')
    }

    const createDocument = userData => {
        console.log(userData)

        setTimeout(() => {
            setIsProcssing(false)
        }, 2000)
    }



    return (

        <main className='auth p-3  p-lg-4' >
            <div className="card p-3  p-lg-4">
                <Title level={2} className='text-primary text-center mb-5'>Register</Title>
                <Form layout='vertical'>
                    <Row gutter={16}>
                        <Col xs={24} md={12}>
                            <Form.Item label="First Name" required>
                                <Input type='text' size='large' placeholder='Enter Your First Name' name='firstName' onChange={handleChange} />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item label="Last Name">
                                <Input type='text' size='large' placeholder='Enter Your Last Name' name='lastName' onChange={handleChange} />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item label="Email" required>
                                <Input type='email' size='large' placeholder='Enter Your Email' name='email' onChange={handleChange} />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item label="Password" required>
                                <Input.Password size='large' placeholder='Enter Your Password' name='password' onChange={handleChange} />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item label="Confirm Password" required>
                                <Input.Password size='large' placeholder='Enter Your Password Again' name='confirmPassword' onChange={handleChange} />
                            </Form.Item>
                        </Col>
                        <Col xs={24} >
                            <Button type='primary' size='large' className='w-100 mt-2' onClick={handleSubmit} loading={isProcessing} htmlType='submit'>Register</Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        </main >
    )
}

export default Register
