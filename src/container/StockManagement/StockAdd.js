import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import HeaderComponent from '../../components/Header/'
import StockMenu from '../../components/Menu/StockMenu'
import { Radio, Checkbox, Layout, Select, Tabs, Modal, DatePicker, message, Breadcrumb, Button, Row, Col, Form, Input, Table } from 'antd';
const Option = Select.Option;
const { Content } = Layout;
const { TextArea } = Input;
const FormItem = Form.Item;
const ButtonGroup = Button.Group;
const InputGroup = Input.Group;
const TabPane = Tabs.TabPane;
const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;
const CheckboxButton = Checkbox.Button;
const CheckboxGroup = Checkbox.Group;
class StockAdd extends Component {
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
                    <StockMenu selected={['1']} />
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>库存管理</Breadcrumb.Item>
                            <Breadcrumb.Item>编辑内容</Breadcrumb.Item>
                        </Breadcrumb>

                        <Content className="page-content"  >
                            <Tabs defaultActiveKey="1" onChange={callback}>
                                <TabPane tab="基本信息" key="1">
                                    <Form className="page-content-form newTracklogform" onSubmit={this.handleSearch}>
                                        <FormItem
                                            label="所属类别"
                                        >
                                            {getFieldDecorator('type', {
                                            })(
                                                <Input style={{ width: 180 }} />
                                            )}
                                        </FormItem>
                                        <FormItem
                                            label="显示状态"
                                        >
                                            {getFieldDecorator('status', {
                                            })(
                                                <RadioGroup >
                                                    <RadioButton value={'0'}>可售</RadioButton>
                                                    <RadioButton value={'1'}>不可售</RadioButton>
                                                    <span className="form-result-notice">*可售状态可以在网站显示出来</span>
                                                </RadioGroup>
                                            )}
                                        </FormItem>
                                        <FormItem label="推荐类型" >
                                            {getFieldDecorator('userstatus', {
                                                rules: []
                                            })(
                                                <RadioGroup >
                                                    <RadioButton value="a">可评论</RadioButton>
                                                    <RadioButton value="b">置顶</RadioButton>
                                                    <RadioButton value="c">推荐</RadioButton>
                                                    <RadioButton value="d">热门</RadioButton>
                                                    <RadioButton value="e">幻灯片</RadioButton>
                                                    <RadioButton value="other">其他</RadioButton>
                                                </RadioGroup>
                                            )}
                                        </FormItem>
                                        <FormItem
                                            label="商品名称"
                                        >
                                            {getFieldDecorator('status', {
                                            })(
                                                <Input style={{ width: 180 }} />
                                            )}
                                        </FormItem>
                                        <FormItem
                                            label="产品特点"
                                        >
                                            {getFieldDecorator('status', {
                                            })(
                                                <Input style={{ width: 180 }} />
                                            )}
                                        </FormItem>
                                        <Row>
                                            <Col style={{ display: 'inline-block' }}>
                                                <FormItem
                                                    label="封面图片"
                                                >
                                                    {getFieldDecorator('phone1', {
                                                    })(
                                                        <div>
                                                            <Input placeholder="链接地址" style={{ width: 180 }} />
                                                            <Button style={{ marginLeft: 20 }} type="primary" htmlType="submit"  >浏览</Button>
                                                        </div>
                                                    )}
                                                </FormItem>

                                            </Col>
                                        </Row>
                                        <FormItem
                                            label="商品货号"
                                        >
                                            {getFieldDecorator('status', {
                                            })(
                                                <Input style={{ width: 180 }} />
                                            )}
                                        </FormItem>
                                        <FormItem
                                            label="成本价"
                                        >
                                            {getFieldDecorator('status', {
                                            })(
                                                <Input style={{ width: 180 }} />
                                            )}
                                        </FormItem>
                                        <FormItem
                                            label="老板价"
                                        >
                                            {getFieldDecorator('status', {
                                            })(
                                                <Input style={{ width: 180 }} />
                                            )}
                                        </FormItem>
                                        <FormItem
                                            label="销售价"
                                        >
                                            {getFieldDecorator('status', {
                                            })(
                                                <Input style={{ width: 180 }} />
                                            )}
                                        </FormItem>
                                        <FormItem label="发布时间">
                                            {getFieldDecorator('nextTime', {
                                                rules: []
                                            })(<DatePicker
                                                showTime
                                                style={{ width: 180 }}
                                                format="YYYY-MM-DD HH:mm:ss"
                                            />)}
                                        </FormItem>
                                        <Row >
                                            <Button type="primary" htmlType="submit"  >保存</Button>
                                            <Button type="primary" htmlType="submit" style={{ marginLeft: 20, marginTop: 20 }} ><Link to='/stockmanagement'>返回</Link></Button>
                                        </Row>
                                    </Form>
                                </TabPane>
                                <TabPane tab="拓展选项" key="2">
                                    <Form className="page-content-form newTracklogform" onSubmit={this.handleSearch}>
                                        <FormItem
                                            label="奖项"
                                        >
                                            {getFieldDecorator('type', {
                                            })(
                                                <RadioGroup >
                                                    <RadioButton value="a">金奖</RadioButton>
                                                    <RadioButton value="b">银奖</RadioButton>
                                                    <RadioButton value="c">铜奖</RadioButton>
                                                    <RadioButton value="d">一等奖</RadioButton>
                                                    <RadioButton value="e">二等奖</RadioButton>
                                                    <RadioButton value="f">三等奖</RadioButton>
                                                </RadioGroup>
                                            )}
                                        </FormItem>
                                        <FormItem label="刻绘主题" >
                                            {getFieldDecorator('userstatus', {
                                                rules: []
                                            })(
                                                <CheckboxGroup >
                                                    <Checkbox value="A">福</Checkbox>
                                                    <Checkbox value="A">福</Checkbox>
                                                    <Checkbox value="A">福</Checkbox>
                                                    <Checkbox value="A">福</Checkbox>
                                                    <Checkbox value="A">福</Checkbox>
                                                </CheckboxGroup>
                                            )}
                                        </FormItem>
                                        <FormItem
                                            label="收藏指数"
                                        >
                                            {getFieldDecorator('type', {
                                                initialValue: 'a'
                                            })(
                                                <RadioGroup >
                                                    <RadioButton value="a">否</RadioButton>
                                                    <RadioButton value="b">专利</RadioButton>
                                                    <RadioButton value="c">收藏</RadioButton>
                                                    <RadioButton value="d">金奖</RadioButton>
                                                    <RadioButton value="e">银奖</RadioButton>
                                                    <RadioButton value="f">铜奖</RadioButton>
                                                </RadioGroup>
                                            )}
                                        </FormItem>
                                        <FormItem
                                            label="升值预估"
                                        >
                                            {getFieldDecorator('status', {
                                            })(
                                                <Input style={{ width: 180 }} />
                                            )}
                                        </FormItem>
                                        <FormItem
                                            label="茶席套装"
                                        >
                                            {getFieldDecorator('type', {
                                                initialValue: 'a'
                                            })(
                                                <RadioGroup >
                                                    <RadioButton value="a">否</RadioButton>
                                                    <RadioButton value="b">是</RadioButton>
                                                </RadioGroup>
                                            )}
                                        </FormItem>
                                        <FormItem
                                            label="输入泥料"
                                        >
                                            {getFieldDecorator('status', {
                                            })(
                                                <Input style={{ width: 180 }} />
                                            )}
                                        </FormItem>
                                        <FormItem
                                            label="专利号"
                                        >
                                            {getFieldDecorator('status', {
                                            })(
                                                <Input style={{ width: 180 }} />
                                            )}
                                        </FormItem>
                                        <FormItem
                                            label="加入馆藏"
                                        >
                                            {getFieldDecorator('type', {
                                                initialValue: 'a'
                                            })(
                                                <RadioGroup >
                                                    <RadioButton value="a">否</RadioButton>
                                                    <RadioButton value="b">是</RadioButton>
                                                </RadioGroup>
                                            )}
                                        </FormItem>
                                        <FormItem
                                            label="活动选项"
                                        >
                                            {getFieldDecorator('type', {
                                                initialValue: 'a'
                                            })(
                                                <RadioGroup >
                                                    <RadioButton value="a">秒杀</RadioButton>
                                                    <RadioButton value="b">捡漏</RadioButton>
                                                    <RadioButton value="c">促销</RadioButton>
                                                </RadioGroup>
                                            )}
                                        </FormItem>
                                        <FormItem
                                            label="放入积分商场"
                                        >
                                            {getFieldDecorator('type', {
                                                initialValue: 'a'
                                            })(
                                                <RadioGroup >
                                                    <RadioButton value="a">否</RadioButton>
                                                    <RadioButton value="b">是</RadioButton>
                                                    <span className="form-result-notice">*200元总换1积分</span>
                                                </RadioGroup>
                                            )}
                                        </FormItem>
                                        <FormItem
                                            label="是否破损"
                                        >
                                            {getFieldDecorator('type', {
                                                initialValue: 'a'
                                            })(
                                                <RadioGroup >
                                                    <RadioButton value="a">否</RadioButton>
                                                    <RadioButton value="b">是</RadioButton>
                                                </RadioGroup>
                                            )}
                                        </FormItem>
                                        <FormItem
                                            label="生肖属相"
                                        >
                                            {getFieldDecorator('type', {
                                                initialValue: 'a'
                                            })(
                                                <RadioGroup >
                                                    <RadioButton value="a">否</RadioButton>
                                                    <RadioButton value="b">专利</RadioButton>
                                                    <RadioButton value="c">收藏</RadioButton>
                                                    <RadioButton value="d">金奖</RadioButton>
                                                    <RadioButton value="e">银奖</RadioButton>
                                                    <RadioButton value="f">铜奖</RadioButton>
                                                </RadioGroup>
                                            )}
                                        </FormItem>
                                        <FormItem
                                            label="款式壶型"
                                        >
                                            {getFieldDecorator('type', {
                                                initialValue: 'a'
                                            })(
                                                <RadioGroup >
                                                    <RadioButton value="a">否</RadioButton>
                                                    <RadioButton value="b">专利</RadioButton>
                                                    <RadioButton value="c">收藏</RadioButton>
                                                    <RadioButton value="d">金奖</RadioButton>
                                                    <RadioButton value="e">银奖</RadioButton>
                                                    <RadioButton value="f">铜奖</RadioButton>
                                                </RadioGroup>
                                            )}
                                        </FormItem>
                                        <FormItem
                                            label="泥料类别"
                                        >
                                            {getFieldDecorator('type', {
                                                initialValue: 'a'
                                            })(
                                                <RadioGroup >
                                                    <RadioButton value="a">否</RadioButton>
                                                    <RadioButton value="b">专利</RadioButton>
                                                    <RadioButton value="c">收藏</RadioButton>
                                                    <RadioButton value="d">金奖</RadioButton>
                                                    <RadioButton value="e">银奖</RadioButton>
                                                    <RadioButton value="f">铜奖</RadioButton>
                                                </RadioGroup>
                                            )}
                                        </FormItem>

                                        <Row>
                                            <Col style={{ display: 'inline-block' }}>
                                                <FormItem
                                                    label="库存列表"
                                                >
                                                    {getFieldDecorator('phone1', {
                                                    })(
                                                        <span></span>
                                                    )}
                                                </FormItem>

                                            </Col>
                                            <div style={{ display: 'inline-block', verticalAlign: 'text-top' }}>
                                                <Col>
                                                    <FormItem
                                                        label="上海店"
                                                    >
                                                        {getFieldDecorator('shanghai', {
                                                        })(
                                                            <Input style={{ width: 100 }} />
                                                        )}
                                                    </FormItem>

                                                </Col>
                                                <Col>
                                                    <FormItem
                                                        label="上海店"
                                                    >
                                                        {getFieldDecorator('shanghai', {
                                                        })(
                                                            <Input style={{ width: 100 }} />
                                                        )}
                                                    </FormItem>

                                                </Col>
                                                <Col>
                                                    <FormItem
                                                        label="上海店"
                                                    >
                                                        {getFieldDecorator('shanghai', {
                                                        })(
                                                            <Input style={{ width: 100 }} />
                                                        )}
                                                    </FormItem>

                                                </Col>
                                                <Col style={{ textAlign: 'right', marginTop: 20 }}>
                                                    <Button type="primary" htmlType="submit"  >自定义仓库</Button>
                                                </Col>

                                            </div>
                                        </Row>

                                        <Row >
                                            <Button type="primary" htmlType="submit"  >保存</Button>
                                            <Button type="primary" htmlType="submit" style={{ marginLeft: 20, marginTop: 20 }} ><Link to='/stockmanagement'>返回</Link></Button>
                                        </Row>
                                    </Form>

                                </TabPane>
                                <TabPane tab="详细描述" key="3">
                                    <Form className="page-content-form newTracklogform" onSubmit={this.handleSearch}>
                                        <FormItem
                                            label="调用别名"
                                        >
                                            {getFieldDecorator('status', {
                                            })(
                                                <Input style={{ width: 300 }} />
                                            )}
                                        </FormItem>
                                        <FormItem
                                            label="URL链接"
                                        >
                                            {getFieldDecorator('status', {
                                            })(
                                                <Input style={{ width: 300 }} />
                                            )}
                                        </FormItem>
                                        <FormItem
                                            label="SEO关键字"
                                        >
                                            {getFieldDecorator('status', {
                                            })(
                                                <TextArea style={{ width: 300, verticalAlign: 'text-top' }} rows={4} />
                                            )}
                                        </FormItem>
                                        <FormItem
                                            label="内容摘要"
                                        >
                                            {getFieldDecorator('status', {
                                            })(
                                                <TextArea style={{ width: 300, verticalAlign: 'text-top' }} rows={4} />
                                            )}
                                        </FormItem>
                                        <FormItem
                                            label="内容描述"
                                        >
                                            {getFieldDecorator('status', {
                                            })(
                                                <TextArea style={{ width: 300, verticalAlign: 'text-top' }} rows={4} />
                                            )}
                                        </FormItem>
                                        <Row >
                                            <Button type="primary" htmlType="submit"  >保存</Button>
                                            <Button type="primary" htmlType="submit" style={{ marginLeft: 20, marginTop: 20 }} ><Link to='/stockmanagement'>返回</Link></Button>
                                        </Row>
                                    </Form>
                                </TabPane>
                                <TabPane tab="SEO选项" key="4">
                                    <Form className="page-content-form newTracklogform" onSubmit={this.handleSearch}>
                                        <FormItem
                                            label="SEO标题"
                                        >
                                            {getFieldDecorator('status', {
                                            })(
                                                <Input style={{ width: 300 }} />
                                            )}
                                        </FormItem>
                                        <FormItem
                                            label="SEO描述"
                                        >
                                            {getFieldDecorator('status', {
                                            })(
                                                <TextArea style={{ width: 300, verticalAlign: 'text-top' }} rows={4} />
                                            )}
                                        </FormItem>
                                        <Row >
                                            <Button type="primary" htmlType="submit"  >保存</Button>
                                            <Button type="primary" htmlType="submit" style={{ marginLeft: 20, marginTop: 20 }} ><Link to='/stockmanagement'>返回</Link></Button>
                                        </Row>
                                    </Form>
                                </TabPane>
                            </Tabs>
                        </Content>
                    </Layout>
                </Layout>



            </Layout>
        );
        function callback(key) {
            console.log(key);
        }

    }
}
const StockAddFrom = Form.create()(StockAdd);


export default StockAddFrom;