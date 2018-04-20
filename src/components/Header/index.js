import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd';
const { Header } = Layout;

class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'leotao'
        }

    }
    render() {
        let { selected } = this.props;
        return (
            <Header className="header">
                <div className="logo">
                </div>
                <div className="userInfo">
                    {this.state.username}
                    <Icon type="logout" style={{ marginLeft: 10, cursor: 'pointer' }} />
                </div>
                <Menu
                    mode="horizontal"
                    defaultSelectedKeys={selected}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="1"><Link to="/">客户CRM</Link></Menu.Item>
                    <Menu.Item key="2"><Link to="/stockmanagement">库存管理</Link></Menu.Item>
                    <Menu.Item key="3"><Link to="/ordermanagement">订单管理</Link></Menu.Item>
                    <Menu.Item key="4"><Link to="/financeorderaudited">财务系统</Link></Menu.Item>
                    <Menu.Item key="5"><Link to="/personnellist">人员管理</Link></Menu.Item>
                    <Menu.Item key="6"><Link to="/jurisdictionlist">权限管理</Link></Menu.Item>
                    <Menu.Item key="7"><Link to="/productlist">网站管理</Link></Menu.Item>
                    <Menu.Item key="8"><Link to="/reportstatistics">报表统计</Link></Menu.Item>

                </Menu>
            </Header>
        );
    }
}
export default HeaderComponent
