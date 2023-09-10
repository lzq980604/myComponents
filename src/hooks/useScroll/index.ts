import { useState, useEffect } from "react";

function UseScroll(callBack: ComFn) {
    const [isDown, setIsdown] = useState(false)
    const [scrollTop, setScrollTop] = useState(0)

    useEffect(() => {
        setMouseScrollEvent()
    }, [])

    const setMouseScrollEvent = () => {
        let beforeScrollTop = (document.documentElement ?? document.body)?.scrollTop
        window.addEventListener(
            'scroll',
            function () {
                let afterScrollTop = (document.documentElement ?? document.body)?.scrollTop
                let delta = afterScrollTop - beforeScrollTop
                setScrollTop(afterScrollTop)
                if (delta === 0) return false
                setIsdown(delta > 0)
                callBack(delta > 0)
                beforeScrollTop = afterScrollTop
            },
            false
        )

    }
    return {
        isDown,
        scrollTop
    }
        ;
}

export default UseScroll;