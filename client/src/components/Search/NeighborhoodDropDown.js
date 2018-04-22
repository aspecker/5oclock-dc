import React from "react";
import "./Search.css";
import neighborhoods from '../../data/neighborhoods'

export const NeighborhoodDropDown = props => (
  <div className="input-group">
    <select onChange={props.handleChange} className="custom-select" id="hood-name">
      <option selected>Pick a Neighborhood</option>
        {neighborhoods.map(neighborhood =>
      <option value={neighborhood} key={neighborhood}>{neighborhood}</option>
    )}
    </select>
  </div>
);
