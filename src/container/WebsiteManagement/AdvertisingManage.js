import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import HeaderComponent from '../../components/Header/'
import WebsiteMenu from '../../components/Menu/WebsiteMenu'
import { Layout, Select, Modal, DatePicker, message, Breadcrumb, Button, Row, Col, Form, Input, Table } from 'antd';
const Option = Select.Option;
const { Content } = Layout;
const { TextArea } = Input;
const FormItem = Form.Item;
const ButtonGroup = Button.Group;
class AdvertisingManage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            curPage: 1,
            limit: 10,
            offset: 0,
            tracklogVisible: false,//查看跟踪记录的popup
            newtracklogVisible: false
        }
    }
    showTracklog = (record) => {
        this.setState({
            tracklogVisible: true
        })
    }
    newTracklog = (record) => {
        this.setState({
            newtracklogVisible: true
        })
    }
    render() {
        let me = this;
        const { getFieldDecorator } = me.props.form;
        const data = [{
            key: '1',
            username: '213214213',
            phonenumber: '广告'
        }];
        let columns = [
            { title: '订单号', dataIndex: 'indentNum',render: (text, record) => {
                    return(
                        <a><Link to='/advertisingedit' >1234324</Link></a>
                    )
                } 
            },
            { title: '编号', dataIndex: 'username' },
            { title: 'key', dataIndex: 'key', className: 'hide' },
            { title: '类别名称', dataIndex: 'phonenumber' },
            {
                title: '操作', dataIndex: 'actions', render: (text, record) => {
                    return (
                        <span>
                            <a><Link to='/advertisingedit'>修改</Link></a>
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
                    <WebsiteMenu selected={['5']}  openKeys={['sub4']} />
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>网站管理</Breadcrumb.Item>
                            <Breadcrumb.Item>广告管理</Breadcrumb.Item>
                        </Breadcrumb>
                        <div className="page-top-button">
                            <ButtonGroup>
                                <Button><Link to='/advertisingedit'>新增</Link></Button>
                                <Button>全选</Button>
                                <Button>删除</Button>
                            </ButtonGroup>
                        </div>
                        <Content className="page-content page-content-form"  >
                            <Table  {...renderProps} />
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        );
        function handleChange() {

        }
        function closeTracklogPopup() {
            me.setState({
                tracklogVisible: false
            })
        }
        function closeNewTracklogPopup() {
            me.setState({
                newtracklogVisible: false
            })
        }
        function newTracklog() {
            message.success('添加成功！')
            me.setState({
                newtracklogVisible: false
            })
        }
    }
}   
const AdvertisingManageFrom = Form.create()(AdvertisingManage);


export default AdvertisingManageFrom;