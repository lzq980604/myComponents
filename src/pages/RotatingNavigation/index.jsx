import './index.less'
import { useState } from 'react'
function RotatingNavigation() {
    const [flag, setFlag] = useState(false)
    const list = ['list1', 'list2', 'list3']
    return (
        <div className="RotatingNavigationBox">
            <div className="iconBox">
                <div className="icon" onClick={() => { setFlag(!flag) }}>
                    {flag ? '×' : '✓'}
                </div>
            </div>
            <div className={`contentBox ${flag ? 'active' : ''}`}>
                <img src={require('../../assets/yay.jpg')} alt="" />
            </div>
            <div className="list" style={{ opacity: flag ? '1' : '0' }}>
                {list.map((v, i) => {
                    return <p key={i}>{v}</p>
                })}
            </div>
        </div>
    );
}

export default RotatingNavigation;