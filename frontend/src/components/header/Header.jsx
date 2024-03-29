import React from 'react';
import logo from '../../assets/images/header/logo.svg';
import user from '../../assets/images/header/user.svg';
import bag from '../../assets/images/header/bag.svg';
import sort from '../../assets/images/header/sort.svg';
import search from '../../assets/images/header/search.svg';
import down from '../../assets/images/header/down.svg';

import styles from './header.module.css';

const Header = () => (
  <header className={styles.root}>
    <div className={styles.linesContainer}>
      <div className={styles.line_1}>
        <img className={styles.logo} src={logo} alt="" />
        <div className={styles.search}>
          <button type="button" className={styles.categoriesBtn}>
            <p className={styles.categories}>All categories</p>
            <img src={down} alt="" />
          </button>
          <input className={styles.searchInput} placeholder="Search anything" type="text" />
          <button className={styles.searchBtn} type="button">
            <img className={styles.searchDown} src={search} alt="" />
          </button>
        </div>
        <div className={styles.pagesContainer}>
          <div className={styles.pages}>
            <button type="button" className={styles.helpBtn}>Help</button>
            <a href="#" className={styles.headerLink}>
              <img className={styles.headerIcon} src={user} alt="" />
              <p className={styles.pagesText}>Account</p>
            </a>
            <a href="#" className={styles.headerLink}>
              <div className={styles.headerIcon}>
                <img src={bag} alt="" />
                <span className={styles.counter}>16</span>
              </div>
              <p className={styles.pagesText}>Shoping</p>
            </a>
          </div>
        </div>

      </div>
      <div className={styles.line_2}>
        <button type="button" className={styles.burgerBtn}>
          <img className={styles.imgSort} src={sort} alt="" />
        </button>
        <div className={styles.search}>
          <button type="button" className={styles.categoriesBtn}>
            <p className={styles.categories}>All categories</p>
            <img src={down} alt="" />
          </button>
          <input className={styles.searchInput} placeholder="Search anything" type="text" />
          <button className={styles.searchBtn} type="button">
            <img className={styles.searchDown} src={search} alt="" />
          </button>
        </div>
        <div className={styles.categoriesBoard}>
          <a href="#" className={styles.categoriesText}>Jewelry & Accessories</a>
          <a href="#" className={styles.categoriesText}>Clothing & Shoes</a>
          <a href="#" className={styles.categoriesText}>Home & Living</a>
          <a href="#" className={styles.categoriesText}>Wedding & Party</a>
          <a href="#" className={styles.categoriesText}>Toys & Entertainment</a>
          <a href="#" className={styles.categoriesText}>Art & Collectibles</a>
          <a href="#" className={styles.categoriesText}>Craft Supplies & Tools</a>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
