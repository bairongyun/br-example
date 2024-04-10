import React from 'react';
import { Menu } from 'antd';

const SiderMenu: React.FC = (props: any) => {
    return (
        <Menu
            theme='dark'
            mode='inline'
            style={{ overflowY: 'auto' }}
            selectedKeys={[location.pathname]}
            items={props.menus}
        />
    );
}

export default SiderMenu;
