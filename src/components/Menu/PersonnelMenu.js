import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd';
const { SubMenu } = Menu;
const { Content, Sider } = Layout;
class PersonnelMenu extends Component {
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
                    <SubMenu key="sub1" title={<span><Icon type="profile" />员工花名册</span>}>
                        <Menu.Item key="1"><Link to="/personnellist">员工花名册</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" title={<span><Icon type="file" />人员分组</span>}>
                        <Menu.Item key="2"><Link to="/personnelgroup">人员分组</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub3" title={<span><Icon type="file" />值班系统</span>}>
                        <Menu.Item key="3"><Link to="/personnelduty">留言管理</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub4" title={<span><Icon type="file" />请假系统</span>}>
                        <Menu.Item key="4"><Link to="/personnelleave">请假申请</Link></Menu.Item>
                        <Menu.Item key="5"><Link to="/personnelleavelist">请假记录</Link></Menu.Item>
                        <Menu.Item key="6"><Link to="/personnelleavemanage">请假管理</Link></Menu.Item>
                    </SubMenu>

                </Menu>
            </Sider>
        );
    }
}
export default PersonnelMenu
