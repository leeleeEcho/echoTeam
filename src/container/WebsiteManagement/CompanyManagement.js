import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import HeaderComponent from '../../components/Header/'
import WebsiteMenu from '../../components/Menu/WebsiteMenu'
import { Layout, Select, Modal, DatePicker, message, Breadcrumb, Button, Row, Col, Form, Input, Table, Card, Icon, Avatar, Radio  } from 'antd';

const { Content } = Layout;
const ButtonGroup = Button.Group;
const FormItem = Form.Item;
const Option = Select.Option;
const { Meta } = Card;

class CompanyManagement extends Component {
    constructor(props) {
        super(props)
        this.state = {
            curPage: 1,
            limit: 10,
            offset: 0,
        }
    }

    render() {
        let me = this;
        const { getFieldDecorator } = me.props.form;
        const data = [{
            key: '1',
            name: '紫砂大师/名家',
            index: '1001',
        }, {
            key: '2',
            name: '紫砂大师/名家',
            index: '1002',
        }, {
            key: '3',
            name: '紫砂大师/名家',
            index: '1003',
        }, {
            key: '4',
            name: '紫砂大师/名家',
            index: '1004',
        },];
        let columns = [
            { title: '编号', dataIndex: 'index' },
            { title: '类别名称', dataIndex: 'name' },
            { title: 'key', dataIndex: 'key', className: 'hide' },
            {
                title: '缩略图', dataIndex: 'image', render: (text, record) => {
                    return (
                        <img className="stock-thumbnail"></img>
                    )
                }
            },
            {
                title: '操作', dataIndex: 'actions', render: (text, record) => {
                    return (
                        <span>
                            <a><Link to='/ColumnListEdit'>修改</Link></a>
                        </span>
                    )
                }
            }
        ];
        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            }
        };
        let renderProps = {
            columns: columns,
            loading: false,
            dataSource: data,
            rowSelection: rowSelection,
            pagination: {
                loading: true,
                total: 500,
                current: 1,
                showSizeChanger: true,
                showQuickJumper: true,
                onChange: (page, pageSize) => {
                    me.setState({
                        curPage: page,
                        offset: (page - 1) * pageSize,
                        limit: pageSize,
                        getManagementListLoading: true
                    })

                    me.getManagementList(me.state.search, (page - 1) * pageSize, pageSize, false)
                },
                onShowSizeChange: (page, pageSize) => {
                    me.setState({
                        curPage: page,
                        offset: (page - 1) * pageSize,
                        limit: pageSize,
                        getManagementListLoading: true
                    });
                    me.getManagementList(me.state.search, (page - 1) * pageSize, pageSize, false);
                }
            },
        };

        return (
            <Layout className="page-layout">
                <HeaderComponent selected={['7']}></HeaderComponent>
                <Layout>
                    <WebsiteMenu selected={['19']} openKeys={['sub14']} />
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>公司介绍</Breadcrumb.Item>
                        </Breadcrumb>
                        <div className="page-top-button page-content-form" >
                            <ButtonGroup>
                                <Button><Link to="/companymanagementadd">新增</Link></Button>
                                <Button>全选</Button>
                                <Button>删除</Button>
                            </ButtonGroup>
                            <Select
                                style={{ width: 150, marginLeft: 20 }}
                                onChange={handleChange}
                                placeholder="所有类别"
                            >
                                <Option value="you"> AA</Option>
                                <Option value="lucy">BB</Option>
                                <Option value="lucy">CC</Option>
                                <Option value="lucy">dd</Option>
                            </Select>
                        </div>
                        <Layout>
                            <Content>
                                <Row flex='flex' justify="space-around">
                                    <Col span={6}>
                                        <Card
                                            style={{ width: 300 }}
                                            hoverable="true"
                                            title={
                                                <span>行业前景</span>
                                            }
                                            extra={
                                                <Radio></Radio>
                                            }
                                            cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                                        >
                                            <Content>
                                                <Row>
                                                    <Col span={24}>暂无内容摘要说明...</Col>
                                                </Row>
                                                <Row style={{marginTop:20}}>
                                                    <Col span={20}>2018--02-23 09:23:20</Col>
                                                    <Col span={4}>
                                                        <Link to="/">修改</Link> 
                                                    </Col>
                                                </Row>
                                            </Content>
                                        </Card>            
                                    </Col>
                                    <Col span={6}>
                                        <Card
                                            style={{ width: 300 }}
                                            hoverable="true"
                                            title={
                                                <span>升值空间</span>
                                            }
                                            extra={
                                                <Radio></Radio>
                                            }
                                            cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                                        >
                                            <Content>
                                                <Row>
                                                    <Col span={24}>暂无内容摘要说明...</Col>
                                                </Row>
                                                <Row style={{marginTop:20}}>
                                                    <Col span={20}>2018--02-23 09:23:20</Col>
                                                    <Col span={4}>
                                                        <Link to="/">修改</Link> 
                                                    </Col>
                                                </Row>
                                            </Content>
                                        </Card>            
                                    </Col>
                                    <Col span={6}>
                                        <Card
                                            style={{ width: 300 }}
                                            hoverable="true"
                                            title={
                                                <span>加入我们</span>
                                            }
                                            extra={
                                                <Radio></Radio>
                                            }
                                            cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                                        >
                                            <Content>
                                                <Row>
                                                    <Col span={24}>暂无内容摘要说明...</Col>
                                                </Row>
                                                <Row style={{marginTop:20}}>
                                                    <Col span={20}>2018--02-23 09:23:20</Col>
                                                    <Col span={4}>
                                                        <Link to="/">修改</Link> 
                                                    </Col>
                                                </Row>
                                            </Content>
                                        </Card>            
                                    </Col>
                                    <Col span={6}>
                                        <Card
                                            style={{ width: 300 }}
                                            hoverable="true"
                                            title={
                                                <span>收款账号</span>
                                            }
                                            extra={
                                                <Radio></Radio>
                                            }
                                            cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                                        >
                                            <Content>
                                                <Row>
                                                    <Col span={24}>暂无内容摘要说明...</Col>
                                                </Row>
                                                <Row style={{marginTop:20}}>
                                                    <Col span={20}>2018--02-23 09:23:20</Col>
                                                    <Col span={4}>
                                                        <Link to="/">修改</Link> 
                                                    </Col>
                                                </Row>
                                            </Content>
                                        </Card>            
                                    </Col>
                                </Row>
                            </Content>
                        </Layout>
                    </Layout>
                </Layout>



            </Layout>
        );
        function handleChange() {

        }


    }
}
const CompanyManagementFrom = Form.create()(CompanyManagement);


export default CompanyManagementFrom;