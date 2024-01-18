import React from 'react';
import styles from './sugestion.module.css';
import arrowImg from '../../assets/images/sugesstion/Arrow_right.svg';

const Sugestion = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('bebra12', new Date());
  };

  console.log('123');
  return (
    <div className={styles.root}>
      <div className={styles.sugestionContainer}>
        <div className={styles.text}>
          <div className={styles.title}>Yes!</div>
          <div className={styles.discription}>
            Send me exclusive offers, unique gift ideas, and personalized
            tips for shopping and selling on Commerce.
          </div>
        </div>
        <form onSubmit={handleSubmit} className={styles.formMobile}>
          <div className={styles.inputContainer}>
            <input className={styles.input} type="text" placeholder="Drop your Email" />
          </div>
          <button className={styles.inputButton} type="submit">
            <div className={styles.buttonContent}>
              <p className={styles.buttonTitle}>Drop your Email</p>
              <img className={styles.imgArrow} src={arrowImg} alt="" />
            </div>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Sugestion;
