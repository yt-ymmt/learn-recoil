import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import ErrorBoundary from '../ErrorBoundary';

const Nav: FC = () => (
    <ErrorBoundary>
        <nav>
            <LinkStyled to="/">HOME</LinkStyled>
            <LinkStyled to="/profile">PROFILE</LinkStyled>
            <LinkStyled to="/repository">REPOSITORY</LinkStyled>
        </nav>
    </ErrorBoundary>
);

const LinkStyled = styled(Link)`
    margin: 0 10px;
    color: white;
    font-size: 18px;
`;

export default Nav;
