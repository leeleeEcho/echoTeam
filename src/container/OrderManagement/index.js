import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import HeaderComponent from '../../components/Header/'
import OrderMenu from '../../components/Menu/OrderMenu'
import { Layout, Select, Modal, DatePicker, message, Breadcrumb, Button, Row, Col, Form, Input, Table } from 'antd';
const Option = Select.Option;
const { Content } = Layout;
const { TextArea } = Input;
const FormItem = Form.Item;
const ButtonGroup = Button.Group;
const InputGroup = Input.Group;
class OrderManagement extends Component {
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
            index: '12323',
            potname: '茶壶',
            author: 'leotao'

        }];
        let columns = [
            {
                title: '订单号', dataIndex: 'orderid', render: (text, record) => {
                    return (
                        <span>
                            <a>{text}</a>
                        </span>
                    )
                }
            },
            { title: 'key', dataIndex: 'key', className: 'hide' },
            { title: '客户名', dataIndex: 'customername' },
            { title: '客户号码', dataIndex: 'customerphone' },
            { title: '配送方式', dataIndex: 'sendtype' },
            { title: '订单状态', dataIndex: 'orderstatus' },
            { title: '支付状态', dataIndex: 'orderstatus' },
            { title: '发货状态', dataIndex: 'orderstatus' },
            { title: '总金额', dataIndex: 'capacity' },
            { title: '下单时间', dataIndex: 'price' },
            { title: '更新时间', dataIndex: 'shanghai' },
            {
                title: '操作', dataIndex: 'actions', render: (text, record) => {
                    return (
                        <span>
                            <a><Link to="/orderdeliverypage">发货</Link></a>
                            <a style={{ marginLeft: 10 }}><Link to="/orderreturnpage">退货</Link></a>
                            <a style={{ marginLeft: 10 }}><Link to="/orderpaypage">付款</Link></a>
                            <a style={{ marginLeft: 10 }}><Link to="/orderrefundpage">退款</Link></a>
                            <a style={{ marginLeft: 10 }}>取消</a>
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
                <HeaderComponent selected={['3']}></HeaderComponent>
                <Layout>
                    <OrderMenu selected={['1']} />
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>订单管理</Breadcrumb.Item>
                            <Breadcrumb.Item>所有订单</Breadcrumb.Item>
                        </Breadcrumb>
                        <Form className="page-content-form" onSubmit={this.handleSearch}>
                            <Row>
                                <Col span={6} >
                                    <FormItem label="订单状态" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
                                        {getFieldDecorator('orderstatus', {
                                            rules: []
                                        })(
                                            <Select
                                                size="small"
                                            >
                                                <Option value="yes">有</Option>
                                                <Option value="no">无</Option>
                                            </Select>
                                        )}
                                    </FormItem>
                                </Col>
                                <Col span={6} >
                                    <FormItem label="支付状态" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
                                        {getFieldDecorator('paystatus', {
                                            rules: []
                                        })(
                                            <Select
                                                size="small"
                                            >
                                                <Option value="yes">有</Option>
                                                <Option value="no">无</Option>
                                            </Select>
                                        )}
                                    </FormItem>
                                </Col>
                                <Col span={6} >
                                    <FormItem label="发货状态" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
                                        {getFieldDecorator('sendstatus', {
                                            rules: []
                                        })(
                                            <Select
                                                size="small"
                                            >
                                                <Option value="yes">有</Option>
                                                <Option value="no">无</Option>
                                            </Select>
                                        )}
                                    </FormItem>
                                </Col>
                                <Col span={6} >
                                    <FormItem label="订单号" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
                                        {getFieldDecorator('orderid', {
                                            rules: []
                                        })(
                                            <Input size='small' />
                                        )}
                                    </FormItem>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={6} >
                                    <FormItem label="客户名" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
                                        {getFieldDecorator('customername', {
                                            rules: []
                                        })(
                                            <Input size='small' />
                                        )}
                                    </FormItem>
                                </Col>
                                <Col span={6} >
                                    <FormItem label="成交时间" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
                                        {getFieldDecorator('customername', {
                                            rules: []
                                        })(
                                            <DatePicker
                                                showTime
                                                size="small"
                                                style={{ width: '100%' }}
                                                format="YYYY-MM-DD HH:mm:ss"
                                            />
                                        )}
                                    </FormItem>
                                </Col>
                                <Col style={{ display: 'inline-block', lineHeight: '39px', verticalAlign: 'middle', marginLeft: 30 }}>
                                    <Button type="primary" htmlType="submit" size="small" >查询</Button>
                                </Col>
                            </Row>

                        </Form>
                        <Content className="page-content"  >
                            <Table  {...renderProps} />
                        </Content>
                    </Layout>
                </Layout>

            </Layout>
        );
        function handleChange() {

        }

    }
}
const OrderManagementFrom = Form.create()(OrderManagement);


export default OrderManagementFrom;