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
                    <SubMenu key="sub1" title={<span><Icon type="profile" />商品列表</span>}>
                        <Menu.Item key="1"><Link to="/productlist">内容管理</Link></Menu.Item>
                        <Menu.Item key="2"><Link to="/columnlist">栏目类别</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" title={<span><Icon type="profile" />促销管理</span>}>
                        <Menu.Item key="3"><Link to="/promotionmanage">促销管理</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub3" title={<span><Icon type="profile" />订单管理</span>}>
                        <Menu.Item key="4"><Link to="/indentdetails">订单管理</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub4" title={<span><Icon type="profile" />广告管理</span>}>
                        <Menu.Item key="5"><Link to="/advertisingmanage">广告管理</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub5" title={<span><Icon type="profile" />文章管理</span>}>
                        <SubMenu key="sub6" title={<span><Icon type="profile" />手动发布</span>}>
                            <Menu.Item key="6"><Link to="/articlemanagement">文章管理</Link></Menu.Item>
                            <Menu.Item key="7"><Link to="/columnmanagement">栏目类别</Link></Menu.Item>
                        </SubMenu>
                        <Menu.Item key="8"><Link to="/automatic">自动发布</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub7" title={<span><Icon type="profile" />限时抢购</span>}>
                        <Menu.Item key="9"><Link to="/flashsale">限时抢购</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub8" title={<span><Icon type="profile" />用户管理</span>}>
                        <Menu.Item key="10"><Link to="/usermanagement">用户管理</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub9" title={<span><Icon type="profile" />客户咨询</span>}>
                        <Menu.Item key="11"><Link to="/customerconsultation">客户咨询</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub10" title={<span><Icon type="profile" />活动管理</span>}>
                        <Menu.Item key="12"><Link to="/productlist">抽奖系统</Link></Menu.Item>
                        <Menu.Item key="13"><Link to="/productlist">秒杀活动</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub11" title={<span><Icon type="profile" />流量查询</span>}>
                        <Menu.Item key="14"><Link to="/trafficquery">流量查询</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub12" title={<span><Icon type="profile" />视频管理</span>}>
                        <Menu.Item key="15"><Link to="/videomanagement">内容管理</Link></Menu.Item>
                        <Menu.Item key="16"><Link to="/videoclass">栏目类别</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub13" title={<span><Icon type="profile" />鉴定管理</span>}>
                        <Menu.Item key="17"><Link to="/appraisalmanagement">内容管理</Link></Menu.Item>
                        <Menu.Item key="18"><Link to="/appraisalclass">栏目类别</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub14" title={<span><Icon type="profile" />公司介绍</span>}>
                        <Menu.Item key="19"><Link to="/companymanagement">内容管理</Link></Menu.Item>
                        <Menu.Item key="20"><Link to="/companyclass">栏目类别</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub15" title={<span><Icon type="profile" />友情链接管理</span>}>
                        <Menu.Item key="21"><Link to="/linkmanagement">友情链接管理</Link></Menu.Item>
                    </SubMenu>
                    

                </Menu>
            </Sider>
        );
    }
}
export default WebsiteMenu
