import React from 'react'
import Header from './Partials/Header'
import { Card, Col, Container, ListGroup, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { db } from '../firebaseDB';
import { ref, onValue } from "firebase/database";
import { courseList } from './Summary';
import { expList } from './CourseForm';

const degRef = ref(db, "Course");
var courseData = [];
function getCourseData(){
    onValue(degRef, (snapshot)=>{
    snapshot.forEach(childSnapshot =>{
        courseData.push(childSnapshot.val());
    });
    });
};

getCourseData();
console.log(courseData);

function Coursefeed() {
    return (
        <>
            <Header />
            <Container className="mt-4" fluid>
                <Row>
                    <Col className="text-left">
                        <h2 className="mb-3">Hello</h2>
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
                                                <h3>{expList[3]}</h3>
                                            </div>
                                            <Row className="no-gutters">
                                                <Col sm="4" >
                                                    <ListGroup>
                                                        <ListGroup.Item>Trimester 1</ListGroup.Item>
                                                        <ListGroup.Item>{courseList[0]}</ListGroup.Item>
                                                        <ListGroup.Item>{courseList[1]}</ListGroup.Item>
                                                        <ListGroup.Item>{courseList[2]}</ListGroup.Item>
                                                        <ListGroup.Item>{courseList[3]}</ListGroup.Item>
                                                    </ListGroup>
                                                </Col>
                                                <Col sm="4">
                                                    <ListGroup>
                                                        <ListGroup.Item>Trimester 2</ListGroup.Item>
                                                        <ListGroup.Item>{courseList[4]}</ListGroup.Item>
                                                        <ListGroup.Item>{courseList[5]}</ListGroup.Item>
                                                        <ListGroup.Item>{courseList[6]}</ListGroup.Item>
                                                        <ListGroup.Item>{courseList[7]}</ListGroup.Item>
                                                    </ListGroup>
                                                </Col>
                                                <Col sm="4">
                                                    <ListGroup>
                                                        <ListGroup.Item>Trimester 3</ListGroup.Item>
                                                        <ListGroup.Item>{courseList[8]}</ListGroup.Item>
                                                        <ListGroup.Item>{courseList[9]}</ListGroup.Item>
                                                        <ListGroup.Item>{courseList[10]}</ListGroup.Item>
                                                        <ListGroup.Item>{courseList[11]}</ListGroup.Item>
                                                    </ListGroup>
                                                </Col>
                                            </Row>
                                        </Card>
                                    </Col>
                                    <Col sm="4">
                                        <Card className="border card1">
                                            <div className="border text-center">
                                                <h3>{parseInt(expList[3])+1}</h3>
                                            </div>
                                            <Row className="no-gutters">
                                                <Col sm="12" >
                                                    <ListGroup>
                                                        <ListGroup.Item>Trimester 1</ListGroup.Item>
                                                        <ListGroup.Item>{courseList[12]}</ListGroup.Item>
                                                        <ListGroup.Item>{courseList[13]}</ListGroup.Item>
                                                        <ListGroup.Item>{courseList[14]}</ListGroup.Item>
                                                        <ListGroup.Item>{courseList[15]}</ListGroup.Item>
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
