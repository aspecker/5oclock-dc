import React from "react";
import "./Search.css";

export const Button = props => (
  <button {...props} onClick={props.handleClick} className="btn">
    {props.children}
  </button>
);
