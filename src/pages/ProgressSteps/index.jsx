import './index.less'
import { useState, useEffect } from 'react'
import { Button } from 'antd'
function ProgressSteps() {
    const [num, setNum] = useState(0)

    const stepList = [
        { value: "活动未开始" },
        { value: "活动已开始" },
        { value: "活动进行中" },
        { value: "活动已结束" },
    ]
    const onNextHandler = () => {
        if (num > stepList.length - 1) {
            return;
        }
        setNum(num + 1)
    }
    const onPrevHandler = () => {
        if (num <= 0) {
            return;
        }
        setNum(num - 1)
    }

    const lineWidth = () => {
        if (num == 0) return 0
        const length = Math.floor(100 / stepList.length) + 5
        console.log(length);
        if (num * length > 100) {
            return 100
        } else {
            return num * length
        }
    }
    // useEffect(()=>{

    // },[num])
    return (
        <div className="progressStepsBox">
            <div className="stepBox">
                {stepList.map((v, i) => {
                    return <div className={`item ${num >= i ? 'active' : ''}`} key={i}>
                        {v.value}
                    </div>
                })}
                <div className="colorLine" style={{ width: `${lineWidth()}%` }}></div>
            </div>
            <div className="btnBox">
                <Button type="primary" shape="round" size='large' disabled={num == 0} onClick={() => { onPrevHandler() }}>
                    上一步
                </Button>
                <Button type="primary" shape="round" size='large' disabled={num == stepList.length - 1} onClick={() => { onNextHandler() }}>
                    下一步
                </Button>
            </div>
        </div>
    );
}

export default ProgressSteps;