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
class FlashSale extends Component {
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
            id: '234324',
            name: '紫砂壶',
            author: '安安'
        }];
        let columns = [
            { title: '商品名称', dataIndex: 'name'},
            { title: '编号', dataIndex: 'id' },
            { title: 'key', dataIndex: 'key', className: 'hide' },
            { title: '作者', dataIndex: 'author' },
            { title: '泥料', dataIndex: 'materials' },
            { title: '抢购价格', dataIndex: 'price', render: (text, record) => {
                    return (
                        <Input style={{width:50}} />
                    )
                }
            },
            { title: '开始时间', dataIndex: 'start', render:(text,record) => {
                return (
                    <DatePicker
                        showTime
                        format="YYYY-MM-DD HH:mm:ss"
                    />
                )
            } },
            { title: '结束时间', dataIndex: 'end', render:(text,record) => {
                return (
                    <DatePicker
                        showTime
                        format="YYYY-MM-DD HH:mm:ss"
                    />
                )
            }  },
            { title: '剩余时间', dataIndex: 'surplus' }
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
                    <WebsiteMenu selected={['9']}  openKeys={['sub7']} />
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>网站管理</Breadcrumb.Item>
                            <Breadcrumb.Item>限时抢购</Breadcrumb.Item>
                        </Breadcrumb>
                        <div className="page-top-button page-content-form" >
                            <ButtonGroup>
                                <Button>修改</Button>
                                <Button>保存</Button>
                            </ButtonGroup>
                        </div>
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
const FlashSaleFrom = Form.create()(FlashSale);


export default FlashSaleFrom;