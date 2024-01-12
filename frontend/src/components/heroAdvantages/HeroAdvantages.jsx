import React from 'react';
import PropTypes from 'prop-types';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import styles from './heroAdvantages.module.css';
import AdvantagesCard from '../advantagesCard/AdvantagesCard';

const HeroAdvantages = ({ advantages }) => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1320,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 899,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          dotsClass: 'slick-dots',
        },
      },
    ],
  };

  return (
    <div className={styles.root}>
      <div className={styles.sliderContainer}>
        <Slider
          className={styles.customSlider}
          {...settings}
        >
          {advantages.map((advantage) => (
            <div key={advantage.id} className={styles.card}>
              <AdvantagesCard
                id={advantage.id}
                title={advantage.title}
                description={advantage.description}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

HeroAdvantages.propTypes = {
  advantages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
export default HeroAdvantages;
