import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd';
const { SubMenu } = Menu;
const { Content, Sider } = Layout;
class WebsiteMenu extends Component {
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
                    <SubMenu key="sub1" title={<span><Icon type="profile" />报表统计</span>}>
                        <Menu.Item key="1"><Link to="/reportstatistics">流量统计</Link></Menu.Item>
                        <Menu.Item key="2"><Link to="/customersummary">客户统计</Link></Menu.Item>
                        <Menu.Item key="3"><Link to="/commoditysummary">商品统计</Link></Menu.Item>
                        <Menu.Item key="4"><Link to="/salesummary">销售统计</Link></Menu.Item>
                        <Menu.Item key="5"><Link to="/achievementsummary">业绩统计</Link></Menu.Item>
                        <Menu.Item key="6"><Link to="/financesummary">财务统计</Link></Menu.Item>
                    </SubMenu>
                    

                </Menu>
            </Sider>
        );
    }
}
export default WebsiteMenu
