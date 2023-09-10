import { useState, useEffect } from "react";
type Props = {
    target?: string;
    onChange?: ComFn;
}

const useObserver = (props: Props) => {
    const { target = 'body', onChange } = props

    const [isView, setIsView] = useState(false)
    const io = new IntersectionObserver((dom) => {
        const view = ![...dom][0]?.isIntersecting;
        setIsView(view)
        onChange && onChange()
    }, {})

    useEffect(() => {
        const dom = document.querySelector(target)
        console.log(dom);

        dom && io.observe(dom)
    }, [document.querySelector(target)])

    return {
        isView
    }
}

export default useObserver;
