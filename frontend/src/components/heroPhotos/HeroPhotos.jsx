import React from 'react';
import PropTypes from 'prop-types';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import styles from './heroPhotos.module.css';
import PhotoCard from './photoCard/PhotoCard';

const HeroPhotos = ({ photoData }) => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1320,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 899,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
          dotsClass: 'slick-dots',

        },
      },
    ],
  };
  console.log('HeroPhotos');
  return (
    <div className={styles.root}>
      <div className={styles.sliderContainer}>
        <Slider
          className={styles.customSlider}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...settings}
        >
          {photoData.map((photo) => (
            <PhotoCard
          // key={photo.id}
              id={photo.id}
              title={photo.title}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

HeroPhotos.propTypes = {
  photoData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default HeroPhotos;
