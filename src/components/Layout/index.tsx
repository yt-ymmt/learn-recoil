import React, { FC, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Layout, Menu } from 'antd';
const { Header, Content, Footer } = Layout;
import 'antd/dist/antd.css';

const Main: FC = ({ children }) => {
    const navigate = useNavigate();

    const handleClickTopButton = useCallback(() => {
        navigate('/');
    }, [navigate]);

    const handleClickTodoButton = useCallback(() => {
        navigate('/todo');
    }, [navigate]);

    return (
        <Layout>
            <StyledHeader>
                <Logo onClick={handleClickTopButton}>Logo</Logo>
                <Menu
                    theme="dark"
                    defaultSelectedKeys={['/']}
                    selectedKeys={[location.pathname]}
                    mode="horizontal"
                >
                    <Menu.Item key="/" onClick={handleClickTopButton}>
                        Top
                    </Menu.Item>
                    <Menu.Item key="/todo" onClick={handleClickTodoButton}>
                        Todo
                    </Menu.Item>
                </Menu>
            </StyledHeader>
            <Layout style={{ padding: '32px 50px' }}>
                <Content>{children}</Content>
            </Layout>
            <Footer style={{ textAlign: 'center' }}>©Yuta Yamamoto</Footer>
        </Layout>
    );
};

const StyledHeader = styled(Header)`
    display: flex;
    place-content: center flex-start;
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 120px;
    height: 32px;
    margin: 16px 28px 16px 0;
    background: rgba(255, 255, 255, 0.2);
    color: #fff;
    cursor: pointer;
    line-height: 1;
`;

export default Main;
