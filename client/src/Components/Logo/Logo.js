import React from "react";
import './Logo.css';
import FivePM from './five-pm-logo.png';
import { Link } from 'react-router-dom'


class Logo extends Component{
  render(){
  return(
  
    <div className='logo'>
      <Link to="/">
        <img className='img img-responsive img-fluid logo-img' src={ FivePM } alt='logo' />
      </Link>
    </div>

)};
}
export default Logo;
