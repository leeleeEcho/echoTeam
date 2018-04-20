import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd';
const { SubMenu } = Menu;
const { Content, Sider } = Layout;
class FinanceMenu extends Component {
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
                    <SubMenu key="sub1" title={<span><Icon type="profile" />订单管理</span>}>
                        <Menu.Item key="1"><Link to="/financeorderaudited">待审核</Link></Menu.Item>
                        <Menu.Item key="2"><Link to="/financeorderpay">待付款</Link></Menu.Item>
                        <Menu.Item key="3"><Link to="/financeorderrefund">待退款</Link></Menu.Item>
                        <Menu.Item key="4"><Link to="/financeorderfinish">已完成</Link></Menu.Item>
                        <Menu.Item key="5"><Link to="/financeorderdelete">已删除</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" title={<span><Icon type="file" />进出账管理</span>}>
                        <Menu.Item key="6"><Link to="/financehouston">进账管理</Link></Menu.Item>
                        <Menu.Item key="7"><Link to="/financeout">出账管理</Link></Menu.Item>
                        <Menu.Item key="8"><Link to="/financecheck">对账管理</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub3" title={<span><Icon type="file" />人员工资计算</span>}>
                        <Menu.Item key="9"><Link to="/financesalarysetting">薪资参数设置</Link></Menu.Item>
                        <Menu.Item key="10"><Link to="/financesalary">工资统计</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub4" title={<span><Icon type="file" />预付款管理</span>}>
                        <Menu.Item key="11"><Link to="/financeadvance">预付款管理</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub5" title={<span><Icon type="file" />报销管理</span>}>
                        <Menu.Item key="12"><Link to="/financereimbursement">报销管理</Link></Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
        );
    }
}
export default FinanceMenu
