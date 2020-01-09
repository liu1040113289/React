import React from 'react'
import {HashRouter,Route,Switch} from 'react-router-dom'
import App1 from './App1'
import App from './App'
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
export default class IRouter extends React.Component{
    render(){
        return(
            <HashRouter>
                <App1>
                    <Route path="/login" component={Login}/>
                    <Route path="/admin" render={()=>
                        <App>
                            <Switch>
                            <Route path="/admin/ui/buttons" component={Buttons}/>
                            <Route path="/admin/ui/modals" component={Modals}/> 
                            <Route path="/admin/ui/loadings" component={Loadings}/>
                            <Route path="/admin/ui/messages" component={Messages}/>
                            <Route path="/admin/ui/notification" component={Notice}/>
                            <Route path="/admin/ui/tabs" component={Tabs}/>
                            <Route path="/admin/ui/gallery" component={Gallery}/>
                            <Route path="/admin/ui/carousel" component={Carouse}/>
                            <Route path="/admin/form/login" component={Logins}/>
                            <Route path="/admin/form/reg" component={Reg}/>
                            <Route path="/admin/table/basic" component={BasicTable}/>
                            <Route path="/admin/table/high" component={HighTable}/>
                            <Route component={NoMatch}/>  
                            </Switch> 
                        </App>
                    }/>
                    <Route path="/order/detail" component={Login}/>
                </App1>
            </HashRouter>
        );
    }
}