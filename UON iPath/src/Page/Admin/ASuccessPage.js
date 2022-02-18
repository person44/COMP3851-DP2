import React from 'react'
import { Card, Col, Container, ListGroup, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Header from '../Partials/Header'
function ASuccessPage() {
    return (
        <>
            <Header />
            <Container className="mt-4">
                <h2>New Course has been succesfully created !</h2>
                <Row>
                    <Col sm="12" className="p-4">
                        <Card className="border p-4">
                            <Row>
                                <Col>
                                    <h4>Course Name</h4>
                                </Col>
                                <Col>
                                    <p> &lt; Course Name &gt; </p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <h4>Course Code</h4>
                                </Col>
                                <Col>
                                    <p>  Code  123  </p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <h4>Degree</h4>
                                </Col>
                                <Col>
                                    <div className="border w-50">
                                        <p> &lt; Degree Name 1 &gt; </p>
                                        <p> &lt; Degree Name 2 &gt; </p>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <h4>Major /s </h4>
                                </Col>
                                <Col>
                                    <div className="border w-50">
                                        <p> &lt; Major 1 &gt; </p>
                                        <p> &lt; Major 2 &gt; </p>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <h4>Required Course</h4>
                                </Col>
                                <Col>
                                    <div className="border w-50">
                                        <p> &lt; Course Name 1 &gt; </p>
                                        <p> &lt; Course Name 2 &gt; </p>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <h4>Course Load</h4>
                                </Col>
                                <Col>
                                    <p> 40 </p>
                                </Col>
                            </Row>
                           
                        </Card>
                    </Col>
                   
                    <Col sm="6" className="text-center mb-5">
                        <Link className="btn btn-lg mr-4" to="/admin/update-course">Edit</Link> 
                    </Col>
                    <Col sm="6" className="text-center mb-5">
                        <Link className="btn btn-lg ml-4"  to="/admin/index">Home</Link>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ASuccessPage
