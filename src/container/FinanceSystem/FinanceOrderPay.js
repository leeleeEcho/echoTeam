import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import HeaderComponent from '../../components/Header/'
import FinanceMenu from '../../components/Menu/FinanceMenu'
import { Layout, Select, DatePicker, Breadcrumb, Button, Row, Col, Form, Input, Table } from 'antd';
const Option = Select.Option;
const { Content } = Layout;
const { TextArea } = Input;
const FormItem = Form.Item;
const ButtonGroup = Button.Group;
const { RangePicker } = DatePicker;
const InputGroup = Input.Group;
class FinanceOrderPay extends Component {
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
            customerphone: '茶壶',
            customername: 'leotao'

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
            { title: '备注', dataIndex: 'sendtype' },
            { title: '支付状态', dataIndex: 'orderstatus' },
            { title: '成交时间', dataIndex: 'capacity' },
            { title: '应收款', dataIndex: 'price' },
            { title: '实收款', dataIndex: 'shanghai' },
            { title: '业绩', dataIndex: 'shanghai' },
            {
                title: '操作', dataIndex: 'actions', render: (text, record) => {
                    return (
                        <span>
                            <a>付款</a>
                            <a style={{ marginLeft: 10 }}>修改</a>
                            <a style={{ marginLeft: 10 }}>删除</a>
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
                <HeaderComponent selected={['4']}></HeaderComponent>
                <Layout>
                    <FinanceMenu selected={['2']} />
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>财务系统</Breadcrumb.Item>
                            <Breadcrumb.Item>待付款订单</Breadcrumb.Item>
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
                                        })(
                                            <Input size="small" />
                                        )}
                                    </FormItem>
                                </Col>

                            </Row>
                            <Row>

                                <Col span={6} >
                                    <FormItem label="客户名" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
                                        {getFieldDecorator('orderid', {
                                        })(
                                            <Input size="small" />
                                        )}
                                    </FormItem>
                                </Col>
                                <Col span={6} >
                                    <FormItem label="成交时间" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
                                        {getFieldDecorator('sendstatus', {
                                            rules: []
                                        })(
                                            <RangePicker
                                                showTime
                                                size="small"
                                                style={{ width: '100%' }}
                                                format="YYYY-MM-DD HH:mm:ss"
                                            />
                                        )}
                                    </FormItem>
                                </Col>
                                <Col style={{ display: 'inline-block', lineHeight: '39px', verticalAlign: 'middle', marginLeft: 20 }}>
                                    <Button type="primary" htmlType="submit" size="small" >查询</Button>
                                </Col>
                            </Row>
                        </Form>
                        <Button type="primary" htmlType="submit" size="small" style={{ width: 80 }} >导出Excel</Button>

                        <Content className="page-content"  >
                            <Table  {...renderProps} />
                        </Content>
                    </Layout>
                </Layout>

            </Layout>
        );

    }
}
const FFinanceOrderPayFrom = Form.create()(FinanceOrderPay);


export default FFinanceOrderPayFrom;