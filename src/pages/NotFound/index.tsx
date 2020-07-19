import React, { FC } from 'react';
import Layout from '../../components/Main';
import { Link } from 'react-router-dom';

const NotFoundPage: FC = () => (
    <Layout>
        <p>ページが見つかりません</p>
        <Link to="/">HOMEへ移動する</Link>
    </Layout>
);

export default NotFoundPage;
