import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import HeaderComponent from '../../components/Header/'
import JurisdictionMenu from '../../components/Menu/JurisdictionMenu'
import { Layout, Select, DatePicker, Breadcrumb, Button, Row, Col, Form, Input, Table, Switch,Checkbox,Radio } from 'antd';
const Option = Select.Option;
const { Content } = Layout;
const { TextArea } = Input;
const FormItem = Form.Item;
const ButtonGroup = Button.Group;
const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;
const { RangePicker } = DatePicker;
const InputGroup = Input.Group;
const CheckboxGroup = Checkbox.Group;
const plainOptions = ['显示']
const defaultCheckedList = [];
class JurisdictionAction extends Component {
    constructor(props) {
        super(props)
        this.state = {
            checkedList: [],
            indeterminate: true,
            checkAll: false
        }
    }
    
    render() {
        let me = this;
        const { getFieldDecorator } = me.props.form;
        const data = [{
            key: 1,
            name: 'CRM主页面',
            age: <CheckboxGroup options={plainOptions} onChange={onChange} />,
            all: <Checkbox onChange={onChange}></Checkbox>,
            children: [
                {key: 2,name: '首页',age: <CheckboxGroup options={['显示','修改','保存']} onChange={onChange} />,all: <Checkbox onChange={onChange}></Checkbox>},
                {key: 2,name: '客户管理',age: <CheckboxGroup options={plainOptions} onChange={onChange} />,all: <Checkbox onChange={onChange}></Checkbox>,
                    children: [
                        {key: 2,name: '所有客户',age: <CheckboxGroup options={['显示','修改','新增','下新壶','下老壶','下藏壶','转移到销售','查看订单','释放','删除','查询','查看记录','删除记录']} onChange={onChange} />,all: <Checkbox onChange={onChange}></Checkbox>},
                        {key: 2,name: '客户组别',age: <CheckboxGroup options={['显示','修改','新增','删除']} onChange={onChange} />,all: <Checkbox onChange={onChange}></Checkbox>},
                        {key: 2,name: '客户咨询',age: <CheckboxGroup options={['显示','回复']} onChange={onChange} />,all: <Checkbox onChange={onChange}></Checkbox>},
                        {key: 2,name: 'CRM查询',age: <CheckboxGroup options={['查询','导出']} onChange={onChange} />,all: <Checkbox onChange={onChange}></Checkbox>},
                    ]    
                },
                {key: 2,name: '客户统计',age: <CheckboxGroup options={plainOptions} onChange={onChange} />,all: <Checkbox onChange={onChange}></Checkbox>},
                {key: 2,name: '客户日志',age: <CheckboxGroup options={plainOptions} onChange={onChange} />,all: <Checkbox onChange={onChange}></Checkbox>},
                {key: 2,name: '客户设置',age: <CheckboxGroup options={plainOptions} onChange={onChange} />,all: <Checkbox onChange={onChange}></Checkbox>},
                ]}
            ];

        const columns = [
            {title: '导航名称',dataIndex: 'name',width: '25%',key: 'name'},
            {title: '权限分配（多选）',dataIndex: 'age',key: 'age',width: '60%'},
            {title: '全选',dataIndex: 'all',width: '15%',key: 'address'}
        ];
        
        let renderProps = {
            columns: columns,
            loading: false,
            dataSource: data,
            defaultExpandAllRows:true
        };
        return (
            <Layout className="page-layout">
                <HeaderComponent selected={['6']}></HeaderComponent>
                <Layout>
                    <JurisdictionMenu selected={['2']} openKeys={['sub2']} />
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>权限管理</Breadcrumb.Item>
                            <Breadcrumb.Item>角色编辑</Breadcrumb.Item>
                        </Breadcrumb>
                        <Form className="page-content-form" onSubmit={this.handleSearch}>
                            <Row >
                                <Col span={6} >
                                    <FormItem label="角色名称：" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
                                        {getFieldDecorator('customername', {
                                            initialValue: '',
                                            rules: []
                                        })(
                                            <Select
                                                onChange={handleChange}
                                                size="small"
                                                placeholder="请选择角色"
                                            >
                                                <Option value="you">管理员</Option>
                                                <Option value="lucy1">销售部</Option>
                                                <Option value="lucy2">运营部</Option>
                                                <Option value="lucy3">财务部</Option>
                                                <Option value="lucy4">行政部</Option>
                                                <Option value="lucy5">测试</Option>
                                            </Select>)}
                                    </FormItem>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={6} >
                                    <FormItem label="是否启用：" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
                                        {getFieldDecorator('customerphone', {
                                            initialValue: '',
                                            rules: []
                                        })(
                                            <RadioGroup >
                                                <RadioButton value={'0'}>是</RadioButton>
                                                <RadioButton value={'1'}>否</RadioButton>
                                            </RadioGroup>
                                        )}
                                    </FormItem>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={6} >
                                    <FormItem label="用户名：" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
                                        {getFieldDecorator('customerlog', {
                                            initialValue: '',
                                            rules: []
                                        })(<Input size="small" />)}
                                    </FormItem>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={6}>
                                    <FormItem label="权限管理：" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}></FormItem>
                                </Col>
                            </Row>
                            <Row>
                                <Col offset={2} span={22}>
                                    <Table bordered  {...renderProps} />
                                </Col>
                            </Row>
                        </Form>
                    </Layout>
                </Layout>

            </Layout>
        );
        function handleChange() {

        }
        function onChange(checkedValues) {
            console.log('checked = ', checkedValues);
        }
        
    }
}
const JurisdictionActionFrom = Form.create()(JurisdictionAction);


export default JurisdictionActionFrom;