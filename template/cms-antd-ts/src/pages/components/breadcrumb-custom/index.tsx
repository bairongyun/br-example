
import React from 'react';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';

const BreadcrumbCustom: React.FC = () => {
    return (
        <span>
            <Breadcrumb style={{ margin: '12px 0', display: 'flex' }}>
                <Breadcrumb.Item>
                    <Link to='/page/index'>首页</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item key='1'>CMS-栏目x</Breadcrumb.Item>
            </Breadcrumb>
        </span>
    );
}
export default BreadcrumbCustom;
