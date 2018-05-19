import React from "react";



const BarCard = props => (
  // <div className='results-container'>
  //   <div className='card-columns'>
      <div>
        {/*}<div className="bar-img card-img-top" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
          {props.children}
        </div>*/}
        <img src={props.image} alt={props.name}/>
        <div>
          <h5>{props.name}</h5>
          <p>{props.cuisine}</p>
          <p>{props.startTime} - {props.endTime}</p>
          <p>{props.price}</p>
        </div>
      </div>
  //   </div>
  // </div>


);

export default BarCard
