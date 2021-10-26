import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';

const Header = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand href="#home" className="fw-bolder fs-3">Health <span className="text-warning">24</span> </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end ">
                        <Nav.Link className='text-light' href="#home">Home</Nav.Link>
                        <Nav.Link className='text-light' href="#features">Services</Nav.Link>
                        <Nav.Link className='text-light' href="#pricing">For Patients</Nav.Link>
                        <Nav.Link className='text-light' href="#pricing">Education</Nav.Link>
                        <Nav.Link className='text-light' href="#pricing">About Us</Nav.Link>
                        <Nav.Link className='text-light' href="#pricing">Contact Us</Nav.Link>
                        <Navbar.Text>
                            <a href="#login">Mark Otto</a>
                        </Navbar.Text>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </>
    );
};

export default Header;