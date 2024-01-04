import React from 'react';
import PropTypes from 'prop-types';
import styles from './heroAdvantages.module.css';
import AdvantagesCard from '../advantagesCard/AdvantagesCard';

const HeroAdvantages = ({ advantages }) => {
  console.log(123);
  return (
    <div className={styles.root}>

      {advantages.map((product) => (
        <div key={product.id} className={styles.card}>
          <AdvantagesCard
            id={advantages.id}
            title={advantages.title}
            description={advantages.description}
          />
        </div>
      ))}
      <div className={styles.card}>
        123
      </div>
    </div>
  );
};

HeroAdvantages.propTypes = {
  advantages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
export default HeroAdvantages;
