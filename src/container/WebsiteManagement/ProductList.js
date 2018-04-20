import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import HeaderComponent from '../../components/Header/'
import WebsiteMenu from '../../components/Menu/WebsiteMenu'
import { Layout, Select, Modal, DatePicker, message, Breadcrumb, Button, Row, Col, Form, Input, Table, Card, Icon, Avatar, Radio  } from 'antd';

const { Content } = Layout;
const ButtonGroup = Button.Group;
const FormItem = Form.Item;
const Option = Select.Option;
const { Meta } = Card;

class ProductList extends Component {
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
            { title: 'key', dataIndex: 'key', className: 'hide' },
            {
                title: '缩略图', dataIndex: 'image', render: (text, record) => {
                    return (
                        <img className="stock-thumbnail"></img>
                    )
                }
            },
            {
                title: '操作', dataIndex: 'actions', render: (text, record) => {
                    return (
                        <span>
                            <a><Link to='/ColumnListEdit'>修改</Link></a>
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
                    <WebsiteMenu selected={['1']} openKeys={['sub1']} />
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>商品列表</Breadcrumb.Item>
                        </Breadcrumb>
                        <div className="page-top-button page-content-form" >
                            <ButtonGroup>
                                <Button><Link to="/productlistedit">新增</Link></Button>
                                <Button>全选</Button>
                                <Button>删除</Button>
                            </ButtonGroup>
                        </div>
                        <Form className="page-content-form" onSubmit={this.handleSearch}>
                            <Row >
                                <Col span={6} >
                                    <FormItem label="所有类别：" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
                                        {getFieldDecorator('customername', {
                                            initialValue: '',
                                            rules: []
                                        })(<Input size="small" />)}
                                    </FormItem>
                                </Col>
                                <Col span={6} >
                                    <FormItem label="容量筛选：" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
                                        {getFieldDecorator('customerphone', {
                                            initialValue: '',
                                            rules: []
                                        })(
                                            <Select
                                                size="small"
                                                onChange={handleChange}
                                                placeholder="容量筛选"
                                            >
                                                <Option value="1">100CC以下</Option>
                                                <Option value="2">100-150CC</Option>
                                                <Option value="3">151-200CC</Option>
                                                <Option value="4">201CC-250CC</Option>
                                            </Select>
                                        )}
                                    </FormItem>
                                </Col>
                                <Col span={6} >
                                    <FormItem label="所有属性：" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
                                        {getFieldDecorator('customerlog', {
                                            initialValue: '',
                                            rules: []
                                        })(
                                            <Select
                                                size="small"
                                                onChange={handleChange}
                                                placeholder="所有属性"
                                            >
                                                <Option value="1">待审核</Option>
                                                <Option value="2">已审核</Option>
                                                <Option value="3">可评论</Option>
                                                <Option value="4">置顶</Option>
                                            </Select>
                                        )}
                                    </FormItem>
                                </Col>
                                <Col span={6} >
                                    <FormItem label="价格筛选：" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} >
                                        {getFieldDecorator('customerwant', {
                                            initialValue: '',
                                            rules: []
                                        })(
                                            <Select
                                                size="small"
                                                onChange={handleChange}
                                                placeholder="价格筛选"
                                            >
                                                <Option value="1">0-3000元</Option>
                                                <Option value="2">3001-5000元</Option>
                                                <Option value="3">5001-10000元</Option>
                                                <Option value="4">10001-30000元</Option>
                                            </Select>
                                            )}
                                    </FormItem>
                                </Col>
                            </Row>
                            <Row >
                                <Col span={6} >
                                    <FormItem label="泥料筛选：" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} >
                                        {getFieldDecorator('selectsale', {
                                            initialValue: '',
                                            rules: []
                                        })(
                                            <Select
                                                size="small"
                                                onChange={handleChange}
                                                placeholder="泥料筛选"
                                            >
                                                <Option value="1">泥料筛选</Option>
                                            </Select>)}
                                    </FormItem>
                                </Col>
                            </Row>
                            <Row>
                                <Col style={{ textAlign: 'right' }}>
                                    <Button type="primary" htmlType="submit" size="small" >查询</Button>
                                </Col>
                            </Row>
                        </Form>
                        <Layout>
                            <Content>
                                <Row flex='flex' justify="space-around">
                                    <Col span={6}>
                                        <Card
                                            style={{ width: 300 }}
                                            hoverable="true"
                                            title={
                                                <Row>
                                                    <Col span={12}>
                                                        <span>编号：</span>
                                                        <span>1111</span>
                                                    </Col>
                                                    <Col span={12}>
                                                        <span>价格：</span>
                                                        <span>1111</span>
                                                    </Col>
                                                </Row>
                                            }
                                            bodyStyle={{
                                                padding: 0
                                            }}
                                            extra={
                                                <Radio></Radio>
                                            }
                                            cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                                            actions={[<Icon type="setting" />, <Icon type="up-square" />, <Icon type="like" />,<Icon type="bulb" />,<Icon type="picture" />,<Input placeholder="99" style={{ width: 40,height: 25 }} />]}
                                        >
                                            <Row>
                                                <Col span={12}>
                                                <FormItem label="作者：" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} >
                                                        {getFieldDecorator('selectsale', {
                                                            initialValue: '',
                                                            rules: []
                                                        })(<span>111</span>)}
                                                    </FormItem>
                                                </Col>
                                                <Col span={12}>
                                                <FormItem label="容量：" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} >
                                                        {getFieldDecorator('selectsale', {
                                                            initialValue: '',
                                                            rules: []
                                                        })(<span>12L</span>)}
                                                    </FormItem>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col span={12}>
                                                <FormItem label="泥料：" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} >
                                                        {getFieldDecorator('selectsale', {
                                                            initialValue: '',
                                                            rules: []
                                                        })(<span>111</span>)}
                                                    </FormItem>
                                                </Col>
                                                <Col span={12}>
                                                <FormItem label="库存：" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} >
                                                        {getFieldDecorator('selectsale', {
                                                            initialValue: '',
                                                            rules: []
                                                        })(<span>12L</span>)}
                                                    </FormItem>
                                                </Col>
                                            </Row>
                                        </Card>            
                                    </Col>
                                    <Col span={6}>
                                        <Card
                                            style={{ width: 300 }}
                                            hoverable="true"
                                            title={
                                                <Row>
                                                    <Col span={12}>
                                                        <span>编号：</span>
                                                        <span>1111</span>
                                                    </Col>
                                                    <Col span={12}>
                                                        <span>价格：</span>
                                                        <span>1111</span>
                                                    </Col>
                                                </Row>
                                            }
                                            bodyStyle={{
                                                padding: 0
                                            }}
                                            extra={
                                                <Radio></Radio>
                                            }
                                            cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                                            actions={[<Icon type="setting" />, <Icon type="up-square" />, <Icon type="like" />,<Icon type="bulb" />,<Icon type="picture" />,<Input placeholder="99" style={{ width: 40,height: 25 }} />]}
                                        >
                                            <Row>
                                                <Col span={12}>
                                                <FormItem label="作者：" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} >
                                                        {getFieldDecorator('selectsale', {
                                                            initialValue: '',
                                                            rules: []
                                                        })(<span>111</span>)}
                                                    </FormItem>
                                                </Col>
                                                <Col span={12}>
                                                <FormItem label="容量：" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} >
                                                        {getFieldDecorator('selectsale', {
                                                            initialValue: '',
                                                            rules: []
                                                        })(<span>12L</span>)}
                                                    </FormItem>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col span={12}>
                                                <FormItem label="泥料：" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} >
                                                        {getFieldDecorator('selectsale', {
                                                            initialValue: '',
                                                            rules: []
                                                        })(<span>111</span>)}
                                                    </FormItem>
                                                </Col>
                                                <Col span={12}>
                                                <FormItem label="库存：" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} >
                                                        {getFieldDecorator('selectsale', {
                                                            initialValue: '',
                                                            rules: []
                                                        })(<span>12L</span>)}
                                                    </FormItem>
                                                </Col>
                                            </Row>
                                        </Card>            
                                    </Col>
                                    <Col span={6}>
                                        <Card
                                            style={{ width: 300 }}
                                            hoverable="true"
                                            title={
                                                <Row>
                                                    <Col span={12}>
                                                        <span>编号：</span>
                                                        <span>1111</span>
                                                    </Col>
                                                    <Col span={12}>
                                                        <span>价格：</span>
                                                        <span>1111</span>
                                                    </Col>
                                                </Row>
                                            }
                                            bodyStyle={{
                                                padding: 0
                                            }}
                                            extra={
                                                <Radio></Radio>
                                            }
                                            cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                                            actions={[<Icon type="setting" />, <Icon type="up-square" />, <Icon type="like" />,<Icon type="bulb" />,<Icon type="picture" />,<Input placeholder="99" style={{ width: 40,height: 25 }} />]}
                                        >
                                            <Row>
                                                <Col span={12}>
                                                <FormItem label="作者：" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} >
                                                        {getFieldDecorator('selectsale', {
                                                            initialValue: '',
                                                            rules: []
                                                        })(<span>111</span>)}
                                                    </FormItem>
                                                </Col>
                                                <Col span={12}>
                                                <FormItem label="容量：" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} >
                                                        {getFieldDecorator('selectsale', {
                                                            initialValue: '',
                                                            rules: []
                                                        })(<span>12L</span>)}
                                                    </FormItem>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col span={12}>
                                                <FormItem label="泥料：" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} >
                                                        {getFieldDecorator('selectsale', {
                                                            initialValue: '',
                                                            rules: []
                                                        })(<span>111</span>)}
                                                    </FormItem>
                                                </Col>
                                                <Col span={12}>
                                                <FormItem label="库存：" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} >
                                                        {getFieldDecorator('selectsale', {
                                                            initialValue: '',
                                                            rules: []
                                                        })(<span>12L</span>)}
                                                    </FormItem>
                                                </Col>
                                            </Row>
                                        </Card>            
                                    </Col>
                                    <Col span={6}>
                                        <Card
                                            style={{ width: 300 }}
                                            hoverable="true"
                                            title={
                                                <Row>
                                                    <Col span={12}>
                                                        <span>编号：</span>
                                                        <span>1111</span>
                                                    </Col>
                                                    <Col span={12}>
                                                        <span>价格：</span>
                                                        <span>1111</span>
                                                    </Col>
                                                </Row>
                                            }
                                            bodyStyle={{
                                                padding: 0
                                            }}
                                            extra={
                                                <Radio></Radio>
                                            }
                                            cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                                            actions={[<Icon type="setting" />, <Icon type="up-square" />, <Icon type="like" />,<Icon type="bulb" />,<Icon type="picture" />,<Input placeholder="99" style={{ width: 40,height: 25 }} />]}
                                        >
                                            <Row>
                                                <Col span={12}>
                                                <FormItem label="作者：" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} >
                                                        {getFieldDecorator('selectsale', {
                                                            initialValue: '',
                                                            rules: []
                                                        })(<span>111</span>)}
                                                    </FormItem>
                                                </Col>
                                                <Col span={12}>
                                                <FormItem label="容量：" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} >
                                                        {getFieldDecorator('selectsale', {
                                                            initialValue: '',
                                                            rules: []
                                                        })(<span>12L</span>)}
                                                    </FormItem>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col span={12}>
                                                <FormItem label="泥料：" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} >
                                                        {getFieldDecorator('selectsale', {
                                                            initialValue: '',
                                                            rules: []
                                                        })(<span>111</span>)}
                                                    </FormItem>
                                                </Col>
                                                <Col span={12}>
                                                <FormItem label="库存：" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} >
                                                        {getFieldDecorator('selectsale', {
                                                            initialValue: '',
                                                            rules: []
                                                        })(<span>12L</span>)}
                                                    </FormItem>
                                                </Col>
                                            </Row>
                                        </Card>            
                                    </Col>
                                </Row>
                            </Content>
                        </Layout>
                    </Layout>
                </Layout>



            </Layout>
        );
        function handleChange() {

        }


    }
}
const ProductListFrom = Form.create()(ProductList);


export default ProductListFrom;