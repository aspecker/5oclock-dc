import React from "react";
import './Logo.css';
import FivePM from './five-pm-logo.png';

const Logo = props => (
  <div className='logo'>
   <img className='img img-responsive img-fluid logo-img' src={ FivePM } alt='logo' />
  </div>

);
export default Logo;
