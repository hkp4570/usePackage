import React from 'react';
import CountDown from '@/components/CountDown/CountDown';

function Index() {
    return (
        <div>
            <CountDown count={10}>
                {(time: number) => <div>{time}</div>}
            </CountDown>
        </div>
    );
}

export default Index;
