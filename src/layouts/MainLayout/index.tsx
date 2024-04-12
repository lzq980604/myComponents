import { Link, Outlet } from 'umi';
import 'antd/dist/antd.less'
import styles from './index.less';
import SakanaWidget from 'sakana-widget';
import { useState, useEffect } from 'react'
import menus from './menus';
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
            {
              menus.map(item=>{
                return <li key={item.path} >
                <Link to={item.path}>{item.title}</Link>
              </li>
              })
            }
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
