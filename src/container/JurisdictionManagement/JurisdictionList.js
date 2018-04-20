import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import HeaderComponent from '../../components/Header/'
import JurisdictionMenu from '../../components/Menu/JurisdictionMenu'
import { Layout, Select, DatePicker, Breadcrumb, Button, Row, Col, Form, Input, Table } from 'antd';
const Option = Select.Option;
const { Content } = Layout;
const { TextArea } = Input;
const FormItem = Form.Item;
const ButtonGroup = Button.Group;
const { RangePicker } = DatePicker;
const InputGroup = Input.Group;
class JurisdictionList extends Component {
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
            username: 'ceshi',
            name: '销售',
            role: '超级管理员',
            phone: '15326354653',
            createtime: '2018-02-03 12:23'

        },{
            key: '2',
            username: 'ceshi2',
            name: '销售',
            role: '管理员',
            phone: '15326475823',
            createtime: '2018-02-09 12:23'

        }];
        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            }
        };
        let columns = [
            { title: 'key', dataIndex: 'key', className: 'hide' },
            { title: '用户名', dataIndex: 'username' },
            { title: '姓名', dataIndex: 'name' },
            { title: '角色', dataIndex: 'role' },
            { title: '电话', dataIndex: 'phone' },
            { title: '创建时间', dataIndex: 'createtime' },
            {
                title: '操作', dataIndex: 'actions', render: (text, record) => {
                    return (
                        <span>
                            <a><Link to='/jurisdictionaction'>修改</Link></a>
                        </span>
                    )
                }
            }
        ];

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
                <HeaderComponent selected={['6']}></HeaderComponent>
                <Layout>
                    <JurisdictionMenu selected={['1']} openKeys={['sub1']} />
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>权限管理</Breadcrumb.Item>
                            <Breadcrumb.Item>用户管理</Breadcrumb.Item>
                        </Breadcrumb>
                        <div className="page-top-button" style={{ marginBottom: 10 }}>
                            <Button><Link to="/jurisdictionaction">新增</Link></Button>
                            <Button style={{ marginLeft: 10 }}>全选</Button>
                            <Button style={{ marginLeft: 10 }}>删除</Button>
                        </div>
                        <Content className="page-content"  >
                            <Table  {...renderProps} />
                        </Content>
                    </Layout>
                </Layout>

            </Layout>
        );

    }
}
const JurisdictionListFrom = Form.create()(JurisdictionList);


export default JurisdictionListFrom;