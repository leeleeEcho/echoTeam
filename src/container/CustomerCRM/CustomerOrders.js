import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import HeaderComponent from '../../components/Header/'
import CustomerMenu from '../../components/Menu/CustomerMenu'
import { Layout, Select, Breadcrumb, Button, Row, Col, Form, Table } from 'antd';
const Option = Select.Option;
const { Content } = Layout;
const FormItem = Form.Item;
class CustomerOrders extends Component {
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
            name: 'John Brown',
            phonenumber: '13332221212',
            ascription: 'AAAAA',
        }, {
            key: '2',
            name: 'John Brown',
            phonenumber: '13332221212',
            ascription: 'AAAAA',
        }, {
            key: '3',
            name: 'John Brown',
            phonenumber: '13332221212',
            ascription: 'AAAAA',
        }, {
            key: '4',
            name: 'John Brown',
            phonenumber: '13332221212',
            ascription: 'AAAAA',
        },];
        let columns = [
            { title: '订单号', dataIndex: 'orderid' },
            { title: 'key', dataIndex: 'key', className: 'hide' },
            { title: '会员信息', dataIndex: 'username' },
            { title: '商品信息', dataIndex: 'commodity' },
            { title: '支付方式', dataIndex: 'payment' },
            { title: '配送方式', dataIndex: 'distribution' },
            { title: '订单状态', dataIndex: 'orderstatus' },
            { title: '总金额', dataIndex: 'totalprice' },
            { title: '下单时间', dataIndex: 'ordertime' },
            {
                title: '操作', dataIndex: 'actions', render: (text, record) => {
                    return (
                        <span>
                            <a>发货</a>
                            <a style={{ marginLeft: 10 }}>退货</a>
                            <a style={{ marginLeft: 10 }}>退款</a>
                            <a style={{ marginLeft: 10 }}>财务</a>
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
                <HeaderComponent selected={['1']} />
                <Layout>
                    <CustomerMenu selected={['1']} />
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0 0' }}>
                            <Breadcrumb.Item>客户管理</Breadcrumb.Item>
                            <Breadcrumb.Item>订单列表</Breadcrumb.Item>
                        </Breadcrumb>
                        <Form className="page-content-form" onSubmit={this.handleSearch}>
                            <Row >
                                <Col span={6} >
                                    <FormItem label="订单状态" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} >
                                        {getFieldDecorator('orderstatus', {
                                            rules: []
                                        })(
                                            <Select
                                                size="small"
                                            >
                                                <Option value="you">有意向</Option>
                                                <Option value="lucy">无意向</Option>
                                            </Select>)}
                                    </FormItem>
                                </Col>
                                <Col span={6} >
                                    <FormItem label="支付状态" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} >
                                        {getFieldDecorator('paystatus', {
                                            rules: []
                                        })(
                                            <Select
                                                size="small"
                                            >
                                                <Option value="you">有意向</Option>
                                                <Option value="lucy">无意向</Option>
                                            </Select>)}
                                    </FormItem>
                                </Col>
                                <Col span={6} >
                                    <FormItem label="发货状态" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} >
                                        {getFieldDecorator('sendstatus', {
                                            rules: []
                                        })(
                                            <Select
                                                size="small"
                                            >
                                                <Option value="you">有意向</Option>
                                                <Option value="lucy">无意向</Option>
                                            </Select>)}
                                    </FormItem>
                                </Col>
                                <Col span={2} style={{ lineHeight: '39px', marginLeft: 30 }} >
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
const CCustomerOrdersFrom = Form.create()(CustomerOrders);


export default CCustomerOrdersFrom;