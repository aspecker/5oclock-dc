import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../Components/Hero'

const NotFound = () =>(
    <div>
    <Hero>
    <h1> Page Not Found </h1>
    <Link to ='/'>
    Return to Search Page
    </Link>
    </Hero>
    </div>
)

export default NotFound;