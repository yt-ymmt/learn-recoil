import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';
import GlobalStyle from './GlobalStyle';
import Root from './Root';

const App: FC = () => (
    <RecoilRoot>
        <GlobalStyle />
        <Root />
    </RecoilRoot>
);

ReactDOM.render(<App />, document.getElementById('root'));
