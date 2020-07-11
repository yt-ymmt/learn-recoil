import React, { Component } from 'react';

type Porps = {
    children: React.ReactNode;
};

type State = {
    hasError: boolean;
};

export default class ErrorBoundary extends Component<Porps, State> {
    state = { hasError: false };

    static getDerivedStateFromError() {
        return {
            hasError: true,
        };
    }

    render() {
        if (this.state.hasError) {
            return <p>Error.</p>;
        }
        return this.props.children;
    }
}
