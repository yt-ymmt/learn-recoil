import { Checkbox, List } from 'antd';
import React from 'react';
import { selectorFamily, useRecoilValue } from 'recoil';

const data = [
    {
        title: 'Ant Design Title 1',
    },
    {
        title: 'Ant Design Title 2',
    },
    {
        title: 'Ant Design Title 3',
    },
    {
        title: 'Ant Design Title 4',
    },
];

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
    // const { id, title, body, userId } = useRecoilValue(mockedQuery('90'));

    return (
        <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item) => (
                <List.Item>
                    <Checkbox
                        onChange={() => {
                            console.log('hoge');
                        }}
                    />
                    <List.Item.Meta
                        title={item.title}
                        description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                    />
                </List.Item>
            )}
        />
    );
};

export default MockedComponent;
