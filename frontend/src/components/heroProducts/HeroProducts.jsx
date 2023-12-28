import React from 'react';
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

export default HeroProducts;
