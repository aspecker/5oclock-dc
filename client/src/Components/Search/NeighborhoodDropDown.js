import React from "react";
import "./Search.css";

export const NeighborhoodDropDown = props => (
  <div className="input-group">
    <select className="custom-select" id="hood-name">
      <option selected>Choose a cuisine type...</option>
      <option value={props.children}> {props.children} </option>
    </select>
  </div>
);
