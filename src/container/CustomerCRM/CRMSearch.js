import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import HeaderComponent from '../../components/Header/'
import CustomerMenu from '../../components/Menu/CustomerMenu'
import { Layout, Select, DatePicker, Breadcrumb, Button, Row, Col, Form, Input, Table } from 'antd';
const Option = Select.Option;
const { Content } = Layout;
const FormItem = Form.Item;
class CRMSearch extends Component {
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
            name: 'John Brown',
            phonenumber: '13332221212',
            ascription: 'AAAAA',
        }, {
            key: '2',
            name: 'John Brown',
            phonenumber: '13332221212',
            ascription: 'AAAAA',
        }, {
            key: '3',
            name: 'John Brown',
            phonenumber: '13332221212',
            ascription: 'AAAAA',
        }, {
            key: '4',
            name: 'John Brown',
            phonenumber: '13332221212',
            ascription: 'AAAAA',
        },];
        let columns = [
            { title: '序号', dataIndex: 'index' },
            { title: 'key', dataIndex: 'key', className: 'hide' },
            { title: '用户名', dataIndex: 'name' },
            { title: '地区', dataIndex: 'area' },
            { title: '手机号', dataIndex: 'phone' },
            { title: '注册时间', dataIndex: 'registertime' },
            { title: '最后访问时间', dataIndex: 'lasttime' },
            { title: '订单数', dataIndex: 'ordernumber' },
            { title: '成交金额', dataIndex: 'price' },
            { title: '归属销售', dataIndex: 'ascription' },
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
                <HeaderComponent selected={['1']}></HeaderComponent>
                <Layout>
                    <CustomerMenu selected={['2']} />
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>客户管理</Breadcrumb.Item>
                            <Breadcrumb.Item>CRM查询</Breadcrumb.Item>
                        </Breadcrumb>
                        <Form className="page-content-form" onSubmit={this.handleSearch}>
                            <Row >
                                <Col span={6} >
                                    <FormItem label="姓名" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
                                        {getFieldDecorator('customername', {
                                            rules: []
                                        })(<Input size="small" />)}
                                    </FormItem>
                                </Col>
                                <Col span={6} >
                                    <FormItem label="手机号" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
                                        {getFieldDecorator('customerphone', {
                                            rules: []
                                        })(<Input size="small" />)}
                                    </FormItem>
                                </Col>
                                <Col span={6} >
                                    <FormItem label="地区" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} >
                                        {getFieldDecorator('customerarea', {
                                            rules: []
                                        })(
                                            <Select
                                                size="small"
                                            >
                                                <Option value="you">有意向</Option>
                                                <Option value="lucy">无意向</Option>
                                            </Select>)}
                                    </FormItem>
                                </Col>
                                <Col span={6} >
                                    <FormItem label="归属销售" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} >
                                        {getFieldDecorator('selectsale', {
                                            rules: []
                                        })(
                                            <Select
                                                size="small"
                                            >
                                                <Option value="you">有意向</Option>
                                                <Option value="lucy">无意向</Option>
                                            </Select>)}
                                    </FormItem>
                                </Col>
                            </Row>
                            <Row >
                                <Col span={6} >
                                    <FormItem label="注册日期" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} >
                                        {getFieldDecorator('endTime', {
                                            initialValue: '',
                                            rules: []
                                        })(
                                            <DatePicker
                                                showTime
                                                format="YYYY-MM-DD HH:mm:ss"
                                                size="small"
                                                style={{ width: '100%' }}
                                            />)}
                                    </FormItem>
                                </Col>
                                <Col style={{ display: 'inline-block', lineHeight: '39px', verticalAlign: 'middle', marginLeft: 30 }}>
                                    <Button type="primary" htmlType="submit" size="small" >查询</Button>
                                </Col>
                            </Row>
                        </Form>
                        <Button type="primary" htmlType="submit" size="small" style={{ width: 80 }} >导出Excel</Button>
                        <Content className="page-content"  >
                            <Table  {...renderProps} />
                        </Content>
                    </Layout>
                </Layout>



            </Layout>
        );



    }
}
const CRMSearchFrom = Form.create()(CRMSearch);


export default CRMSearchFrom;