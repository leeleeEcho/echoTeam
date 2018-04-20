import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import HeaderComponent from '../../components/Header/'
import PersonnelMenu from '../../components/Menu/PersonnelMenu'
import { Layout, Select, DatePicker, Breadcrumb, Button, Row, Col, Form, Input, Table } from 'antd';
const Option = Select.Option;
const { Content } = Layout;
const { TextArea } = Input;
const FormItem = Form.Item;
const ButtonGroup = Button.Group;
const { RangePicker } = DatePicker;
const InputGroup = Input.Group;
class PersonnelList extends Component {
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
            index: '12323',
            customerphone: '茶壶',
            customername: 'leotao'

        }];
        let columns = [
            { title: '姓名', dataIndex: 'customerphone', fixed: 'left' },
            { title: 'key', dataIndex: 'key', className: 'hide' },
            { title: '性别', dataIndex: 'customerphone', fixed: 'left' },
            { title: '出生年月', dataIndex: 'sendtype' },
            { title: '手机号', dataIndex: 'orderstatus' },
            { title: '工作号', dataIndex: 'capacity' },
            {
                title: '微信二维码', dataIndex: 'image', render: (text, record) => {
                    return (
                        <img className="stock-thumbnail"></img>
                    )
                }
            },
            { title: '入职日期', dataIndex: 'capacity' },
            { title: '转正日期', dataIndex: 'capacity' },
            { title: '岗位', dataIndex: 'capacity' },
            { title: '部门', dataIndex: 'capacity' },
            { title: '学历', dataIndex: 'capacity' },
            { title: '毕业学校', dataIndex: 'capacity' },
            { title: '专业', dataIndex: 'capacity' },
            { title: '工资标准', dataIndex: 'capacity' },
            { title: '家庭地址', dataIndex: 'capacity' },
            { title: '联系电话', dataIndex: 'capacity' },
            {
                title: '操作', dataIndex: 'actions', width: 100, fixed: 'right', render: (text, record) => {
                    return (
                        <span>
                            <a>修改</a>
                            <a style={{ marginLeft: 10 }}>删除</a>
                        </span>
                    )
                }
            }
        ];

        let renderProps = {
            columns: columns,
            loading: false,
            dataSource: data,
            scroll: { x: 1300 },
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
                <HeaderComponent selected={['5']}></HeaderComponent>
                <Layout>
                    <PersonnelMenu selected={['1']} openKeys={['sub1']} />
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>人员管理</Breadcrumb.Item>
                            <Breadcrumb.Item>员工花名册</Breadcrumb.Item>
                        </Breadcrumb>
                        <div className="page-top-button" >
                            <Button><Link to="/personnelaction">新增</Link></Button>
                        </div>
                        <Form className="page-content-form" onSubmit={this.handleSearch}>
                            <Row>
                                <Col span={6} >
                                    <FormItem label="部门" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
                                        {getFieldDecorator('orderid', {
                                        })(
                                            <Select
                                                size="small"
                                            >
                                                <Option value="yes">有</Option>
                                                <Option value="no">无</Option>
                                            </Select>
                                        )}
                                    </FormItem>
                                </Col>
                                <Col span={4} style={{ lineHeight: '39px', verticalAlign: 'middle', marginLeft: 20 }}>
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

    }
}
const PersonnelListFrom = Form.create()(PersonnelList);


export default PersonnelListFrom;