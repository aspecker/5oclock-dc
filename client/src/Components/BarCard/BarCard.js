import React from "react";
import "./BarCard.css";



const BarCard = props => (
  // <div className='results-container'>
  //   <div className='card-columns'>
      <div className="card resultsCard">
        {/*}<div className="bar-img card-img-top" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
          {props.children}
        </div>*/}
        <img className="card-img-top bar-img" src={props.image} alt={props.name}/>
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.cuisine}</p>
          <p className="card-text">{props.startTime} - {props.endTime}</p>
          <p className="card-text price-level">{props.price}</p>
        </div>
      </div>
  //   </div>
  // </div>


);

export default BarCard
