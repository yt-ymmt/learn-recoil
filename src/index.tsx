import React, { FC, StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';
import GlobalStyle from './GlobalStyle';
import Routes from './Router';

const App: FC = () => (
    <StrictMode>
        <GlobalStyle />
        <RecoilRoot>
            <Routes />
        </RecoilRoot>
    </StrictMode>
);

ReactDOM.render(<App />, document.getElementById('root'));
