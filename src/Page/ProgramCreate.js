import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Header from './Partials/Header'
import { expList } from './CourseForm'

function ProgramCreate() {
    return (
        <>
            <Header />
            <Container className="mt-4">
                <Row>
                    <Col sm="12">
                        <h1 className="mt-2 mb-4">Review</h1>
                    </Col>
                    <Col sm="12">
                        <p>Please review the information here and the plan will be generated</p>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12" className="p-4">
                        <Card className="border border-dark border-2x p-4">
                            <Row>
                                <Col>
                                    <h4>Degree</h4>
                                </Col>
                                <Col>
                                    <p>{expList[0]}</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <h4>Campus</h4>
                                </Col>
                                <Col>
                                    <p>{expList[1]}</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <h4>Major /s </h4>
                                </Col>
                                <Col>
                                    <div className="border w-50">
                                        <p>{expList[2]}</p>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <h4>Start Year</h4>
                                </Col>
                                <Col>
                                    <p>{expList[3]}</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <h4>Trimester Commencement</h4>
                                </Col>
                                <Col>
                                    <p>{expList[4]}</p>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col className="text-center">
                        <Link className="btn btn-lg mr-4" to="/addcourse">Go Back</Link> 
                    </Col>
                    <Col className="text-center">
                        <Link className="btn btn-lg ml-4" to="/summary">Create My Plan</Link>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ProgramCreate
