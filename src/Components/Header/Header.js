
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css';

const Header = () => {
    const { user, logout } = useAuth();
    return (
        <>
            <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand to="#home" className="fw-bolder fs-3">Health <span className="text-warning">24</span> </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end ">
                        <Nav.Link as={Link} className='text-light' to="/home#home">Home</Nav.Link>
                        <Nav.Link as={Link} className='text-light' to="/features#features">Services</Nav.Link>
                        <Nav.Link as={Link} className='text-light' to="/patients#pricing">For Patients</Nav.Link>
                        <Nav.Link as={Link} className='text-light' to="/education#education">Education</Nav.Link>
                        <Nav.Link as={Link} className='text-light' to="/about#about">About Us</Nav.Link>
                        <Nav.Link as={Link} className='text-light' to="/contact#contact">Contact Us</Nav.Link>
                        <Navbar.Text>
                            <span  >Hello {user.displayName} </span>
                        </Navbar.Text>
                        {user.email ?
                            <button onClick={logout} className='btn-dark' >Log Out</button>
                            :
                            <>
                                <Nav.Link as={Link} className='text-light' to="/login">Login</Nav.Link>
                                <Nav.Link as={Link} className='text-light' to="/register">Register</Nav.Link>
                            </>
                        }



                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </>
    );
};

export default Header;