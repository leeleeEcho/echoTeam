import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import HeaderComponent from '../../components/Header/'
import WebsiteMenu from '../../components/Menu/WebsiteMenu'
import { Layout, Breadcrumb, Button, Form, Table } from 'antd';

const { Content } = Layout;
const ButtonGroup = Button.Group;

class CompanyClass extends Component {
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
        }, {
            key: '2',
            name: '紫砂大师/名家',
            index: '1002',
        }, {
            key: '3',
            name: '紫砂大师/名家',
            index: '1003',
        }, {
            key: '4',
            name: '紫砂大师/名家',
            index: '1004',
        },];
        let columns = [
            { title: '编号', dataIndex: 'index' },
            { title: '类别名称', dataIndex: 'name' },
            { title: '是否显示', dataIndex: 'name' },
            { title: '调用别名', dataIndex: 'name' },
            { title: 'key', dataIndex: 'key', className: 'hide' },
            {
                title: '操作', dataIndex: 'actions', render: (text, record) => {
                    return (
                        <span>
                            <a><Link to='/companyclassadd'>修改</Link></a>
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
                <HeaderComponent selected={['7']}></HeaderComponent>
                <Layout>
                <WebsiteMenu selected={['20']} openKeys={['sub14']} />
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>栏目类别</Breadcrumb.Item>
                            <Breadcrumb.Item>编辑内容</Breadcrumb.Item>
                        </Breadcrumb>
                        <div className="page-top-button page-content-form" >
                            <ButtonGroup>
                                <Button><Link to="/companyclassadd">新增</Link></Button>
                                <Button>全选</Button>
                                <Button>删除</Button>
                            </ButtonGroup>
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
const CompanyClassFrom = Form.create()(CompanyClass);


export default CompanyClassFrom;