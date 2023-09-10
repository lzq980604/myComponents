import { Link, Outlet } from 'umi';
import 'antd/dist/antd.less'
import styles from './index.less';
import SakanaWidget from 'sakana-widget';
import { useState, useEffect } from 'react'
export default function Layout() {
  useEffect(() => {
    new SakanaWidget({ controls: false, rotate: 0 }).mount('#sakana-widget');
  }, [])
  return (
    <div className={styles.navs}>
      <header>
        十五字十五字十五字十五字十五字
      </header>
      <div className={styles.content}>
        <div className={styles.left}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/expandingCards">expandingCards</Link>
            </li>
            <li>
              <Link to="/progressSteps">progressSteps</Link>
            </li>
            <li>
              <Link to="/rotatingNavigation">rotatingNavigation</Link>
            </li>
            <li>
              <Link to="/hiddenSearchWidget">hiddenSearchWidget</Link>
            </li>
            <li>
              <Link to="/eventKeyCodes">eventKeyCodes</Link>
            </li>
            <li>
              <Link to="/slideBtn">slideBtn</Link>
            </li>
            <li>
              <Link to="/detailTable">detailTable</Link>
            </li>
            <li>
              <Link to="/myCountdown">myCountdown</Link>
            </li>
            <li>
              <Link to="/rainbowScrollText">rainbowScrollText</Link>
            </li>
            <li>
              <Link to="/blackAndWhite">BlackAndWhite</Link>
            </li>
            <li>
              <Link to="/useObserver">useObserver</Link>
            </li>
          </ul>
          <div className={styles.ponyoyo}>
            <div id="sakana-widget"></div>
          </div>
        </div>
        <div className={styles.right}>
          <Outlet />
        </div>
      </div>
      <footer>
        十五字十五字十五字十五字十五字
      </footer>
    </div>
  );
}
