import React from "react";
import "./Search.css";

export const Dropdown = props => (
  <div className="input-group">
    <select className="custom-select" id="cuisine-type">
      <option selected>{props.children}</option>
      <option value={props.children} key={props.children}>{props.children}</option>
    </select>
  </div>
);
