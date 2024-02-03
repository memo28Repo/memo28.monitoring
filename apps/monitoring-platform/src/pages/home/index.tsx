import React, {useEffect, useState} from 'react';
import {
    MonitorOutlined,
    SettingOutlined
} from '@ant-design/icons';
import {Layout, Menu, theme} from 'antd';
import {Outlet, useLocation, useNavigate} from 'react-router-dom'
import {routerPathMap} from "~/router";


const {Sider, Content} = Layout;

const Home: React.FC = () => {
    const [collapsed] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const {
        token: {colorBgContainer, borderRadiusLG},
    } = theme.useToken();

    useEffect(() => {
        if (location.pathname === "/") {
            navigate(routerPathMap.home.errorList)
        }
    }, []);

    return (
        <Layout style={{height: '100vh'}}>

            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className='text-lg text-white items-center justify-center flex pt-3 pb-3'>监控平台</div>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={[]}
                    items={[
                        {
                            key: '1',
                            icon: <MonitorOutlined/>,
                            label: '错误列表',
                            onClick() {
                                navigate(routerPathMap.home.errorList)
                            }
                        },
                        {
                            key: '2',
                            icon: <SettingOutlined/>,
                            label: '设置',
                            onClick() {
                                navigate(routerPathMap.settings.index)
                            }
                        },
                    ]}
                />
            </Sider>
            <Layout>
                {/*<Header style={{padding: 0, background: colorBgContainer}}>*/}
                {/*    <Button*/}
                {/*        type="text"*/}
                {/*        icon={collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}*/}
                {/*        onClick={() => setCollapsed(!collapsed)}*/}
                {/*        style={{*/}
                {/*            fontSize: '16px',*/}
                {/*            width: 64,*/}
                {/*            height: 64,*/}
                {/*        }}*/}
                {/*    />*/}
                {/*</Header>*/}
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                    className='overflow-auto'
                >
                    <Outlet/>
                </Content>
            </Layout>
        </Layout>
    );
};

export default Home;
