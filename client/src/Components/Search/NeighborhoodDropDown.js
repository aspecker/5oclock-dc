import React from "react";
import "./Search.css";
import neighborhoods from '../../data/neighborhoods'

export const NeighborhoodDropDown = () => (
  <div className="input-group">
    <select className="custom-select" id="hood-name">
      <option selected>Neighborhoods</option>
        {neighborhoods.map(x =>
      <option value={x} key={x}>{x}</option>
    )}
    </select>
  </div>
);

export default NeighborhoodDropDown;