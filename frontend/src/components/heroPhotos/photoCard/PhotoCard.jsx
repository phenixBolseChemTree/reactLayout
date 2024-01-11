import React from 'react';
import styles from './photoCard.module.css';
import img1 from '../../../assets/images/Photos/photo_1.png';
import img2 from '../../../assets/images/Photos/photo_2.png';
import img3 from '../../../assets/images/Photos/photo_3.png';
import img4 from '../../../assets/images/Photos/photo_4.png';
import img5 from '../../../assets/images/Photos/photo_5.png';
import img6 from '../../../assets/images/Photos/photo_6.png';
import img7 from '../../../assets/images/Photos/photo_7.png';
import img8 from '../../../assets/images/Photos/photo_8.png';

const getPhoto = (id) => {
  if (id === 1) {
    return img1;
  }
  if (id === 2) {
    return img2;
  }
  if (id === 3) {
    return img3;
  }
  if (id === 4) {
    return img4;
  }
  if (id === 5) {
    return img5;
  }
  if (id === 6) {
    return img6;
  }
  if (id === 7) {
    return img7;
  }
  return img8;
};

const data = { id: 1, title: 'Craft Kits' };

const HeroPhotos = () => {
  console.log('PhotoCard');
  console.log(getPhoto());
  return (
    <div className={styles.root}>
      <div className={styles.photoContainer}>
        <div className={styles.imgContainer}>
          <img className={styles.img} src={getPhoto(data.id)} alt="" />
        </div>
        <div className={styles.titleContainer}>
          <p className={styles.title}>{data.title}</p>
        </div>
      </div>
    </div>

  );
};

export default HeroPhotos;
