import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd';
const { SubMenu } = Menu;
const { Content, Sider } = Layout;
class JurisdictionMenu extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let { selected, openKeys } = this.props;
        let defaultOpenkey = ['sub1']
        if (openKeys) {
            defaultOpenkey = openKeys
        }
        return (
            <Sider width={200} style={{ background: '#fff' }}>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={selected}
                    defaultOpenKeys={defaultOpenkey}
                    style={{ height: '100%', borderRight: 0 }}
                >
                    <SubMenu key="sub1" title={<span><Icon type="profile" />权限管理</span>}>
                        <Menu.Item key="1"><Link to="/jurisdictionlist">用户管理</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" title={<span><Icon type="file" />角色权限</span>}>
                        <Menu.Item key="2"><Link to="/jurisdictionrole">角色权限</Link></Menu.Item>
                    </SubMenu>


                </Menu>
            </Sider>
        );
    }
}
export default JurisdictionMenu
