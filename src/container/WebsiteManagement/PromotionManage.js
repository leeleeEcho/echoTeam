import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import HeaderComponent from '../../components/Header/'
import WebsiteMenu from '../../components/Menu/WebsiteMenu'
import { Layout, Select, Modal, DatePicker, message, Breadcrumb, Button, Row, Col, Form, Input, Table } from 'antd';

const { Content } = Layout;
const ButtonGroup = Button.Group;
const FormItem = Form.Item;

class PromotionManage extends Component {
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
            name: '紫砂大师/名家',
            index: '1001',
            integral: '500'
        }, {
            key: '2',
            name: '紫砂大师/名家',
            index: '1002',
            integral: '500'
        }, {
            key: '3',
            name: '紫砂大师/名家',
            index: '1003',
            integral: '500'
        }, {
            key: '4',
            name: '紫砂大师/名家',
            index: '1004',
            integral: '500'
        },];
        let columns = [
            { title: '编号', dataIndex: 'index' },
            {
                title: '缩略图', dataIndex: 'image', render: (text, record) => {
                    return (
                        <img className="stock-thumbnail"></img>
                    )
                }
            },
            { title: '商品名称', dataIndex: 'name' },
            { title: '作者', dataIndex: 'username' },
            { title: '泥料', dataIndex: 'mud' },
            { title: '容量', dataIndex: 'capacity' },
            { title: '积分', dataIndex: 'integral' },
            { title: 'key', dataIndex: 'key', className: 'hide' },
            {
                title: '操作', dataIndex: 'actions', render: (text, record) => {
                    return (
                        <span>
                            <a onClick={() => { this.newTracklog(record) }}>修改</a>
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
        newTracklog = (record) => {
            this.setState({
                newtracklogVisible: true
            })
        }
        return (
            <Layout className="page-layout">
                <HeaderComponent selected={['7']}></HeaderComponent>
                <Layout>
                    <WebsiteMenu selected={['3']} openKeys={['sub2']} />
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>网站管理</Breadcrumb.Item>
                            <Breadcrumb.Item>促销管理</Breadcrumb.Item>
                        </Breadcrumb>
                        <div className="page-top-button page-content-form" >
                            <ButtonGroup>
                                <Button>全选</Button>
                                <Button>删除</Button>
                            </ButtonGroup>
                        </div>
                        <Content className="page-content"  >
                            <Table  {...renderProps} />
                        </Content>
                    </Layout>
                </Layout>
                <Modal
                    title="积分商城设置"
                    visible={this.state.newtracklogVisible}
                    onCancel={closeNewTracklogPopup}
                    onOk={newTracklog}
                >
                    <Form className="page-content-form" >
                        <FormItem label="积分设置" labelCol={{ span: 6 }} wrapperCol={{ span: 16 }}>
                            {getFieldDecorator('addnewtracklog', {
                                rules: [
                                    { required: true, whitespace: true, message: "请添加记录" },
                                ]
                            })(<Input style={{ width: 300 }} />)}
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
const PromotionManageFrom = Form.create()(PromotionManage);


export default PromotionManageFrom;