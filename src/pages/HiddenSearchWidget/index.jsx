import styles from './index.less';
import { SearchOutlined } from '@ant-design/icons'
function HiddenSearchWidget() {
    return (
        <div className={styles.hiddenSearchWidget}>
            <div className={styles.searchBox}>
                <input type="text" />
                <SearchOutlined />

            </div>
        </div>
    );
}

export default HiddenSearchWidget;