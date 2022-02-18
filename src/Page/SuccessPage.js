import React from 'react'
import { Col, Container, Row ,Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Header from './Partials/Header'

function SuccessPage() {
    return (
        <>
            <Header />

            <Container className="mt-4">
                <Row>
                    <Col md="12" className="text-left mb-4 mt-5">
                        <h2 className="mb-5">Your Program Plan has been saved !</h2>
                        <p className="intropara">You can return to the program any time to change your plan.<br/> Any changes and update will be notified</p>
                    </Col>

                    <Col md={6} className="text-center">
                        <Link className="btn btn-lg" to="/coursefeed"> Home</Link>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default SuccessPage
