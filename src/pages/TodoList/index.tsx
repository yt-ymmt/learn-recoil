import React, { FC, Suspense } from 'react';
import Layout from '../../components/Main';
import ErrorBoundary from '../../components/shared/ErrorBoundary';
import TodoList from '../../components/shared/TodoList';

const TodoListPage: FC = () => (
    <ErrorBoundary>
        <Layout>
            <Suspense fallback={<div>Loading...</div>}>
                <TodoList />
            </Suspense>
        </Layout>
    </ErrorBoundary>
);

export default TodoListPage;
