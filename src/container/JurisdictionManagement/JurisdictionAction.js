import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import HeaderComponent from '../../components/Header/'
import JurisdictionMenu from '../../components/Menu/JurisdictionMenu'
import { Layout, Select, DatePicker, Breadcrumb, Button, Row, Col, Form, Input, Table, Switch, Radio } from 'antd';
const Option = Select.Option;
const { Content } = Layout;
const { TextArea } = Input;
const FormItem = Form.Item;
const ButtonGroup = Button.Group;
const { RangePicker } = DatePicker;
const InputGroup = Input.Group;
const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;
class JurisdictionAction extends Component {
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

        return (
            <Layout className="page-layout">
                <HeaderComponent selected={['6']}></HeaderComponent>
                <Layout>
                    <JurisdictionMenu selected={['1']} openKeys={['sub1']} />
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>权限管理</Breadcrumb.Item>
                            <Breadcrumb.Item>用户编辑</Breadcrumb.Item>
                        </Breadcrumb>
                        <Form className="page-content-form newTracklogform" onSubmit={this.handleSearch}>
                            <FormItem
                                label="角色"
                            >
                                {getFieldDecorator('type', {
                                })(
                                    <Select
                                    onChange={handleChange}
                                    size="large"
                                    placeholder="请选择角色"
                                >
                                    <Option value="you">管理员</Option>
                                    <Option value="lucy1">销售部</Option>
                                    <Option value="lucy2">运营部</Option>
                                    <Option value="lucy3">财务部</Option>
                                    <Option value="lucy4">行政部</Option>
                                    <Option value="lucy5">测试</Option>
                                </Select>
                                )}
                            </FormItem>
                            <FormItem
                                label="是否启用"
                            >
                                {getFieldDecorator('status', {
                                })(
                                    <RadioGroup >
                                        <RadioButton value={'0'}>是</RadioButton>
                                        <RadioButton value={'1'}>否</RadioButton>
                                    </RadioGroup>
                                )}
                            </FormItem>
                            <FormItem label="用户名" >
                                {getFieldDecorator('userstatus', {
                                    rules: []
                                })(
                                    <Input style={{ width: 180 }} />
                                )}
                            </FormItem>
                            <FormItem
                                label="登录密码"
                            >
                                {getFieldDecorator('status', {
                                })(
                                    <Input style={{ width: 180 }} />
                                )}
                            </FormItem>
                            <FormItem
                                label="确认密码"
                            >
                                {getFieldDecorator('status', {
                                })(
                                    <Input style={{ width: 180 }} />
                                )}
                            </FormItem>
                            <Row>
                                <Col style={{ display: 'inline-block' }}>
                                    <FormItem
                                        label="姓名"
                                    >
                                        {getFieldDecorator('phone1', {
                                        })(
                                            <Input style={{ width: 180 }} />
                                        )}
                                    </FormItem>

                                </Col>
                            </Row>
                            <FormItem
                                label="邮箱"
                            >
                                {getFieldDecorator('status', {
                                })(
                                    <Input style={{ width: 180 }} />
                                )}
                            </FormItem>
                            <Row >
                                <Button type="primary" htmlType="submit"  >保存</Button>
                                <Button type="primary" htmlType="submit" style={{ marginLeft: 20, marginTop: 20 }} ><Link to='/jurisdictionlist'>返回</Link></Button>
                            </Row>
                        </Form>
                    </Layout>
                </Layout>

            </Layout>
        );
        function handleChange() {

        }
    }
}
const JurisdictionActionFrom = Form.create()(JurisdictionAction);


export default JurisdictionActionFrom;