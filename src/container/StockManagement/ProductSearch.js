import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import HeaderComponent from '../../components/Header/'
import StockMenu from '../../components/Menu/StockMenu'
import { Layout, Select, DatePicker, Breadcrumb, Button, Row, Col, Form, Input, Table } from 'antd';
const Option = Select.Option;
const { Content } = Layout;
const FormItem = Form.Item;
class ProductSearch extends Component {
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
            { title: '商品编号', dataIndex: 'name' },
            { title: '壶名', dataIndex: 'name' },
            { title: '作者', dataIndex: 'area' },
            { title: '泥料', dataIndex: 'phone' },
            { title: '容量', dataIndex: 'registertime' },
            { title: '销售价', dataIndex: 'lasttime' },
            { title: '器型', dataIndex: 'ordernumber' },
            { title: '销售总数', dataIndex: 'price' },
            { title: '销售总价', dataIndex: 'ascription' },
            { title: '现有库存', dataIndex: 'ascription' },
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
                <HeaderComponent selected={['2']}></HeaderComponent>
                <Layout>
                    <StockMenu selected={['11']} openKeys={['sub6']} />
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>商品查询</Breadcrumb.Item>
                            <Breadcrumb.Item>商品查询</Breadcrumb.Item>
                        </Breadcrumb>
                        <Form className="page-content-form" onSubmit={this.handleSearch}>
                            <Row >
                                <Col span={6} >
                                    <FormItem label="商品编号" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
                                        {getFieldDecorator('customername', {
                                            rules: []
                                        })(<Input size="small" />)}
                                    </FormItem>
                                </Col>
                                <Col span={6} >
                                    <FormItem label="壶名" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
                                        {getFieldDecorator('customerphone', {
                                            rules: []
                                        })(<Input size="small" />)}
                                    </FormItem>
                                </Col>
                                <Col span={6} >
                                    <FormItem label="泥料" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} >
                                        {getFieldDecorator('customerarea', {
                                            rules: []
                                        })(
                                            <Input size="small" />)}
                                    </FormItem>
                                </Col>
                                <Col span={6} >
                                    <FormItem label="器型" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} >
                                        {getFieldDecorator('selectsale', {
                                            rules: []
                                        })(
                                            <Input size="small" />)}
                                    </FormItem>
                                </Col>

                            </Row>
                            <Row >
                                <Col style={{ textAlign: 'right' }}>
                                    <Button type="primary" htmlType="submit" size="small" >查询</Button>
                                </Col>
                            </Row>

                        </Form>
                        <Row >
                            <Button type="primary" size="small" style={{ width: 80, height: 24 }} >导出Excel</Button>
                        </Row>
                        <Content className="page-content"  >
                            <Table  {...renderProps} />
                        </Content>
                    </Layout>
                </Layout>



            </Layout>
        );



    }
}
const ProductSearchFrom = Form.create()(ProductSearch);


export default ProductSearchFrom;