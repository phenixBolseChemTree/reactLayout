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
          <div className={styles.inputContainerMobile}>
            <input className={styles.inputMobile} type="text" placeholder="Drop your Email" />
          </div>
          <button className={styles.inputButtonMobile} type="submit">
            <div className={styles.buttonContentMobile}>
              <p className={styles.buttonTitleMobile}>Drop your Email</p>
              <img className={styles.imgArrow} src={arrowImg} alt="" />
            </div>
          </button>
        </form>
        <form onSubmit={handleSubmit} className={styles.formDesktop}>
          <div className={styles.inputContainerDesktop}>
            <input className={styles.inputDesktop} type="text" placeholder="Drop your Email" />
          </div>
          <button className={styles.inputButtonDesktop} type="submit">
            <div className={styles.buttonContentDesktop}>
              <p className={styles.buttonTitleDesktop}>Subscribe</p>
              <img className={styles.imgArrow} src={arrowImg} alt="" />
            </div>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Sugestion;
