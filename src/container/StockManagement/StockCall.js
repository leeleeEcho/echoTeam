import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import HeaderComponent from '../../components/Header/'
import StockMenu from '../../components/Menu/StockMenu'
import { Layout, Select, Radio, DatePicker, Breadcrumb, Button, Row, Form, Input } from 'antd';
const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;
const { Content } = Layout;
const FormItem = Form.Item;
const Option = Select.Option;
class StockCall extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        let me = this;
        const { getFieldDecorator } = me.props.form;

        return (
            <Layout className="page-layout">
                <HeaderComponent selected={['2']}></HeaderComponent>
                <Layout>
                    <StockMenu selected={['4']} openKeys={['sub4']} />
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>配货订单</Breadcrumb.Item>
                            <Breadcrumb.Item>新增调货</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content className="page-content"  >
                            <Form className="page-content-form newTracklogform" onSubmit={this.handleSearch}>
                                <FormItem
                                    label="商品编号"
                                >
                                    {getFieldDecorator('groupname', {
                                    })(
                                        <Input />
                                    )}
                                </FormItem>
                                <FormItem
                                    label="产品名称"
                                >
                                    {getFieldDecorator('grade', {
                                    })(
                                        <Input />
                                    )}
                                </FormItem>
                                <FormItem
                                    label="图片"
                                >
                                    {getFieldDecorator('upgrade', {
                                    })(
                                        <Input />
                                    )}
                                </FormItem>
                                <FormItem
                                    label="作者"
                                >
                                    {getFieldDecorator('initprice', {
                                    })(
                                        <Input />
                                    )}
                                </FormItem>
                                <FormItem
                                    label="泥料"
                                >
                                    {getFieldDecorator('initupgrade', {
                                    })(
                                        <Input />
                                    )}
                                </FormItem>
                                <FormItem
                                    label="容量"
                                >
                                    {getFieldDecorator('initupgrade', {
                                    })(
                                        <Input />
                                    )}
                                </FormItem>
                                <FormItem
                                    label="调货人"
                                >
                                    {getFieldDecorator('initupgrade', {
                                    })(
                                        <Select

                                        >
                                            <Option value="yes">有</Option>
                                            <Option value="no">无</Option>
                                        </Select>
                                    )}
                                </FormItem>
                                <FormItem
                                    label="要货人"
                                >
                                    {getFieldDecorator('initupgrade', {
                                    })(
                                        <Select

                                        >
                                            <Option value="yes">有</Option>
                                            <Option value="no">无</Option>
                                        </Select>
                                    )}
                                </FormItem>
                                <FormItem
                                    label="调出仓库"
                                >
                                    {getFieldDecorator('initupgrade', {
                                    })(
                                        <RadioGroup defaultValue="a">
                                            <RadioButton value="a">上海仓库</RadioButton>
                                            <RadioButton value="b">北京仓库</RadioButton>
                                            <RadioButton value="c">宜兴仓库</RadioButton>
                                        </RadioGroup>
                                    )}
                                </FormItem>
                                <FormItem
                                    label="调入仓库"
                                >
                                    {getFieldDecorator('initupgrade', {
                                    })(
                                        <RadioGroup defaultValue="a">
                                            <RadioButton value="a">上海仓库</RadioButton>
                                            <RadioButton value="b">北京仓库</RadioButton>
                                            <RadioButton value="c">宜兴仓库</RadioButton>
                                        </RadioGroup>
                                    )}
                                </FormItem>
                                <FormItem
                                    label="调货数量"
                                >
                                    {getFieldDecorator('initupgrade', {
                                    })(
                                        <Input />
                                    )}
                                </FormItem>
                                <FormItem label="调货时间" >
                                    {getFieldDecorator('nextTime', {
                                        rules: [
                                        ]
                                    })(<DatePicker
                                        showTime
                                        format="YYYY-MM-DD HH:mm:ss"
                                    />)}
                                </FormItem>
                                <FormItem label="要求到货时间" >
                                    {getFieldDecorator('nextTime', {
                                        rules: [
                                        ]
                                    })(<DatePicker
                                        showTime
                                        format="YYYY-MM-DD HH:mm:ss"
                                    />)}
                                </FormItem>
                                <FormItem label="实际到货时间" >
                                    {getFieldDecorator('nextTime', {
                                        rules: [
                                        ]
                                    })(<DatePicker
                                        showTime
                                        format="YYYY-MM-DD HH:mm:ss"
                                    />)}
                                </FormItem>
                                <Row >
                                    <Button type="primary" htmlType="submit"  >保存</Button>
                                    <Button type="primary" htmlType="submit" onClick={goBack} style={{ marginLeft: 20, marginTop: 20 }} >返回</Button>
                                </Row>
                            </Form>


                        </Content>
                    </Layout>
                </Layout>

            </Layout>
        );
        function goBack() {
            window.history.go(-1)
        }


    }
}
const StockCallFrom = Form.create()(StockCall);


export default StockCallFrom;