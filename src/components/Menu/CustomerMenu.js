import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd';
const { SubMenu } = Menu;
const { Content, Sider } = Layout;
class MenuComponent extends Component {
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
                    <SubMenu key="sub1" title={<span><Icon type="user" />客户管理</span>}>
                        <Menu.Item key="1"><Link to="/">所有客户</Link></Menu.Item>
                        <Menu.Item key="2"><Link to="/crmsearch">CRM查询</Link></Menu.Item>
                        <Menu.Item key="3"><Link to="/customergroup">客户组别</Link></Menu.Item>
                        <Menu.Item key="4"><Link to="/customerseek">客户咨询</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" title={<span><Icon type="file" />客户统计</span>}>
                        <Menu.Item key="5"><Link to="/customerstatistics">客户统计</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub3" title={<span><Icon type="book" />客户日志</span>}>
                        <Menu.Item key="6"><Link to="/sendmessage">发送短信</Link></Menu.Item>
                        <Menu.Item key="7"><Link to="/rechargerecord">充值记录</Link></Menu.Item>
                        <Menu.Item key="8"><Link to="/browserecord">浏览记录</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub4" title={<span><Icon type="setting" />客户设置</span>}>
                        <Menu.Item key="9"><Link to="/smstemplate">短信模版</Link></Menu.Item>
                        <Menu.Item key="10"><Link to="/emailtemplate">邮件模版</Link></Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
        );
    }
}
export default MenuComponent
