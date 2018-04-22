import React, { Component } from "react";
import "./Search.css";
import { Link } from 'react-router-dom'
import neighborhoods from '../../data/neighborhoods'


class NeighborhoodDropDown extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedNeighborhood: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }
  
  handleChange (e) {
    this.setState({selectedNeighborhood: e.target.value})
  }


  
  render () {
  return (
  <div className="input-group">
    <select value={this.state.value} onChange={this.handleChange} className="custom-select" id="hood-name">
      <option defaultValue>Choose a Neighborhood</option>
        {neighborhoods.map(neighborhood =>
      <option  value={neighborhood} key={neighborhood}>{neighborhood}</option>
    )}
    </select>
    <Link to={`/results/${this.state.selectedNeighborhood}`}>
      <button>Submit</button>
    </Link>
  </div>
  )
}
  }

export default NeighborhoodDropDown;
