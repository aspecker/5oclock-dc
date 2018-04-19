import React, { Component } from "react";
import "./EachBar.css";
// import { browserHistory } from 'react-router';


const EachBar = props => (

      <div className='bar-result'>
        <div className='bar-container'>
          <div className='img-container'>
            <img className='img img-responsive img-fluid bar-img' alt={props.image} src={props.image} />
            <h1 className='bar-name'>{props.name}</h1>
            <h3 className='bar-hood'>{props.neighborhood}</h3>
          </div>
          <div className='bar-info-container'>
            <h1>{props.name}</h1>
            <p>{props.addressStreet}</p>
            <p>{props.addressCityZip}</p>
            <p>{props.phone}</p>
            <p>Hours</p>
            <p>{props.hours}</p>
            <p>{props.price}</p>
            <p>{props.cuisine}</p>
            <p>{props.description}</p>
            <a href={props.website}>Menu</a>
          </div>
          <button type="submit" onClick={props.handleClick} className="btn btn-default">
            Back to Results
          </button>
        </div>
      </div>
);


export default EachBar;
