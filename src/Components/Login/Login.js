import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Login = () => {
    const { signInUsingGoogle } = useAuth();
    

    return (
        <>
            <Container>
                <h1 className="shadow-sm text-success mt-5 p-3 text-center rounded">Health <span className="text-warning">24</span> Login</h1>
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
                            <br /><br />

                            <button className='btn btn-dark p-2 '>Login</button> 	&nbsp;
                            <button onClick={signInUsingGoogle} className='btn btn-dark p-2'>Google Sign In</button> 	&nbsp;
                            <Link to='/register'>Create New Account</Link>
                        </div>
                    </Col>
                </Row>
            </Container>

        </>



    );
};

export default Login;