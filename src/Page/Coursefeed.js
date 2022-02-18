import React from 'react'
import Header from './Partials/Header'
import { Card, Col, Container, ListGroup, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Coursefeed() {
    return (
        <>
            <Header />
            <Container className="mt-4" fluid>
                <Row>
                    <Col className="text-left">
                        <h2 className="mb-3">Hello , &lt; Insert Student Name &gt; </h2>
                    </Col>
                </Row>
                <Row className="no-gutters">
                    <Col sm="4">
                        <Card className="mb-4 border-0">
                            <Card.Title className="border-0 p-3">Current Courses</Card.Title>
                            <Card.Body>
                                <ListGroup>
                                    <ListGroup.Item>Trimester</ListGroup.Item>
                                    <ListGroup.Item>&lt; Course 1 &gt;</ListGroup.Item>
                                    <ListGroup.Item>&lt; Course 2 &gt;</ListGroup.Item>
                                    <ListGroup.Item>&lt; Course 3 &gt;</ListGroup.Item>
                                    <ListGroup.Item>&lt; Course 4 &gt;</ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                        </Card>
                        <Card className="border-0">
                            <Card.Title className="p-3"><h5>Unassigned Course</h5></Card.Title>
                            <Card.Body>
                                <ListGroup>
                                    <ListGroup.Item>Trimester</ListGroup.Item>
                                    <ListGroup.Item>&lt; Course 1 &gt;</ListGroup.Item>
                                    <ListGroup.Item>&lt; Course 2 &gt;</ListGroup.Item>

                                </ListGroup>
                            </Card.Body>
                        </Card>
                        <Link to="/successpage" className=" btn btn-lg mt-2 mb-5">Update My Plan</Link>
                    </Col>
                    <Col sm="8">
                        <Card className="border-0">
                            <Card.Title className="p-3">Upcoming Courses</Card.Title>
                            <Card.Body>
                                <Row className="no-gutters">
                                    <Col sm="8">
                                        <Card className="border card1">
                                            <div className="border text-center">
                                                <h3> &lt; Year 1 &gt;</h3>
                                            </div>
                                            <Row className="no-gutters">
                                                <Col sm="4" >
                                                    <ListGroup>
                                                        <ListGroup.Item>Trimester</ListGroup.Item>
                                                        <ListGroup.Item>&lt; Course 1 &gt;</ListGroup.Item>
                                                        <ListGroup.Item>&lt; Course 2 &gt;</ListGroup.Item>
                                                        <ListGroup.Item>&lt; Course 3 &gt;</ListGroup.Item>
                                                        <ListGroup.Item>&lt; Course 4 &gt;</ListGroup.Item>
                                                    </ListGroup>
                                                </Col>
                                                <Col sm="4">
                                                    <ListGroup>
                                                        <ListGroup.Item>Trimester</ListGroup.Item>
                                                        <ListGroup.Item>&lt; Course 1 &gt;</ListGroup.Item>
                                                        <ListGroup.Item>&lt; Course 2 &gt;</ListGroup.Item>
                                                        <ListGroup.Item>&lt; Course 3 &gt;</ListGroup.Item>
                                                        <ListGroup.Item>&lt; Course 4 &gt;</ListGroup.Item>
                                                    </ListGroup>
                                                </Col>
                                                <Col sm="4">
                                                    <ListGroup>
                                                        <ListGroup.Item>Trimester</ListGroup.Item>
                                                        <ListGroup.Item>&lt; Course 1 &gt;</ListGroup.Item>
                                                        <ListGroup.Item>&lt; Course 2 &gt;</ListGroup.Item>
                                                        <ListGroup.Item>&lt; Course 3 &gt;</ListGroup.Item>
                                                        <ListGroup.Item>&lt; Course 4 &gt;</ListGroup.Item>
                                                    </ListGroup>
                                                </Col>
                                            </Row>
                                        </Card>
                                    </Col>
                                    <Col sm="4">
                                        <Card className="border card1">
                                            <div className="border text-center">
                                                <h3> &lt; Year 1 &gt;</h3>
                                            </div>
                                            <Row className="no-gutters">
                                                <Col sm="12" >
                                                    <ListGroup>
                                                        <ListGroup.Item>Trimester</ListGroup.Item>
                                                        <ListGroup.Item>&lt; Course 1 &gt;</ListGroup.Item>
                                                        <ListGroup.Item>&lt; Course 2 &gt;</ListGroup.Item>
                                                        <ListGroup.Item>&lt; Course 3 &gt;</ListGroup.Item>
                                                        <ListGroup.Item>&lt; Course 4 &gt;</ListGroup.Item>
                                                    </ListGroup>
                                                </Col>

                                            </Row>
                                        </Card>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Coursefeed
