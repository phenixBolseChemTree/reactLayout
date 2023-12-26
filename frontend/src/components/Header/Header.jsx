/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from '../../assets/images/header/logo.svg'
import user from '../../assets/images/header/user.svg'
import bag from '../../assets/images/header/bag.svg'
import sort from '../../assets/images/header/sort.svg'
import search from '../../assets/images/header/search.svg'
import down from '../../assets/images/header/down.svg'

import styles from './header.module.css'

const Header = () => {
return (
  <header className={styles.root}>
    <div className={styles.line_1}>
      <img className={styles.logo} src={logo} alt="" />
      <div className={styles.search}>
        <div className={styles.categories}><button className={styles.categoriesBtn}>All categories</button><img src={down} alt="" /></div>
        <input className={styles.searchInput} placeholder='Search anything' type="text" />
        <button className={styles.searchBtn} type='button'>
          <img className={styles.searchDown} src={search} alt="" />
          </button>
      </div>
      <div className={styles.pages}>
        <button className={styles.helpBtn}>Help</button>
        <a href='#' className={styles.headerLink}>
          <img className={styles.headerIcon} src={user} alt="" />
          <p className={styles.pagesText}>Account</p>
        </a>
        <a href='#' className={styles.headerLink}>
          <img className={styles.headerIcon} src={bag} alt="" />
          <p className={styles.pagesText} >Shoping</p>
          <span className={styles.counter}>16</span>
        </a>
      </div>
    </div>
    <div className={styles.line_2}>
      <button className={styles.burgerBtn}><img className={styles.imgSort} src={sort} alt="" /></button>
      <div className={styles.search}>
        <div className={styles.categories}><button className={styles.categoriesBtn}>All categories</button><img src={down} alt="" /></div>
        <input className={styles.searchInput} placeholder='Search anything' type="text" />
        <button className={styles.searchBtn} type='button'>
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
  </header>
)
}

export default Header;
