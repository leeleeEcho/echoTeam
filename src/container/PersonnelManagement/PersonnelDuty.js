import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import HeaderComponent from '../../components/Header/'
import PersonnelMenu from '../../components/Menu/PersonnelMenu'
import { Layout, Select, DatePicker, Upload, Radio, Breadcrumb, Button, Row, Col, Form, Input, Table } from 'antd';
const Option = Select.Option;
const { Content } = Layout;
const { TextArea } = Input;
const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const ButtonGroup = Button.Group;
const { RangePicker } = DatePicker;
const InputGroup = Input.Group;
class PersonnelDuty extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let me = this;
        const { getFieldDecorator } = me.props.form;
        return (
            <Layout className="page-layout">
                <HeaderComponent selected={['5']}></HeaderComponent>
                <Layout>
                    <PersonnelMenu selected={['3']} openKeys={['sub3']} />
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>人员管理</Breadcrumb.Item>
                            <Breadcrumb.Item>值班系统</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content className="page-content"  >
                            <div className="personnelduty">
                                <div className="duty-item">
                                    <div className="duty-item-name">白班：</div>
                                    <div className="duty-item-value">09:00 -- 18:00</div>
                                </div>
                                <div className="duty-item">
                                    <div className="duty-item-name">周一至周五：</div>
                                    <div className="duty-item-value">
                                        <TextArea style={{ width: 450, height: 150 }} />
                                    </div>
                                    <div className="duty-item-button">
                                        <Button type="primary" >修改</Button>
                                        <Button type="primary" style={{ marginLeft: 20 }} >保存</Button>
                                    </div>
                                </div>
                                <div className="duty-item">
                                    <div className="duty-item-name">周六：</div>
                                    <div className="duty-item-value">
                                        <TextArea style={{ width: 450, height: 150 }} />
                                    </div>
                                    <div className="duty-item-button">
                                        <Button type="primary" >修改</Button>
                                        <Button type="primary" style={{ marginLeft: 20 }} >保存</Button>
                                    </div>
                                </div>
                                <div className="duty-item">
                                    <div className="duty-item-name">周日：</div>
                                    <div className="duty-item-value">
                                        <TextArea style={{ width: 450, height: 150 }} />
                                    </div>
                                    <div className="duty-item-button">
                                        <Button type="primary" >修改</Button>
                                        <Button type="primary" style={{ marginLeft: 20 }} >保存</Button>
                                    </div>
                                </div>
                            </div>
                            <div className="personnelduty">
                                <div className="duty-item">
                                    <div className="duty-item-name">晚班：</div>
                                    <div className="duty-item-value">18:00 -- 21:00</div>
                                </div>
                                <div className="duty-item">
                                    <div className="duty-item-name">晚班：</div>
                                    <div className="duty-item-value">
                                        <TextArea style={{ width: 450, height: 150 }} />
                                    </div>
                                    <div className="duty-item-button">
                                        <Button type="primary" >修改</Button>
                                        <Button type="primary" style={{ marginLeft: 20 }} >保存</Button>
                                    </div>
                                </div>
                            </div>
                        </Content>
                    </Layout>
                </Layout>

            </Layout>
        );

    }
}
const PersonnelDutyFrom = Form.create()(PersonnelDuty);


export default PersonnelDutyFrom;