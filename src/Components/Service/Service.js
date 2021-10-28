import React from 'react';
import './Service.css';
const Service = ({service}) => {
    const {name,description,img} = service;
    return (
     
        <div className='service-container'>
            
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>{description}</p>
            <button className='card-btn'>View Details</button>
        </div>
      
    );
};

export default Service;