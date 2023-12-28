import React from 'react';
import PropTypes from 'prop-types';
import styles from './heroProducts.module.css';
import Slide from './slide/Slide';

const HeroProducts = ({ heroProducts }) => {
  console.log('data.heroProducts', heroProducts);
  // console.log('data1', data[0]);
  // сначала отоброжаем 1 карточнку а потомдобавляем обортку и map
  return (
    <div className={styles.root}>
      {heroProducts.map((product) => (
        <Slide
          id={product.id}
          colors={product.colors}
          title={product.title}
          price={product.price}
          background={product.background}
        />
      ))}
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
