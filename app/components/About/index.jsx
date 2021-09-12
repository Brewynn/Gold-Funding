import React from 'react';
import Container from './Style';

const AboutUs = ({ innerRef }) => (
  <Container>
    <div className="about" ref={innerRef}>
      <h1>About Us</h1>
    </div>
  </Container>
);

export default AboutUs;
