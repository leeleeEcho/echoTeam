import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import HeaderComponent from '../../components/Header/'
import WebsiteMenu from '../../components/Menu/WebsiteMenu'
import { Radio, Checkbox, Layout, Select, Tabs, Modal, DatePicker, message, Breadcrumb, Button, Row, Col, Form, Input, Table } from 'antd';
const Option = Select.Option;
const { Content } = Layout;
const { TextArea } = Input;
const FormItem = Form.Item;
const ButtonGroup = Button.Group;
const InputGroup = Input.Group;
const TabPane = Tabs.TabPane;
const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;
const CheckboxButton = Checkbox.Button;
const CheckboxGroup = Checkbox.Group;
class ColumnListEdit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }

    render() {
        let me = this;
        const { getFieldDecorator } = me.props.form;

        return (
            <Layout className="page-layout">
                <HeaderComponent selected={['7']}></HeaderComponent>
                <Layout>
                    <WebsiteMenu selected={['2']} />
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>内容管理</Breadcrumb.Item>
                            <Breadcrumb.Item>编辑分类</Breadcrumb.Item>
                        </Breadcrumb>

                        <Content className="page-content"  >
                            <Tabs defaultActiveKey="1" onChange={callback}>
                                <TabPane tab="基本信息" key="1">
                                    <Form className="page-content-form newTracklogform" onSubmit={this.handleSearch}>
                                        <FormItem
                                            label="所属类别"
                                        >
                                            {getFieldDecorator('type', {
                                            })(
                                            <div>
                                                <Select size="large" style={{width:350}}>
                                                    <Option value="yes">紫砂大师</Option>
                                                    <Option value="no">胡洪明</Option>
                                                </Select>
                                                <span className="form-result-notice">*只显示上级类别</span>
                                            </div>
                                            )}
                                        </FormItem>
                                        <FormItem
                                            label="类别名称"
                                        >
                                            {getFieldDecorator('status', {
                                            })(
                                                <Input style={{ width: 350 }} />
                                            )}
                                        </FormItem>
                                        <FormItem label="调用别名" >
                                            {getFieldDecorator('userstatus', {
                                                rules: []
                                            })(
                                                <Input style={{ width: 350 }} />
                                            )}
                                        </FormItem>
                                        <FormItem
                                            label="SEO标题"
                                        >
                                            {getFieldDecorator('status', {
                                            })(
                                                <Input style={{ width: 350 }} />
                                            )}
                                        </FormItem>
                                        <FormItem
                                            label="SEO关键字"
                                        >
                                            {getFieldDecorator('status', {
                                            })(
                                                <TextArea  placeholder="" style={{ width: 800, verticalAlign: 'text-top' }} rows={8} />
                                            )}
                                        </FormItem>
                                        <Row>
                                            <Col style={{ display: 'inline-block' }}>
                                                <FormItem
                                                    label="SEO描述"
                                                >
                                                    {getFieldDecorator('phone1', {
                                                    })(
                                                        <TextArea  placeholder="" style={{ width: 800, verticalAlign: 'text-top' }} rows={8} />
                                                    )}
                                                </FormItem>

                                            </Col>
                                        </Row>
                                        <Row >
                                            <Button type="primary" htmlType="submit"  >保存</Button>
                                            <Button type="primary" htmlType="submit" style={{ marginLeft: 20, marginTop: 20 }} ><Link to='/columnlist'>返回</Link></Button>
                                        </Row>
                                    </Form>
                                </TabPane>
                                <TabPane tab="拓展选项" key="2">
                                    <Form className="page-content-form newTracklogform" onSubmit={this.handleSearch}>
                                        <FormItem
                                            label="职称"
                                        >
                                            {getFieldDecorator('type', {
                                            })(
                                                <Select size="large" style={{width:350}}>
                                                    <Option value="1">国家级研究员级高级工艺美术师</Option>
                                                    <Option value="2">国家级高级工艺美术师</Option>
                                                    <Option value="3">国家级工艺美术师</Option>
                                                    <Option value="4">国家级助理工艺美术师</Option>
                                                    <Option value="5">国家级工艺美术员</Option>
                                                    <Option value="6">陶艺艺人</Option>
                                                    <Option value="7">中青年实力派</Option>
                                                    <Option value="8">历代名家</Option>
                                                </Select>
                                            )}
                                        </FormItem>
                                        <FormItem label="荣誉" >
                                            {getFieldDecorator('userstatus', {
                                                rules: []
                                            })(<Input style={{ width: 350 }} />)}
                                        </FormItem>
                                        <FormItem
                                            label="显示图片"
                                        >
                                            {getFieldDecorator('phone1', {
                                            })(
                                                <div>
                                                    <Input placeholder="链接地址" style={{ width: 350 }} />
                                                    <Button style={{ marginLeft: 20 }} type="primary" htmlType="submit"  >浏览</Button>
                                                </div>
                                            )}
                                        </FormItem>
                                        <FormItem
                                            label="类别介绍"
                                        >
                                            {getFieldDecorator('status', {
                                            })(
                                                <TextArea  placeholder="" style={{ width: 800, verticalAlign: 'text-top' }} rows={8} />
                                            )}
                                        </FormItem>
                                        <Row >
                                            <Button type="primary" htmlType="submit"  >保存</Button>
                                            <Button type="primary" htmlType="submit" style={{ marginLeft: 20, marginTop: 20 }} ><Link to='/columnlist'>返回</Link></Button>
                                        </Row>
                                    </Form>

                                </TabPane>
                            </Tabs>
                        </Content>
                    </Layout>
                </Layout>



            </Layout>
        );
        function callback(key) {
            console.log(key);
        }

    }
}
const ColumnListEditFrom = Form.create()(ColumnListEdit);


export default ColumnListEditFrom;