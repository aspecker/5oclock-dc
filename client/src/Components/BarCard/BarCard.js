import React, { Component } from "react";
import "./BarCard.css";
import logan from "../EachBar/logan.jpg";



const BarCard = props => (
  <div className='results-container'>
    <div className='card-deck'>
      <div className="card mb-3">
        <img className="card-img-top" src={logan} alt={props.name}/>
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.cuisine}</p>
          <p className="card-text">{props.hours}</p>
          <p className="card-text">{props.price}</p>
        </div>
      </div>
    </div>
  </div>


);

export default BarCard
