import React from 'react';
import Container from '../../asset/styles/components/About';
import { aboutData } from './data';

const AboutUs = ({ innerRef }) => (
  <Container>
    <div className="about" ref={innerRef}>
      <div className="about__section">
        <h1>about</h1>
      </div>
      {aboutData.map(({ title, text, icon }, index) => (
        <div className="about__items" key={index}>
          <div className="about__item">
            <div className="about__item-icon">
              <span className={`${icon}`}></span>
            </div>
            <div>
              <div className="about__item-title">
                <span>{title}</span>
              </div>
              <div  className="about__item-text">
                <span>{text}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </Container>
);

export default AboutUs;
