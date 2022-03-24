import React, {useState} from 'react'
import { Card, Col, Container, Button, ListGroup, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Header from './Partials/Header'
import { db } from '../firebaseDB';
import { ref, onValue } from "firebase/database";
import { expList } from './CourseForm';

const courseRef = ref(db, "Course");
var courseData = [];
var cnameList = [];
var i = 0;
const courseList = [];

function AddCourseToList(){
    courseData.forEach(element =>{
      cnameList[i] = element.Name;
      i++
    })
    i = 0;
}
function getCourseData(){
    onValue(courseRef, (snapshot)=>{
    snapshot.forEach(childSnapshot =>{
        courseData.push(childSnapshot.val());
    });
    AddCourseToList();
    });
};

function setCourseT(Course, index){
    courseList[index] = Course;
    console.log(courseList);
}

getCourseData();
console.log(cnameList);


function Summary() {
    const [selCourse, setCourse] = useState();

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
                                        <select className="form-control" as="select" value={selCourse} onChange={e=>setCourse(e.target.value)}>
                                            <option value="NaN">Select</option>
                                            {cnameList.map(item=>(<option key={item} value={item}>{item}</option>))}
                                        </select>
                                    </td>
                                </tr>
                            </table>
                        </Card>
                    </Col>
                </Row>
                <Row className="mt-4">
                    {/* year 1 start */}
                    <Col sm="12" className="text-center">
                        <h6>{expList[3]}</h6>
                    </Col>
                    <Col sm="4">
                        <Row className="no-gutters">
                            <Col sm="4" >
                                <ListGroup className="text-center">
                                    <ListGroup.Item>Course 1</ListGroup.Item>
                                    <ListGroup.Item>
                                        <Row>
                                            <Col sm="12" className="mb-1">
                                                {courseList[0]}
                                            </Col>
                                            <Col sm="6" className="mt-4">
                                                <button className="btn btn-success fa fa-check" onClick={()=> setCourseT(selCourse, 0)}></button>
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
                                                {courseList[1]}
                                            </Col>
                                            <Col sm="6" className="mt-4">
                                                <i className="btn btn-success fa fa-check" onClick={()=> setCourseT(selCourse, 1)}></i>
                                            </Col>
                                            <Col sm="6" className="mt-4">
                                                <i className="btn btn-danger fa fa-times" onClick={()=> setCourseT(null, 1)}></i>
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
                                                {courseList[2]}
                                            </Col>
                                            <Col sm="6" className="mt-4">
                                                <i className="btn btn-success fa fa-check" onClick={()=> setCourseT(selCourse, 2)}></i>
                                            </Col>
                                            <Col sm="6" className="mt-4">
                                                <i className="btn btn-danger fa fa-times" onClick={()=> setCourseT(null, 2)}></i>
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
                                                {courseList[4]}
                                            </Col>
                                            <Col sm="6" className="mt-4">
                                                <i className="btn btn-success fa fa-check" onClick={()=> setCourseT(selCourse, 4)}></i>
                                            </Col>
                                            <Col sm="6" className="mt-4">
                                                <i className="btn btn-danger fa fa-times" onClick={()=> setCourseT(null, 4)}></i>
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
                                                {courseList[5]}
                                            </Col>
                                            <Col sm="6" className="mt-4">
                                                <i className="btn btn-success fa fa-check" onClick={()=> setCourseT(selCourse, 5)}></i>
                                            </Col>
                                            <Col sm="6" className="mt-4">
                                                <i className="btn btn-danger fa fa-times" onClick={()=> setCourseT(null, 5)}></i>
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
                                                {courseList[6]}
                                            </Col>
                                            <Col sm="6" className="mt-4">
                                                <i className="btn btn-success fa fa-check" onClick={()=> setCourseT(selCourse, 6)}></i>
                                            </Col>
                                            <Col sm="6" className="mt-4">
                                                <i className="btn btn-danger fa fa-times" onClick={()=> setCourseT(null, 6)}></i>
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
                                                {courseList[8]}
                                            </Col>
                                            <Col sm="6" className="mt-4">
                                                <i className="btn btn-success fa fa-check" onClick={()=> setCourseT(selCourse, 8)}></i>
                                            </Col>
                                            <Col sm="6" className="mt-4">
                                                <i className="btn btn-danger fa fa-times" onClick={()=> setCourseT(null, 8)}></i>
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
                                                {courseList[9]}
                                            </Col>
                                            <Col sm="6" className="mt-4">
                                                <i className="btn btn-success fa fa-check" onClick={()=> setCourseT(selCourse, 9)}></i>
                                            </Col>
                                            <Col sm="6" className="mt-4">
                                                <i className="btn btn-danger fa fa-times" onClick={()=> setCourseT(null, 9)}></i>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Col>
                            <Col sm="4">
                                <ListGroup className="text-center bg-success">
                                    <ListGroup.Item>Course 3</ListGroup.Item>
                                    <ListGroup.Item>
                                        <Row>
                                            <Col sm="12" className="mb-1">
                                                {courseList[10]}
                                            </Col>
                                            <Col sm="6" className="mt-4">
                                                <i className="btn btn-success fa fa-check" onClick={()=> setCourseT(selCourse, 10)}></i>
                                            </Col>
                                            <Col sm="6" className="mt-4">
                                                <i className="btn btn-danger fa fa-times" onClick={()=> setCourseT(null, 10)}></i>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Col>
                        </Row>
                    </Col>
                    {/* year 1 end */}
                    {/* year 2 start */}
                    <Col sm="12" className="text-center mt-4">
                        <h6>{parseInt(expList[3])+1}</h6>
                    </Col>
                    <Col sm="4">
                        <Row className="no-gutters">
                            <Col sm="4" >
                                <ListGroup className="text-center">
                                    <ListGroup.Item>Course 1</ListGroup.Item>
                                    <ListGroup.Item>
                                        <Row>
                                            <Col sm="12" className="mb-1">
                                                {courseList[12]}
                                            </Col>
                                            <Col sm="6" className="mt-4">
                                                <i className="btn btn-success fa fa-check" onClick={()=> setCourseT(selCourse, 12)}></i>
                                            </Col>
                                            <Col sm="6" className="mt-4">
                                                <i className="btn btn-danger fa fa-times" onClick={()=> setCourseT(null, 12)}></i>
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
                                                {courseList[13]}
                                            </Col>
                                            <Col sm="6" className="mt-4">
                                                <i className="btn btn-success fa fa-check" onClick={()=> setCourseT(selCourse, 13)}></i>
                                            </Col>
                                            <Col sm="6" className="mt-4">
                                                <i className="btn btn-danger fa fa-times" onClick={()=> setCourseT(null, 13)}></i>
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
                                                {courseList[14]}
                                            </Col>
                                            <Col sm="6" className="mt-4">
                                                <i className="btn btn-success fa fa-check" onClick={()=> setCourseT(selCourse, 14)}></i>
                                            </Col>
                                            <Col sm="6" className="mt-4">
                                                <i className="btn btn-danger fa fa-times" onClick={()=> setCourseT(null, 14)}></i>
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
                                                {courseList[16]}
                                            </Col>
                                            <Col sm="6" className="mt-4">
                                                <i className="btn btn-success fa fa-check" onClick={()=> setCourseT(selCourse, 16)}></i>
                                            </Col>
                                            <Col sm="6" className="mt-4">
                                                <i className="btn btn-danger fa fa-times" onClick={()=> setCourseT(null, 16)}></i>
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
                                                {courseList[17]}
                                            </Col>
                                            <Col sm="6" className="mt-4">
                                                <i className="btn btn-success fa fa-check" onClick={()=> setCourseT(selCourse, 17)}></i>
                                            </Col>
                                            <Col sm="6" className="mt-4">
                                                <i className="btn btn-danger fa fa-times" onClick={()=> setCourseT(null, 17)}></i>
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
                                                {courseList[18]}
                                            </Col>
                                            <Col sm="6" className="mt-4">
                                                <i className="btn btn-success fa fa-check" onClick={()=> setCourseT(selCourse, 18)}></i>
                                            </Col>
                                            <Col sm="6" className="mt-4">
                                                <i className="btn btn-danger fa fa-times" onClick={()=> setCourseT(null, 18)}></i>
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
                                                {courseList[20]}
                                            </Col>
                                            <Col sm="6" className="mt-4">
                                                <i className="btn btn-success fa fa-check" onClick={()=> setCourseT(selCourse, 20)}></i>
                                            </Col>
                                            <Col sm="6" className="mt-4">
                                                <i className="btn btn-danger fa fa-times" onClick={()=> setCourseT(null, 20)}></i>
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
                                                {courseList[21]}
                                            </Col>
                                            <Col sm="6" className="mt-4">
                                                <i className="btn btn-success fa fa-check" onClick={()=> setCourseT(selCourse, 21)}></i>
                                            </Col>
                                            <Col sm="6" className="mt-4">
                                                <i className="btn btn-danger fa fa-times" onClick={()=> setCourseT(null, 21)}></i>
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
                                                {courseList[22]}
                                            </Col>
                                            <Col sm="6" className="mt-4">
                                                <i className="btn btn-success fa fa-check" onClick={()=> setCourseT(selCourse, 22)}></i>
                                            </Col>
                                            <Col sm="6" className="mt-4">
                                                <i className="btn btn-danger fa fa-times" onClick={()=> setCourseT(null, 22)}></i>
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
                    {/* year 2 end */}
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

export { Summary, courseList };

