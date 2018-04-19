import React from "react";
import "./Search.css";

export const Dropdown = props => (
  <div className="input-group">
    <select className="custom-select" id="cuisine-type">
      <option selected>{props.children}</option>
        {props.cuisines.map(cuisine =>
      <option value={cuisine} key={cuisine}>{cuisine}</option>
      )}
    </select>
  </div>
);
