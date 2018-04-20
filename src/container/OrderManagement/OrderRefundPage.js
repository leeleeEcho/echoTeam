import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import HeaderComponent from '../../components/Header/'
import OrderMenu from '../../components/Menu/OrderMenu'
import options from '../../common/utils/address-options';
import { Layout, Cascader, Select, Breadcrumb, Button, Row, Col, Form, Input, } from 'antd';
const Option = Select.Option;
const { Content } = Layout;
const FormItem = Form.Item;
class OrderRefundPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    handleSearch = (e) => {
        e.preventDefault()
        this.props.form.validateFields([
            'name',

        ], (err, values) => {
            console.log(values)
        })
    }

    render() {
        let me = this;
        const { getFieldDecorator } = me.props.form;

        return (
            <Layout className="page-layout">
                <HeaderComponent selected={['3']}></HeaderComponent>
                <Layout>
                    <OrderMenu selected={['1']} />
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>订单管理</Breadcrumb.Item>
                            <Breadcrumb.Item>退款</Breadcrumb.Item>
                        </Breadcrumb>
                        <h2>订单详细信息</h2>
                        <Content className="page-content"  >

                            <Form className="page-content-form newTracklogform" onSubmit={this.handleSearch}>
                                <FormItem
                                    label="订单号"
                                >
                                    {getFieldDecorator('groupname', {
                                    })(
                                        <span>231312312312</span>
                                    )}
                                </FormItem>
                                <FormItem
                                    label="退款金额"
                                >
                                    {getFieldDecorator('groupname', {
                                    })(
                                        <div>
                                            <Input />
                                            <span className="form-result-notice">*员工业绩响应扣减</span>
                                        </div>
                                    )}
                                </FormItem>
                                <FormItem
                                    label="退款去向"
                                >
                                    {getFieldDecorator('grade', {
                                    })(
                                        <Input />
                                    )}
                                </FormItem>
                                <FormItem
                                    label="退款银行"
                                >
                                    {getFieldDecorator('upgrade', {
                                    })(
                                        <Input />
                                    )}
                                </FormItem>
                                <FormItem
                                    label="客户姓名"
                                >
                                    {getFieldDecorator('initprice', {
                                    })(
                                        <Input />
                                    )}
                                </FormItem>
                                <FormItem
                                    label="手机号码"
                                >
                                    {getFieldDecorator('initupgrade', {
                                    })(
                                        <Input />
                                    )}
                                </FormItem>
                                <FormItem
                                    label="退款账号"
                                >
                                    {getFieldDecorator('discount', {
                                    })(
                                        <Input />
                                    )}
                                </FormItem>
                                <FormItem
                                    label="退款原因"
                                >
                                    {getFieldDecorator('logingroup', {
                                    })(
                                        <Input />
                                    )}
                                </FormItem>
                                <Row >
                                    <Button type="primary" htmlType="submit"  >确认退款</Button>
                                    <Button type="primary" htmlType="submit" onClick={goBack} style={{ marginLeft: 20, marginTop: 20 }} >取消</Button>
                                </Row>
                            </Form>

                        </Content>
                    </Layout>
                </Layout>

            </Layout >
        );

        function goBack() {
            window.history.go(-1)
        }
    }
}
const OrderRefundPageFrom = Form.create()(OrderRefundPage);


export default OrderRefundPageFrom;