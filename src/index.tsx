import React, { FC, StrictMode } from 'react';
import ReactDOM from 'react-dom';
// import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import GlobalStyle from './GlobalStyle';
import Routes from './Router';
// import DogProvider from './modules/Dog/DogProvider';
// interface Config {
//     REACT_APP_GITHUB_KEY: string;
// }

const App: FC = () => (
    <StrictMode>
        <GlobalStyle />
        <Routes />
    </StrictMode>
);

ReactDOM.render(<App />, document.getElementById('root'));
