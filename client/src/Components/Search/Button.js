import React from "react";
import "./Search.css";


export const Button = props => (
  <button {...props} className="btn">
    {props.children}
  </button>
);
