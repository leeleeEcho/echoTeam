import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import HeaderComponent from '../../components/Header/'
import CustomerMenu from '../../components/Menu/CustomerMenu'
import options from '../../common/utils/address-options';
import { Radio, Layout, Cascader, Select, DatePicker, Breadcrumb, Button, Row, Col, Form, Input } from 'antd';
const Option = Select.Option;
const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;

const { Content } = Layout;
const { TextArea } = Input;
const FormItem = Form.Item;

class AddCustomer extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    handleSearch = (e) => {
        e.preventDefault()
        this.props.form.validateFields([
            'name',
            'sex',
            'phone1',
            'phone2',
            'phone3',
            'phone4',
            'phone5',
            'userstatus',
            'note',
            'money',
            'address',
            'addressdetail'
        ], (err, values) => {
            console.log(values)
        })
    }

    render() {
        let me = this;
        const { getFieldDecorator } = me.props.form;
        // console.log(options)
        return (
            <Layout className="page-layout">
                <HeaderComponent selected={['1']}></HeaderComponent>
                <Layout>
                    <CustomerMenu selected={['1']} />
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>客户管理</Breadcrumb.Item>
                            <Breadcrumb.Item>新增客户</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content className="page-content"  >

                            <Form className="page-content-form newTracklogform" onSubmit={this.handleSearch}>
                                <FormItem
                                    label="姓名"
                                >
                                    {getFieldDecorator('name', {
                                    })(
                                        <Input style={{ width: 180 }} />
                                    )}
                                </FormItem>
                                <FormItem
                                    label="性别"
                                >
                                    {getFieldDecorator('sex', {
                                    })(
                                        <RadioGroup >
                                            <Radio value={'man'}>男</Radio>
                                            <Radio value={'women'}>女</Radio>
                                        </RadioGroup>
                                    )}
                                </FormItem>
                                <Row>
                                    <Col style={{ display: 'inline-block' }}>
                                        <FormItem
                                            label="手机"
                                        >
                                            {getFieldDecorator('phone1', {
                                            })(
                                                <Input style={{ width: 180 }} />
                                            )}
                                        </FormItem>

                                    </Col>
                                    <Col style={{ display: 'inline-block', marginLeft: 10 }}>
                                        <FormItem
                                        >
                                            {getFieldDecorator('phone2', {
                                            })(
                                                <Input style={{ width: 180 }} />
                                            )}
                                        </FormItem>
                                    </Col>
                                    <Col style={{ display: 'inline-block', marginLeft: 10 }}>
                                        <FormItem
                                        >
                                            {getFieldDecorator('phone3', {
                                            })(
                                                <Input style={{ width: 180 }} />
                                            )}
                                        </FormItem>
                                    </Col>
                                    <Col style={{ display: 'inline-block', marginLeft: 10 }}>
                                        <FormItem
                                        >
                                            {getFieldDecorator('phone4', {
                                            })(
                                                <Input style={{ width: 180 }} />
                                            )}
                                        </FormItem>
                                    </Col>
                                    <Col style={{ display: 'inline-block', marginLeft: 10 }}>
                                        <FormItem
                                        >
                                            {getFieldDecorator('phone5', {
                                            })(
                                                <Input style={{ width: 180 }} />
                                            )}
                                        </FormItem>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col style={{ display: 'inline-block' }}>
                                        <FormItem
                                            label="QQ"
                                        >
                                            {getFieldDecorator('qqnumber1', {
                                            })(
                                                <Input style={{ width: 180 }} />
                                            )}
                                        </FormItem>

                                    </Col>
                                    <Col style={{ display: 'inline-block', marginLeft: 10 }}>
                                        <FormItem
                                        >
                                            {getFieldDecorator('qqnumber2', {
                                            })(
                                                <Input style={{ width: 180 }} />
                                            )}
                                        </FormItem>
                                    </Col>
                                    <Col style={{ display: 'inline-block', marginLeft: 10 }}>
                                        <FormItem
                                        >
                                            {getFieldDecorator('qqnumber3', {
                                            })(
                                                <Input style={{ width: 180 }} />
                                            )}
                                        </FormItem>
                                    </Col>
                                    <Col style={{ display: 'inline-block', marginLeft: 10 }}>
                                        <FormItem
                                        >
                                            {getFieldDecorator('qqnumber4', {
                                            })(
                                                <Input style={{ width: 180 }} />
                                            )}
                                        </FormItem>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col style={{ display: 'inline-block' }}>
                                        <FormItem
                                            label="微信"
                                        >
                                            {getFieldDecorator('wechat1', {
                                            })(
                                                <Input style={{ width: 180 }} />
                                            )}
                                        </FormItem>

                                    </Col>
                                    <Col style={{ display: 'inline-block', marginLeft: 10 }}>
                                        <FormItem
                                        >
                                            {getFieldDecorator('wechat2', {
                                            })(
                                                <Input style={{ width: 180 }} />
                                            )}
                                        </FormItem>
                                    </Col>
                                    <Col style={{ display: 'inline-block', marginLeft: 10 }}>
                                        <FormItem
                                        >
                                            {getFieldDecorator('wechat3', {
                                            })(
                                                <Input style={{ width: 180 }} />
                                            )}
                                        </FormItem>
                                    </Col>
                                    <Col style={{ display: 'inline-block', marginLeft: 10 }}>
                                        <FormItem
                                        >
                                            {getFieldDecorator('wechat4', {
                                            })(
                                                <Input style={{ width: 180 }} />
                                            )}
                                        </FormItem>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col style={{ display: 'inline-block' }}>
                                        <FormItem
                                            label="邮箱"
                                        >
                                            {getFieldDecorator('email1', {
                                            })(
                                                <Input style={{ width: 180 }} />
                                            )}
                                        </FormItem>

                                    </Col>
                                    <Col style={{ display: 'inline-block', marginLeft: 10 }}>
                                        <FormItem
                                        >
                                            {getFieldDecorator('email2', {
                                            })(
                                                <Input style={{ width: 180 }} />
                                            )}
                                        </FormItem>
                                    </Col>
                                    <Col style={{ display: 'inline-block', marginLeft: 10 }}>
                                        <FormItem
                                        >
                                            {getFieldDecorator('email3', {
                                            })(
                                                <Input style={{ width: 180 }} />
                                            )}
                                        </FormItem>
                                    </Col>
                                    <Col style={{ display: 'inline-block', marginLeft: 10 }}>
                                        <FormItem
                                        >
                                            {getFieldDecorator('email4', {
                                            })(
                                                <Input style={{ width: 180 }} />
                                            )}
                                        </FormItem>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col style={{ display: 'inline-block' }}>
                                        <FormItem
                                            label="地址"
                                        >
                                            {getFieldDecorator('address', {
                                            })(
                                                <Cascader placeholder="请选择地址" options={options} style={{ width: 350, top: 0 }} />
                                            )}
                                        </FormItem>

                                    </Col>
                                    <Col style={{ display: 'inline-block', marginLeft: 10 }}>
                                        <FormItem
                                        >
                                            {getFieldDecorator('addressdetail', {
                                            })(
                                                <Input style={{ width: 300 }} />
                                            )}
                                        </FormItem>
                                    </Col>

                                </Row>
                                <FormItem label="归属销售" >
                                    {getFieldDecorator('fromsaler', {
                                        rules: []
                                    })(
                                        <Select
                                            showSearch
                                            placeholder="请选择销售"
                                            style={{ width: 180, top: 0 }}
                                        >
                                            <Option value="jack">Jack</Option>
                                            <Option value="lucy">Lucy</Option>
                                            <Option value="tom">Tom</Option>
                                        </Select>)}
                                </FormItem>
                                <FormItem label="客户来源" >
                                    {getFieldDecorator('fromsaler', {
                                        rules: []
                                    })(
                                        <Select
                                            showSearch
                                            placeholder="所属来源"
                                            style={{ width: 180, top: 0 }}
                                        >
                                            <Option value="jack">Jack</Option>
                                            <Option value="lucy">Lucy</Option>
                                            <Option value="tom">Tom</Option>
                                        </Select>)}
                                </FormItem>
                                <FormItem label="意向程度" >
                                    {getFieldDecorator('fromsaler', {
                                        rules: []
                                    })(
                                        <Select
                                            showSearch
                                            placeholder="意向程度"
                                            style={{ width: 180, top: 0 }}
                                        >
                                            <Option value="jack">Jack</Option>
                                            <Option value="lucy">Lucy</Option>
                                            <Option value="tom">Tom</Option>
                                        </Select>)}
                                </FormItem>
                                <FormItem label="跟踪记录" >
                                    {getFieldDecorator('fromsaler', {
                                        rules: []
                                    })(
                                        <TextArea rows={4} />)}
                                </FormItem>
                                <FormItem label="下次回访时间">
                                    {getFieldDecorator('nextTime', {
                                        rules: []
                                    })(<DatePicker
                                        showTime
                                        style={{ width: 180 }}
                                        format="YYYY-MM-DD HH:mm:ss"
                                    />)}
                                </FormItem>
                                <FormItem label="所属组别" >
                                    {getFieldDecorator('fromsaler', {
                                        rules: []
                                    })(
                                        <Select
                                            showSearch
                                            placeholder="所属组别"
                                            style={{ width: 180, top: 0 }}
                                        >
                                            <Option value="jack">Jack</Option>
                                            <Option value="lucy">Lucy</Option>
                                            <Option value="tom">Tom</Option>
                                        </Select>)}
                                </FormItem>
                                <FormItem label="用户状态" >
                                    {getFieldDecorator('userstatus', {
                                        rules: []
                                    })(
                                        <RadioGroup >
                                            <RadioButton value="a">正常</RadioButton>
                                            <RadioButton value="b">待验证</RadioButton>
                                            <RadioButton value="c">待审核</RadioButton>
                                            <RadioButton value="d">禁用</RadioButton>
                                            <RadioButton value="e">最新</RadioButton>
                                            <span className="form-result-notice">*禁用账户无法登录</span>
                                        </RadioGroup>
                                    )}
                                </FormItem>
                                <FormItem
                                    label="用户名"
                                >
                                    {getFieldDecorator('username', {
                                    })(
                                        <Input style={{ width: 180 }} />
                                    )}
                                </FormItem>
                                <FormItem
                                    label="登陆密码"
                                >
                                    {getFieldDecorator('password', {
                                    })(
                                        <Input style={{ width: 180 }} />
                                    )}
                                </FormItem>
                                <FormItem
                                    label="确认密码"
                                >
                                    {getFieldDecorator('password2', {
                                    })(
                                        <Input style={{ width: 180 }} />
                                    )}
                                </FormItem>
                                <FormItem label="生日日期">
                                    {getFieldDecorator('birthday', {
                                        rules: []
                                    })(<DatePicker
                                        allowClear
                                        style={{ width: 180 }}
                                    />)}
                                </FormItem>
                                <FormItem
                                    label="添加备注"
                                >
                                    {getFieldDecorator('note', {
                                    })(
                                        <Input style={{ width: 180 }} />
                                    )}
                                </FormItem>
                                <FormItem
                                    label="账户金额"
                                >
                                    {getFieldDecorator('money', {
                                    })(
                                        <div>
                                            <Input style={{ width: 180 }} />
                                            <span className="form-result-notice">*预存款</span>
                                        </div>
                                    )}
                                </FormItem>
                                <FormItem
                                    label="账户积分"
                                >
                                    {getFieldDecorator('money', {
                                    })(
                                        <div>
                                            <Input style={{ width: 180 }} />
                                            <span className="form-result-notice">*消费满100元金额总换成1积分</span>
                                        </div>
                                    )}
                                </FormItem>
                                <FormItem label="注册时间">
                                    {getFieldDecorator('birthday', {
                                        rules: []
                                    })(<DatePicker
                                        allowClear
                                        style={{ width: 180 }}
                                    />)}
                                </FormItem>
                                <FormItem
                                    label="注册IP"
                                >
                                    {getFieldDecorator('regiestIP', {
                                    })(
                                        <Input style={{ width: 180 }} />
                                    )}
                                </FormItem>
                                <FormItem label="最近登陆时间">
                                    {getFieldDecorator('birthday', {
                                        rules: []
                                    })(<DatePicker
                                        allowClear
                                        style={{ width: 180 }}
                                    />)}
                                </FormItem>
                                <FormItem
                                    label="最近登陆IP"
                                >
                                    {getFieldDecorator('regiestIP', {
                                    })(
                                        <Input style={{ width: 180 }} />
                                    )}
                                </FormItem>
                                <Row >
                                    <Button type="primary" htmlType="submit"  >提交保存</Button>
                                    <Button type="primary" htmlType="submit" style={{ marginLeft: 20, marginTop: 20 }} ><Link to='/'>返回上一页</Link></Button>
                                </Row>
                            </Form>
                        </Content>
                    </Layout>
                </Layout>

            </Layout>
        );


    }
}
const AddCustomerFrom = Form.create()(AddCustomer);


export default AddCustomerFrom;