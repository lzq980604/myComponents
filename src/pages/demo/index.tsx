import styles from './index.less';
import { useState, useEffect } from 'react'
function demo() {
const classNames = [styles.demo]
return (
<div className={classNames.join(',')}>

</div>
);
}

export default demo;