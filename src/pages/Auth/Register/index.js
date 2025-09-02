import React, { useState } from 'react'
import { Alert, Button, Col, Form, Input, Row, Typography } from 'antd'
import { auth } from '../../../config/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const { Title } = Typography

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' }

const Register = () => {

    const [state, setState] = useState(initialState)
    const [isProcessing, setIsProcssing] = useState(false)

    const handleChange = e => setState(s => ({ ...s, [e.target.name]: e.target.value }))

    const handleSubmit = e => {
        e.preventDefault()

        let { firstName, lastName, email, password, confirmPassword } = state

        // firstName = firstName.trim()
        // lastName = lastName.trim()
        // password = password.trim()
        // confirmPassword = confirmPassword.trim()
        // if (!firstName || !lastName || !email || !password || !confirmPassword) return alert('All fields are required!')
        if (password !== confirmPassword) return alert('Password does not match!')
        if (password.length < 6) return alert('Password must be at least 6 characters long!')

        const userData = { firstName, lastName, email, password, confirmPassword }

        setIsProcssing(true)

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                createDocument({ ...userData, uid: user.uid })
                // ...
            })
            .catch((error) => {
                alert('something went wrong!')
                console.error(error)
                setIsProcssing(false)
                // ..
            });




    }

    const createDocument = userData => {
        console.log(userData)

        setTimeout(() => {
            setIsProcssing(false)
        }, 1000)
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
                        <Col xs={24}>
                            <Form.Item label="Email" required>
                                <Input type='email' size='large' placeholder='Enter Your Email' name='email' onChange={handleChange} />
                            </Form.Item>
                        </Col>
                        <Col xs={24}>
                            <Form.Item label="Password" required>
                                <Input.Password size='large' placeholder='Enter Your Password' name='password' onChange={handleChange} />
                            </Form.Item>
                        </Col>
                        <Col xs={24}>
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
