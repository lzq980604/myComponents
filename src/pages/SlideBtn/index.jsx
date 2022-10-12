import styles from './index.less'
import { useState, useRef } from 'react'
function SlideBtn() {
    const [flag, setflag] = useState(false)
    const rotateRef = useRef(null)
    const boxRotate = () => {
        setflag(!flag)
        console.log(rotateRef);
        rotateRef.current.className = `${styles.btnBox} ${styles.rotateWrap}`
        setTimeout(() => {
            rotateRef.current.className = `${styles.btnBox}`
        }, 550);
    }
    return (
        <div className={`${styles.slideBtnBox} `} style={{ '--main-bg': flag ? 'black' : '#fff' }}>
            <div className={`${styles.btnBox}`}
                style={{
                    '--groove-left': `calc(${!flag ? 0 * 50 : 1 * 50}% + 12px)`,
                    '--wraper-rotate': `${!flag ? -8 : 8}deg`,
                }}
                ref={rotateRef}
            >
                <div className={`${!flag ? `${styles.active} ${styles.btn}` : styles.btn}`} onClick={() => { boxRotate() }}>按钮1</div>
                <div className={`${flag ? `${styles.active} ${styles.btn}` : styles.btn}`} onClick={() => { boxRotate() }}>按钮2</div>
            </div>
        </div>
    );
}

export default SlideBtn;