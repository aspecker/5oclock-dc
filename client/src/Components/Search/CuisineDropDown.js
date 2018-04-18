import React from "react";
import "./Search.css";

export const CuisineDropDown = props => (
  <div className="input-group">
    <select className="custom-select" id="cuisine-type">
      <option selected>Choose a cuisine type...</option>
      <option value={props.children}> {...props} </option>
    </select>
  </div>
);
