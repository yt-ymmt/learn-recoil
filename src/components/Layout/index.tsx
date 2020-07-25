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
            <Header>
                <Logo onClick={handleClickTopButton} />
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
            </Header>
            <Layout style={{ padding: '24px' }}>
                <Content>{children}</Content>
            </Layout>
            <Footer style={{ textAlign: 'center' }}>©Yuta Yamamoto</Footer>
        </Layout>
    );
};

const Logo = styled.div`
    width: 120px;
    height: 31px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px 28px 16px 0;
    float: left;
    cursor: pointer;
`;

export default Main;
