import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './About.css';
const About = () => {
    return (
        <>
        {/* header component  */}
        <Header></Header>
        {/* about details  */}
        <div className='about-container'>
           <h1 className='about-header'>About Us</h1>
           <p className='about-text'>“Health is a state of complete physical, mental, and social well-being and not merely the absence of disease or infirmity.” “Health is a state of complete physical, mental, and social well-being and not merely the absence of disease or infirmity.”
           We always take care of our patients like family.
           </p>
        </div>
        {/* footer component */}
        <Footer></Footer>
        </>
    );
};

export default About;