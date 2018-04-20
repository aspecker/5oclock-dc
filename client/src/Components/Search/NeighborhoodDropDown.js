import React from "react";
import "./Search.css";

export const NeighborhoodDropDown = props => (
  <div className="input-group">
    <select className="custom-select" id="hood-name">
      <option selected>{props.children}</option>
        {props.neighborhoods.map(neighborhood =>
      <option value={neighborhood} key={neighborhood}>{neighborhood}</option>
    )}
    </select>
  </div>
);
