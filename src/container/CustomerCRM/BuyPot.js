import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import HeaderComponent from '../../components/Header/'
import CustomerMenu from '../../components/Menu/CustomerMenu'
import options from '../../common/utils/address-options';
import { Layout, Cascader, Select, Breadcrumb, Button, Row, Col, Form, Input, } from 'antd';
const Option = Select.Option;
const { Content } = Layout;
const FormItem = Form.Item;
class AddCustomer extends Component {
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
                <HeaderComponent selected={['1']}></HeaderComponent>
                <Layout>
                    <CustomerMenu selected={['1']} />
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>客户管理</Breadcrumb.Item>
                            <Breadcrumb.Item>添加订单</Breadcrumb.Item>
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
                                            label="联系人"
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
                                </Row>
                                <Row>
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
                                    <Col style={{ display: 'inline-block', marginLeft: 10 }}>
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
                                </Row>
                                <Row>
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
                                    <Col style={{ display: 'inline-block', marginLeft: 10 }}>
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

                                <h4 style={{ marginTop: 20 }}>财务信息</h4>
                                <FormItem label="应收款" >
                                    {getFieldDecorator('fromsaler', {
                                        rules: []
                                    })(
                                        <div>
                                            <Input style={{ width: 180 }} />
                                            <span className="form-result-notice">业绩： 1000000</span>
                                        </div>)}
                                </FormItem>
                                <FormItem label="实收款" >
                                    {getFieldDecorator('fromsaler', {
                                        rules: []
                                    })(
                                        <Input style={{ width: 180 }} />

                                    )}
                                </FormItem>
                                <FormItem label="付款方式" >
                                    {getFieldDecorator('fromsaler', {
                                        rules: []
                                    })(
                                        <Select
                                            showSearch
                                            style={{ width: 180, top: 0 }}
                                        >
                                            <Option value="jack">Jack</Option>
                                            <Option value="lucy">Lucy</Option>
                                            <Option value="tom">Tom</Option>
                                        </Select>)}
                                </FormItem>
                                <FormItem label="备注" >
                                    {getFieldDecorator('note', {
                                        rules: []
                                    })(
                                        <Input style={{ width: 180 }} />
                                    )}
                                </FormItem>
                                <Row>
                                    <Button type="primary" htmlType="submit"  >提交保存</Button>
                                    <Button type="primary" htmlType="submit" style={{ marginLeft: 20, marginTop: 20 }} ><Link to='/'>返回上一页</Link></Button>
                                </Row>
                            </Form>
                        </Content>
                    </Layout>
                </Layout>

            </Layout >
        );


    }
}
const AddCustomerFrom = Form.create()(AddCustomer);


export default AddCustomerFrom;