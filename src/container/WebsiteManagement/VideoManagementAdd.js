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
class VideoManagementAdd extends Component {
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
                    <WebsiteMenu selected={['15']} openKeys={['sub12']} />
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>商品列表</Breadcrumb.Item>
                            <Breadcrumb.Item>编辑内容</Breadcrumb.Item>
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
                                                <Input style={{ width: 180 }} />
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
                                                <Input style={{ width: 180 }} />
                                            )}
                                        </FormItem>
                                        <FormItem label="副标题" >
                                            {getFieldDecorator('userstatus', {
                                                rules: []
                                            })(
                                                <Input style={{ width: 180 }} />
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
                                                            <Input placeholder="链接地址" style={{ width: 180 }} />
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
                                        <Row >
                                            <Button type="primary" htmlType="submit"  >保存</Button>
                                            <Button type="primary" htmlType="submit" style={{ marginLeft: 20, marginTop: 20 }} ><Link to='/videomanagement'>返回</Link></Button>
                                        </Row>
                                    </Form>
                                </TabPane>
                                
                                <TabPane tab="扩展选项" key="2">
                                    <Form className="page-content-form newTracklogform" onSubmit={this.handleSearch}>
                                        <FormItem
                                            label="视频上传地址"
                                        >
                                            {getFieldDecorator('type', {
                                            })(
                                                <Input style={{ width: 180 }} />
                                            )}
                                        </FormItem>
                                        <Row >
                                            <Button type="primary" htmlType="submit"  >保存</Button>
                                            <Button type="primary" htmlType="submit" style={{ marginLeft: 20, marginTop: 20 }} ><Link to='/videomanagement'>返回</Link></Button>
                                        </Row>
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
                                            label="URL链接"
                                        >
                                            {getFieldDecorator('status', {
                                            })(
                                                <Input style={{ width: 300 }} />
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
                                            <Button type="primary" htmlType="submit" style={{ marginLeft: 20, marginTop: 20 }} ><Link to='/videomanagement'>返回</Link></Button>
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
                                            label="SEO描述"
                                        >
                                            {getFieldDecorator('status', {
                                            })(
                                                <TextArea style={{ width: 300, verticalAlign: 'text-top' }} rows={4} />
                                            )}
                                        </FormItem>
                                        <Row >
                                            <Button type="primary" htmlType="submit"  >保存</Button>
                                            <Button type="primary" htmlType="submit" style={{ marginLeft: 20, marginTop: 20 }} ><Link to='/videomanagement'>返回</Link></Button>
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
const VideoManagementAddFrom = Form.create()(VideoManagementAdd);


export default VideoManagementAddFrom;