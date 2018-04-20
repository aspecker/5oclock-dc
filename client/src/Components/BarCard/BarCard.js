import React, { Component } from "react";
import "./BarCard.css";

const BarCard = props => (
  <div className='bar-card-container'>
    <div className='bar-img-box'>
      <img className='img img-responsive img-fluid bar-img' alt={props.image} src={props.image} />
    </div>
    <div className='bar-card-info-container'>
      <h4>{props.name}</h4>
      <p>{props.cuisine}</p>
      <p>{props.neighborhood}</p>
      <p>{props.hours}</p>
      <p>{props.price}</p>
    </div>
  </div>
);

export default BarCard
