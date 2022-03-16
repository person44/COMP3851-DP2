import React, {useState} from 'react'
import { Col, Form, Row, Button, Container } from 'react-bootstrap'
import Header from '../Partials/Header'
import { db } from '../../firebaseDB'
import { ref, set } from 'firebase/database'

function addCourse(courseCo, courseAv, courseLo, courseNa, coursePr){
    set(ref(db, "Course/" + courseCo), {
        Availability: courseAv,
        Location: courseLo,
        Name: courseNa,
        Prerequisite: coursePr
    })
    .then(()=>{
        alert("Course Added");
    })
    .catch(()=>{
        alert("Course Not Added");
    })
}

function ACreateCourse(){
    var [courseCode, setCode]=useState();
    var [courseName, setName ]=useState();
    var [courseLocation, setLoc]=useState();
    var [courseAvailability, setAv]=useState();
    var [coursePrerequisite, setPre]=useState();
    
    return (
        <>
            <Header />
            <Container className="text-left">
                <h2>Create Course</h2>
                <Form className=" mt-5 text-left create-form">
                    <Form.Group as={Row} className="form-group">
                        <Col sm="2" className="text-left">
                            <Form.Label className="mt-2">Course Code:</Form.Label>
                        </Col>
                        <Col sm="6">
                        <   input type="text" value={courseCode} onInput={e => setCode(e.target.value)}></input>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="form-group">
                        <Col sm="2" className="text-left">
                            <Form.Label className="mt-2">Course Name:</Form.Label>
                        </Col>
                        <Col sm="3">
                            <input type="text" value={courseName} onInput={e => setName(e.target.value)}></input>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="form-group">
                        <Col sm="2" className="text-left">
                            <Form.Label className="mt-2">Location:</Form.Label>
                        </Col>
                        <Col sm="3">
                            <input type="text" value={courseLocation} onInput={e => setLoc(e.target.value)}></input>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="form-group">
                        <Col sm="2" className="text-left">
                            <Form.Label className="mt-2">Availability:</Form.Label>
                        </Col>
                        <Col sm="3">
                            <input type="text" value={courseAvailability} onInput={e => setAv(e.target.value)}></input>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="form-group">
                        <Col sm="2" className="text-left">
                            <Form.Label className="mt-2">Prerequisite:</Form.Label>
                        </Col>
                        <Col sm="3">
                            <input type="text" value={coursePrerequisite} onInput={e => setPre(e.target.value)}></input>
                        </Col>
                    </Form.Group>
                    <Form.Group className="mt-2" as={Row}>
                        <Col sm="4"></Col>

                        <Col sm="2" className="text-left">
                            <button id="addBtn" onClick={()=> addCourse(courseCode, courseAvailability, courseLocation, courseName, coursePrerequisite)}>Add Course</button>
                            {/* <Link className="btn btn-lg" to="/admin/success"> Add Course</Link> */}
                        </Col>
                    </Form.Group>
                </Form>
            </Container>
        </>
    )
}

export default ACreateCourse
