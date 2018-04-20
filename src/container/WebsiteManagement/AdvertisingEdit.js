import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import HeaderComponent from '../../components/Header/'
import WebsiteMenu from '../../components/Menu/WebsiteMenu'
import options from '../../common/utils/address-options';
import { Layout, Cascader, Select, Breadcrumb, DatePicker, Button, Row, Col, Form, Input, } from 'antd';
const Option = Select.Option;
const { Content } = Layout;
const FormItem = Form.Item;
class AdvertisingEdit extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    handleSearch = (e) => {
        e.preventDefault()
        this.props.form.validateFields([
            'name',

        ], (err, values) => {
            console.log(values)
        })
    }

    render() {
        let me = this;
        const { getFieldDecorator } = me.props.form;

        return (
            <Layout className="page-layout">
                <HeaderComponent selected={['7']}></HeaderComponent>
                <Layout>
                    <WebsiteMenu selected={['5']} openKeys={['sub4']} />
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>网站管理</Breadcrumb.Item>
                            <Breadcrumb.Item>广告管理</Breadcrumb.Item>
                            <Breadcrumb.Item>编辑内容</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content className="page-content"  >
                            <Form className="page-content-form newTracklogform" onSubmit={this.handleSearch}>
                                <FormItem
                                    label="所属类别"
                                >
                                    {getFieldDecorator('groupname', {
                                    })(
                                        <Select
                                            style={{ top: 0 }}
                                        >
                                            <Option value="1">无分类</Option>
                                            <Option value="2">商城上方广告</Option>
                                            <Option value="2">商城咨询广告</Option>
                                            <Option value="2">幻灯片</Option>
                                        </Select>
                                    )}
                                </FormItem>
                                <FormItem
                                    label="排序数字"
                                >
                                    {getFieldDecorator('groupname', {
                                    })(
                                        <div>
                                            <Input />
                                            <span className="form-result-notice">*数字越小越靠前排序</span>
                                        </div>
                                    )}
                                </FormItem>
                                <FormItem
                                    label="URL链接"
                                >
                                    {getFieldDecorator('grade', {
                                    })(
                                        <Input />
                                    )}
                                </FormItem>
                                <FormItem
                                    label="广告图片"
                                >
                                    {getFieldDecorator('upgrade', {
                                    })(
                                        <div>
                                            <Input />
                                            <Button type="primary" style={{marginLeft:20}}>游览</Button>
                                        </div>
                                    )}
                                </FormItem>
                                <Row >
                                    <Button type="primary" htmlType="submit"  >保存</Button>
                                    <Button type="primary" htmlType="submit" style={{ marginLeft: 20, marginTop: 20 }} >
                                        <Link to='/advertisingmanage'>返回</Link>
                                    </Button>
                                </Row>
                            </Form>

                        </Content>
                    </Layout>
                </Layout>

            </Layout >
        );

        function goBack() {
            window.history.go(-1)
        }
    }
}
const AdvertisingEditFrom = Form.create()(AdvertisingEdit);


export default AdvertisingEditFrom;