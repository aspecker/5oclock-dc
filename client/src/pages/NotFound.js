import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () =>(
    <div>
    <h1> Page Not Found </h1>
    <Link to ='/'>
    Return to Search Page
    </Link>
    </div>
)

export default NotFound;