import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'antd';
import './index.less';

const Index: React.FC = () => {
    const config = {
        title: (
            <div>
                权限开通指导说明<span>所有内部系统注册的账号以及权限区分[日常][线上]</span>
            </div>
        ),
        bordered: false,
        extra: (
            <div>
                <Button type='primary' style={{ marginRight: 10 }}>
                    <Link to='/page/index'>权限申请</Link>
                </Button>
                <Button>
                    <Link to='/page/index'>已申请权限</Link>
                </Button>
            </div>
        )
    };
    return (
        <Card {...config}>
            <div style={{ height: 800 }}>申请说明</div>
        </Card>
    );
}

export default Index