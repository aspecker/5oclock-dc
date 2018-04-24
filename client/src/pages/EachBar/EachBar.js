import React, {Component} from "react";
import "./EachBar.css";
import logan from "./logan.jpg";
// import { browserHistory } from 'react-router';


// const EachBar = props => (
class EachBar extends Component{
  render(){
  return(
      <div className='bar-result' align='center'>
        <div className='bar-container'>
          <div className='img-container'>
            <img className='img img-responsive img-fluid rest-img' alt={this.props.name} src={logan} />
            <h1 className='bar-name'>{this.props.name}</h1>
            <h3 className='bar-hood'>{this.props.neighborhood}</h3>
          </div>
          <div className='bar-info-container'>
            <h4>{this.props.name}</h4>
            <p className='address'>{this.props.address}</p>
            <p className='address'>{this.props.city}, {this.props.state} {this.props.ZIP}</p>
            <p>{this.props.phone}</p>
            <p className='hours'>Hours</p>
            <p>{this.props.startTime} - {this.props.endTime}</p>
            <p>Price Level:  {this.props.price}</p>
            <p>{this.props.cuisine}</p>
            <p className='menu'><a href={this.props.menuLink}>Menu</a></p>
            <button type="submit" onClick={this.props.handleClick} className="btn btn-default">
              Back to Results
            </button>
          </div>
        </div>
      </div>
  )}
};


export default EachBar;
