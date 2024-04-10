
import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Dropdown, Avatar, Layout } from 'antd';
import { LoginOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import './index.less';

const { Header } = Layout;

const HeaderCustom: React.FC = () => {
    const avater = '//img.shurongdai.cn/group1/M00/00/0C/wKgX2FrNcZKAa92mAAAI-XyxqgY410.jpg';
    const items = [
        {
            key: 'logout',
            label: (
                <a>
                    <LoginOutlined />
                    退出登录
                </a>
            )
        }
    ];

    return (
        <Header style={{ background: '#fff', padding: 0, height: 65 }} className='custom-theme header-custom'>
            <span className='trigger custom-trigger'>
                <MenuUnfoldOutlined />
            </span>
            <div>
                <Dropdown menu={{ items }}>
                    <span className='avatar'>
                        <Avatar size='small' src={avater} />
                        <span>fed</span>
                    </span>
                </Dropdown>
            </div>
        </Header>
    );
}

export default withRouter<RouteComponentProps<any>, any>(HeaderCustom) as any;
