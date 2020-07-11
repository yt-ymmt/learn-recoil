import React, { FC } from 'react';
import styled from 'styled-components';

const Footer: FC = () => <FooterStyled>フッター</FooterStyled>;

const FooterStyled = styled.footer`
    position: absolute;
    bottom: 0;
    text-align: center;
    width: 100%;
`;

export default Footer;
