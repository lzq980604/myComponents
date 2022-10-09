import './index.less'
import { useState } from 'react';

function ExpandingCards() {
    const arr = [1, 2, 3, 4]
    const [num, setNum] = useState(0)
    const onChange = (index) => {
        setNum(index)
    }
    return (
        <div className="expandingCardsBox">
            {arr.map((v, i) => {
                return <div className={`item ${num == i ? 'active' : ''}`} key={i} onClick={() => { onChange(i) }} style={{ backgroundImage: `url(${require('../../assets/yay.jpg')})` }}>
                </div>
            })}
        </div>
    );
}

export default ExpandingCards;