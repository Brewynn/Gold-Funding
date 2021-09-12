import React from 'react';
import Container from './Style';
import SlideShow from '../SlideShow';
import { dataSlideShow } from './data';

const Home = ({ innerRef }) =>  (
  <Container>
    <div ref={innerRef} className="home">
      <SlideShow items={dataSlideShow} />
    </div>
  </Container>
);

export default Home;