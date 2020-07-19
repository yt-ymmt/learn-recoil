import React from 'react';
import { useRecoilState } from 'recoil';
import { atom } from 'recoil';

const counter = atom({
    key: 'Counter',
    default: 0,
});

const Counter = () => {
    const [count, setCount] = useRecoilState(counter);
    const incrementByOne = () => setCount(count + 1);

    return (
        <div>
            Count: {count}
            <br />
            <button onClick={incrementByOne}>increment</button>
        </div>
    );
};

export default Counter;
