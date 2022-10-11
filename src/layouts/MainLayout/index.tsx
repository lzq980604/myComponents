import { Link, Outlet } from 'umi';
import 'antd/dist/antd.less'
import styles from './index.less';
export default function Layout() {

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
          </ul>
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
