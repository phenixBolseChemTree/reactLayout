import React from 'react';
import PropTypes from 'prop-types';
import styles from './category.module.css';
import img1 from '../../../assets/images/block1/block1-1.png';
import img2 from '../../../assets/images/block1/block1-2.png';
import img3 from '../../../assets/images/block1/block1-3.png';

const resolveImage = (id) => {
  if (id === 1) {
    return img1;
  }

  if (id === 2) {
    return img2;
  }

  return img3;
};

const Category = ({ id, title }) => {
  console.log('category');
  return (
    <div className={styles.card}>
      <img className={styles.cardImg} src={resolveImage(id)} alt="" />
      <p className={styles.cardText}>{title}</p>
    </div>
  );
};

Category.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default Category;
