import React, { useState, useEffect, useRef } from 'react';
import Container from '../../asset/styles/components/SlideShow';
import Pagination from './Pagination';
import Buttons from './Buttons';
import Title from './Title';

const SlideShow = ({ items, timer = 5 }) => {
  const [interval, addInterval] = useState(null);
  const [paginationIndex, setPaginationIndex] = useState(0);
  const { title, subTitle, imageName } = items[paginationIndex];
  const IMAGES_SIZE = items.length - 1;
  const titleRef = useRef(null);

  useEffect(() => {
    addInterval(autoplay());
    titleAnimation('next');

    return () => stopPlay();
  }, []);

  const autoplay = () =>
    setInterval(() =>
      nextImage(false),
      (timer * 1000));

  const stopPlay = (stopAnimation = true) => {
    if (stopAnimation) {
      clearInterval(interval);
    }
  }

  const titleAnimation = (option) => {
    const title = titleRef.current;
    const translateY = (option === 'next')
      ? 'translateY(-100px)'
      : 'translateY(100px)';

    title.animate([
      { transform: translateY, opacity: 0 },
      { transform: 'translateY(0)', opacity: 1 }],
      { duration: 800 }
    );
  }

  const nextImage = (stopAnimation) => {
    setPaginationIndex(paginationIndex => (
      (paginationIndex === IMAGES_SIZE)
        ? 0
        : (paginationIndex + 1)
      )
    );

    stopPlay(stopAnimation);
    titleAnimation('next');
  }

  const prevImage = () => {
    setPaginationIndex(paginationIndex => (
      (paginationIndex === 0)
        ? IMAGES_SIZE
        : (paginationIndex - 1)
      )
    );

    stopPlay();
    titleAnimation('prev');
  }

  const pagination = index => {
    if (index !== paginationIndex) {
      stopPlay();
      setPaginationIndex(index);
      titleAnimation(
        (paginationIndex > index)
          ? 'prev'
          : 'next'
      );
    }
  }

  return (
    <Container imageName={imageName} paginationIndex={paginationIndex}>
      <div className="slideshow">
        <header className="slideshow__header">
          <Title
            title={title}
            subTitle={subTitle}
            innerRef={titleRef}
          />
          <Buttons
            prevImage={prevImage}
            nextImage={nextImage}
          />
        </header>
        <Pagination
          items={items}
          onClick={pagination}
        />
      </div>
    </Container>
  );
}

export default SlideShow;
