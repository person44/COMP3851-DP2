import React, { useEffect, useState } from "react";
import { Col, Container, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import logo from '../Image/UON Icon.png'
import './login.css'
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../firebaseDB";
import { useAuthState } from "react-firebase-hooks/auth";
import ReactDOM from "react-dom";

function Login() {
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useHistory();
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/Home");
  }, [user, loading]);
    return (
        <>
            <Container>
                <Row>
                    <Col md="12" className="text-center mt-4 my-5">
                        <div>
                            <img src={logo} className="img-responsive mb-4" height={200} width={200} />
                            <h2>University of Newcastle</h2>
                            <h2>iPath</h2>
                        </div>
                        <Form className="container form-container">
                            <Form.Group className="form-group" as={Row}>
                                <Form.Label column sm="2" className="text-left">UON Email Address:</Form.Label>
                                <Col sm="5">
                                <input type="text" className="login__textBox" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="UON E-mail Address"/>
                                </Col>
                            </Form.Group>
                            <Form.Group className="form-group" as={Row}>
                                <Form.Label column sm="2" className="text-left">Password:</Form.Label>
                                <Col sm="5">
                                <input type="password" className="login__textBox" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
                                </Col>
                            </Form.Group>
                        </Form>
                        <div>
                        <button className="login__btn" onClick={() => logInWithEmailAndPassword(email, password)}>Login</button>
                            <p className="mt-2">Forgot Password? <a href="#" className="text-primary custom-link">Click Here</a></p>
                        </div>
                        <div>
                            <i>There is no need for you to register an account with University as you can login using your current UON account.</i>
                        </div>
                    </Col>

                </Row>
            </Container>
        </>
    )
}
const rootElement = document.getElementById("root");
ReactDOM.render(<Login />, rootElement);
export default Login