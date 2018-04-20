import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import HeaderComponent from '../../components/Header/'
import PersonnelMenu from '../../components/Menu/PersonnelMenu'
import { Layout, Select, DatePicker, Breadcrumb, Button, Row, Col, Form, Input, Table } from 'antd';
const Option = Select.Option;
const { Content } = Layout;
const { TextArea } = Input;
const FormItem = Form.Item;
const ButtonGroup = Button.Group;
const { RangePicker } = DatePicker;
const InputGroup = Input.Group;
class PersonnelLeave extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let me = this;
        const { getFieldDecorator } = me.props.form;
        return (
            <Layout className="page-layout">
                <HeaderComponent selected={['5']}></HeaderComponent>
                <Layout>
                    <PersonnelMenu selected={['4']} openKeys={['sub4']} />
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>人员管理</Breadcrumb.Item>
                            <Breadcrumb.Item>请假系统</Breadcrumb.Item>
                            <Breadcrumb.Item>请假申请</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content className="page-content"  >
                            <Form className="page-content-form newTracklogform" onSubmit={this.handleSearch}>
                                <FormItem
                                    label="请假人员"
                                >
                                    {getFieldDecorator('groupname', {
                                    })(
                                        <Select
                                        >
                                            <Option value="yes">有</Option>
                                            <Option value="no">无</Option>
                                        </Select>
                                    )}
                                </FormItem>
                                <FormItem
                                    label="请假类型"
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
                                    label="请假日期"
                                >
                                    {getFieldDecorator('upgrade', {
                                    })(
                                        <RangePicker />
                                    )}
                                </FormItem>
                                <FormItem
                                    label="请假时长"
                                >
                                    {getFieldDecorator('upgrade', {
                                    })(
                                        <Input />
                                    )}
                                </FormItem>
                                <FormItem
                                    label="请假原因"
                                >
                                    {getFieldDecorator('initupgrade', {
                                    })(
                                        <Input />
                                    )}
                                </FormItem>
                                <FormItem
                                    label="请假状态"
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
                                    label="审批人"
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



                                <Row >
                                    <Button type="primary" htmlType="submit"  >提交</Button>
                                    <Button type="primary" htmlType="submit" style={{ marginLeft: 20, marginTop: 20 }} >返回</Button>
                                </Row>
                            </Form>

                        </Content>
                    </Layout>
                </Layout>

            </Layout>
        );

    }
}
const PersonnelLeaveFrom = Form.create()(PersonnelLeave);


export default PersonnelLeaveFrom;