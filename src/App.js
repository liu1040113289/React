import React from 'react'
import {Row,Col} from 'antd'
import Header from './components/Header/index'
import Footer from './components/Footer/index'
import NavLeft from './components/Navleft/index'
import './style/common.less'
export default class App extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
          <Row className="container">
              <Col span={4} className="nav-Left">
              <NavLeft></NavLeft>
              </Col>
              <Col span={20} className="main">
                <Header></Header>
                <Row className="content">
                    {/* <Home></Home>   */}
                    {this.props.children}
                </Row>
                <Footer></Footer>
              </Col>
          </Row>  
        );
    }
}