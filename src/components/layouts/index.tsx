import React, { FC } from 'react';
import Header from '../shared/Header';
import styled from 'styled-components';
import Footer from '../shared/Footer/index';

const Layout: FC = ({ children }) => (
    <>
        <Header></Header>
        <MainStyled>{children}</MainStyled>
        <Footer />
    </>
);

const MainStyled = styled.main`
    padding: 30px;
    font-size: 24px;
`;

export default Layout;
