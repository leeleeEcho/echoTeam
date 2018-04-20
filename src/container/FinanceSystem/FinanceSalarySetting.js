import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import HeaderComponent from '../../components/Header/'
import FinanceMenu from '../../components/Menu/FinanceMenu'
import { Layout, Select, Modal, DatePicker, message, Breadcrumb, Button, Row, Col, Form, Input, Table, Card, Icon, Avatar, Radio,InputNumber  } from 'antd';
const { Content } = Layout;
const ButtonGroup = Button.Group;
const FormItem = Form.Item;
const Option = Select.Option;
const { Meta } = Card;

class FinanceSalarySetting extends Component {
    constructor(props) {
        super(props)
        this.state = {
            curPage: 1,
            limit: 10,
            offset: 0,
            disabled: true
        }
    }
    save = () => {
        this.setState({
            disabled: true,
        });
    }
    edit = () => {
        this.setState({
            disabled: false,
        });
    }
    render() {
        let me = this;
        const { getFieldDecorator } = me.props.form;

        return (
            <Layout className="page-layout">
                <HeaderComponent selected={['4']}></HeaderComponent>
                <Layout>
                    <FinanceMenu selected={['9']} openKeys={['sub3']} />
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>财务系统</Breadcrumb.Item>
                            <Breadcrumb.Item>人员工资计算</Breadcrumb.Item>
                        </Breadcrumb>
                        
                        <div className="form-section-backcolor">
                            <div className="page-top-button page-content-form" >
                                <Select
                                    style={{ width: 150 }}
                                    onChange={handleChange}
                                    placeholder="销售部门"
                                >
                                    <Option value="you"> AA</Option>
                                    <Option value="lucy">BB</Option>
                                    <Option value="lucy">CC</Option>
                                    <Option value="lucy">dd</Option>
                                </Select>
                                <Select
                                    style={{ width: 150, marginLeft: 20 }}
                                    onChange={handleChange}
                                    placeholder="销售人员"
                                >
                                    <Option value="you"> AA</Option>
                                    <Option value="lucy">BB</Option>
                                    <Option value="lucy">CC</Option>
                                    <Option value="lucy">dd</Option>
                                </Select>
                            </div>
                                <Row>
                                    <Col>
                                        <FormItem label="基本工资" labelCol={{ span: 1 }} wrapperCol={{ span: 23 }}>
                                            {getFieldDecorator('orderid', {
                                            })(
                                                <Row>
                                                    <Col span={6}>
                                                        <InputNumber disabled={this.state.disabled} defaultValue={4500} style={{width:180}} />
                                                    </Col>
                                                    <Col span={18}>
                                                        <Button onClick={this.save} type="primary">保存</Button>
                                                        <Button style={{marginLeft:20}} onClick={this.edit} type="primary">修改</Button>
                                                    </Col>
                                                </Row>
                                            )}
                                        </FormItem>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <FormItem label="提成比例" labelCol={{ span: 1 }} wrapperCol={{ span: 23 }}>
                                            {getFieldDecorator('orderid', {
                                            })(
                                                <Row>
                                                    <Col span={6}>
                                                        <InputNumber disabled={this.state.disabled} defaultValue={'3%'} style={{width:90}} />
                                                        <InputNumber disabled={this.state.disabled} defaultValue={0} style={{width:90,marginLeft:30}} />
                                                        <InputNumber disabled={this.state.disabled} defaultValue={3000} style={{width:90,marginLeft:50}} />
                                                    </Col>
                                                    <Col span={18}>
                                                        <Button onClick={this.save} type="primary">保存</Button>
                                                        <Button style={{marginLeft:20}} onClick={this.edit} type="primary">修改</Button>
                                                    </Col>
                                                </Row>
                                            )}
                                        </FormItem>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <FormItem label=" " colon={false} labelCol={{ span: 1 }} wrapperCol={{ span: 23 }}>
                                            {getFieldDecorator('orderid', {
                                            })(
                                                <Row>
                                                    <Col span={6}>
                                                        <InputNumber disabled={this.state.disabled} defaultValue={'3%'} style={{width:90}} />
                                                        <InputNumber disabled={this.state.disabled} defaultValue={0} style={{width:90,marginLeft:30}} />
                                                        <InputNumber disabled={this.state.disabled} defaultValue={3000} style={{width:90,marginLeft:50}} />
                                                    </Col>
                                                    <Col span={18}>
                                                        <Button onClick={this.save} type="primary">保存</Button>
                                                        <Button style={{marginLeft:20}} onClick={this.edit} type="primary">修改</Button>
                                                    </Col>
                                                </Row>
                                            )}
                                        </FormItem>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <FormItem label=" " colon={false} labelCol={{ span: 1 }} wrapperCol={{ span: 23 }}>
                                            {getFieldDecorator('orderid', {
                                            })(
                                                <Row>
                                                    <Col span={6}>
                                                        <InputNumber disabled={this.state.disabled} defaultValue={'3%'} style={{width:90}} />
                                                        <InputNumber disabled={this.state.disabled} defaultValue={0} style={{width:90,marginLeft:30}} />
                                                        <InputNumber disabled={this.state.disabled} defaultValue={3000} style={{width:90,marginLeft:50}} />
                                                    </Col>
                                                    <Col span={18}>
                                                        <Button onClick={this.save} type="primary">保存</Button>
                                                        <Button style={{marginLeft:20}} onClick={this.edit} type="primary">修改</Button>
                                                    </Col>
                                                </Row>
                                            )}
                                        </FormItem>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <FormItem label=" " colon={false} labelCol={{ span: 1 }} wrapperCol={{ span: 23 }}>
                                            {getFieldDecorator('orderid', {
                                            })(
                                                <Row>
                                                    <Col span={6}>
                                                        <InputNumber disabled={this.state.disabled} defaultValue={'3%'} style={{width:90}} />
                                                        <InputNumber disabled={this.state.disabled} defaultValue={0} style={{width:90,marginLeft:30}} />
                                                        <InputNumber disabled={this.state.disabled} defaultValue={3000} style={{width:90,marginLeft:50}} />
                                                    </Col>
                                                    <Col span={18}>
                                                        <Button onClick={this.save} type="primary">保存</Button>
                                                        <Button style={{marginLeft:20}} onClick={this.edit} type="primary">修改</Button>
                                                    </Col>
                                                </Row>
                                            )}
                                        </FormItem>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <FormItem label=" " colon={false} labelCol={{ span: 1 }} wrapperCol={{ span: 23 }}>
                                            {getFieldDecorator('orderid', {
                                            })(
                                                <Row>
                                                    <Col span={6}>
                                                        <InputNumber disabled={this.state.disabled} defaultValue={'3%'} style={{width:90}} />
                                                        <InputNumber disabled={this.state.disabled} defaultValue={0} style={{width:90,marginLeft:30}} />
                                                        <InputNumber disabled={this.state.disabled} defaultValue={3000} style={{width:90,marginLeft:50}} />
                                                    </Col>
                                                    <Col span={18}>
                                                        <Button onClick={this.save} type="primary">保存</Button>
                                                        <Button style={{marginLeft:20}} onClick={this.edit} type="primary">修改</Button>
                                                    </Col>
                                                </Row>
                                            )}
                                        </FormItem>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <FormItem label=" " colon={false} labelCol={{ span: 1 }} wrapperCol={{ span: 23 }}>
                                            {getFieldDecorator('orderid', {
                                            })(
                                                <Row>
                                                    <Col span={6}>
                                                        <InputNumber disabled={this.state.disabled} defaultValue={'3%'} style={{width:90}} />
                                                        <InputNumber disabled={this.state.disabled} defaultValue={0} style={{width:90,marginLeft:30}} />
                                                        <InputNumber disabled={this.state.disabled} defaultValue={3000} style={{width:90,marginLeft:50}} />
                                                    </Col>
                                                    <Col span={18}>
                                                        <Button onClick={this.save} type="primary">保存</Button>
                                                        <Button style={{marginLeft:20}} onClick={this.edit} type="primary">修改</Button>
                                                    </Col>
                                                </Row>
                                            )}
                                        </FormItem>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <FormItem label=" " colon={false} labelCol={{ span: 1 }} wrapperCol={{ span: 23 }}>
                                            {getFieldDecorator('orderid', {
                                            })(
                                                <Row>
                                                    <Col span={6}>
                                                        <InputNumber disabled={this.state.disabled} defaultValue={'3%'} style={{width:90}} />
                                                        <InputNumber disabled={this.state.disabled} defaultValue={0} style={{width:90,marginLeft:30}} />
                                                        <InputNumber disabled={this.state.disabled} defaultValue={3000} style={{width:90,marginLeft:50}} />
                                                    </Col>
                                                    <Col span={18}>
                                                        <Button onClick={this.save} type="primary">保存</Button>
                                                        <Button style={{marginLeft:20}} onClick={this.edit} type="primary">修改</Button>
                                                    </Col>
                                                </Row>
                                            )}
                                        </FormItem>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <FormItem label=" " colon={false} labelCol={{ span: 1 }} wrapperCol={{ span: 23 }}>
                                            {getFieldDecorator('orderid', {
                                            })(
                                                <Row>
                                                    <Col span={6}>
                                                        <InputNumber disabled={this.state.disabled} defaultValue={'3%'} style={{width:90}} />
                                                        <InputNumber disabled={this.state.disabled} defaultValue={0} style={{width:90,marginLeft:30}} />
                                                        <InputNumber disabled={this.state.disabled} defaultValue={3000} style={{width:90,marginLeft:50}} />
                                                    </Col>
                                                    <Col span={18}>
                                                        <Button onClick={this.save} type="primary">保存</Button>
                                                        <Button style={{marginLeft:20}} onClick={this.edit} type="primary">修改</Button>
                                                    </Col>
                                                </Row>
                                            )}
                                        </FormItem>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <FormItem label=" " colon={false} labelCol={{ span: 1 }} wrapperCol={{ span: 23 }}>
                                            {getFieldDecorator('orderid', {
                                            })(
                                                <Row>
                                                    <Col span={6}>
                                                        <InputNumber disabled={this.state.disabled} defaultValue={'3%'} style={{width:90}} />
                                                        <InputNumber disabled={this.state.disabled} defaultValue={0} style={{width:90,marginLeft:30}} />
                                                    </Col>
                                                    <Col span={18}>
                                                        <Button onClick={this.save} type="primary">保存</Button>
                                                        <Button style={{marginLeft:20}} onClick={this.edit} type="primary">修改</Button>
                                                    </Col>
                                                </Row>
                                            )}
                                        </FormItem>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <FormItem label="绩效工资" labelCol={{ span: 1 }} wrapperCol={{ span: 23 }}>
                                            {getFieldDecorator('orderid', {
                                            })(
                                                <Row>
                                                    <Col span={6}>
                                                        <InputNumber disabled={this.state.disabled} defaultValue={4500} style={{width:180}} />
                                                    </Col>
                                                    <Col span={18}>
                                                        <Button onClick={this.save} type="primary">保存</Button>
                                                        <Button style={{marginLeft:20}} onClick={this.edit} type="primary">修改</Button>
                                                    </Col>
                                                </Row>
                                            )}
                                        </FormItem>
                                    </Col>
                                </Row>
                                </div>
                                <div className="form-section-backcolor">
                                    <div className="page-top-button page-content-form" >
                                        <Select
                                            style={{ width: 150 }}
                                            onChange={handleChange}
                                            placeholder="其他部门"
                                        >
                                            <Option value="you"> AA</Option>
                                            <Option value="lucy">BB</Option>
                                            <Option value="lucy">CC</Option>
                                            <Option value="lucy">dd</Option>
                                        </Select>
                                        <Select
                                            style={{ width: 150, marginLeft: 20 }}
                                            onChange={handleChange}
                                            placeholder="运营人员"
                                        >
                                            <Option value="you"> AA</Option>
                                            <Option value="lucy">BB</Option>
                                            <Option value="lucy">CC</Option>
                                            <Option value="lucy">dd</Option>
                                        </Select>
                                    </div>
                                    <Row>
                                        <Col>
                                            <FormItem label="基本工资" labelCol={{ span: 1 }} wrapperCol={{ span: 23 }}>
                                                {getFieldDecorator('orderid', {
                                                })(
                                                    <Row>
                                                        <Col span={6}>
                                                            <InputNumber disabled={this.state.disabled} defaultValue={4500} style={{width:180}} />
                                                        </Col>
                                                        <Col span={18}>
                                                            <Button onClick={this.save} type="primary">保存</Button>
                                                            <Button style={{marginLeft:20}} onClick={this.edit} type="primary">修改</Button>
                                                        </Col>
                                                    </Row>
                                                )}
                                            </FormItem>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <FormItem label="绩效工资" labelCol={{ span: 1 }} wrapperCol={{ span: 23 }}>
                                                {getFieldDecorator('orderid', {
                                                })(
                                                    <Row>
                                                        <Col span={6}>
                                                            <InputNumber disabled={this.state.disabled} defaultValue={4500} style={{width:180}} />
                                                        </Col>
                                                        <Col span={18}>
                                                            <Button onClick={this.save} type="primary">保存</Button>
                                                            <Button style={{marginLeft:20}} onClick={this.edit} type="primary">修改</Button>
                                                        </Col>
                                                    </Row>
                                                )}
                                            </FormItem>
                                        </Col>
                                    </Row>
                                </div>
                    </Layout>
                </Layout>



            </Layout>
        );
        function handleChange() {

        }


    }
}
const FinanceSalarySettingFrom = Form.create()(FinanceSalarySetting);


export default FinanceSalarySettingFrom;