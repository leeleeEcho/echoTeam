import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import HeaderComponent from '../../components/Header/'
import WebsiteMenu from '../../components/Menu/WebsiteMenu'
import { Radio, Checkbox, Layout, Select, Tabs, Modal, DatePicker, message, Breadcrumb, Button, Row, Col, Form, Input, Table, TreeSelect  } from 'antd';
const Option = Select.Option;
const { Content } = Layout;
const { TextArea } = Input;
const FormItem = Form.Item;
const ButtonGroup = Button.Group;
const InputGroup = Input.Group;
const TreeNode = TreeSelect.TreeNode;
const TabPane = Tabs.TabPane;
const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;
const CheckboxButton = Checkbox.Button;
const CheckboxGroup = Checkbox.Group;
class Automatic extends Component {
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
                    <WebsiteMenu selected={['8']} openKeys={['sub5']} />
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
                                                <TreeSelect
                                                    style={{ width: 300 }}
                                                    value={this.state.value}
                                                    dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                                                    placeholder="所有类别"
                                                    allowClear
                                                    treeDefaultExpandAll
                                                    onChange={this.onChange}
                                                >
                                                    <TreeNode value="网站新闻" title="网站新闻" key="0-1">
                                                        <TreeNode value="1" title="店长推荐" key="1" />
                                                        <TreeNode value="2" title="公告中心" key="2" />
                                                        <TreeNode value="3" title="购物指南" key="3" />
                                                        <TreeNode value="4" title="售后服务" key="4" />
                                                        <TreeNode value="5" title="商城保障" key="5" />
                                                        <TreeNode value="6" title="上家服务" key="6" />
                                                    </TreeNode>
                                                    <TreeNode value="行业咨询" title="行业咨询" key="0-1">
                                                        <TreeNode value="7" title="紫砂壶名家" key="7m" />
                                                        <TreeNode value="8" title="紫砂泥料" key="8" />
                                                        <TreeNode value="9" title="匠心工艺" key="9" />
                                                        <TreeNode value="10" title="禅茶一味" key="10" />
                                                        <TreeNode value="11" title="名家壶艺" key="11" />
                                                        <TreeNode value="12" title="壶中天地" key="12" />
                                                    </TreeNode>
                                                </TreeSelect>
                                            )}
                                        </FormItem>
                                        <FormItem
                                            label="显示状态"
                                        >
                                            {getFieldDecorator('status', {
                                            })(
                                                <RadioGroup >
                                                    <RadioButton value={'0'}>显示</RadioButton>
                                                    <RadioButton value={'1'}>不显示</RadioButton>
                                                    <span className="form-result-notice">*可售状态可以在网站显示出来</span>
                                                </RadioGroup>
                                            )}
                                        </FormItem>
                                        <FormItem label="内容标题" >
                                            {getFieldDecorator('userstatus', {
                                                rules: []
                                            })(
                                                <Input style={{ width: 300 }} />
                                            )}
                                        </FormItem>
                                        <Row>
                                            <Col style={{ display: 'inline-block' }}>
                                                <FormItem
                                                    label="封面图片"
                                                >
                                                    {getFieldDecorator('phone1', {
                                                    })(
                                                        <div>
                                                            <Input placeholder="链接地址" style={{ width: 300 }} />
                                                            <Button style={{ marginLeft: 20 }} type="primary" htmlType="submit"  >浏览</Button>
                                                        </div>
                                                    )}
                                                </FormItem>

                                            </Col>
                                        </Row>
                                        <FormItem label="发布时间">
                                            {getFieldDecorator('nextTime', {
                                                rules: []
                                            })(<DatePicker
                                                showTime
                                                format="YYYY-MM-DD HH:mm:ss"
                                            />)}
                                        </FormItem>
                                    </Form>
                                </TabPane>
                                
                                <TabPane tab="详细描述" key="3">
                                    <Form className="page-content-form newTracklogform" onSubmit={this.handleSearch}>
                                        <FormItem
                                            label="调用别名"
                                        >
                                            {getFieldDecorator('status', {
                                            })(
                                                <Input style={{ width: 300 }} />
                                            )}
                                        </FormItem>
                                        <FormItem
                                            label="采集链接"
                                        >
                                            {getFieldDecorator('status', {
                                            })(
                                                <div>
                                                    <Input placeholder="链接地址" style={{ width: 300 }} />
                                                    <Button style={{ marginLeft: 20 }} type="primary" htmlType="submit"  >保存</Button>
                                                </div>
                                            )}
                                        </FormItem>
                                        <FormItem
                                            label="SEO关键字"
                                        >
                                            {getFieldDecorator('status', {
                                            })(
                                                <TextArea style={{ width: 300, verticalAlign: 'text-top' }} rows={4} />
                                            )}
                                        </FormItem>
                                        <FormItem
                                            label="内容摘要"
                                        >
                                            {getFieldDecorator('status', {
                                            })(
                                                <TextArea style={{ width: 300, verticalAlign: 'text-top' }} rows={4} />
                                            )}
                                        </FormItem>
                                        <FormItem
                                            label="内容描述"
                                        >
                                            {getFieldDecorator('status', {
                                            })(
                                                <TextArea style={{ width: 300, verticalAlign: 'text-top' }} rows={4} />
                                            )}
                                        </FormItem>
                                        <Row >
                                            <Button type="primary" htmlType="submit"  >保存</Button>
                                            <Button type="primary" htmlType="submit" style={{ marginLeft: 20, marginTop: 20 }} ><Link to='/articlemanagement'>返回</Link></Button>
                                        </Row>
                                    </Form>
                                </TabPane>
                                <TabPane tab="SEO选项" key="4">
                                    <Form className="page-content-form newTracklogform" onSubmit={this.handleSearch}>
                                        <FormItem
                                            label="SEO标题"
                                        >
                                            {getFieldDecorator('status', {
                                            })(
                                                <Input style={{ width: 300 }} />
                                            )}
                                        </FormItem>
                                        <FormItem
                                            label="信息来源"
                                        >
                                            {getFieldDecorator('status', {
                                            })(
                                                <Input style={{ width: 300 }} />
                                            )}
                                        </FormItem>
                                        <FormItem
                                            label="作者"
                                        >
                                            {getFieldDecorator('status', {
                                            })(
                                                <Input style={{ width: 300 }} />
                                            )}
                                        </FormItem>
                                        <FormItem
                                            label="SEO描述"
                                        >
                                            {getFieldDecorator('status', {
                                            })(
                                                <TextArea style={{ width: 300, verticalAlign: 'text-top' }} rows={4} />
                                            )}
                                        </FormItem>
                                        <Row >
                                            <Button type="primary" htmlType="submit"  >保存</Button>
                                            <Button type="primary" htmlType="submit" style={{ marginLeft: 20, marginTop: 20 }} ><Link to='/articlemanagement'>返回</Link></Button>
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
const AutomaticFrom = Form.create()(Automatic);


export default AutomaticFrom;