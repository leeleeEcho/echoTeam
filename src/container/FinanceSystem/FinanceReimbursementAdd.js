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
class FinanceReimbursementAdd extends Component {
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
                    <FinanceMenu selected={['12']} openKeys={['sub5']} />
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>财务系统</Breadcrumb.Item>
                            <Breadcrumb.Item>报销管理</Breadcrumb.Item>
                            <Breadcrumb.Item>新增</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content className="page-content"  >
                            <Form className="page-content-form newTracklogform" onSubmit={this.handleSearch}>
                                <FormItem
                                    label="项目名"
                                >
                                    {getFieldDecorator('groupname', {
                                    })(
                                        <Input style={{ width: 400 }} />
                                    )}
                                </FormItem>
                                <FormItem
                                    label="价格"
                                >
                                    {getFieldDecorator('initupgrade', {
                                    })(
                                        <Input />
                                    )}
                                </FormItem>
                                <FormItem
                                    label="数量"
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
                                    <Button type="primary" htmlType="submit"  >保存</Button>
                                    <Button type="primary" htmlType="submit" style={{ marginLeft: 20, marginTop: 20 }} ><Link to='/financereimbursement'>返回</Link></Button>
                                </Row>
                            </Form>

                        </Content>
                    </Layout>
                </Layout>

            </Layout>
        );

    }
}
const FinanceReimbursementAddFrom = Form.create()(FinanceReimbursementAdd);


export default FinanceReimbursementAddFrom;