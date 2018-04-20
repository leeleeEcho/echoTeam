import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import HeaderComponent from '../../components/Header/'
import StockMenu from '../../components/Menu/StockMenu'
import { Layout, Select, Modal, DatePicker, message, Breadcrumb, Button, Row, Col, Form, Input, Table } from 'antd';
const Option = Select.Option;
const { Content } = Layout;
const { TextArea } = Input;
const FormItem = Form.Item;
const ButtonGroup = Button.Group;
const InputGroup = Input.Group;
class StockManagement extends Component {
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
            index: '12323',
            potname: '茶壶',
            author: 'leotao'

        }];
        let columns = [
            {
                title: '编号', dataIndex: 'index', render: (text, record) => {
                    return (
                        <span>
                            <a>{text}</a>
                        </span>
                    )
                }
            },
            { title: 'key', dataIndex: 'key', className: 'hide' },
            {
                title: '缩略图', dataIndex: 'image', render: (text, record) => {
                    return (
                        <img className="stock-thumbnail"></img>
                    )
                }
            },
            { title: '壶名', dataIndex: 'potname' },
            {
                title: '作者', dataIndex: 'author', render: (text, record) => {
                    return (
                        <a>
                            {text}
                        </a>
                    )
                }
            },
            { title: '泥料', dataIndex: 'pug' },
            { title: '容量', dataIndex: 'capacity' },
            { title: '销售价', dataIndex: 'price' },
            {
                title: '总库存', dataIndex: 'stock', render: (text, record) => {
                    return (
                        <a>
                            {text}
                        </a>
                    )
                }
            },
            { title: '上海', dataIndex: 'shanghai' },
            { title: '北京', dataIndex: 'beijin' },
            { title: '宜兴', dataIndex: 'yixing' },
            { title: '状态', dataIndex: 'status' },
            {
                title: '操作', dataIndex: 'actions', render: (text, record) => {
                    return (
                        <span>
                            <a>修改</a>
                            <a style={{ marginLeft: 10 }}><Link to='/stockdistribution'>新增配货</Link></a>
                            <a style={{ marginLeft: 10 }}><Link to='/stockreserve'>新增预留</Link></a>
                            <a style={{ marginLeft: 10 }}><Link to='/stockcall'>新增调货</Link></a>
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
                <HeaderComponent selected={['2']}></HeaderComponent>
                <Layout>
                    <StockMenu selected={['1']} />
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>库存管理</Breadcrumb.Item>
                            <Breadcrumb.Item>内容列表</Breadcrumb.Item>
                        </Breadcrumb>
                        <div className="page-top-button">
                            <ButtonGroup>
                                <Button><Link to="/stockadd">新增</Link></Button>
                            </ButtonGroup>
                        </div>
                        <Form className="page-content-form" onSubmit={this.handleSearch}>
                            <Row >
                                <Col span={6} >
                                    <FormItem label="壶名" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
                                        {getFieldDecorator('name', {
                                            rules: []
                                        })(<Input size="small" />)}
                                    </FormItem>
                                </Col>
                                <Col span={6} >
                                    <FormItem label="作者" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
                                        {getFieldDecorator('author', {
                                            rules: []
                                        })(<Input size="small" />)}
                                    </FormItem>
                                </Col>
                                <Col span={6} >
                                    <FormItem label="泥料" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
                                        {getFieldDecorator('pug', {
                                            rules: []
                                        })(<Input size="small" />)}
                                    </FormItem>
                                </Col>
                                <Col span={6} >
                                    <FormItem label="是否有库存" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} >
                                        {getFieldDecorator('havestock', {
                                            rules: []
                                        })(
                                            <Select
                                                size="small"
                                            >
                                                <Option value="yes">有</Option>
                                                <Option value="no">无</Option>
                                            </Select>)}
                                    </FormItem>
                                </Col>
                            </Row>
                            <Row >
                                <Col span={6} >
                                    <FormItem
                                        label="容量"
                                        labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}
                                    >
                                        {getFieldDecorator('capacity', {
                                        })(
                                            <InputGroup style={{ top: 8 }}>
                                                <Input size="small" style={{ width: '30%', borderRadius: 4 }} />
                                                <span className="input-section"> - </span>
                                                <Input size="small" style={{ width: '30%', borderRadius: 4 }} />
                                            </InputGroup>
                                        )}
                                    </FormItem>

                                </Col>
                                <Col span={6} >
                                    <FormItem
                                        label="价格"
                                        labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}
                                    >
                                        {getFieldDecorator('price', {
                                        })(
                                            <InputGroup style={{ top: 8 }}>
                                                <Input size="small" style={{ width: '30%', borderRadius: 4 }} />
                                                <span className="input-section"> - </span>
                                                <Input size="small" style={{ width: '30%', borderRadius: 4 }} />
                                            </InputGroup>
                                        )}
                                    </FormItem>

                                </Col>
                                <Col style={{ display: 'inline-block', lineHeight: '39px', verticalAlign: 'middle' }}>
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
const StockManagementFrom = Form.create()(StockManagement);


export default StockManagementFrom;