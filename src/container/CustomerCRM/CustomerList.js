import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import HeaderComponent from '../../components/Header/'
import CustomerMenu from '../../components/Menu/CustomerMenu'
import { Layout, Select, Modal, DatePicker, message, Breadcrumb, Button, Row, Col, Form, Input, Table } from 'antd';
const Option = Select.Option;
const { Content } = Layout;
const { TextArea } = Input;
const FormItem = Form.Item;
const ButtonGroup = Button.Group;
class CustomerCRM extends Component {
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
            { title: '用户名', dataIndex: 'name' },
            { title: 'key', dataIndex: 'key', className: 'hide' },
            {
                title: '联系方式', dataIndex: 'phonenumber', render: (text, record) => {
                    return (
                        <span>
                            手机：{text}
                        </span>
                    )
                }
            },
            {
                title: '跟踪记录', dataIndex: 'tracklog', render: (text, record) => {
                    return (
                        <span>
                            <a onClick={() => { this.showTracklog(record) }} >查看记录</a>
                            <a onClick={() => { this.newTracklog(record) }} style={{ marginLeft: 10 }}>添加记录</a>
                        </span>
                    )
                }
            },
            { title: '归属', dataIndex: 'ascription' },
            {
                title: '操作', dataIndex: 'actions', render: (text, record) => {
                    return (
                        <span>
                            <a>修改</a>
                            <a style={{ marginLeft: 10 }}><Link to='/buypot'>下新壶</Link></a>
                            <a style={{ marginLeft: 10 }}><Link to='/buypot'>下藏壶</Link></a>
                            <a style={{ marginLeft: 10 }}><Link to='/buypot'>下老壶</Link></a>
                            <a style={{ marginLeft: 10 }}><Link to='/customerorders'>查看订单</Link></a>
                            <a style={{ marginLeft: 10 }}>释放</a>
                            <a style={{ marginLeft: 10 }}>删除</a>
                        </span>
                    )
                }
            }
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
                <HeaderComponent selected={['1']}></HeaderComponent>
                <Layout>
                    <CustomerMenu selected={['1']} />
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>客户管理</Breadcrumb.Item>
                            <Breadcrumb.Item>所有客户</Breadcrumb.Item>
                        </Breadcrumb>
                        <div className="page-top-button">
                            <ButtonGroup>
                                <Button><Link to="/addcustomer">新增</Link></Button>
                                <Button>删除</Button>
                                <Button>今日需回访</Button>
                                <Button>释放库</Button>
                                <Button>冷冻库</Button>
                            </ButtonGroup>
                            <Select
                                style={{ width: 150, marginLeft: 20 }}
                                onChange={handleChange}
                                placeholder="转移到销售"
                            >
                                <Option value="you"> AA</Option>
                                <Option value="lucy">BB</Option>
                                <Option value="lucy">CC</Option>
                                <Option value="lucy">dd</Option>
                            </Select>
                        </div>
                        <Form className="page-content-form" onSubmit={this.handleSearch}>
                            <Row >
                                <Col span={6} >
                                    <FormItem label="姓名：" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
                                        {getFieldDecorator('customername', {
                                            initialValue: '',
                                            rules: []
                                        })(<Input size="small" />)}
                                    </FormItem>
                                </Col>
                                <Col span={6} >
                                    <FormItem label="手机号：" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
                                        {getFieldDecorator('customerphone', {
                                            initialValue: '',
                                            rules: []
                                        })(<Input size="small" />)}
                                    </FormItem>
                                </Col>
                                <Col span={6} >
                                    <FormItem label="跟踪记录：" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
                                        {getFieldDecorator('customerlog', {
                                            initialValue: '',
                                            rules: []
                                        })(<Input size="small" />)}
                                    </FormItem>
                                </Col>
                                <Col span={6} >
                                    <FormItem label="客户意向：" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} >
                                        {getFieldDecorator('customerwant', {
                                            initialValue: '',
                                            rules: []
                                        })(
                                            <Select
                                                onChange={handleChange}
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
                                    <FormItem label="选择销售：" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} >
                                        {getFieldDecorator('selectsale', {
                                            initialValue: '',
                                            rules: []
                                        })(
                                            <Select
                                                onChange={handleChange}
                                                size="small"
                                            >
                                                <Option value="you">有意向</Option>
                                                <Option value="lucy">无意向</Option>
                                            </Select>)}
                                    </FormItem>
                                </Col>
                                <Col span={6} >
                                    <FormItem label="入库时间：" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} >
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
                                <Col span={6} >
                                    <FormItem label="释放时间：" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} >
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
                                <Col span={6} >
                                    <FormItem label="最后跟踪时间：" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} >
                                        {getFieldDecorator('lastTime', {
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


                <Modal
                    title="查看跟踪记录"
                    visible={this.state.tracklogVisible}
                    footer={null}
                    onCancel={closeTracklogPopup}
                >
                    <p>Bla bla ...</p>
                    <p>Bla bla ...</p>
                    <p>Bla bla ...</p>
                </Modal>
                <Modal
                    title="添加跟踪记录"
                    visible={this.state.newtracklogVisible}
                    onCancel={closeNewTracklogPopup}
                    onOk={newTracklog}
                >
                    <Form className="page-content-form" >
                        <FormItem label="添加记录" labelCol={{ span: 6 }} wrapperCol={{ span: 16 }}>
                            {getFieldDecorator('addnewtracklog', {
                                rules: [
                                    { required: true, whitespace: true, message: "请添加记录" },
                                ]
                            })(<TextArea rows={4} />)}
                        </FormItem>
                        <FormItem label="下次回访时间" labelCol={{ span: 6 }} wrapperCol={{ span: 18 }}>
                            {getFieldDecorator('nextTime', {
                                rules: [
                                ]
                            })(<DatePicker
                                showTime
                                format="YYYY-MM-DD HH:mm:ss"
                            />)}
                        </FormItem>
                    </Form>
                </Modal>


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
const CustomerCRMFrom = Form.create()(CustomerCRM);


export default CustomerCRMFrom;