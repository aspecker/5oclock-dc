import React from "react";
import "./Search.css";


export const Button = props => (
  <button {...props} className="btn btn-outline-secondary">
    {props.children}
  </button>
);
