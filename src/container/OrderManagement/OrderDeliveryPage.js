import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import HeaderComponent from '../../components/Header/'
import OrderMenu from '../../components/Menu/OrderMenu'
import options from '../../common/utils/address-options';
import { Layout, Cascader, Select, Breadcrumb, Button, Row, Col, Form, Input, } from 'antd';
const Option = Select.Option;
const { Content } = Layout;
const FormItem = Form.Item;
class OrderDeliveryPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    handleSearch = (e) => {
        e.preventDefault()
        this.props.form.validateFields([
            'name',

        ], (err, values) => {
            console.log(values)
        })
    }

    render() {
        let me = this;
        const { getFieldDecorator } = me.props.form;

        return (
            <Layout className="page-layout">
                <HeaderComponent selected={['3']}></HeaderComponent>
                <Layout>
                    <OrderMenu selected={['1']} />
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>订单管理</Breadcrumb.Item>
                            <Breadcrumb.Item>发货</Breadcrumb.Item>
                        </Breadcrumb>
                        <h2>订单详细信息</h2>
                        <Content className="page-content"  >
                            <Form className="page-content-form newTracklogform" onSubmit={this.handleSearch}>
                                <div>
                                    <h4 style={{ display: 'inline-block', marginRight: 20 }}>订单号</h4>201820193912
                                </div>
                                <h4 style={{ marginTop: 20 }}>用户信息</h4>
                                <Row>
                                    <Col style={{ display: 'inline-block' }}>
                                        <FormItem
                                            label="用户名"
                                        >
                                            {getFieldDecorator('defaultusername', {
                                            })(
                                                <Input style={{ width: 180 }} />
                                            )}
                                        </FormItem>

                                    </Col>
                                    <Col style={{ display: 'inline-block', marginLeft: 10 }}>
                                        <FormItem
                                            label="联系方式"
                                        >
                                            {getFieldDecorator('defaultphone', {
                                            })(
                                                <Input style={{ width: 180 }} />
                                            )}
                                        </FormItem>
                                    </Col>

                                </Row>
                                <Row>
                                    <Col style={{ display: 'inline-block' }}>
                                        <FormItem
                                            label="地址"
                                        >
                                            {getFieldDecorator('address', {
                                            })(
                                                <Cascader placeholder="请选择地址" options={options} style={{ width: 350, top: 0 }} />
                                            )}
                                        </FormItem>

                                    </Col>
                                    <Col style={{ display: 'inline-block', marginLeft: 10 }}>
                                        <FormItem
                                        >
                                            {getFieldDecorator('addressdetail', {
                                            })(
                                                <Input style={{ width: 300 }} />
                                            )}
                                        </FormItem>
                                    </Col>
                                </Row>
                                <br />
                                <Row>
                                    <Col style={{ display: 'inline-block' }}>
                                        <FormItem
                                            label="用户名"
                                        >
                                            {getFieldDecorator('defaultusername', {
                                            })(
                                                <Input style={{ width: 180 }} />
                                            )}
                                        </FormItem>

                                    </Col>
                                    <Col style={{ display: 'inline-block', marginLeft: 10 }}>
                                        <FormItem
                                            label="联系方式"
                                        >
                                            {getFieldDecorator('defaultphone', {
                                            })(
                                                <Input style={{ width: 180 }} />
                                            )}
                                        </FormItem>
                                    </Col>

                                </Row>
                                <Row>
                                    <Col style={{ display: 'inline-block' }}>
                                        <FormItem
                                            label="地址"
                                        >
                                            {getFieldDecorator('address', {
                                            })(
                                                <Cascader placeholder="请选择地址" options={options} style={{ width: 350, top: 0 }} />
                                            )}
                                        </FormItem>

                                    </Col>
                                    <Col style={{ display: 'inline-block', marginLeft: 10 }}>
                                        <FormItem
                                        >
                                            {getFieldDecorator('addressdetail', {
                                            })(
                                                <Input style={{ width: 300 }} />
                                            )}
                                        </FormItem>
                                    </Col>
                                </Row>
                                <h4 style={{ marginTop: 20 }}>商品信息</h4>
                                <Row>
                                    <Col style={{ display: 'inline-block' }}>
                                        <FormItem
                                            label="商品编号"
                                        >
                                            {getFieldDecorator('phone1', {
                                            })(
                                                <Input style={{ width: 180 }} />
                                            )}
                                        </FormItem>

                                    </Col>
                                    <Col style={{ display: 'inline-block', marginLeft: 10 }}>
                                        <FormItem
                                            label="销售价"
                                        >
                                            {getFieldDecorator('phone2', {
                                            })(
                                                <Input style={{ width: 180 }} />
                                            )}
                                        </FormItem>
                                    </Col>
                                    <Col style={{ display: 'inline-block' }}>
                                        <FormItem
                                            label="作者"
                                        >
                                            {getFieldDecorator('phone4', {
                                            })(
                                                <Input style={{ width: 180 }} />
                                            )}
                                        </FormItem>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col style={{ display: 'inline-block' }}>
                                        <FormItem
                                            label="壶名"
                                        >
                                            {getFieldDecorator('phone5', {
                                            })(
                                                <Input style={{ width: 180 }} />
                                            )}
                                        </FormItem>
                                    </Col>
                                    <Col style={{ display: 'inline-block', marginLeft: 10 }}>
                                        <FormItem
                                            label="数量"
                                        >
                                            {getFieldDecorator('phone5', {
                                            })(
                                                <Input style={{ width: 180 }} />
                                            )}
                                        </FormItem>
                                    </Col>
                                    <Col style={{ display: 'inline-block', verticalAlign: 'middle', marginLeft: 20 }}>
                                        <Button type="primary" htmlType="submit">添加</Button>
                                    </Col>
                                    <Col style={{ marginBottom: 20 }}></Col>

                                </Row>




                                <Row>
                                    <Col style={{ display: 'inline-block' }}>
                                        <FormItem
                                            label="赠品编号"
                                        >
                                            {getFieldDecorator('phone1', {
                                            })(
                                                <Input style={{ width: 180 }} />
                                            )}
                                        </FormItem>

                                    </Col>
                                    <Col style={{ display: 'inline-block', marginLeft: 10 }}>
                                        <FormItem
                                            label="销售价"
                                        >
                                            {getFieldDecorator('phone2', {
                                            })(
                                                <Input style={{ width: 180 }} />
                                            )}
                                        </FormItem>
                                    </Col>
                                    <Col style={{ display: 'inline-block' }}>
                                        <FormItem
                                            label="作者"
                                        >
                                            {getFieldDecorator('phone4', {
                                            })(
                                                <Input style={{ width: 180 }} />
                                            )}
                                        </FormItem>
                                    </Col>
                                </Row>
                                <Row>

                                    <Col style={{ display: 'inline-block' }}>
                                        <FormItem
                                            label="壶名"
                                        >
                                            {getFieldDecorator('phone5', {
                                            })(
                                                <Input style={{ width: 180 }} />
                                            )}
                                        </FormItem>
                                    </Col>
                                    <Col style={{ display: 'inline-block', marginLeft: 10 }}>
                                        <FormItem
                                            label="数量"
                                        >
                                            {getFieldDecorator('phone5', {
                                            })(
                                                <Input style={{ width: 180 }} />
                                            )}
                                        </FormItem>
                                    </Col>
                                    <Col style={{ display: 'inline-block', verticalAlign: 'middle', marginLeft: 20 }}>
                                        <Button type="primary" htmlType="submit">添加</Button>
                                    </Col>
                                    <Col style={{ marginBottom: 20 }}></Col>

                                </Row>

                                <h4 style={{ marginTop: 20 }}>快递信息</h4>
                                <Row>
                                    <Col style={{ display: 'inline-block' }}>
                                        <FormItem
                                            label="快递"
                                        >
                                            {getFieldDecorator('phone5', {
                                            })(
                                                <Select
                                                    style={{ width: 180, top: 0 }}
                                                >
                                                    <Option value="yes">有</Option>
                                                    <Option value="no">无</Option>
                                                </Select>
                                            )}
                                        </FormItem>
                                    </Col>
                                    <Col style={{ display: 'inline-block', marginLeft: 10 }}>
                                        <FormItem
                                            label="单号"
                                        >
                                            {getFieldDecorator('phone5', {
                                            })(
                                                <Input style={{ width: 300 }} />
                                            )}
                                        </FormItem>
                                    </Col>
                                </Row>
                                <Row>
                                    <Button type="primary" htmlType="submit"  >确认发货</Button>
                                    <Button type="primary" htmlType="submit" onClick={goBack} style={{ marginLeft: 20, marginTop: 20 }} >取消</Button>
                                </Row>
                            </Form>
                        </Content>
                    </Layout>
                </Layout>

            </Layout >
        );

        function goBack() {
            window.history.go(-1)
        }
    }
}
const OrderDeliveryPageFrom = Form.create()(OrderDeliveryPage);


export default OrderDeliveryPageFrom;