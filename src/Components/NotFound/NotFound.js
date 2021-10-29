import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../img/notFound/01.png'
import './NotFound.css'
const NotFound = () => {
    return (
        <div className='notfound' >
            <img className='w-50 ' src={notFound} alt="" /> <br />
            <Link to='/'><button className="btn btn-dark notfoundBtn">Go Back</button></Link>
        </div>
    );
};

export default NotFound;