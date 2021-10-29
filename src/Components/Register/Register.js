import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {

    return (
        <>
            <Container>
                <h1 className="shadow-sm text-success mt-5 p-3 text-center rounded">Health <span className="text-warning">24</span> Register</h1>
                <Row className="mt-5">
                    <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
                        <div>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label className='fs-3 fw-bolder text-success'>Email Address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label className='fs-3 fw-bolder  text-success'>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />

                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label className='fs-3 fw-bolder  text-success'>Re-enter Password</Form.Label>
                                <Form.Control type="password" placeholder="Re-enter Password" />

                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label className='fs-3 fw-bolder  text-success'>Address</Form.Label>
                                <Form.Control type="address" placeholder="Address" />

                            </Form.Group>

                            <br /><br />

                            <button className='btn btn-dark p-2 '>Register</button> &nbsp; &nbsp;
                            <Link to='/login'>Already Registered?</Link>
                        </div>
                    </Col>
                </Row>
            </Container>

        </>

    );
};

export default Register;