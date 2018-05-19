import React from "react";

const Hero = props => (
  <section className="hero is-medium is-primary is-bold" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
    <div className="hero-body">
      <div className="container has-text-centered" >
        {props.children}
      </div>
    </div>
  </section>
);

export default Hero;
