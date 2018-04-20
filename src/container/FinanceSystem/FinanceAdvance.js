import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom'
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
class FinanceAdvance extends Component {
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
            { title: '手机号码', dataIndex: 'customerphone' },
            { title: 'key', dataIndex: 'key', className: 'hide' },
            { title: '账户余额', dataIndex: 'customerphone' },
            { title: '交易金额', dataIndex: 'sendtype' },
            { title: '交易类型', dataIndex: 'orderstatus' },
            { title: '交易方式', dataIndex: 'capacity' },
            { title: '销售', dataIndex: 'capacity' },
            { title: '备注', dataIndex: 'capacity' },
            { title: '状态', dataIndex: 'capacity' },
            { title: '操作者', dataIndex: 'capacity' },
            {
                title: '操作', dataIndex: 'actions', render: (text, record) => {
                    return (
                        <span>
                            <a>审核</a>
                            <a style={{ marginLeft: 10 }}>删除</a>
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
                <HeaderComponent selected={['4']}></HeaderComponent>
                <Layout>
                    <FinanceMenu selected={['11']} openKeys={['sub4']} />
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>财务系统</Breadcrumb.Item>
                            <Breadcrumb.Item>预付款管理</Breadcrumb.Item>
                        </Breadcrumb>
                        <div className="page-top-button" style={{ marginBottom: 10 }}>
                            <Button><Link to="/financeadvancerecharge">充值</Link></Button>
                            <Button style={{ marginLeft: 10 }}><Link to="/financeadvancerecharge">提现</Link></Button>
                        </div>
                        <Form className="page-content-form" onSubmit={this.handleSearch}>
                            <Row>
                                <Col span={6} >
                                    <FormItem label="交易类型" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
                                        {getFieldDecorator('orderid', {
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
                                    <FormItem label="销售" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
                                        {getFieldDecorator('orderid', {
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
                                    <FormItem label="手机号" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
                                        {getFieldDecorator('orderid', {
                                        })(
                                            <Input size="small" />
                                        )}
                                    </FormItem>
                                </Col>
                                {/* <Col span={6} >
                                    <FormItem label="时间" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
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
                                </Col> */}
                                <Col span={4} style={{ lineHeight: '39px', verticalAlign: 'middle', marginLeft: 20 }}>
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

    }
}
const FinanceAdvanceFrom = Form.create()(FinanceAdvance);


export default FinanceAdvanceFrom;