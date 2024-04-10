
import React from 'react';
import { Layout } from 'antd';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { HomeOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import SiderMenu from './sider-menu';

const { Sider } = Layout;

const menus = new Array<any>(10).fill({}).map((_, i) => {
    return {
        key: `/page/index#${i}`,
        title: 'CMS内容管理',
        label: <Link to={`/page/index#${i}`}>{`CMS-栏目${i}`}</Link>,
        icon: <HomeOutlined translate={undefined} />,
    }
});
const SiderCustom: React.FC = ({ collapsed = false }: any) => {
    return (
        <Sider trigger={null} collapsible collapsed={collapsed} width='240px' style={{ overflowY: 'auto' }}>
            <SiderMenu menus={menus} />
        </Sider>
    );
}


export default withRouter<RouteComponentProps<any>, any>(SiderCustom);
