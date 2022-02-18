import React from 'react'
import { Card, Col, Container, ListGroup, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Header from './Partials/Header'

function Summary() {
    return (
        <>
            <Header />
            <Container fluid className='mt-4'>
                <Row>
                    <Col sm="6">
                        <h2>Course Planner</h2>
                        <p className="mt-4 intropara">
                            This paragraph will contain guide for user to navigate the program
                        </p>
                    </Col>
                    <Col sm="2" className="text-left">
                        <h5>Unassigned Course</h5>
                        <Card className="p-2 border">

                            <table>
                                <tr>
                                    <td>Course Name</td>
                                </tr>
                                <tr>
                                    <td>
                                        <select className="form-control">
                                            <option>Select</option>
                                        </select>
                                    </td>
                                </tr>
                            </table>
                        </Card>
                    </Col>
                </Row>
                <Row className="mt-4">
                    {/* 2021 start */}
                    <Col sm="12" className="text-center">
                        <h6>2021</h6>
                    </Col>
                    <Col sm="4">
                        <Row className="no-gutters">
                            <Col sm="4" >
                                <ListGroup className="text-center">
                                    <ListGroup.Item>Course 1</ListGroup.Item>
                                    <ListGroup.Item>
                                        <Row>
                                            <Col sm="12" className="mb-1">
                                                Course Name
                                            </Col>
                                            <Col sm="6" className="mt-4">
                                                <i className="btn btn-success fa fa-check"></i>
                                            </Col>
                                            <Col sm="6" className="mt-4">
                                                <i className="btn btn-danger fa fa-times"></i>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Col>
                            <Col sm="4">
                                <ListGroup className="text-center">
                                    <ListGroup.Item>Course 2</ListGroup.Item>
                                    <ListGroup.Item>
                                        <Row>
                                            <Col sm="12" className="mb-1">
                                                Course Name
                                            </Col>
                                            <Col sm="6" className="mt-4">
                                                <i className="btn btn-success fa fa-check"></i>
                                            </Col>
                                            <Col sm="6" className="mt-4">
                                                <i className="btn btn-danger fa fa-times"></i>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Col>
                            <Col sm="4">
                                <ListGroup className="text-center">
                                    <ListGroup.Item className="bg-success text-white">Course 3</ListGroup.Item>
                                    <ListGroup.Item className="bg-success text-white">
                                        <Row>
                                            <Col sm="12" className="mb-1">
                                                Course Name
                                            </Col>
                                            <Col sm="6" className="mt-4">
                                                <i className="btn btn-success fa fa-check"></i>
                                            </Col>
                                            <Col sm="6" className="mt-4">
                                                <i className="btn btn-danger fa fa-times"></i>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm="4">
                        <Row className="no-gutters">
                            <Col sm="4" >
                                <ListGroup className="text-center">
                                    <ListGroup.Item>Course 1</ListGroup.Item>
                                    <ListGroup.Item>
                                        <Row>
                                            <Col sm="12" className="mb-1">
                                                Course Name
                                            </Col>
                                            <Col sm="6" className="mt-4">
                                                <i className="btn btn-success fa fa-check"></i>
                                            </Col>
                                            <Col sm="6" className="mt-4">
                                                <i className="btn btn-danger fa fa-times"></i>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Col>
                            <Col sm="4">
                                <ListGroup className="text-center">
                                    <ListGroup.Item>Course 2</ListGroup.Item>
                                    <ListGroup.Item>
                                        <Row>
                                            <Col sm="12" className="mb-1">
                                                Course Name
                                            </Col>
                                            <Col sm="6" className="mt-4">
                                                <i className="btn btn-success fa fa-check"></i>
                                            </Col>
                                            <Col sm="6" className="mt-4">
                                                <i className="btn btn-danger fa fa-times"></i>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Col>
                            <Col sm="4">
                                <ListGroup className="text-center">
                                    <ListGroup.Item>Course 3</ListGroup.Item>
                                    <ListGroup.Item>
                                        <Row>
                                            <Col sm="12" className="mb-1">
                                                Course Name
                                            </Col>
                                            <Col sm="6" className="mt-4">
                                                <i className="btn btn-success fa fa-check"></i>
                                            </Col>
                                            <Col sm="6" className="mt-4">
                                                <i className="btn btn-danger fa fa-times"></i>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm="4">
                        <Row className="no-gutters">
                            <Col sm="4" >
                                <ListGroup className="text-center">
                                    <ListGroup.Item>Course 1</ListGroup.Item>
                                    <ListGroup.Item>
                                        <Row>
                                            <Col sm="12" className="mb-1">
                                                Course Name
                                            </Col>
                                            <Col sm="6" className="mt-4">
                                                <i className="btn btn-success fa fa-check"></i>
                                            </Col>
                                            <Col sm="6" className="mt-4">
                                                <i className="btn btn-danger fa fa-times"></i>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Col>
                            <Col sm="4">
                                <ListGroup className="text-center">
                                    <ListGroup.Item>Course 2</ListGroup.Item>
                                    <ListGroup.Item>
                                        <Row>
                                            <Col sm="12" className="mb-1">
                                                Course Name
                                            </Col>
                                            <Col sm="6" className="mt-4">
                                                <i className="btn btn-success fa fa-check"></i>
                                            </Col>
                                            <Col sm="6" className="mt-4">
                                                <i className="btn btn-danger fa fa-times"></i>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Col>
                            <Col sm="4">
                                <ListGroup className="text-center bg-success">
                                    <ListGroup.Item className="bg-danger text-white">Course 3</ListGroup.Item>
                                    <ListGroup.Item className="bg-danger text-white">
                                        <Row>
                                            <Col sm="12" className="mb-1">
                                                Course Name
                                            </Col>
                                            <Col sm="6" className="mt-4">
                                                <i className="btn btn-success fa fa-check"></i>
                                            </Col>
                                            <Col sm="6" className="mt-4">
                                                <i className="btn btn-danger fa fa-times"></i>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Col>
                        </Row>
                    </Col>
                    {/* 2021 end */}
                    {/* 2022 start */}
                    <Col sm="12" className="text-center mt-4">
                        <h6>2022</h6>
                    </Col>
                    <Col sm="4">
                        <Row className="no-gutters">
                            <Col sm="4" >
                                <ListGroup className="text-center">
                                    <ListGroup.Item>Course 1</ListGroup.Item>
                                    <ListGroup.Item>
                                        <Row>
                                            <Col sm="12" className="mb-1">
                                                Course Name
                                            </Col>
                                            <Col sm="6" className="mt-4">
                                                <i className="btn btn-success fa fa-check"></i>
                                            </Col>
                                            <Col sm="6" className="mt-4">
                                                <i className="btn btn-danger fa fa-times"></i>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Col>
                            <Col sm="4">
                                <ListGroup className="text-center">
                                    <ListGroup.Item>Course 2</ListGroup.Item>
                                    <ListGroup.Item>
                                        <Row>
                                            <Col sm="12" className="mb-1">
                                                Course Name
                                            </Col>
                                            <Col sm="6" className="mt-4">
                                                <i className="btn btn-success fa fa-check"></i>
                                            </Col>
                                            <Col sm="6" className="mt-4">
                                                <i className="btn btn-danger fa fa-times"></i>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Col>
                            <Col sm="4">
                                <ListGroup className="text-center">
                                    <ListGroup.Item>Course 3</ListGroup.Item>
                                    <ListGroup.Item>
                                        <Row>
                                            <Col sm="12" className="mb-1">
                                                Course Name
                                            </Col>
                                            <Col sm="6" className="mt-4">
                                                <i className="btn btn-success fa fa-check"></i>
                                            </Col>
                                            <Col sm="6" className="mt-4">
                                                <i className="btn btn-danger fa fa-times"></i>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm="4">
                        <Row className="no-gutters">
                            <Col sm="4" >
                                <ListGroup className="text-center">
                                    <ListGroup.Item>Course 1</ListGroup.Item>
                                    <ListGroup.Item>
                                        <Row>
                                            <Col sm="12" className="mb-1">
                                                Course Name
                                            </Col>
                                            <Col sm="6" className="mt-4">
                                                <i className="btn btn-success fa fa-check"></i>
                                            </Col>
                                            <Col sm="6" className="mt-4">
                                                <i className="btn btn-danger fa fa-times"></i>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Col>
                            <Col sm="4">
                                <ListGroup className="text-center">
                                    <ListGroup.Item>Course 2</ListGroup.Item>
                                    <ListGroup.Item>
                                        <Row>
                                            <Col sm="12" className="mb-1">
                                                Course Name
                                            </Col>
                                            <Col sm="6" className="mt-4">
                                                <i className="btn btn-success fa fa-check"></i>
                                            </Col>
                                            <Col sm="6" className="mt-4">
                                                <i className="btn btn-danger fa fa-times"></i>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Col>
                            <Col sm="4">
                                <ListGroup className="text-center">
                                    <ListGroup.Item>Course 3</ListGroup.Item>
                                    <ListGroup.Item>
                                        <Row>
                                            <Col sm="12" className="mb-1">
                                                Course Name
                                            </Col>
                                            <Col sm="6" className="mt-4">
                                                <i className="btn btn-success fa fa-check"></i>
                                            </Col>
                                            <Col sm="6" className="mt-4">
                                                <i className="btn btn-danger fa fa-times"></i>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm="4">
                        <Row className="no-gutters">
                            <Col sm="4" >
                                <ListGroup className="text-center">
                                    <ListGroup.Item>Course 1</ListGroup.Item>
                                    <ListGroup.Item>
                                        <Row>
                                            <Col sm="12" className="mb-1">
                                                Course Name
                                            </Col>
                                            <Col sm="6" className="mt-4">
                                                <i className="btn btn-success fa fa-check"></i>
                                            </Col>
                                            <Col sm="6" className="mt-4">
                                                <i className="btn btn-danger fa fa-times"></i>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Col>
                            <Col sm="4">
                                <ListGroup className="text-center">
                                    <ListGroup.Item>Course 2</ListGroup.Item>
                                    <ListGroup.Item>
                                        <Row>
                                            <Col sm="12" className="mb-1">
                                                Course Name
                                            </Col>
                                            <Col sm="6" className="mt-4">
                                                <i className="btn btn-success fa fa-check"></i>
                                            </Col>
                                            <Col sm="6" className="mt-4">
                                                <i className="btn btn-danger fa fa-times"></i>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Col>
                            <Col sm="4">
                                <ListGroup className="text-center">
                                    <ListGroup.Item>Course 3</ListGroup.Item>
                                    <ListGroup.Item>
                                        <Row>
                                            <Col sm="12" className="mb-1">
                                                Course Name
                                            </Col>
                                            <Col sm="6" className="mt-4">
                                                <i className="btn btn-success fa fa-check"></i>
                                            </Col>
                                            <Col sm="6" className="mt-4">
                                                <i className="btn btn-danger fa fa-times"></i>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm="12">
                        <div className="text-center">
                            <Link className="btn btn-lg mt-4" to="/successpage">Save Plan</Link>
                        </div>
                    </Col>
                    {/* 2022 end */}
                </Row>
                <Row className="mt-4 mb-5">
                    <Col sm="7">
                        <Card className="bg-danger p-2">
                            <h6>An Event will be notified here if student course placement doesn't meet the requirement to enroll on the course</h6>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Summary
