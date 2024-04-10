import React from 'react';
import { Layout } from 'antd';
import SiderCustom from '@/pages/components/sider-custom';
import HeaderCustom from '@/pages/components/header-custom';
import BreadcrumbCustom from '@/pages/components/breadcrumb-custom';
import Routers from '../routers';

const { Content } = Layout;

const PageEntrance: React.FC = () => {
    return <Layout className='content-wrap'>
        <SiderCustom />
        <Layout style={{ flexDirection: 'column', overflow: 'scroll' }}>
            <HeaderCustom />
            <Content style={{ margin: '0 16px', overflow: 'initial', minHeight: 'auto' }}>
                <BreadcrumbCustom />
                <Routers />
            </Content>
        </Layout>
    </Layout>
}

export default PageEntrance