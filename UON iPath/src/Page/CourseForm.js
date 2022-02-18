import React from 'react'
import { Col, Form, Row, Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Header from './Partials/Header'

function CourseForm() {
    return (
        <>
            <Header />
            <Container>
                <Form className=" mt-5 text-left">
                    <h1 className="mt-5 mb-4 p-2 text-gray">Information</h1>
                    <Form.Group as={Row}>

                        <Col sm="6">
                            <Form.Label>Select Degree</Form.Label>
                            <Form.Control as="select">
                                <option value="NaN">Select Degree</option>
                            </Form.Control>
                        </Col>
                    </Form.Group>
                    <Form.Group className="mt-2" as={Row}>

                        <Col sm="6">
                            <Form.Label>Select Major</Form.Label>
                            <Form.Control as="select" multiple>
                                <option value="NaN"> &lt; Major 1 &gt;</option>
                                <option value="NaN"> &lt; Major 2 &gt;</option>
                                <option value="NaN"> &lt; Major 3 &gt;</option>
                            </Form.Control>
                        </Col>
                    </Form.Group>
                    <Form.Group className="mt-2" as={Row}>

                        <Col sm="6">
                            <Form.Label>Start Year</Form.Label>
                            <Form.Control as="select">
                                <option value="NaN">Select Year</option>
                            </Form.Control>
                        </Col>
                    </Form.Group>
                    <Form.Group className="mt-2" as={Row}>
                        <Col sm="6">
                            <Form.Label>Trimester Commencement</Form.Label>
                            <Form.Control as="select">
                                <option value="NaN">Select</option>
                            </Form.Control>
                        </Col>
                    </Form.Group>
                    <Form.Group className="mt-2" as={Row}>
                        <Col sm="2">
                            <Form.Label>Courses Per Trimester</Form.Label>
                        </Col>
                        <Col sm="3">
                            <Form.Control as="select">
                                <option value="NaN">Select</option>
                            </Form.Control>
                        </Col>
                    </Form.Group>
                    <Form.Group className="mt-4 mb-4" as={Row}>
                        <Col sm="4" className="text-left">
                            <Link className="btn btn-lg" to="/Home"> Return</Link>
                        </Col>
                        <Col sm="4" className="text-left">
                            <Link className="btn btn-lg" to="/programcreate"> Next</Link>
                        </Col>
                    </Form.Group>
                </Form>
            </Container>
        </>
    )
}

export default CourseForm
