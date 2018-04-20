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
class FinanceAdvanceRecharge extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let me = this;
        const { getFieldDecorator } = me.props.form;
        return (
            <Layout className="page-layout">
                <HeaderComponent selected={['4']}></HeaderComponent>
                <Layout>
                    <FinanceMenu selected={['11']} openKeys={['sub4']} />
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>财务系统</Breadcrumb.Item>
                            <Breadcrumb.Item>预付款管理</Breadcrumb.Item>
                            <Breadcrumb.Item>充值</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content className="page-content"  >
                            <Form className="page-content-form newTracklogform" onSubmit={this.handleSearch}>
                                <FormItem
                                    label="手机号码"
                                >
                                    {getFieldDecorator('groupname', {
                                    })(
                                        <Input />
                                    )}
                                </FormItem>
                                <FormItem
                                    label="销售"
                                >
                                    {getFieldDecorator('grade', {
                                    })(
                                        <Select
                                        >
                                            <Option value="yes">有</Option>
                                            <Option value="no">无</Option>
                                        </Select>
                                    )}
                                </FormItem>
                                <FormItem
                                    label="账户余额"
                                >
                                    {getFieldDecorator('upgrade', {
                                    })(
                                        <span>233213</span>
                                    )}
                                </FormItem>
                                <FormItem
                                    label="交易类型"
                                >
                                    {getFieldDecorator('upgrade', {
                                    })(
                                        <span>充值</span>
                                    )}
                                </FormItem>
                                <FormItem
                                    label="交易金额"
                                >
                                    {getFieldDecorator('initupgrade', {
                                    })(
                                        <Input />
                                    )}
                                </FormItem>
                                <FormItem
                                    label="交易方式"
                                >
                                    {getFieldDecorator('discount', {
                                    })(
                                        <Select
                                        >
                                            <Option value="yes">有</Option>
                                            <Option value="no">无</Option>
                                        </Select>
                                    )}
                                </FormItem>
                                <FormItem
                                    label="付款银行"
                                >
                                    {getFieldDecorator('logingroup', {
                                    })(
                                        <Input />
                                    )}
                                </FormItem>
                                <FormItem
                                    label="备注"
                                >
                                    {getFieldDecorator('logingroup', {
                                    })(
                                        <Input />
                                    )}
                                </FormItem>



                                <Row >
                                    <Button type="primary" htmlType="submit"  >充值</Button>
                                    <Button type="primary" htmlType="submit" style={{ marginLeft: 20, marginTop: 20 }} ><Link to='/financeadvance'>返回</Link></Button>
                                </Row>
                            </Form>

                        </Content>
                    </Layout>
                </Layout>

            </Layout>
        );

    }
}
const FinanceAdvanceRechargeFrom = Form.create()(FinanceAdvanceRecharge);


export default FinanceAdvanceRechargeFrom;