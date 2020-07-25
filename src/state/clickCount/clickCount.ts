import { atom } from 'recoil';

const clickCount = atom({
    key: 'clickCount',
    default: 0,
});

export default clickCount;
