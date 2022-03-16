import React, {useState} from 'react'
import { Col, Form, Row, Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Header from './Partials/Header'
import { db } from '../firebaseDB';
import { ref, onValue } from "firebase/database";

const degRef = ref(db, "Degree");

var degData = [];
var dnameList = [];
var mListAll = [];
var mList = [];
var i = 0;
var expList = [];

function AddDegItemsToLists(){
    degData.forEach(element =>{
      dnameList[i] = element.Name;
      mListAll[i] = element.Major;
      i++
    })
    i = 0;
}
function getDegData(){
    onValue(degRef, (snapshot)=>{
    snapshot.forEach(childSnapshot =>{
        degData.push(childSnapshot.val());
    });
    AddDegItemsToLists();
    });
};

function getMajorForOp(deg){
    switch(deg){
        case 'Bachelor of Computer Science':
            mList = mListAll[0];
            break;
        case 'Bachelor of Data Science':
            mList = mListAll[1];
            break;
        case 'Bachelor of Information Technology (Callaghan)':
            mList = mListAll[2];
            break;
        case 'Bachelor of Information Technology (Singapore)':
            mList = mListAll[3];
            break;
        case 'Bachelor of Software Engineering (Honours)':
            mList = mListAll[4];
            break;
    }
    //console.log(mList);
}

function putSelectedIItems(deg, maj, year, com, numc){
    expList[0] = deg;
    expList[1] = maj;
    expList[2] = year;
    expList[3] = com;
    expList[4] = numc;
    console.log(expList);
}
getDegData();
//console.log(degData);
//console.log(dnameList);


function CourseForm() {
    const [selDegree, setDegree]=useState();
    const [major, setMajor]=useState();
    const [year, setYear]=useState();
    const [commencement, setCommencement]=useState();
    const [numCourses, setNumCourses]=useState();
    getMajorForOp(selDegree);

    return (
        <>
            <Header />
            <Container>
                <Form className=" mt-5 text-left">
                    <h1 className="mt-5 mb-4 p-2 text-gray">Information</h1>
                    <Form.Group as={Row}>
                        <Col sm="6">
                            <Form.Label>Select Degree</Form.Label>
                            <Form.Control as="select" value={selDegree} onChange={e=>setDegree(e.target.value)}>
                                <option value="NaN">Select Degree</option>
                                {dnameList.map(item=>(<option key={item} value={item}>{item}</option>))}
                            </Form.Control>
                        </Col>
                    </Form.Group>
                    <Form.Group className="mt-2" as={Row}>
                        <Col sm="6">
                            <Form.Label>Select Major</Form.Label>
                            <Form.Control as="select" value={major} onChange={e=>setMajor(e.target.value)}>
                            <option value="NaN">Select Major</option>
                            {mList.map(item => <option key={item} value={item}>{item}</option>)}
                            </Form.Control>
                        </Col>
                    </Form.Group>
                    <Form.Group className="mt-2" as={Row}>
                        <Col sm="6">
                            <Form.Label>Start Year</Form.Label>
                            <Form.Control as="select" value={year} onChange={e=>setYear(e.target.value)}>
                                <option value="NaN">Select Year</option>
                                <option value="2019">2019</option>
                                <option value="2020">2020</option>
                                <option value="2021">2021</option>
                                <option value="2022">2022</option>
                            </Form.Control>
                        </Col>
                    </Form.Group>
                    <Form.Group className="mt-2" as={Row}>
                        <Col sm="6">
                            <Form.Label>Trimester Commencement</Form.Label>
                            <Form.Control as="select" value={commencement} onChange={e=>setCommencement(e.target.value)}>
                                <option value="NaN">Select</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </Form.Control>
                        </Col>
                    </Form.Group>
                    <Form.Group className="mt-2" as={Row}>
                        <Col sm="2">
                            <Form.Label>Courses Per Trimester</Form.Label>
                        </Col>
                        <Col sm="3">
                            <Form.Control as="select" value={numCourses} onChange={e=>setNumCourses(e.target.value)}>
                                <option value="NaN">Select</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </Form.Control>
                        </Col>
                    </Form.Group>
                    <Form.Group className="mt-4 mb-4" as={Row}>
                        <Col sm="4" className="text-left">
                            <Link className="btn btn-lg" to="/Home"> Return</Link>
                        </Col>
                        <Col sm="4" className="text-left">
                            <Link className="btn btn-lg" to="/programcreate" onClick={()=> putSelectedIItems(selDegree, major, year, commencement, numCourses)}> Next</Link>
                        </Col>
                    </Form.Group>
                </Form>
            </Container>
        </>
    )
}

export { CourseForm, expList };

