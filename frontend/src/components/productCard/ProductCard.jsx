import React from 'react';
import PropTypes from 'prop-types';
import like from '../../assets/images/heroProducts/like.svg';
import chear from '../../assets/images/heroProducts/chear.png';
import lamp from '../../assets/images/heroProducts/lamp.png';
import armchear from '../../assets/images/heroProducts/armchear.png';
import pillow from '../../assets/images/heroProducts/pillow.png';
import styles from './product-card.module.css';

const getProduct = (id) => {
  if (id === 1) {
    return chear;
  }
  if (id === 2) {
    return lamp;
  }
  if (id === 3) {
    return armchear;
  }
  return pillow;
};

const Slide = ({
  id, colors, title, price, background,
}) => (
  <div style={{ background }} className={styles.productCard}>
    <div className={styles.containerImg}>
      <img src={getProduct(id)} alt="" />
    </div>
    <div className={styles.colorContainer}>
      <p className={styles.colorText}>Colours</p>
      <div className={styles.colorPutContainer}>
        {colors.map((color) => (
          <div className={styles.colorPut} style={{ background: color }} />
        )) }
      </div>
    </div>
    <p className={styles.title}>{title}</p>

    <p className={styles.price}>
      {price}
      {' '}
      $

    </p>
    <button type="button" className={styles.cardLikeBtn}>
      <div className={styles.cardLike}>
        <img src={like} alt="" />
      </div>
    </button>
  </div>
);

Slide.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  colors: PropTypes.arrayOf.isRequired,
  background: PropTypes.string.isRequired,
};

export default Slide;
