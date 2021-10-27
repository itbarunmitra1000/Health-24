import React from 'react';
import { NavLink } from 'react-bootstrap';

const Footer = () => {
    return (
        <>
            <div className=" py-5 bg-dark">
                <div className="container overflow-hidden">
                    <div className=" d-lg-flex justify-content-lg-between">
                        <div className="pb-3">
                            <ul className="list-unstyled d-flex">
                                <li className="me-5 fw-bolder fs-3 "><NavLink to="" className="text-decoration-none text-white">Health <span className="text-warning">24</span></NavLink></li>
                                {/* <li className="me-5 "><NavLink to="" className="text-decoration-none text-white">License</NavLink></li> */}
                            </ul>
                            <ul className="list-unstyled d-flex flex-wrap ">
                                <li className="me-5 mb-3 "><NavLink to="" className="text-decoration-none text-white">Find a clinic</NavLink>
                                </li>
                                <li className="me-5 mb-3 "><NavLink to="" className="text-decoration-none text-white">Resources</NavLink>
                                </li>
                                <li className="me-5 mb-3 "><NavLink to="" className="text-decoration-none text-white">Blog</NavLink>
                                </li>
                                <li className="me-5 mb-3 "><NavLink to="" className="text-decoration-none text-white">Careers</NavLink>
                                </li>
                                <li className="me-5 mb-3 "><NavLink to="" className="text-decoration-none text-white">Help</NavLink>
                                </li>
                                <li className=" mb-3 "><NavLink to="" className="text-decoration-none text-white">Privacy
                                    Policy</NavLink></li>
                            </ul>
                            <p className="text-white d-flex"> &#169; 2021 Health &nbsp; <span className="text-warning"> 24</span>. All rights reserved </p>
                        </div>

                    </div>
                </div>

            </div>

        </>
    );
};

export default Footer;