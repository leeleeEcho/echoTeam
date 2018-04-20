import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import HeaderComponent from '../../components/Header/'
import CustomerMenu from '../../components/Menu/CustomerMenu'
import { Layout, Radio, Breadcrumb, Button, Row, Form, Input } from 'antd';
const RadioGroup = Radio.Group;
const { Content } = Layout;
const FormItem = Form.Item;
class CustomerGroupAction extends Component {
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
                    <CustomerMenu selected={['3']} />
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>客户管理</Breadcrumb.Item>
                            <Breadcrumb.Item>新增组别</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content className="page-content"  >
                            <Form className="page-content-form newTracklogform" onSubmit={this.handleSearch}>
                                <FormItem
                                    label="组别名称"
                                >
                                    {getFieldDecorator('groupname', {
                                    })(
                                        <Input />
                                    )}
                                </FormItem>
                                <FormItem
                                    label="等级值"
                                >
                                    {getFieldDecorator('grade', {
                                    })(
                                        <Input />
                                    )}
                                </FormItem>
                                <FormItem
                                    label="升级积分"
                                >
                                    {getFieldDecorator('upgrade', {
                                    })(
                                        <Input />
                                    )}
                                </FormItem>
                                <FormItem
                                    label="初始金额"
                                >
                                    {getFieldDecorator('initprice', {
                                    })(
                                        <Input />
                                    )}
                                </FormItem>
                                <FormItem
                                    label="初始积分"
                                >
                                    {getFieldDecorator('initupgrade', {
                                    })(
                                        <Input />
                                    )}
                                </FormItem>
                                <FormItem
                                    label="购物折扣"
                                >
                                    {getFieldDecorator('discount', {
                                    })(
                                        <Input />
                                    )}
                                </FormItem>
                                <FormItem
                                    label="注册组"
                                >
                                    {getFieldDecorator('logingroup', {
                                    })(
                                        <Input />
                                    )}
                                </FormItem>
                                <FormItem
                                    label="状态"
                                >
                                    {getFieldDecorator('status', {
                                    })(
                                        <RadioGroup >
                                            <Radio value={'open'}>启用</Radio>
                                            <Radio value={'close'}>关闭</Radio>
                                        </RadioGroup>
                                    )}
                                </FormItem>


                                <Row >
                                    <Button type="primary" htmlType="submit"  >保存</Button>
                                    <Button type="primary" htmlType="submit" style={{ marginLeft: 20, marginTop: 20 }} ><Link to='/customergroup'>返回</Link></Button>
                                </Row>
                            </Form>

                        </Content>
                    </Layout>
                </Layout>



            </Layout>
        );



    }
}
const CustomerGroupActionFrom = Form.create()(CustomerGroupAction);


export default CustomerGroupActionFrom;