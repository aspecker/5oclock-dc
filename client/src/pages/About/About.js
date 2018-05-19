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
          <strong>5 O' Clock DC</strong> started from the simple desire to enjoy good drinks with great people. As DC's restaurant scene grows rapidly, it's harder than ever to find the right happy hour. When you're spoiled for choice, we make choosing the right one fast and easy. Find your happy place with <strong>5 O' Clock DC</strong>.
        </p>
        <p> Love our site? Have feedback? Email us at <a id='emailUs' href='mailto:5oclockdc@gmail.com'>5oclockdc@gmail.com</a></p>
        </div>
    </Col>
  </Row>
);

export default About;
