import React from "react";

const Hero = props => (
  <div style={{ backgroundImage: `url(${props.backgroundImage})` }}>
    {props.children}
  </div>
);

export default Hero;
