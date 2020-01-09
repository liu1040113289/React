import React from 'react'
import { HashRouter as Router, Link, Route, Switch } from 'react-router-dom'
import Main from './Main'
import About from './../route1/about'
import Info from './info'
import Topic from './../route1/topic'
import Home from './Home'
import NoMatch from './NoMacth'

export default class IRouter extends React.Component {
    render() {
        return (
            <Router>
                <Home>
                    {/* {true} 精确匹配 */}
                    <Switch>
                        <Route path="/main" render={() =>
                            <Main>
                                <Route path="/main/:value" component={Info}>

                                </Route>
                            </Main>
                        }></Route>
                        <Route path="/about" component={About}></Route>
                        <Route path="/topics" component={Topic}></Route>
                        <Route component={NoMatch}></Route>
                    </Switch>
                </Home>
            </Router>
        );
    }
}