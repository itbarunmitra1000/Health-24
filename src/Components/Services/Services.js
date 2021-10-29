import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Service from '../Service/Service';
import './Services.css';
const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <>
      
            <h1 className='mt-5 d-flex justify-content-center'>Our Services</h1>
            <div className='services-container'>

                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    >

                    </Service>)
                }
                

            </div>
           
        </>
    );
};

export default Services;