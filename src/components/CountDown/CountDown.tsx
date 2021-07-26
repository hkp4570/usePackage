import React, { ReactNode, useEffect, useState } from 'react';

interface Props {
    count: number;
    children: (time: number) => ReactNode;
}

function CountDown(props: any) {
    const { count, children } = props;
    let [time, setTime] = useState<number>(count);
    useEffect(() => {
        let timer = setTimeout(() => {
            console.log(time);
            if (time > 0) {
                time--;
                setTime(time);
            } else {
                clearTimeout(timer);
            }
        }, 1000);
        return () => {
            clearTimeout(timer);
        };
    }, [time]);
    return children(time);
}

export default CountDown;
