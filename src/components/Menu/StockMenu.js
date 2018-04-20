import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd';
const { SubMenu } = Menu;
const { Content, Sider } = Layout;
class StockMenu extends Component {
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
                    <SubMenu key="sub1" title={<span><Icon type="profile" />库存管理</span>}>
                        <Menu.Item key="1"><Link to="/stockmanagement">库存管理</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" title={<span><Icon type="shopping-cart" />配货管理</span>}>
                        <Menu.Item key="2"><Link to="/distributionmanagement">配货管理</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub3" title={<span><Icon type="exception" />预留管理</span>}>
                        <Menu.Item key="3"><Link to="/reservemanagement">预留管理</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub4" title={<span><Icon type="export" />调货管理</span>}>
                        <Menu.Item key="4"><Link to="/callmanagement">调货管理</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub5" title={<span><Icon type="solution" />订单管理</span>}>
                        <Menu.Item key="5"><Link to="/allorders">所有订单</Link></Menu.Item>
                        <Menu.Item key="6"><Link to="/orderaudited">待审核</Link></Menu.Item>
                        <Menu.Item key="7"><Link to="/orderdelivery">待发货</Link></Menu.Item>
                        <Menu.Item key="8"><Link to="/orderreturn">待退货</Link></Menu.Item>
                        <Menu.Item key="9"><Link to="/orderfinish">已完成</Link></Menu.Item>
                        <Menu.Item key="10"><Link to="/ordercancel">已取消</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub6" title={<span><Icon type="search" />商品查询</span>}>
                        <Menu.Item key="11"><Link to="/productsearch">商品查询</Link></Menu.Item>
                    </SubMenu>
                    {/*<SubMenu key="sub4" title={<span><Icon type="setting" />客户设置</span>}>
                        <Menu.Item key="9"><Link to="/smstemplate">短信模版</Link></Menu.Item>
                        <Menu.Item key="10"><Link to="/emailtemplate">邮件模版</Link></Menu.Item>
                    </SubMenu> */}
                </Menu>
            </Sider>
        );
    }
}
export default StockMenu
