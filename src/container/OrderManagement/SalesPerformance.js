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
class SalesPerformance extends Component {
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
                title: '付款日期', dataIndex: 'orderid'
            },
            { title: 'key', dataIndex: 'key', className: 'hide' },
            { title: '订单号', dataIndex: 'customername' },
            { title: '支付金额', dataIndex: 'customerphone' },
            { title: '支付方式', dataIndex: 'sendtype' },
            { title: '备注', dataIndex: 'orderstatus' },
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
                <HeaderComponent selected={['3']}></HeaderComponent>
                <Layout>
                    <OrderMenu selected={['2']} openKeys={['sub2']} />
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>销售业绩</Breadcrumb.Item>
                            <Breadcrumb.Item>销售业绩查看</Breadcrumb.Item>
                        </Breadcrumb>
                        <Form className="page-content-form" onSubmit={this.handleSearch}>
                            <Row>
                                <Col span={6} >
                                    <FormItem label="查看销售业绩" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
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
                                    <FormItem label="总金额" labelCol={{ span: 8 }} wrapperCol={{ span: 4 }}>
                                        {getFieldDecorator('orderstatus', {
                                            rules: []
                                        })(
                                            <span>4000000</span>
                                        )}
                                    </FormItem>
                                </Col>
                                <Col style={{ display: 'inline-block', lineHeight: '39px', verticalAlign: 'middle' }}>
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
const SalesPerformanceFrom = Form.create()(SalesPerformance);


export default SalesPerformanceFrom;