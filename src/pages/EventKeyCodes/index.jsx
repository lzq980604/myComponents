import styles from './index.less';
import { useState, useEffect } from 'react'
function EventKeyCodes() {
    const [codeKey, setCodeKey] = useState(null)
    const record = (e) => {
        setCodeKey(e)
    }
    useEffect(() => {
        window.addEventListener('keydown', record)
        return () => {
            window.removeEventListener('keydown', record)
        }
    }, [])
    return (

        <div className={styles.eventKeyCodesBox}>
            {codeKey ?
                <div className={styles.hasBox}>
                    <div className={styles.item}>
                        <p className={styles.title}>
                            event.key
                        </p>
                        <div className={styles.content}>
                            {codeKey.key}
                        </div>
                    </div>
                    <div className={styles.item}>
                        <p className={styles.title}>
                            event.keyCode
                        </p>
                        <div className={styles.content}>
                            {codeKey.code}
                        </div>
                    </div>
                    <div className={styles.item}>
                        <p className={styles.title}>
                            event.code
                        </p>
                        <div className={styles.content}>
                            {codeKey.keyCode}
                        </div>
                    </div>
                </div>
                :
                <div className={styles.empty}>Press any key to get the keyCode</div>

            }
            {/* <div className={styles.empty}>Press any key to get the keyCode</div> */}

        </div>
    );
}

export default EventKeyCodes;