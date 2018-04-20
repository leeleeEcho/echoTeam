import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import HeaderComponent from '../../components/Header/'
import OrderMenu from '../../components/Menu/OrderMenu'
import options from '../../common/utils/address-options';
import { Layout, Cascader, Select, Steps, Table, Breadcrumb, Button, Row, Col, Form, Input, } from 'antd';
const Option = Select.Option;
const { Content } = Layout;
const FormItem = Form.Item;
const Step = Steps.Step;
class OrderDetail extends Component {
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
        const dataSource = [{
            key: '0',
            name: 'Edward King 0',
            age: '32',
            address: 'London, Park Lane no. 0',
        }, {
            key: '1',
            name: 'Edward King 1',
            age: '32',
            address: 'London, Park Lane no. 1',
        }]
        const columns = [{
            title: 'name',
            dataIndex: 'name',
            width: '30%',
        }, {
            title: 'age',
            dataIndex: 'age',
        }, {
            title: 'address',
            dataIndex: 'address',
        }, {
            title: 'operation',
            dataIndex: 'operation',
        }];
        return (
            <Layout className="page-layout">
                <HeaderComponent selected={['3']}></HeaderComponent>
                <Layout>
                    <OrderMenu selected={['1']} />
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>订单管理</Breadcrumb.Item>
                            <Breadcrumb.Item>订单详情</Breadcrumb.Item>
                        </Breadcrumb>
                        <h2>订单详细信息</h2>
                        <Content className="page-content"  >
                            <Steps progressDot current={1} style={{ width: '60%', margin: 30 }} >
                                <Step title="Finished" description="This is a description." />
                                <Step title="In Progress" description="This is a description." />
                                <Step title="Waiting" description="This is a description." />
                                <Step title="Waiting" description="This is a description." />
                            </Steps>
                            <Form className="page-content-form newTracklogform" onSubmit={this.handleSearch}>
                                <div>
                                    <h4 style={{ display: 'inline-block', marginRight: 20 }}>订单号</h4>201820193912
                                </div>
                                <div className="form-section-backcolor">
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
                                        <Col style={{ display: 'inline-block', verticalAlign: 'middle', marginLeft: 20 }}>
                                            <Button type="primary" htmlType="submit">修改</Button>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="form-section-backcolor">
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
                                        <Col style={{ marginBottom: 20 }}></Col>

                                    </Row>
                                </div>
                                <div className="form-section-backcolor">
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
                                </div>
                                <div className="form-section-backcolor">
                                    <FormItem label="付款记录" >
                                        {getFieldDecorator('note', {
                                            rules: []
                                        })(
                                            <Table style={{ verticalAlign: 'text-top',display:'inline-block' }} size="small" pagination={false} bordered dataSource={dataSource} columns={columns} />
                                        )}
                                    </FormItem>
                                </div>
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
const OrderDetailFrom = Form.create()(OrderDetail);


export default OrderDetailFrom;