import React, { FC } from 'react';
import Layout from '../../components/Layout';
import Counter from '../../components/shared/Counter';
import ErrorBoundary from '../../components/shared/ErrorBoundary';

const Top: FC = () => (
    <ErrorBoundary>
        <Layout>
            <Counter />
        </Layout>
    </ErrorBoundary>
);

export default Top;
