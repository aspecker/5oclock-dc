import React, { Component } from "react";
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
    <div className="field has-addons has-addons-centered">
      <div className="select">
        <select value={this.state.value} onChange={this.handleChange} id="hood-name">
          <option defaultValue>Choose a Neighborhood</option>
            {neighborhoods.map(neighborhood => <option value={neighborhood.name} key={neighborhood.name}>{neighborhood.name}
          </option>)}
          </select>
      </div>
      <Link className="control" to={`/results/${this.state.selectedNeighborhood}`}>
        <button className="button is-primary" >Submit</button>
      </Link>
    </div>
  )
}
  }

export default NeighborhoodDropDown;
