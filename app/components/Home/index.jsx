import React from 'react';
import PropTypes from 'prop-types';
import Container from '../../asset/styles/components/Home';
import SlideShow from '../SlideShow';
import {dataSlideShow} from './data';

const Home = ({innerRef}) => (
  <Container ref={innerRef}>
    <div className="home">
      <SlideShow items={dataSlideShow} timer={5} />
    </div>
  </Container>
);

Home.propTypes = {
  innerRef: PropTypes.object.isRequired,
};

export default Home;
