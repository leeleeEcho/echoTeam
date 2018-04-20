import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import HeaderComponent from '../../components/Header/'
import WebsiteMenu from '../../components/Menu/WebsiteMenu'
import options from '../../common/utils/address-options';
import { Layout, Cascader, Select, Steps, Table, Breadcrumb, Button, Row, Col, Form, Input, } from 'antd';
const Option = Select.Option;
const { Content } = Layout;
const FormItem = Form.Item;
const Step = Steps.Step;
class IndentParticulars extends Component {
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
            time: '2018-03-12',
            money: '3200',
            address: '支付宝',
            operation:'发货'
        }, {
            key: '1',
            time: '2018-03-12',
            money: '32114',
            address: '支付宝',
            operation:'发货'
        }]
        const columns = [{
            title: '付款日期',
            dataIndex: 'time',
            width: '20%',
        }, {
            title: '付款金额',
            dataIndex: 'money',
            width: '20%',
        }, {
            title: '付款方式',
            dataIndex: 'address',
            width: '20%',
        }, {
            title: '备注',
            dataIndex: 'operation',
            width: '40%',
        }];
        return (
            <Layout className="page-layout">
                <HeaderComponent selected={['7']}></HeaderComponent>
                <Layout>
                    <WebsiteMenu selected={['4']} openKeys={['sub3']} />
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>订单列表</Breadcrumb.Item>
                            <Breadcrumb.Item>订单详情</Breadcrumb.Item>
                        </Breadcrumb>
                        <h2>订单详细信息</h2>
                        <Content className="page-content"  >
                            <Steps progressDot current={1} style={{ width: '60%', margin: 30 }} >
                                <Step title="已生成" />
                                <Step title="待付款" />
                                <Step title="待发货" />
                                <Step title="待完成" />
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
                                        <Col style={{ display: 'inline-block', marginLeft: 10 }}>
                                            <FormItem
                                                label="优惠价"
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
                                        <Col style={{ display: 'inline-block', marginLeft: 10 }}>
                                            <FormItem
                                                label="优惠价"
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
                                            <div>
                                                <Select
                                                    showSearch
                                                    style={{ width: 180, top: 0 }}
                                                >
                                                    <Option value="jack">Jack</Option>
                                                    <Option value="lucy">Lucy</Option>
                                                    <Option value="tom">Tom</Option>
                                                </Select>
                                                <Input  className="form-result-notice" placeholder="*填写淘宝订单号" style={{ width: 180 }} />
                                            </div>
                                            )}
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
                                <div className="form-section-backcolor">
                                    <h4 style={{ marginTop: 20 }}>快递信息</h4>
                                    <FormItem label="快递公司" >
                                        {getFieldDecorator('fromsaler', {
                                            rules: []
                                        })(
                                            <div>
                                                <Select
                                                    showSearch
                                                    style={{ width: 180, top: 0 }}
                                                >
                                                    <Option value="jack">Jack</Option>
                                                    <Option value="lucy">Lucy</Option>
                                                    <Option value="tom">Tom</Option>
                                                </Select>
                                                <Input  className="form-result-notice" placeholder="单号" style={{ width: 180 }} />
                                            </div>
                                            )}
                                    </FormItem>
                                </div>
                                <Row>
                                    <Button type="primary" htmlType="submit"  >确认付款</Button>
                                    <Button type="primary" htmlType="submit" style={{ marginLeft: 20, marginTop: 20 }} >取消订单</Button>
                                    <Button type="primary" htmlType="submit" style={{ marginLeft: 20, marginTop: 20 }} ><Link to='/indentdetails'>返回</Link></Button>
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
const IndentParticularsFrom = Form.create()(IndentParticulars);


export default IndentParticularsFrom;