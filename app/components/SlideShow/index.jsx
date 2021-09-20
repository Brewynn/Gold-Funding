import React, {useState, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import Container from '../../asset/styles/components/SlideShow';
import Pagination from './Pagination';
import Buttons from './Buttons';
import Title from './Title';

const SlideShow = ({items, timer}) => {
  const [interval, addInterval] = useState(null);
  const [paginationIndex, setPaginationIndex] = useState(0);
  const {title, subTitle, imageName} = items[paginationIndex];
  const IMAGES_SIZE = items.length - 1;
  const titleRef = useRef(null);

  useEffect(() => {
    addInterval(autoplay());
    titleAnimation('next');

    return () => stopPlay();
  }, []);

  /**
   * Autoplay slideshow
   *
   * @return {Number}
   *
   */
  const autoplay = () =>
    setInterval(() =>
      nextImage(false),
    (timer * 1000));

  /**
   * Stop slideshow
   *
   * @param {Boolean} stopAnimation
   *
   */
  const stopPlay = (stopAnimation = true) => {
    if (stopAnimation) {
      clearInterval(interval);
    }
  };

  /**
   * Add animation for each title
   *
   * @param {String} option
   *
   */
  const titleAnimation = (option) => {
    const title = titleRef.current;
    const translateY = (option === 'next') ?
      'translateY(-100px)' : 'translateY(100px)';

    title.animate([
      {transform: translateY, opacity: 0},
      {transform: 'translateY(0)', opacity: 1},
    ],
    {duration: 800},
    );
  };

  /**
   * Change to the Next image
   *
   * @param {Boolean} stopAnimation
   *
   */
  const nextImage = (stopAnimation) => {
    setPaginationIndex((paginationIndex) => (
      (paginationIndex === IMAGES_SIZE) ? 0 : (paginationIndex + 1)),
    );

    stopPlay(stopAnimation);
    titleAnimation('next');
  };

  /**
   * Change to the previous image
   *
   * @param {Boolean} stopAnimation
   *
   */
  const prevImage = () => {
    setPaginationIndex((paginationIndex) => (
      (paginationIndex === 0) ? IMAGES_SIZE : (paginationIndex - 1)),
    );

    stopPlay();
    titleAnimation('prev');
  };

  /**
   * Change image on the pagination buttons
   *
   * @param {Number} index
   *
   */
  const pagination = (index) => {
    if (index !== paginationIndex) {
      stopPlay();
      setPaginationIndex(index);
      titleAnimation((paginationIndex > index) ? 'prev' : 'next');
    }
  };

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
};

SlideShow.propTypes = {
  items: PropTypes.array.isRequired,
  timer: PropTypes.number.isRequired,
};

export default SlideShow;
