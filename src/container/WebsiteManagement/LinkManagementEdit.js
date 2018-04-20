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
class LinkManagementEdit extends Component {
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
                <HeaderComponent selected={['2']}></HeaderComponent>
                <Layout>
                    <WebsiteMenu selected={['21']} openKeys={['sub15']} />
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>友情链接管理</Breadcrumb.Item>
                            <Breadcrumb.Item>编辑内容</Breadcrumb.Item>
                        </Breadcrumb>

                        <Content className="page-content"  >
                            <Form className="page-content-form newTracklogform" onSubmit={this.handleSearch}>
                                <FormItem
                                    label="标题"
                                >
                                    {getFieldDecorator('type', {
                                    })(
                                        <Input style={{ width: 180 }} />
                                    )}
                                </FormItem>
                                <FormItem
                                    label="是否显示"
                                >
                                    {getFieldDecorator('status', {
                                    })(
                                        <RadioGroup >
                                            <RadioButton value={'0'}>是</RadioButton>
                                            <RadioButton value={'1'}>否</RadioButton>
                                        </RadioGroup>
                                    )}
                                </FormItem>
                                <FormItem label="链接地址" >
                                    {getFieldDecorator('userstatus', {
                                        rules: []
                                    })(
                                        <Input style={{ width: 180 }} />
                                    )}
                                </FormItem>
                                <FormItem label="发布时间">
                                    {getFieldDecorator('nextTime', {
                                        rules: []
                                    })(
                                        <div>
                                            <DatePicker
                                                showTime
                                                format="YYYY-MM-DD HH:mm:ss"
                                            />
                                            <span className="form-result-notice">*自动发布功能，不选择默认当前发布时间</span>
                                        </div>
                                    )}
                                </FormItem>
                                <FormItem label="过期时间">
                                    {getFieldDecorator('nextTime', {
                                        rules: []
                                    })(
                                        <div>
                                            <DatePicker
                                                showTime
                                                format="YYYY-MM-DD HH:mm:ss"
                                            />
                                            <span className="form-result-notice">*不选择 默认不过期</span>
                                        </div>
                                    )}
                                </FormItem>
                                <Row >
                                    <Button type="primary" htmlType="submit"  >保存</Button>
                                    <Button type="primary" htmlType="submit" style={{ marginLeft: 20, marginTop: 20 }} ><Link to='/linkmanagement'>返回</Link></Button>
                                </Row>
                            </Form>
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
const LinkManagementEditFrom = Form.create()(LinkManagementEdit);


export default LinkManagementEditFrom;