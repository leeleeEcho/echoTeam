import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import HeaderComponent from '../../components/Header/'
import WebsiteMenu from '../../components/Menu/WebsiteMenu'
import { Layout, Select, Modal, DatePicker, message, Breadcrumb, Button, Row, Col, Form, Input, Table } from 'antd';
const Option = Select.Option;
const { Content } = Layout;
const { TextArea } = Input;
const FormItem = Form.Item;
const ButtonGroup = Button.Group;
class IndentDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            curPage: 1,
            limit: 10,
            offset: 0,
            tracklogVisible: false,//查看跟踪记录的popup
            newtracklogVisible: false
        }
    }
    showTracklog = (record) => {
        this.setState({
            tracklogVisible: true
        })
    }
    newTracklog = (record) => {
        this.setState({
            newtracklogVisible: true
        })
    }
    render() {
        let me = this;
        const { getFieldDecorator } = me.props.form;
        const data = [{
            key: '1',
            username: 'John Brown',
            phonenumber: '13332221212',
            mode: '顺丰快递',
            indentState: '已生成',
            payState: '待支付',
            deliverState: '待发货',
            money: '3000',
            downTime: '2018-02-03 12:32:45',
            updateTime: '2018-02-03 12:32:45'
        }];
        let columns = [
            { title: '订单号', dataIndex: 'indentNum',render: (text, record) => {
                    return(
                        <a><Link to='/indentparticulars' >1234324</Link></a>
                    )
                } 
            },
            { title: '客户名', dataIndex: 'username' },
            { title: 'key', dataIndex: 'key', className: 'hide' },
            { title: '客户号码', dataIndex: 'phonenumber' },
            { title: '配送方式', dataIndex: 'mode' },
            { title: '订单状态', dataIndex: 'indentState' },
            { title: '支付状态', dataIndex: 'payState' },
            { title: '发货状态', dataIndex: 'deliverState' },
            { title: '总金额', dataIndex: 'money' },
            { title: '下单时间', dataIndex: 'downTime' },
            { title: '更新时间', dataIndex: 'updateTime' }
        ];
        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            }
        };
        let renderProps = {
            columns: columns,
            loading: false,
            dataSource: data,
            rowSelection: rowSelection,
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
                <HeaderComponent selected={['7']}></HeaderComponent>
                <Layout>
                    <WebsiteMenu selected={['4']}  openKeys={['sub3']} />
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>网站管理</Breadcrumb.Item>
                            <Breadcrumb.Item>订单管理</Breadcrumb.Item>
                        </Breadcrumb>
                        <div className="page-top-button">
                            <ButtonGroup>
                                <Button>全选</Button>
                                <Button>删除</Button>
                            </ButtonGroup>
                        </div>
                        <Form className="page-content-form" onSubmit={this.handleSearch}>
                            <Row >
                                <Col span={6} >
                                    <FormItem label="订单状态：" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
                                        {getFieldDecorator('indentState', {
                                            initialValue: '',
                                            rules: []
                                        })(
                                            <Select
                                                onChange={handleChange}
                                                size="small"
                                            >
                                                <Option value="1">已生成</Option>
                                                <Option value="2">待审核</Option>
                                                <Option value="3">已完成</Option>
                                                <Option value="4">已删除</Option>
                                            </Select>
                                        )}
                                    </FormItem>
                                </Col>
                                <Col span={6} >
                                    <FormItem label="支付状态：" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
                                        {getFieldDecorator('customerphone', {
                                            initialValue: '',
                                            rules: []
                                        })(
                                            <Select
                                                onChange={handleChange}
                                                size="small"
                                            >
                                                <Option value="2">待支付</Option>
                                                <Option value="1">已支付</Option>
                                                <Option value="3">待退款</Option>
                                                <Option value="4">已退款</Option>
                                            </Select>
                                        )}
                                    </FormItem>
                                </Col>
                                <Col span={6} >
                                    <FormItem label="发货状态：" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
                                        {getFieldDecorator('customerlog', {
                                            initialValue: '',
                                            rules: []
                                        })(
                                            <Select
                                                onChange={handleChange}
                                                size="small"
                                            >
                                                <Option value="2">待发货</Option>
                                                <Option value="1">已发货</Option>
                                                <Option value="3">待退货</Option>
                                                <Option value="4">已退货</Option>
                                            </Select>
                                        )}
                                    </FormItem>
                                </Col>
                                <Col span={6} >
                                    <FormItem label="订单号：" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} >
                                        {getFieldDecorator('customerwant', {
                                            initialValue: '',
                                            rules: []
                                        })(<Input size="small" />)}
                                    </FormItem>
                                </Col>
                            </Row>
                            <Row >
                                <Col span={6} >
                                    <FormItem label="客户名：" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} >
                                        {getFieldDecorator('selectsale', {
                                            initialValue: '',
                                            rules: []
                                        })(<Input size="small" />)}
                                    </FormItem>
                                </Col>
                                <Col span={6} >
                                    <FormItem label="成交时间：" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} >
                                        {getFieldDecorator('startTime', {
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
                            </Row>
                            <Row>
                                <Col style={{ textAlign: 'right' }}>
                                    <Button type="primary" htmlType="submit" size="small" >查询</Button>
                                </Col>
                            </Row>
                        </Form>
                        <Content className="page-content"  >
                            <Table  {...renderProps} />
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        );
        function handleChange() {

        }
        function closeTracklogPopup() {
            me.setState({
                tracklogVisible: false
            })
        }
        function closeNewTracklogPopup() {
            me.setState({
                newtracklogVisible: false
            })
        }
        function newTracklog() {
            message.success('添加成功！')
            me.setState({
                newtracklogVisible: false
            })
        }
    }
}   
const IndentDetailsFrom = Form.create()(IndentDetails);


export default IndentDetailsFrom;