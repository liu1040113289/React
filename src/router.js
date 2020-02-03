import React from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import App1 from './App1'
import App from './App'
import Home from './pages/home';
import Login from './pages/login'
import Buttons from './pages/ui/buttons'
import Modals from './pages/ui/modals'
import NoMatch from './pages/nomatch/index'
import Loadings from './pages/ui/loadings'
import Notice from './pages/ui/notice'
import Messages from './pages/ui/messages'
import Tabs from './pages/ui/tabs'
import Gallery from './pages/ui/gallery'
import Carouse from './pages/ui/carousel'
import Logins from './pages/form/login'
import Reg from './pages/form/register'
import BasicTable from './pages/table/basicTable'
import HighTable from './pages/table/highTable'
import Rich from './pages/rich'
import City from './pages/city/index'
import Order from './pages/order/index'
import Common from './common'
import OrderDetail from './pages/order/detail'
import User from './pages/user';
import BikeMap from './pages/map/bikeMap';
import Bar from './pages/echarts/bar';
import Pie from './pages/echarts/pie/index'
import Line from './pages/echarts/line/index'
import Permission from './pages/permission'
export default class IRouter extends React.Component {
    render() {
        return (
            <HashRouter>
                <App1>
                    <Switch>
                        <Route path="/common" render={()=>
                            <Common>
                                <Route path="/common/order/detail/:orderId" component={OrderDetail}/>
                            </Common>
                        }/>
                        <Route path="/" render={() =>
                            <App>
                                <Switch>
                                    <Route path='/home' component={Home} />
                                    <Route path="/admin/ui/buttons" component={Buttons} />
                                    <Route path="/admin/ui/modals" component={Modals} />
                                    <Route path="/admin/ui/loadings" component={Loadings} />
                                    <Route path="/admin/ui/messages" component={Messages} />
                                    <Route path="/admin/ui/notification" component={Notice} />
                                    <Route path="/admin/ui/tabs" component={Tabs} />
                                    <Route path="/admin/ui/gallery" component={Gallery} />
                                    <Route path="/admin/ui/carousel" component={Carouse} />
                                    <Route path="/admin/form/login" component={Logins} />
                                    <Route path="/admin/form/reg" component={Reg} />
                                    <Route path="/admin/table/basic" component={BasicTable} />
                                    <Route path="/admin/table/high" component={HighTable} />
                                    <Route path='/rich' component={Rich} />
                                    <Route path="/city" component={City} />
                                    <Route path="/order" component={Order} />
                                    <Route path="/user" component={User} />
                                    <Route path='/bikeMap' component={BikeMap}/>
                                    <Route path="/charts/bar" component={Bar} />
                                    <Route path="/charts/pie" component={Pie} />
                                    <Route path="/charts/line" component={Line} />
                                    <Route path="/permission" component={Permission} />
                                    <Route component={NoMatch} />
                                </Switch>
                            </App>
                        } />
                    </Switch>
                </App1>
            </HashRouter>
        );
    }
}