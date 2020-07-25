import React from 'react';
import useClickCount from '../../state/clickCount/useClickCount';

const Counter = () => {
    const { clickCountValue, increment, decrement, reset } = useClickCount();

    return (
        <div>
            Count: {clickCountValue}
            <br />
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
            <button onClick={reset}>reset</button>
        </div>
    );
};

export default Counter;
