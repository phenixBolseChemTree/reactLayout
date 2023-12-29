import React from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'react-responsive-carousel';
import styles from './heroProducts.module.css';
import Slide from '../productCard/ProductCard';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

const HeroProducts = ({ heroProducts }) => {
  console.log('data.heroProducts', heroProducts);

  // const onChange = (index) => {
  //   console.log(index);
  // };

  // const onClickItem = (index) => {
  //   console.log(index);
  // };

  // const onClickThumb = (index) => {
  //   console.log(index);
  // };
  return (
    <div className={styles.root}>
      <div className={styles.miniWindow}>
        <Carousel
          className={styles.carousel}
          showArrows
          // onChange={onChange}
          // onClickItem={onClickItem}
          // onClickThumb={onClickThumb}
          showThumbs={3}
        >
          {heroProducts.map((product) => (
            <Slide
              id={product.id}
              colors={product.colors}
              title={product.title}
              price={product.price}
              background={product.background}
            />
          ))}
        </Carousel>
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
