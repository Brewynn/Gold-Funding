import React from 'react';
import PropTypes from 'prop-types';
import Container from '../../asset/styles/components/About';
import {aboutData} from './data';

const AboutUs = ({innerRef}) => (
  <Container ref={innerRef}>
    <div className="about">
      <div className="about__section">
        <h1>about</h1>
      </div>

      <div className="about__items">
        {aboutData.map(({title, text, icon}, index) => (
          <div className="about__item" key={index}>
            <div className="about__item-title">
              <span className={`about__item-icon ${icon}`}></span>
              <span>{title}</span>
            </div>
            <div>
              <div className="about__item-text">
                <span>{text}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </Container>
);

AboutUs.propTypes = {
  innerRef: PropTypes.object.isRequired,
};

export default AboutUs;
