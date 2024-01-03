import React from 'react';
import PropTypes from 'prop-types';
import styles from './hero-categories.module.css';
import Category from './category/Category';

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
