import React from 'react';
import { selectorFamily, useRecoilValue } from 'recoil';

const mockedQuery = selectorFamily({
    key: 'MockedQuery',
    get: (id) => async () => {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/posts/${String(id)}`
        ).then((response) => {
            if (response.status === 200) {
                return response.json();
            } else {
                throw new Error('Not Found');
            }
        });

        return response;
    },
});

const MockedComponent = () => {
    const { id, title, body, userId } = useRecoilValue(mockedQuery('90'));

    return (
        <ul>
            <li>{id}</li>
            <li>{title}</li>
            <li>{body}</li>
            <li>{userId}</li>
        </ul>
    );
};

export default MockedComponent;
