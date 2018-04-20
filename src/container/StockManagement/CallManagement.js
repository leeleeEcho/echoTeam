import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import HeaderComponent from '../../components/Header/'
import StockMenu from '../../components/Menu/StockMenu'
import { Layout, Breadcrumb, Button, Form, Table } from 'antd';

const { Content } = Layout;

class CallManagement extends Component {
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
            { title: '商品编号', dataIndex: 'index' },
            { title: '产品名称', dataIndex: 'name' },
            { title: 'key', dataIndex: 'key', className: 'hide' },
            {
                title: '缩略图', dataIndex: 'image', render: (text, record) => {
                    return (
                        <img className="stock-thumbnail"></img>
                    )
                }
            },
            { title: '作者', dataIndex: 'author' },
            { title: '泥料', dataIndex: 'pug' },
            { title: '容量', dataIndex: 'capacity' },
            { title: '调货人', dataIndex: 'capacity' },
            { title: '要货人', dataIndex: 'capacity' },
            { title: '调出仓库', dataIndex: 'price' },
            { title: '调入仓库', dataIndex: 'price' },
            { title: '数量', dataIndex: 'price' },
            { title: '调货时间', dataIndex: 'price' },
            { title: '要求到货时间', dataIndex: 'price' },
            { title: '实际到货时间', dataIndex: 'price' },
            { title: '状态', dataIndex: 'status' },
            {
                title: '操作', dataIndex: 'actions', render: (text, record) => {
                    return (
                        <span>
                            <a><Link to='/stockcall'>修改</Link></a>
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
                    <StockMenu selected={['4']} openKeys={['sub4']} />
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>调货管理</Breadcrumb.Item>
                            <Breadcrumb.Item>调货列表</Breadcrumb.Item>
                        </Breadcrumb>
                        <div className="page-top-button" >
                            <Button style={{ marginBottom: 16 }}><Link to="/stockcall">新增</Link></Button>
                        </div>
                        <Content className="page-content"  >
                            <Table  {...renderProps} />
                        </Content>
                    </Layout>
                </Layout>



            </Layout>
        );



    }
}
const CallManagementFrom = Form.create()(CallManagement);


export default CallManagementFrom;