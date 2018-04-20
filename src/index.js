import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { LocaleProvider } from 'antd';
import zh_CN from '../node_modules/antd/lib/locale-provider/zh_CN';

import registerServiceWorker from './registerServiceWorker';
/* 客户crm */
import CustomerList from './container/CustomerCRM/CustomerList'; //所有客户
import AddCustomer from './container/CustomerCRM/AddCustomer';//新增客户
import CustomerOrders from './container/CustomerCRM/CustomerOrders';//查看订单页面
import BuyPot from './container/CustomerCRM/BuyPot';//下单
import CRMSearch from './container/CustomerCRM/CRMSearch';//crm查询
import CustomerGroup from './container/CustomerCRM/CustomerGroup';//客户组别
import CustomerGroupAction from './container/CustomerCRM/CustomerGroupAction';//新增客户组别
import CustomerSeek from './container/CustomerCRM/CustomerSeek';//客户咨询
import CustomerStatistics from './container/CustomerCRM/CustomerStatistics';//客户统计
import SendMessage from './container/CustomerCRM/SendMessage';//发送短信
import RechargeRecord from './container/CustomerCRM/RechargeRecord';//充值记录
import BrowseRecord from './container/CustomerCRM/BrowseRecord';//浏览记录
import SMSTemplate from './container/CustomerCRM/SMSTemplate';//短信模版
import SMSTemplateAction from './container/CustomerCRM/SMSTemplateAction';//短信模版操作
import EmailTemplate from './container/CustomerCRM/EmailTemplate';//邮件模版
import EmailTemplateAction from './container/CustomerCRM/EmailTemplateAction';//邮件模版操作
/* 库存管理 */
import StockManagement from './container/StockManagement/';//库存管理
import StockAdd from './container/StockManagement/StockAdd';//新增库存
import StockDistribution from './container/StockManagement/StockDistribution';//新增配货
import StockReserve from './container/StockManagement/StockReserve';//新增预留
import StockCall from './container/StockManagement/StockCall';//新增调货
import DistributionManagement from './container/StockManagement/DistributionManagement';//配货管理
import ReserveManagement from './container/StockManagement/ReserveManagement';//预留管理
import CallManagement from './container/StockManagement/CallManagement';//调货管理
import AllOrders from './container/StockManagement/AllOrders';//订单管理-所有订单
import OrderAudited from './container/StockManagement/OrderAudited';//待审核
import OrderDelivery from './container/StockManagement/OrderDelivery';//待发货
import OrderReturn from './container/StockManagement/OrderReturn';//待退货
import OrderFinish from './container/StockManagement/OrderFinish';//已完成
import OrderCancel from './container/StockManagement/OrderCancel';//已取消
import ProductSearch from './container/StockManagement/ProductSearch';//已取消

/* 订单管理 */
import OrderManagement from './container/OrderManagement/';//全部订单
import OrderDeliveryPage from './container/OrderManagement/OrderDeliveryPage';//发货页面
import OrderReturnPage from './container/OrderManagement/OrderReturnPage';//退货页面
import OrderRefundPage from './container/OrderManagement/OrderRefundPage';//退款页面
import OrderPayPage from './container/OrderManagement/OrderPayPage';//付款页面
import OrderDetail from './container/OrderManagement/OrderDetail';//订单详情
import SalesPerformance from './container/OrderManagement/SalesPerformance';//销售业绩

/* 财务系统 */
import FinanceOrderRaudited from './container/FinanceSystem/FinanceOrderRaudited';//待审核订单
import FinanceOrderPay from './container/FinanceSystem/FinanceOrderPay';//待付款订单
import FinanceOrderRefund from './container/FinanceSystem/FinanceOrderRefund';//待付款订单
import FinanceOrderFinish from './container/FinanceSystem/FinanceOrderFinish';//已完成订单
import FinanceOrderDelete from './container/FinanceSystem/FinanceOrderDelete';//已取消订单
import FinanceHouston from './container/FinanceSystem/FinanceHouston';//进账管理
import FinanceOut from './container/FinanceSystem/FinanceOut';//出账管理
import FinanceCheck from './container/FinanceSystem/FinanceCheck';//对账管理
import FinanceSalarySetting from './container/FinanceSystem/FinanceSalarySetting' // 薪资参数设置
import FinanceSalary from './container/FinanceSystem/FinanceSalary' // 薪资统计
import FinanceAdvance from './container/FinanceSystem/FinanceAdvance';//预存款管理
import FinanceAdvanceRecharge from './container/FinanceSystem/FinanceAdvanceRecharge';//预存款管理-充值
import FinanceReimbursement from './container/FinanceSystem/FinanceReimbursement';//报销管理
import FinanceReimbursementAdd from './container/FinanceSystem/FinanceReimbursementAdd';//报销管理-添加

/* 人员管理 */
import PersonnelList from './container/PersonnelManagement/PersonnelList';//员工花名册
import PersonnelAction from './container/PersonnelManagement/PersonnelAction';//员工花名册-新增／修改
import PersonnelGroup from './container/PersonnelManagement/PersonnelGroup';//人员分组
import PersonnelDuty from './container/PersonnelManagement/PersonnelDuty';//值班系统
import PersonnelLeave from './container/PersonnelManagement/PersonnelLeave';//请假申请
import PersonnelLeaveList from './container/PersonnelManagement/PersonnelLeaveList';//请假记录
import PersonnelLeaveManage from './container/PersonnelManagement/PersonnelLeaveManage';//请假管理

/*  权限管理 */
import JurisdictionList from './container/JurisdictionManagement/JurisdictionList'; //用户管理
import JurisdictionAction from './container/JurisdictionManagement/JurisdictionAction'; //用户管理-新增/修改
import JurisdictionRole from './container/JurisdictionManagement/JurisdictionRole'; //角色权限
import JurisdictionAlter from './container/JurisdictionManagement/JurisdictionAlter'; //角色权限 -新增修改

/* 网站管理 */
import ProductList from './container/WebsiteManagement/ProductList';//商品列表
import ProductListEdit from './container/WebsiteManagement/ProductListEdit';//商品列表 -新增/编辑页面
import ColumnList from './container/WebsiteManagement/ColumnList';//商品栏目列表
import ColumnListEdit from './container/WebsiteManagement/ColumnListEdit';//商品栏目列表-新增修改
import PromotionManage from './container/WebsiteManagement/PromotionManage';//促销管理
import IndentDetails from './container/WebsiteManagement/IndentDetails' //订单管理
import IndentParticulars from './container/WebsiteManagement/IndentParticulars' //订单管理-详情页
import AdvertisingManage from './container/WebsiteManagement/AdvertisingManage' //广告管理
import AdvertisingEdit from './container/WebsiteManagement/AdvertisingEdit' //广告管理-新增/修改/删除
import FlashSale from './container/WebsiteManagement/FlashSale' //限时抢购
import UserManagement from './container/WebsiteManagement/UserManagement' //用户管理
import CustomerConsultation from './container/WebsiteManagement/CustomerConsultation' //客户咨询
import TrafficQuery from './container/WebsiteManagement/TrafficQuery' //流量查询
import LinkManagement from './container/WebsiteManagement/LinkManagement' //友情链接管理
import LinkManagementEdit from './container/WebsiteManagement/LinkManagementEdit' //友情链接-新增/修改
import ArticleManagement from './container/WebsiteManagement/ArticleManagement' //文章管理
import ArticleManagementAdd from './container/WebsiteManagement/ArticleManagementAdd' //文章管理-新增
import ColumnManagement from './container/WebsiteManagement/ColumnManagement' //文章栏目类别
import ColumnManagementAdd from './container/WebsiteManagement/ColumnManagementAdd' //文章栏目类别-新增
import Automatic from './container/WebsiteManagement/Automatic' //自动发布
import VideoManagement from './container/WebsiteManagement/VideoManagement' //视频-内容管理
import VideoManagementAdd from './container/WebsiteManagement/VideoManagementAdd' //视频-内容管理-新增
import VideoClass from './container/WebsiteManagement/VideoClass' //视频-栏目类别
import VideoClassAdd from './container/WebsiteManagement/VideoClassAdd' //视频-栏目类别-新增
import AppraisalManagement from './container/WebsiteManagement/AppraisalManagement' //鉴定-内容管理
import AppraisalManagementAdd from './container/WebsiteManagement/AppraisalManagementAdd' //鉴定-内容管理-新增
import AppraisalClass from './container/WebsiteManagement/AppraisalClass' //鉴定-栏目类别
import AppraisalClassAdd from './container/WebsiteManagement/AppraisalClassAdd' //鉴定-栏目类别-新增
import CompanyManagement from './container/WebsiteManagement/CompanyManagement' //公司-内容管理
import CompanyManagementAdd from './container/WebsiteManagement/CompanyManagementAdd' //公司-内容管理-新增
import CompanyClass from './container/WebsiteManagement/CompanyClass' //公司-栏目类别
import CompanyClassAdd from './container/WebsiteManagement/CompanyClassAdd' //公司-栏目类别-新增

/* 报表统计 */
import ReportStatistics from './container/StatisticsManagement/ReportStatistics' //报表统计-流量
import CustomerSummary from './container/StatisticsManagement/CustomerSummary' //报表统计-客户
import CommoditySummary from './container/StatisticsManagement/CommoditySummary' //报表统计-商品
import SaleSummary from './container/StatisticsManagement/SaleSummary' //报表统计-销售
import AchievementSummary from './container/StatisticsManagement/AchievementSummary' //报表统计-业绩
import FinanceSummary from './container/StatisticsManagement/FinanceSummary' //报表统计-财务

// import NoMatch from './container/FinanceSystem/NoMatch';//对账管理

import './public/style/index.scss'

import configureStore from './store/configureStore'
const store = configureStore();

ReactDOM.render((
    <Provider store={store}>
        <LocaleProvider locale={zh_CN}>
            <Router>
                <Switch>
                    <Route exact path='/' component={CustomerList}></Route>
                    <Route exact path='/addcustomer' component={AddCustomer}></Route>
                    <Route exact path='/customerorders' component={CustomerOrders}></Route>
                    <Route exact path='/buypot' component={BuyPot}></Route>
                    <Route exact path='/crmsearch' component={CRMSearch}></Route>
                    <Route exact path='/customergroup' component={CustomerGroup}></Route>
                    <Route exact path='/customergroupaction' component={CustomerGroupAction}></Route>
                    <Route exact path='/customerseek' component={CustomerSeek}></Route>
                    <Route exact path='/customerstatistics' component={CustomerStatistics}></Route>
                    <Route exact path='/sendmessage' component={SendMessage}></Route>
                    <Route exact path='/rechargerecord' component={RechargeRecord}></Route>
                    <Route exact path='/browserecord' component={BrowseRecord}></Route>
                    <Route exact path='/smstemplate' component={SMSTemplate}></Route>
                    <Route exact path='/smstemplateaction' component={SMSTemplateAction}></Route>
                    <Route exact path='/emailtemplate' component={EmailTemplate}></Route>
                    <Route exact path='/emailtemplateaction' component={EmailTemplateAction}></Route>

                    <Route exact path='/stockmanagement' component={StockManagement}></Route>
                    <Route exact path='/stockadd' component={StockAdd}></Route>
                    <Route exact path='/stockdistribution' component={StockDistribution}></Route>
                    <Route exact path='/stockreserve' component={StockReserve}></Route>
                    <Route exact path='/stockcall' component={StockCall}></Route>
                    <Route exact path='/distributionmanagement' component={DistributionManagement}></Route>
                    <Route exact path='/reservemanagement' component={ReserveManagement}></Route>
                    <Route exact path='/callmanagement' component={CallManagement}></Route>
                    <Route exact path='/allorders' component={AllOrders}></Route>
                    <Route exact path='/orderaudited' component={OrderAudited}></Route>
                    <Route exact path='/orderdelivery' component={OrderDelivery}></Route>
                    <Route exact path='/orderreturn' component={OrderReturn}></Route>
                    <Route exact path='/orderfinish' component={OrderFinish}></Route>
                    <Route exact path='/ordercancel' component={OrderCancel}></Route>
                    <Route exact path='/productsearch' component={ProductSearch}></Route>

                    <Route exact path='/ordermanagement' component={OrderManagement}></Route>
                    <Route exact path='/orderdeliverypage' component={OrderDeliveryPage}></Route>
                    <Route exact path='/orderreturnpage' component={OrderReturnPage}></Route>
                    <Route exact path='/orderrefundpage' component={OrderRefundPage}></Route>
                    <Route exact path='/orderpaypage' component={OrderPayPage}></Route>
                    <Route exact path='/orderdetail' component={OrderDetail}></Route>
                    <Route exact path='/salesperformance' component={SalesPerformance}></Route>

                    <Route exact path='/financeorderaudited' component={FinanceOrderRaudited}></Route>
                    <Route exact path='/financeorderpay' component={FinanceOrderPay}></Route>
                    <Route exact path='/financeorderrefund' component={FinanceOrderRefund}></Route>
                    <Route exact path='/financeorderfinish' component={FinanceOrderFinish}></Route>
                    <Route exact path='/financeorderdelete' component={FinanceOrderDelete}></Route>
                    <Route exact path='/financehouston' component={FinanceHouston}></Route>
                    <Route exact path='/financeout' component={FinanceOut}></Route>
                    <Route exact path='/financecheck' component={FinanceCheck}></Route>
                    <Route exact path='/financesalarysetting' component={FinanceSalarySetting}></Route>
                    <Route exact path='/financesalary' component={FinanceSalary}></Route>
                    <Route exact path='/financeadvance' component={FinanceAdvance}></Route>
                    <Route exact path='/financeadvancerecharge' component={FinanceAdvanceRecharge}></Route>
                    <Route exact path='/financereimbursement' component={FinanceReimbursement}></Route>
                    <Route exact path='/financereimbursementadd' component={FinanceReimbursementAdd}></Route>

                    <Route exact path='/personnellist' component={PersonnelList}></Route>
                    <Route exact path='/personnelaction' component={PersonnelAction}></Route>
                    <Route exact path='/personnelgroup' component={PersonnelGroup}></Route>
                    <Route exact path='/personnelduty' component={PersonnelDuty}></Route>
                    <Route exact path='/personnelleave' component={PersonnelLeave}></Route>
                    <Route exact path='/personnelleavelist' component={PersonnelLeaveList}></Route>
                    <Route exact path='/personnelleavemanage' component={PersonnelLeaveManage}></Route>

                    <Route exact path='/jurisdictionlist' component={JurisdictionList}></Route>
                    <Route exact path='/jurisdictionrole' component={JurisdictionRole}></Route>
                    <Route exact path='/jurisdictionaction' component={JurisdictionAction}></Route>
                    <Route exact path='/jurisdictionalter' component={JurisdictionAlter}></Route>

                    <Route exact path='/productlist' component={ProductList}></Route>
                    <Route exact path='/columnlist' component={ColumnList}></Route>
                    <Route exact path='/columnlistedit' component={ColumnListEdit}></Route>
                    <Route exact path='/productlistedit' component={ProductListEdit}></Route>
                    <Route exact path='/promotionmanage' component={PromotionManage}></Route>
                    <Route exact path='/indentdetails' component={IndentDetails}></Route>
                    <Route exact path='/indentparticulars' component={IndentParticulars}></Route>
                    <Route exact path='/advertisingmanage' component={AdvertisingManage}></Route>
                    <Route exact path='/advertisingedit' component={AdvertisingEdit}></Route>
                    <Route exact path='/flashsale' component={FlashSale}></Route>
                    <Route exact path='/usermanagement' component={UserManagement}></Route>
                    <Route exact path='/customerconsultation' component={CustomerConsultation}></Route>
                    <Route exact path='/trafficquery' component={TrafficQuery}></Route>
                    <Route exact path='/linkmanagement' component={LinkManagement}></Route>
                    <Route exact path='/linkmanagementedit' component={LinkManagementEdit}></Route>
                    <Route exact path='/articlemanagement' component={ArticleManagement}></Route>
                    <Route exact path='/articlemanagementadd' component={ArticleManagementAdd}></Route>
                    <Route exact path='/columnmanagement' component={ColumnManagement}></Route>
                    <Route exact path='/columnmanagementadd' component={ColumnManagementAdd}></Route>
                    <Route exact path='/automatic' component={Automatic}></Route>
                    <Route exact path='/videomanagement' component={VideoManagement}></Route>
                    <Route exact path='/videomanagementadd' component={VideoManagementAdd}></Route>
                    <Route exact path='/videoclass' component={VideoClass}></Route>
                    <Route exact path='/videoclassadd' component={VideoClassAdd}></Route>
                    <Route exact path='/appraisalmanagement' component={AppraisalManagement}></Route>
                    <Route exact path='/appraisalmanagementadd' component={AppraisalManagementAdd}></Route>
                    <Route exact path='/appraisalclass' component={AppraisalClass}></Route>
                    <Route exact path='/appraisalclassadd' component={AppraisalClassAdd}></Route>
                    <Route exact path='/companymanagement' component={CompanyManagement}></Route>
                    <Route exact path='/companymanagementadd' component={CompanyManagementAdd}></Route>
                    <Route exact path='/companyclass' component={CompanyClass}></Route>
                    <Route exact path='/companyclassadd' component={CompanyClassAdd}></Route>


                    <Route exact path='/reportstatistics' component={ReportStatistics}></Route>
                    <Route exact path='/customersummary' component={CustomerSummary}></Route>
                    <Route exact path='/commoditysummary' component={CommoditySummary}></Route>
                    <Route exact path='/salesummary' component={SaleSummary}></Route>
                    <Route exact path='/achievementsummary' component={AchievementSummary}></Route>
                    <Route exact path='/financesummary' component={FinanceSummary}></Route>

                    {/* <Route path='/login' component={Login}></Route> Sales performance*/}
                    {/* <Route component={NoMatch} /> */}
                </Switch>
            </Router>
        </LocaleProvider>
    </Provider>
), document.getElementById('root'));
registerServiceWorker();
