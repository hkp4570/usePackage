import React, { useEffect, useState } from 'react';
import useRafState from '../../hook/useRafState';

const ReactUse = () => {
    const [state, setState] = useState({
        width: Infinity,
        height: Infinity,
    });
    const [rafState, setRafState] = useRafState({
        width: Infinity,
        height: Infinity,
    });

    const handleResize = () => {
        setState(() => {
            console.log('state');
            return {
                width: window.innerWidth,
                height: window.innerHeight,
            };
        });

        setRafState({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize, false);
        return () => {
            window.removeEventListener('resize', handleResize, false);
        };
    }, []);

    return (
        <div style={{ height: '1000px' }}>
            <h1>state</h1>
            <p>width: {state.width}</p>
            <p>height: {state.height}</p>
            <h2>rafState</h2>
            <p>width: {rafState.width}</p>
            <p>height: {rafState.height}</p>
        </div>
    );
};

export default ReactUse;
