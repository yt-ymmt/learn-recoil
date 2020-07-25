import { List } from 'antd';
import React from 'react';
import useTodos from '../../../state/todos/useTodos';

const TodoList = () => {
    const { todoItems } = useTodos();

    return (
        <List
            itemLayout="vertical"
            dataSource={todoItems}
            renderItem={(item) => (
                <List.Item key={item.id}>
                    <List.Item.Meta
                        title={item.title}
                        description={item.body}
                    />
                </List.Item>
            )}
        />
    );
};

export default TodoList;
