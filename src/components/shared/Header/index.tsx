import React, { FC } from 'react';
import styled from 'styled-components';
import Nav from './Nav';

const Header: FC = () => (
    <HeaderStyled>
        <Nav />
    </HeaderStyled>
);

const HeaderStyled = styled.div`
    font-size: 24px;
`;

export default Header;
