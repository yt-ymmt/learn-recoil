import React, { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TopPage from './pages/Top/index';
import TodoListPage from './pages/TodoList/index';
import NotFoundPage from './pages/NotFound/index';

const Router: FC = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<TopPage />} />
            <Route path="/todo" element={<TodoListPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    </BrowserRouter>
);

export default Router;
