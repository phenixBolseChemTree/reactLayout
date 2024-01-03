/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
// import { useMediaQuery } from 'react-responsive';
import styles from './heroProducts.module.css';
import ProductCard from '../productCard/ProductCard';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';

const HeroProducts = ({ heroProducts }) => {
  // const isMediumScreen = useMediaQuery({ maxWidth: 900 });
  // const isMaxScreen = useMediaQuery({ maxWidth: 1320 });
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
          {heroProducts.map((product) => (
            <div className={styles.card}>
              <ProductCard
                id={product.id}
                colors={product.colors}
                title={product.title}
                price={product.price}
                background={product.background}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

HeroProducts.propTypes = {
  heroProducts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      colors: PropTypes.arrayOf.isRequired,
      background: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default HeroProducts;
