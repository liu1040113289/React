import React from 'react'
import { HashRouter as Router, Link ,Route } from 'react-router-dom'
import Main from  './Main'
import About from './../route1/about'
import Topic from './../route1/topic'
import Home from './Home'
export default class IRouter extends React.Component {
    render() {
        return (
            <Router>
                <Home>
                {/* {true} 精确匹配 */}
                    <Route path="/main" render={()=>
                        <Main>
                            <Route path="/main/a" component={About}>
                
                            </Route>        
                        </Main>
                    }></Route>
                    <Route path="/about" component={About}></Route>
                    <Route path="/topics" component={Topic}></Route>
                </Home>
            </Router>
        );
    }
}