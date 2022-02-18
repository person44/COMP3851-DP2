
import React from 'react'
import { Form, Navbar, Button, Nav, } from 'react-bootstrap'
import logo from  '../../logo.png'
function Header() {
    return (
        <Navbar bg="light" expand="lg" >
                
                <Navbar.Brand href="#home" className="pt-0 pb-0" >
                    <h1 className="mb-0"> <span><img className="nav-img" src={logo} width={100} height={100} /></span> IPATH</h1>
                </Navbar.Brand> 
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home"></Nav.Link>
                        <Nav.Link href="#link"></Nav.Link>

                    </Nav>
                    <Form inline>
                        <Button variant="outline-success">Logout</Button>
                    </Form>
                </Navbar.Collapse>
        
            </Navbar>
    )
}

export default Header
