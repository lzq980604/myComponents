// 通用组件合并className
export const getComClassName = (comClassName: string, externalClassName?: any) => {
    let classNames = [comClassName];
    Array.isArray(externalClassName) ? (classNames = classNames.concat(externalClassName)) : classNames.push(externalClassName);
    return classNames.join(' ');
};