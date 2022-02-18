import React from 'react'
import { Col, Form, Row, Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Header from '../Partials/Header'
function ACreateCourse() {
    return (
        <>
            <Header />
            <Container className="text-left">
                <h2>Create Course</h2>
                <Form className=" mt-5 text-left create-form">
                    <Form.Group as={Row} className="form-group">
                        <Col sm="2" className="text-left">
                            <Form.Label className="mt-2">Course Name:</Form.Label>
                        </Col>
                        <Col sm="6">
                            <Form.Control />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="form-group">
                        <Col sm="2" className="text-left">
                            <Form.Label className="mt-2">Course Code:</Form.Label>
                        </Col>
                        <Col sm="3">
                            <Form.Control />
                        </Col>
                        <Col sm="3">
                            <Form.Control />
                        </Col>
                    </Form.Group>
                    <Form.Group className="mt-2" as={Row} className="form-group">
                        <Col sm="2" className="text-left">
                            <Form.Label className="mt-2">Degree</Form.Label>
                        </Col>
                        <Col sm="6">
                            <Form.Control as="select">
                                <option value="NaN">Select Degree</option>
                            </Form.Control>
                        </Col>
                    </Form.Group>
                    <Form.Group className="mt-2" as={Row} className="form-group">
                        <Col sm="2" className="text-left">
                            <Form.Label className="mt-2">Majors</Form.Label>
                        </Col>
                        <Col sm="6">
                            <Form.Control as="select" multiple>
                                <option value="NaN"> &lt; Major 1 &gt;</option>
                                <option value="NaN"> &lt; Major 2 &gt;</option>
                                <option value="NaN"> &lt; Major 3 &gt;</option>
                            </Form.Control>
                        </Col>
                    </Form.Group>
                    <Form.Group className="mt-2" as={Row} className="form-group">
                        <Col sm="2" className="text-left">
                            <Form.Label className="mt-2">Required Course</Form.Label>
                        </Col>
                        <Col sm="6">
                            <Form.Control as="select" multiple>
                                <option value="NaN"> &lt; Course 1 &gt;</option>
                            </Form.Control>
                        </Col>
                    </Form.Group>
                    

                    <Form.Group className="mt-2" as={Row}>
                        <Col sm="4"></Col>

                        <Col sm="2" className="text-left">
                            <Link className="btn btn-lg" to="/admin/success"> Add Course</Link>
                        </Col>
                    </Form.Group>
                </Form>
            </Container>
        </>
    )
}

export default ACreateCourse
