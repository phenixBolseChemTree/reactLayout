import React from 'react';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import styles from './category.module.css';
import img1Small from '../../../assets/images/block1/block1-1.png';
import img2Small from '../../../assets/images/block1/block1-2.png';
import img3Small from '../../../assets/images/block1/block1-3.png';

import img1Medium from '../../../assets/images/block1/block1-1-medium.png';
import img2Medium from '../../../assets/images/block1/block1-2-medium.png';
import img3Medium from '../../../assets/images/block1/block1-3-medium.png';

import img1Max from '../../../assets/images/block1/block1-1-max.png';
import img2Max from '../../../assets/images/block1/block1-2-max.png';
import img3Max from '../../../assets/images/block1/block1-3-max.png';

const Category = ({ id, title }) => {
  const isMediumScreen = useMediaQuery({ maxWidth: 900 });
  const isMaxScreen = useMediaQuery({ maxWidth: 1320 });

  const resolveImage = () => {
    if (isMediumScreen) {
      if (id === 1) {
        return img1Small;
      } if (id === 2) {
        return img2Small;
      }
      return img3Small;
    } if (isMaxScreen) {
      if (id === 1) {
        return img1Medium;
      } if (id === 2) {
        return img2Medium;
      }
      return img3Medium;
    }
    if (id === 1) {
      return img1Max;
    } if (id === 2) {
      return img2Max;
    }
    return img3Max;
  };

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
