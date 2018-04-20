import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import HeaderComponent from '../../components/Header/'
import CustomerMenu from '../../components/Menu/CustomerMenu'
import { Layout, Radio, Select, DatePicker, Breadcrumb, Button, Row, Col, Form, Input, Table } from 'antd';
const Option = Select.Option;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const { Content } = Layout;
const { TextArea } = Input;
const FormItem = Form.Item;
class SendMessage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            status: '0'
        }
    }
    onSelect = (e) => {
        console.log(e)
        let status = e.target.value;
        this.setState({
            status
        })
    }
    render() {
        let me = this;
        const { getFieldDecorator } = me.props.form;

        return (
            <Layout className="page-layout">
                <HeaderComponent selected={['1']}></HeaderComponent>
                <Layout>
                    <CustomerMenu selected={['6']} openKeys={['sub3']} />
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>客户管理</Breadcrumb.Item>
                            <Breadcrumb.Item>短信通知</Breadcrumb.Item>
                        </Breadcrumb>

                        <Content className="page-content"  >
                            <h2>批量短信通知</h2>
                            <Form className="page-content-form newTracklogform" onSubmit={this.handleSearch}>
                                <FormItem
                                    label="用户名"
                                >
                                    {getFieldDecorator('defaultusername', {
                                        initialValue: me.state.status
                                    })(
                                        <RadioGroup onChange={this.onSelect}>
                                            <RadioButton value="0">手动输入</RadioButton>
                                            <RadioButton value="1">批量通知</RadioButton>
                                        </RadioGroup>
                                    )}
                                </FormItem>
                                {
                                    me.state.status == '0' ?
                                        <div>
                                            <FormItem
                                                label="手机号码"
                                            >
                                                {getFieldDecorator('phonenumber', {
                                                })(
                                                    <TextArea placeholder="多个手机号码以英文“,”分隔开" style={{ width: 800, verticalAlign: 'text-top' }} rows={8} />
                                                )}
                                            </FormItem>
                                            <FormItem
                                                label="短信内容"
                                            >
                                                {getFieldDecorator('message', {
                                                })(
                                                    <TextArea placeholder="长短信按62个字符每条短信扣取" style={{ width: 800, verticalAlign: 'text-top' }} rows={8} />


                                                )}
                                            </FormItem>
                                        </div>
                                        :
                                        <div>
                                            <FormItem
                                                label="会员组别"
                                            >
                                                {getFieldDecorator('defaultphone', {
                                                    initialValue: '0'
                                                })(
                                                    <RadioGroup >
                                                        <RadioButton value="0">普通会员</RadioButton>
                                                        <RadioButton value="1">VIP</RadioButton>
                                                        <RadioButton value="2">SVIP</RadioButton>
                                                    </RadioGroup>
                                                )}
                                            </FormItem>
                                            <FormItem
                                                label="短信内容"
                                            >
                                                {getFieldDecorator('message', {
                                                })(
                                                    <TextArea placeholder="长短信按62个字符每条短信扣取" style={{ width: 800, verticalAlign: 'text-top' }} rows={8} />


                                                )}
                                            </FormItem>
                                        </div>


                                }
                                <Row style={{ marginLeft: 110, marginTop: 50 }} >
                                    <Button type="primary" htmlType="submit"  >发送</Button>
                                </Row>


                            </Form>
                        </Content>
                    </Layout>
                </Layout>



            </Layout >
        );



    }
}
const SendMessageFrom = Form.create()(SendMessage);


export default SendMessageFrom;