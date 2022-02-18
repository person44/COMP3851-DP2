import React from 'react'
import { Col, Container, Row, Button, Form, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Header from '../Partials/Header'
const Index = () => {
    return (
        <>
            <Header />
            <Container fluid className="mt-5">
                <Row>
                    <Col className="text-left">
                        <h2 className="mb-3">Hello , &lt; Admin Name &gt; </h2>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12" className="mt-2">
                        <h2>Search Course</h2>
                    </Col>
                </Row>
                <Row>
                    <Col sm="2">
                        <Form.Control className="mt-2" />
                        <p className="text-danger"><strong>* course not found</strong></p>
                    </Col>
                    <Col sm="2">
                        <Form.Control className="mt-2" />
                    </Col>
                    <Col sm="2">
                        <button className="btn btn-md w-50 mb-3">Edit</button>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12">
                        <Link className="btn btn-lg mt-4 w-100" style={{maxWidth:'563px'}} to="/admin/create-course">Create New Course</Link>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col sm="12">
                        <Card className="border-dark custom-height">
                            <Card.Body>
                                <h5>Update Log</h5>
                                &lt;Date & Time  &gt; INFT 1003 has been rename to INFT 1004
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

            </Container>
        </>
    )
}

export default Index
