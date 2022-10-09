import { Link, Outlet } from 'umi';
import 'antd/dist/antd.less'
import styles from './index.less';
export default function Layout() {

  return (
    <div className={styles.navs}>
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
      </ul>
      <Outlet />
    </div>
  );
}