import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import HeaderComponent from '../../components/Header/'
import PersonnelMenu from '../../components/Menu/PersonnelMenu'
import { Layout, Select, DatePicker, Breadcrumb, Button, Row, Col, Form, Input, Table } from 'antd';
const Option = Select.Option;
const { Content } = Layout;
const { TextArea } = Input;
const FormItem = Form.Item;
const ButtonGroup = Button.Group;
const { RangePicker } = DatePicker;
const InputGroup = Input.Group;
class PersonnelGroup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            curPage: 1,
            limit: 10,
            offset: 0,

        }
    }

    render() {
        let me = this;
        const { getFieldDecorator } = me.props.form;
        const data = [{
            key: '1',
            index: '12323',
            customerphone: '茶壶',
            customername: 'leotao'

        }];
        let columns = [
            { title: '序号', dataIndex: 'customerphone' },
            { title: '请假人员', dataIndex: 'customerphone' },
            { title: 'key', dataIndex: 'key', className: 'hide' },
            { title: '请假类型', dataIndex: 'sendtype' },
            { title: '请假日期', dataIndex: 'orderstatus' },
            { title: '请假时长', dataIndex: 'capacity' },
            { title: '请假原因', dataIndex: 'capacity' },
            { title: '请假状态', dataIndex: 'capacity' },
            { title: '更新时间', dataIndex: 'capacity' },
            { title: '审批人', dataIndex: 'capacity' },
            {
                title: '操作', dataIndex: 'actions', render: (text, record) => {
                    return (
                        <span>
                            <a>审核</a>
                        </span>
                    )
                }
            }
        ];

        let renderProps = {
            columns: columns,
            loading: false,
            dataSource: data,
            pagination: {
                loading: true,
                total: 500,
                current: 1,
                showSizeChanger: true,
                showQuickJumper: true,
                onChange: (page, pageSize) => {
                    me.setState({
                        curPage: page,
                        offset: (page - 1) * pageSize,
                        limit: pageSize,
                        getManagementListLoading: true
                    })

                    me.getManagementList(me.state.search, (page - 1) * pageSize, pageSize, false)
                },
                onShowSizeChange: (page, pageSize) => {
                    me.setState({
                        curPage: page,
                        offset: (page - 1) * pageSize,
                        limit: pageSize,
                        getManagementListLoading: true
                    });
                    me.getManagementList(me.state.search, (page - 1) * pageSize, pageSize, false);
                }
            },
        };

        return (
            <Layout className="page-layout">
                <HeaderComponent selected={['5']}></HeaderComponent>
                <Layout>
                    <PersonnelMenu selected={['6']} openKeys={['sub4']} />
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>人员管理</Breadcrumb.Item>
                            <Breadcrumb.Item>请假系统</Breadcrumb.Item>
                            <Breadcrumb.Item>请假管理</Breadcrumb.Item>
                        </Breadcrumb>
                        <Form className="page-content-form" onSubmit={this.handleSearch}>
                            <Row>
                                <Col span={6} >
                                    <FormItem label="请假人员" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
                                        {getFieldDecorator('orderid', {
                                        })(
                                            <Select
                                                size="small"
                                            >
                                                <Option value="yes">有</Option>
                                                <Option value="no">无</Option>
                                            </Select>
                                        )}
                                    </FormItem>
                                </Col>
                                <Col span={6} >
                                    <FormItem label="审批人" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
                                        {getFieldDecorator('orderid', {
                                        })(
                                            <Select
                                                size="small"
                                            >
                                                <Option value="yes">有</Option>
                                                <Option value="no">无</Option>
                                            </Select>
                                        )}
                                    </FormItem>
                                </Col>
                                <Col span={6} >
                                    <FormItem label="请假日期" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
                                        {getFieldDecorator('orderid', {
                                        })(
                                            <RangePicker size="small" />
                                        )}
                                    </FormItem>
                                </Col>
                                <Col span={4} style={{ lineHeight: '35px', verticalAlign: 'middle', marginLeft: 20 }}>
                                    <Button type="primary" htmlType="submit" size="small" >查询</Button>
                                </Col>
                            </Row>
                        </Form>
                        <Content className="page-content"  >
                            <Table  {...renderProps} />
                        </Content>
                    </Layout>
                </Layout>

            </Layout >
        );

    }
}
const PersonnelGroupFrom = Form.create()(PersonnelGroup);


export default PersonnelGroupFrom;