import React, { Component } from "react";
import "./NeighborhoodDropdown.css";
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
    <span className="select-wrapper">
      <select value={this.state.value} onChange={this.handleChange} className="form-control custom-select no-radius" id="hood-name">
        <option defaultValue>Choose a Neighborhood</option>
          {neighborhoods.map(neighborhood =>
        <option  value={neighborhood.name} key={neighborhood.name}>{neighborhood.name}</option>
      )}
      </select>
    </span>
    <Link to={`/results/${this.state.selectedNeighborhood}`}>
      <button className='hood-submit'>Submit</button>
    </Link>
  </div>
  )
}
  }

export default NeighborhoodDropDown;
