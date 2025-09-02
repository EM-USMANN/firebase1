import React, { useState } from 'react'
import { Button, Col, Form, Input, Row, Typography } from 'antd'
import { auth } from '../../../config/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

const { Title } = Typography

const initialState = { email: '', password: '' }

const Login = () => {

    const [state, setState] = useState(initialState)
    const [isProcessing, setIsProcssing] = useState(false)

    const handleChange = e => setState(s => ({ ...s, [e.target.name]: e.target.value }))

    const handleSubmit = e => {
        e.preventDefault()

        let { email, password } = state



        setIsProcssing(true)

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log(user)
                // ...
            })
            .catch((error) => {
                alert('something went wrong!')
                console.error(error)
                // ..
            })
            .finally(() => {
                setIsProcssing(false)
            })



    }





    return (

        <main className='auth p-3  p-lg-4' >
            <div className="card p-3  p-lg-4">
                <Title level={2} className='text-primary text-center mb-5'>Login</Title>
                <Form layout='vertical'>
                    <Row gutter={16}>
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
                        <Col xs={24} >
                            <Button type='primary' size='large' className='w-100 mt-2' onClick={handleSubmit} loading={isProcessing} htmlType='submit'>Login</Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        </main >
    )
}

export default Login
