import React from 'react';
import PropTypes from 'prop-types';
import styles from './advantagesCard.module.css';
import img1 from '../../assets/images/advantages/advantage-1.png';
import img2 from '../../assets/images/advantages/advantage-2.png';
import img3 from '../../assets/images/advantages/advantage-3.png';

const AdvantagesCard = ({ id }) => {
  const resolveImage = () => {
    if (id === 1) {
      return img1;
    }
    if (id === 2) {
      return img2;
    }
    if (id === 3) {
      return img3;
    }
    return img1;
  };
  console.log(123);

  return (
    <div className={styles.root}>
      {/* <div className={styles.imgContainer}> */}
      <img className={styles.img} src={resolveImage()} alt="" />
      {/* </div> */}
      <div className={styles.text}>
        <p className={styles.title}>
          A community
          <br />
          doing good
        </p>
        <p className={styles.description}>Commerce is a global online marketplace, where people.</p>
      </div>
    </div>
  );
};

AdvantagesCard.propTypes = {
  id: PropTypes.number.isRequired,
  // title: PropTypes.string.isRequired,
  // description: PropTypes.string.isRequired,
};

export default AdvantagesCard;
