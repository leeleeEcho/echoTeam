import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import HeaderComponent from '../../components/Header/'
import PersonnelMenu from '../../components/Menu/PersonnelMenu'
import { Layout, Select, DatePicker, Upload, Radio, Breadcrumb, Button, Row, Col, Form, Input, Table } from 'antd';
const Option = Select.Option;
const { Content } = Layout;
const { TextArea } = Input;
const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const ButtonGroup = Button.Group;
const { RangePicker } = DatePicker;
const InputGroup = Input.Group;
class PersonnelAction extends Component {
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
                    <PersonnelMenu selected={['1']} openKeys={['sub1']} />
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>人员管理</Breadcrumb.Item>
                            <Breadcrumb.Item>员工花名册</Breadcrumb.Item>
                            <Breadcrumb.Item>添加</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content className="page-content"  >
                            <Form className="page-content-form newTracklogform" onSubmit={this.handleSearch}>
                                <FormItem
                                    label="姓名"
                                >
                                    {getFieldDecorator('groupname', {
                                    })(
                                        <Input />
                                    )}
                                </FormItem>
                                <FormItem
                                    label="性别"
                                >
                                    {getFieldDecorator('grade', {
                                    })(
                                        <RadioGroup >
                                            <Radio value={1}>男</Radio>
                                            <Radio style={{ marginLeft: 40 }} value={2}>女</Radio>
                                        </RadioGroup>
                                    )}
                                </FormItem>
                                <FormItem
                                    label="出生年月"
                                >
                                    {getFieldDecorator('upgrade', {
                                    })(
                                        <DatePicker />
                                    )}
                                </FormItem>
                                <FormItem
                                    label="手机号"
                                >
                                    {getFieldDecorator('upgrade', {
                                    })(
                                        <Input />
                                    )}
                                </FormItem>
                                <FormItem
                                    label="工作号"
                                >
                                    {getFieldDecorator('initupgrade', {
                                    })(
                                        <Input />
                                    )}
                                </FormItem>
                                <FormItem
                                    label="微信二维码"
                                >
                                    {getFieldDecorator('discount', {
                                    })(
                                        <Upload>
                                            <Button>
                                                上传
                                        </Button>
                                        </Upload>
                                    )}
                                </FormItem>
                                <FormItem
                                    label="入职日期"
                                >
                                    {getFieldDecorator('logingroup', {
                                    })(
                                        <DatePicker />
                                    )}
                                </FormItem>
                                <FormItem
                                    label="转正日期"
                                >
                                    {getFieldDecorator('logingroup', {
                                    })(
                                        <DatePicker />
                                    )}
                                </FormItem>
                                <FormItem
                                    label="岗位"
                                >
                                    {getFieldDecorator('initupgrade', {
                                    })(
                                        <Input />
                                    )}
                                </FormItem>
                                <FormItem
                                    label="部门"
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
                                    label="学历"
                                >
                                    {getFieldDecorator('initupgrade', {
                                    })(
                                        <Input />
                                    )}
                                </FormItem>
                                <FormItem
                                    label="毕业学校"
                                >
                                    {getFieldDecorator('initupgrade', {
                                    })(
                                        <Input />
                                    )}
                                </FormItem>
                                <FormItem
                                    label="专业"
                                >
                                    {getFieldDecorator('initupgrade', {
                                    })(
                                        <Input />
                                    )}
                                </FormItem>
                                <FormItem
                                    label="工资标准"
                                >
                                    {getFieldDecorator('initupgrade', {
                                    })(
                                        <Input />
                                    )}
                                </FormItem>
                                <FormItem
                                    label="家庭地址"
                                >
                                    {getFieldDecorator('initupgrade', {
                                    })(
                                        <Input />
                                    )}
                                </FormItem>
                                <FormItem
                                    label="联系电话"
                                >
                                    {getFieldDecorator('initupgrade', {
                                    })(
                                        <Input />
                                    )}
                                </FormItem>
                                <Row >
                                    <Button type="primary" htmlType="submit"  >保存</Button>
                                    <Button type="primary" htmlType="submit" style={{ marginLeft: 20, marginTop: 20 }} ><Link to='/personnellist'>返回</Link></Button>
                                </Row>
                            </Form>

                        </Content>
                    </Layout>
                </Layout>

            </Layout>
        );

    }
}
const PersonnelActionFrom = Form.create()(PersonnelAction);


export default PersonnelActionFrom;