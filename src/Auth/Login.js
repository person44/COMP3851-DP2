
import React from 'react'

import { Col, Container, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '../Image/UON.png'
import './login.css'

function Login() {
    return (
        <>
            <Container>
                <Row>
                    <Col md="12" className="text-center mt-4 my-5">
                        <div>
                            <img src={logo} className="img-responsive mb-4" height={200} width={200} />
                            <h2>University of Newcastle</h2>
                            <h2>iPath</h2>
                        </div>
                        <Form className="container form-container">
                            <Form.Group className="form-group" as={Row}>
                                <Form.Label column sm="4" className="text-left">UON Email Address:</Form.Label>
                                <Col sm="8">
                                    <Form.Control type="email" size="sm" />
                                </Col>
                            </Form.Group>
                            <Form.Group className="form-group" as={Row}>
                                <Form.Label column sm="4" className="text-left">Password:</Form.Label>
                                <Col sm="8">
                                    <Form.Control type="password" size="sm" />
                                </Col>
                            </Form.Group>
                        </Form>
                        <div>
                            <Link className="btn btn-lg" to="/Home">Login</Link>
                            <p className="mt-2">Forgot Password? <a href="#" className="text-primary custom-link">Click Here</a></p>
                        </div>
                    </Col>

                </Row>
            </Container>
        </>
    )
}

export default Login
