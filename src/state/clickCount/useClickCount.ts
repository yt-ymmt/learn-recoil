import clickCount from './clickCount';
import { useRecoilState, useResetRecoilState } from 'recoil';

const useClickCount = () => {
    const [clickCountValue, setClickCount] = useRecoilState(clickCount);

    const increment = () => setClickCount(clickCountValue + 1);
    const decrement = () => setClickCount(clickCountValue - 1);
    const reset = useResetRecoilState(clickCount);

    return {
        clickCountValue,
        increment,
        decrement,
        reset,
    };
};

export default useClickCount;
