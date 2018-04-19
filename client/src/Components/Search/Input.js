import React from "react";
import "./Search.css";


export const Input = props => (
  <div className="form-group">
    <input value={props.search}
        onChange={props.handleInputChange}
        name={props.search}
        list={props.search}
        type="text"
        className="form-control"
        placeholder="Find a Bar"
        id={props.search} />
  </div>
);
