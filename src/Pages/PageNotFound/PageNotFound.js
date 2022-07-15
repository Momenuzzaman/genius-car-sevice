import React from 'react';
import Error from '../../images/error.jpg';
import { Link } from "react-router-dom";
import './PageNotFound.css';


const PageNotFound = () => {
    return (
        <div>
            <img className="notfound" src={Error} alt='' />
            <Link className='link' to="/">Go Back</Link>
        </div>
    );
};

export default PageNotFound;