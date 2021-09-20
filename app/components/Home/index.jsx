import React from 'react';
import Container from '../../asset/styles/components/Home';
import SlideShow from '../SlideShow';
import { dataSlideShow } from './data';

const Home = ({ innerRef }) =>  (
  <Container ref={innerRef}>
    <div className="home">
      <SlideShow items={dataSlideShow} />
    </div>
  </Container>
);

export default Home;
