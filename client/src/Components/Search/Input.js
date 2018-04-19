import React from "react";
import "./Search.css";


export const Input = props => (
  <div className="form-group bar-search-input">
    <input value={props.search}
        key={props.id}
        onChange={props.handleInputChange}
        name={props.name}
        type="text"
        className="form-control"
        placeholder="Find a Bar"
        id={props.search} />
  </div>
);
