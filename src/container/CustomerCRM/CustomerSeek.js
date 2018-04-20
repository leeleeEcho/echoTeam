import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import HeaderComponent from '../../components/Header/'
import CustomerMenu from '../../components/Menu/CustomerMenu'
import { Layout, Select, Modal, DatePicker, Breadcrumb, Button, Row, Col, Form, Input, Table } from 'antd';
const Option = Select.Option;
const { Content } = Layout;
const { TextArea } = Input;
const FormItem = Form.Item;
class CustomerSeek extends Component {
    constructor(props) {
        super(props)
        this.state = {
            curPage: 1,
            limit: 10,
            offset: 0,
            customerSeekVisible: false
        }
    }
    reply = (record) => {
        this.setState({
            customerSeekVisible: true
        })
    }

    render() {
        let me = this;
        const { getFieldDecorator } = me.props.form;
        const data = [{
            key: '1',
            seekinfo: 'John Brown',
            phonenumber: '13332221212',
            ascription: 'AAAAA',
        }, {
            key: '2',
            seekinfo: 'John Brown',
            phonenumber: '13332221212',
            ascription: 'AAAAA',
        }, {
            key: '3',
            seekinfo: 'John Brown',
            phonenumber: '13332221212',
            ascription: 'AAAAA',
        }, {
            key: '4',
            seekinfo: 'John Brown',
            phonenumber: '13332221212',
            ascription: 'AAAAA',
        },];
        let columns = [
            {
                title: '咨询内容', dataIndex: 'seekinfo', render: (text, record) => {
                    return (
                        <a>{text}</a>
                    )
                }
            },
            { title: 'key', dataIndex: 'key', className: 'hide' },
            { title: '作者', dataIndex: 'author' },
            { title: '编号', dataIndex: 'index' },
            { title: '地区', dataIndex: 'area' },
            { title: 'IP地址', dataIndex: 'ipaddress' },
            { title: '访问时间', dataIndex: 'visittime' },
            { title: '手机号', dataIndex: 'phone' },
            { title: '销售', dataIndex: 'sale' },
            { title: '状态', dataIndex: 'status' },
            {
                title: '操作', dataIndex: 'actions', render: (text, record) => {
                    return (
                        <span>
                            <a onClick={() => { this.reply(record) }}>回复</a>
                        </span>
                    )
                }
            }
        ];

        let renderProps = {
            columns: columns,
            loading: false,
            dataSource: data,
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
                <HeaderComponent selected={['1']}></HeaderComponent>
                <Layout>
                    <CustomerMenu selected={['4']} />
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>客户管理</Breadcrumb.Item>
                            <Breadcrumb.Item>客户咨询</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content className="page-content"  >
                            <Table  {...renderProps} />
                        </Content>
                    </Layout>
                </Layout>

                <Modal
                    title="回复"
                    visible={this.state.customerSeekVisible}
                    onCancel={closeNewTracklogPopup}
                    onOk={newTracklog}
                    okText="回复"
                    cancelText="返回"
                >
                    <Form className="page-content-form" >
                        <FormItem label="回复" labelCol={{ span: 4 }} wrapperCol={{ span: 18 }}>
                            {getFieldDecorator('addnewtracklog', {
                                rules: [
                                    { required: true, whitespace: true, message: "请添加记录" },
                                ]
                            })(<TextArea rows={4} />)}
                        </FormItem>
                    </Form>
                </Modal>

            </Layout>
        );
        function closeNewTracklogPopup() {
            me.setState({
                customerSeekVisible: false
            })
        }
        function newTracklog() {
            me.setState({
                customerSeekVisible: false
            })
        }

    }
}
const CustomerSeekFrom = Form.create()(CustomerSeek);


export default CustomerSeekFrom;