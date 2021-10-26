import React from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from '../../img/banner/01.jpg';
import image2 from '../../img/banner/02.jpg';
import image3 from '../../img/banner/03.jpg';
const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100  h-50"
                        src={image1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className='fs-1 text-warning fw-bolder' >Welcome to Health 24 </h3>
                        <p className='fs-4 text-success  fw-bolder' >Health 24 provides transformative learning experiences for the future leaders of healthcare. Our education programs are enriched by the latest medical research and the excellent clinical care offered by our hospital and clinics.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-50"
                        src={image2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 className='text-warning fs-2 fw-bolder'>Excellence in patient-centered care, teaching & research</h3>
                        <p className='text-success  fs-4  fw-bolder'>Patient centered care requires that health care organizations and health care professionals actively understand what patients value. Fortunately, there are methods for gaining that understanding.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-50"
                        src={image3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 className='fs-1 text-warning fw-bolder'>Medical Science</h3>
                        <p className='text-success fs-4 fw-bolder'>Researchers have been investigating the efficacy of many of the non-pharmaceutical interventions applied and exploring the theory that mask use results in less severe symptoms in individuals infected with SARS-COV-2</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;