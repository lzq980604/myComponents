import styles from './index.less';
import { useState, useEffect } from 'react'
import { getComClassName } from '@/utils';
import useObserver from '@/hooks/useObserver/index'


function UseObserver() {
    const classNames = [styles.useObserver]
    const { isView } = useObserver({ target: '#line' })

    return (
        <div className={classNames.join(',')}>
            <div className={styles.block}></div>
            <div id='line'></div>
            <div className={styles.block}></div>
            <div className={isView ? styles.red : styles.pink}></div>
        </div>
    );
}

export default UseObserver;