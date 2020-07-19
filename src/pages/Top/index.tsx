import React, { FC, Suspense } from 'react';
import Layout from '../../components/Main';
import Counter from '../../components/shared/Counter';
import ErrorBoundary from '../../components/shared/ErrorBoundary';
import FontButton from '../../components/shared/FontButton';
import MockedComponent from '../../components/shared/MockedComponent';

const Top: FC = () => (
    <ErrorBoundary>
        <Layout>
            <Counter />
            <FontButton />
            <Suspense fallback={<div>Loading...</div>}>
                <MockedComponent />
            </Suspense>
        </Layout>
    </ErrorBoundary>
);

export default Top;
