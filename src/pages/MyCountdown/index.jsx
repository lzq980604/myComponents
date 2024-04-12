import React, { useState, useEffect, useRef } from 'react';
import moment from 'moment';
import styles from './index.less';

const startTime = moment();
const endTime = moment().endOf('day');

function MyCountdown(props) {
    const { callback, start = startTime, end = endTime, className, render, onChange } = props;
    const [day, setDay] = useState('0');
    const [hour, setHour] = useState('0');
    const [minute, setMinute] = useState('0');
    const [second, setSecond] = useState('0');
    const ref = useRef(null);

    let time = 0;

    function toInt(n) {
        return parseInt(String(n), 10);
    }

    function countdown() {
        if (time < 0) {
            if (ref.current) {
                clearInterval(ref.current);
                ref.current = null;
            }
            if (callback) {
                callback();
            }
            onChange && onChange(0, 0, 0, 0);
            return;
        }

        const day = toInt(time / 86400);
        const hour = toInt((time % 86400) / 60 / 60);
        const minute = toInt(((time % 86400) % 3600) / 60);
        const second = toInt(((time % 86400) % 3600) % 60);

        const mayday = day > 0 ? String(day) : '0';
        const mayhour = hour < 10 ? '0' + hour : String(hour);
        const mayminute = minute < 10 ? '0' + minute : String(minute);
        const maysecond = second < 10 ? '0' + second : String(second);
        onChange && onChange(day, hour, minute, second);
        setDay(mayday);
        setHour(mayhour);
        setMinute(mayminute);
        setSecond(maysecond);
        --time;
    }

    function span(n) {
        return n
            .toString()
            .split('')
            .map(str => (
                <span key={str} className={styles.number}>
                    {str}
                </span>
            ));
    }

    function run() {
        if (ref.current) {
            clearInterval(ref.current);
            ref.current = null;
        }
        const startDate = +new Date(start);
        const endDate = +new Date(end);
        time = (endDate - startDate) / 1000;
        ref.current = setInterval(countdown, 1000);
    }

    useEffect(() => {
        run();
        return () => {
            clearInterval(ref.current);
            ref.current = null;
        };
    }, []);
    useEffect(run, [end, start]);

    const classNames = [styles.countdown];
    if (className) {
        classNames.push(className);
    }

    if (render) {
        return render(day, hour, minute, second);
    }
    return (
        <div className={classNames.join(' ')}>
            <span className="day">
                {span(day)}
                <span className={styles.label}>天</span>
            </span>
            <span className="hour">
                {span(hour)}
                <span className={styles.label}>时</span>
            </span>
            <span className="minute">
                {span(minute)}
                <span className={styles.label}>分</span>
            </span>
            <span className="second">
                {span(second)}
                <span className={styles.label}>秒</span>
            </span>
        </div>
    );
}

export default MyCountdown;