import React, { Component } from "react";
import "./EachBar.css";
import logan from "./logan.jpg";
// import { browserHistory } from 'react-router';


const EachBar = props => (

      <div className='bar-result' align='center'>
        <div className='bar-container'>
          <div className='img-container'>
            <img className='img img-responsive img-fluid bar-img' alt={props.image} src={props.image} />
            <h1 className='bar-name'>{props.name}</h1>
            <h3 className='bar-hood'>{props.neighborhood}</h3>
          </div>
          <div className='bar-info-container'>
            <h4>{props.name}</h4>
            <p className='address'>{props.address}</p>
            <p className='address'>{props.city} {props.zip}</p>
            <p>{props.phone}</p>
            <p className='hours'>Hours</p>
            <p>{props.hours}</p>
            <p>{props.price}</p>
            <p>{props.cuisine}</p>
            <p className='menu'><a href={props.website}>Menu</a></p>
            <button type="submit" onClick={props.handleClick} className="btn btn-default">
              Back to Results
            </button>
          </div>
        </div>
      </div>
);


export default EachBar;
