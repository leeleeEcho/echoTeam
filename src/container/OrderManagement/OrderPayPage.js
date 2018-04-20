import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import HeaderComponent from '../../components/Header/'
import OrderMenu from '../../components/Menu/OrderMenu'
import options from '../../common/utils/address-options';
import { Layout, Cascader, Select, Breadcrumb, DatePicker, Button, Row, Col, Form, Input, } from 'antd';
const Option = Select.Option;
const { Content } = Layout;
const FormItem = Form.Item;
class OrderPayPage extends Component {
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
                            <Breadcrumb.Item>付款</Breadcrumb.Item>
                        </Breadcrumb>
                        <h2>财务信息</h2>
                        <Content className="page-content"  >
                            <Form className="page-content-form newTracklogform" onSubmit={this.handleSearch}>
                                <FormItem
                                    label="时间"
                                >
                                    {getFieldDecorator('groupname', {
                                    })(
                                        <DatePicker
                                            showTime
                                            style={{ width: '100%' }}
                                            format="YYYY-MM-DD HH:mm:ss"
                                        />
                                    )}
                                </FormItem>
                                <FormItem
                                    label="金额"
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
                                    label="付款方式"
                                >
                                    {getFieldDecorator('grade', {
                                    })(
                                        <Select
                                            style={{ top: 0 }}
                                        >
                                            <Option value="yes">有</Option>
                                            <Option value="no">无</Option>
                                        </Select>
                                    )}
                                </FormItem>
                                <FormItem
                                    label="淘宝订单号"
                                >
                                    {getFieldDecorator('upgrade', {
                                    })(
                                        <Input />
                                    )}
                                </FormItem>
                                <FormItem
                                    label="付款银行"
                                >
                                    {getFieldDecorator('initprice', {
                                    })(
                                        <Input />
                                    )}
                                </FormItem>
                                <Row >
                                    <Button type="primary" htmlType="submit"  >保存</Button>
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
const OrderPayPageFrom = Form.create()(OrderPayPage);


export default OrderPayPageFrom;