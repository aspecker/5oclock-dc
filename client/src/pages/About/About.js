import React from "react";
import "./About.css";
import Row from "../../Components/Row";
import Col from "../../Components/Col"


const About = props => (
  <Row className='aboutRow' align='center'>
    <Col size='sm-12'>
      <div className="about-us">
        <h2>
        About Us
        </h2>
        <p>
          <strong>5 O' Clock DC</strong> started from the simple desire to enjoy drinks with good people. The creators of 5 O' Clock built something they wanted to use, and wanted to share it with other DC locals. We built 5 O'Clock DC with the consideration that happy hour is often an elusive and missed opportunity, but we’ve changed that. We take advantage of DC's growing restaurant scene and find you the best happy hours. Find your happy place with us.
        </p>
        </div>
    </Col>
  </Row>
);

export default About;
