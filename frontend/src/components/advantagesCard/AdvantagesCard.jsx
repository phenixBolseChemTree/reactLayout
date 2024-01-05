import React from 'react';
import PropTypes from 'prop-types';
import styles from './advantagesCard.module.css';
import img1 from '../../assets/images/advantages/advantage-1.png';
import img2 from '../../assets/images/advantages/advantage-2.png';
import img3 from '../../assets/images/advantages/advantage-3.png';

const AdvantagesCard = ({ id, title, description }) => {
  console.log('title', title);
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

  const titleSplit = title.split('\n');
  console.log('titleSplit: ', titleSplit);

  return (
    <div className={styles.mainRoot}>
      <div className={styles.root}>
        <img className={styles.img} src={resolveImage()} alt="" />
        <div className={styles.text}>
          <p className={styles.title}>
            {titleSplit.length > 1 ? titleSplit[0] : null}
            <br />
            {titleSplit.length > 1 ? titleSplit[1] : null}
          </p>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </div>
  );
};

AdvantagesCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default AdvantagesCard;
