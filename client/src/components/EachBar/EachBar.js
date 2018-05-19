import React from "react";
import "./EachBar.css";
import { Link } from 'react-router-dom'


const EachBar = props => (

      <div className='bar-result' align='center'>
        <div className='bar-container'>
          <div className='img-container'>
            <img className='img img-responsive img-fluid rest-img' alt={props.name} src={props.image} />
            <h1 className='bar-name'>{props.name}</h1>
            <h3 className='bar-hood'>{props.neighborhood}</h3>
          </div>
          <div className='bar-info-container'>
            <h4>{props.name}</h4>
            <p className='address'>{props.address}</p>
            <p className='address'>{props.city}, {props.state} {props.ZIP}</p>
            <p>{props.phone}</p>
            <p className='hours'>Hours</p>
            <p>{props.startTime} - {props.endTime}</p>
            <p>{props.price}</p>
            <p>{props.cuisine}</p>
            <p className='menu'><a href={props.menuLink}>Menu</a></p>
            <Link to ={`/results/${props.neighborhood}`}>
            <button type="submit" onClick={props.onClick} className="btn btn-default">
              Back to Results
            </button>
            </Link>
          </div>
        </div>
      </div>
);


export default EachBar;
