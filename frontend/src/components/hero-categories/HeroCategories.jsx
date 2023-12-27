import React from 'react';
import PropTypes from 'prop-types';
import styles from './hero-categories.module.css';
import img1 from '../../assets/images/block1/block1-1.png';
import img2 from '../../assets/images/block1/block1-2.png';
import img3 from '../../assets/images/block1/block1-3.png';

const resolveImage = (id) => {
  if (id === 1) {
    return img1;
  }

  if (id === 2) {
    return img2;
  }

  return img3;
};

function Category({ id, title }) {
  return (
    <div className={styles.card}>
      <img className={styles.cardImg} src={resolveImage(id)} alt="" />
      <p className={styles.cardText}>{title}</p>
    </div>
  );
}

Category.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

function HeroCategories({ heroCategories }) {
  return (
    <div className={styles.root}>
      <div className={styles.cardContainer}>
        {heroCategories.map((category) => <Category id={category.id} title={category.title} />)}
      </div>
    </div>
  );
}

HeroCategories.propTypes = {
  heroCategories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default HeroCategories;
