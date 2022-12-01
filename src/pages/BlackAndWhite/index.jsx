import styles from './index.less'
function BlackAndWhite() {
    return (
        <div className={styles.BlackWhiteBox}>
            <img src={require('../../assets/yay.jpg')} alt="" />
        </div>
    );
}

export default BlackAndWhite;