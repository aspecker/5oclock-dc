import React from "react";
import "./BarCard.css";
import logan from "../EachBar/logan.jpg";



const BarCard = props => (
  <div className='results-container'>
    <div className='card-columns'>
      <div className="card">
        {/*}<div className="bar-img card-img-top" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
          {props.children}
        </div>*/}
        <img className="card-img-top bar-img" src={logan} alt={props.name}/>
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.cuisine}</p>
          <p className="card-text">{props.startTime} - {props.endTime}</p>
          <p className="card-text price-level">Price Level: {props.price}</p>
        </div>
      </div>
    </div>
  </div>


);

export default BarCard
