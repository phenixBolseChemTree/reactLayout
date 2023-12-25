import logo from '../../assets/images/header/logo.svg'
import user from '../../assets/images/header/user.svg'
import bag from '../../assets/images/header/bag.svg'
import sort from '../../assets/images/header/sort.svg'
import search from '../../assets/images/header/search.svg'

import styles from './header.module.css'

const Header = () => {
return (
  <header className={styles.root}>
    <div className={styles.line_1}>
      <img className={styles.logo} src={logo} alt="" />
      <div className={styles.pages}>
        <a href='#' className={styles.headerLink}>
          <img className={styles.headerIcon} src={user} alt="" />
        </a>
        <a href='#' className={styles.headerLink}>
          <img className={styles.headerIcon} src={bag} alt="" />
          <span className={styles.counter}>16</span>
        </a>
      </div>
    </div>
    <div className={styles.line_2}>
      <button className={styles.btnBurger}><img className={styles.imgSort} src={sort} alt="" /></button>
      <div className={styles.search}>
        <input className={styles.searchInput} placeholder='Search anything' type="text" />
        <button className={styles.searchBtn} type='button'>
          <img className={styles.searchImg} src={search} alt="" />
          </button>
      </div>
    </div>
  </header>
)
}

export default Header;
