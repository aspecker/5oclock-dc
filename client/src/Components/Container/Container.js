import React from "react";

const Container = props =>
  <div align='center' className={`container${props.fluid ? "-fluid" : ""}`} {...props} />;

export default Container;
