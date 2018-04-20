import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import HeaderComponent from '../../components/Header/'
import CustomerMenu from '../../components/Menu/CustomerMenu'
import { Layout, Radio, Breadcrumb, Button, Row, Form, Input } from 'antd';
const RadioGroup = Radio.Group;
const { Content } = Layout;
const { TextArea } = Input;
const FormItem = Form.Item;
class EmailTemplateAction extends Component {
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
                <HeaderComponent selected={['1']}></HeaderComponent>
                <Layout>
                    <CustomerMenu selected={['10']} openKeys={['sub4']} />
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>客户管理</Breadcrumb.Item>
                            <Breadcrumb.Item>编辑邮件模版</Breadcrumb.Item>
                        </Breadcrumb>
                        <h2>编辑邮件内容</h2>
                        <Content className="page-content"  >
                            <Form className="page-content-form newTracklogform" onSubmit={this.handleSearch}>
                                <FormItem
                                    label="模版标题"
                                >
                                    {getFieldDecorator('templatetitle', {
                                    })(
                                        <Input style={{ width: 180 }} />
                                    )}
                                </FormItem>
                                <FormItem
                                    label="调用别名"
                                >
                                    {getFieldDecorator('name', {
                                    })(
                                        <Input style={{ width: 180 }} />
                                    )}
                                </FormItem>
                                <FormItem
                                    label="邮件标题"
                                >
                                    {getFieldDecorator('emailtitle', {
                                    })(
                                        <Input style={{ width: 180 }} />
                                    )}
                                </FormItem>
                                <FormItem
                                    label="邮件内容"
                                >
                                    {getFieldDecorator('conetent', {
                                    })(
                                        <TextArea style={{ verticalAlign: 'text-top' }} rows={4} />
                                    )}
                                </FormItem>
                                <Row >
                                    <Button type="primary" htmlType="submit"  >保存</Button>
                                    <Button type="primary" htmlType="submit" style={{ marginLeft: 20, marginTop: 20 }} ><Link to='/emailtemplate'>返回</Link></Button>
                                </Row>
                            </Form>

                        </Content>
                    </Layout>
                </Layout>



            </Layout>
        );



    }
}
const EmailTemplateActionFrom = Form.create()(EmailTemplateAction);


export default EmailTemplateActionFrom;