import React from 'react'
import { NavLink } from 'react-router-dom'
import MenuConfig from './../../config/menuConfig'
import {switchMenu} from './../../redux/action'
import {connect} from 'react-redux'
import './index.less'
import { Menu } from 'antd';
const SubMenu = Menu.SubMenu;
class NavLeft extends React.Component {
  state={
    currentKey:''
  }
   // 菜单点击
   handleClick = ({ item, key }) => {
    if (key == this.state.currentKey) {
        return false;
    }
    // 事件派发，自动调用reducer，通过reducer保存到store对象中
    const { dispatch } = this.props;
    dispatch(switchMenu(item.props.title));

    this.setState({
        currentKey:key
    });
    // hashHistory.push(key);
};
  // 生命周期函数在渲染前调用,在客户端也在服务端
  componentWillMount() {
    const menuTreeNode = this.renderMenu(MenuConfig);
    let currentKey=window.location.hash.replace(/#|\?.*$/g,'')
    this.setState({
      currentKey,
      menuTreeNode
    })
  }
  renderMenu = (data) => {
    return data.map((item) => {
      if (item.children) {
        return (
          <SubMenu title={item.title} key={item.key}>
            {this.renderMenu(item.children)}
          </SubMenu>
        )
      }
      return <Menu.Item title={item.title} key={item.key}>
        <NavLink to={item.key}>{item.title}</NavLink>
      </Menu.Item>
    })
  }
//   homeHandleClick = () => {
//     const { dispatch } = this.props;
//     dispatch(switchMenu('首页'));
//     this.setState({
//         currentKey: ""
//     });
// };
  render() {
    return (
      <div className="nav-left">
        {/* <NavLink to="/home" onClick={this.homeHandleClick}> */}
        <div className="logo">
          <img src="/assets/logo-ant.svg" alt="" />
          <h1>Imooc MS</h1>
        </div>
        {/* </NavLink> */}
        <Menu  
        onClick={this.handleClick}
        selectedKeys={[this.state.currentKey]}
        theme="dark">
          {this.state.menuTreeNode}
        </Menu>
      </div>
    );
  }
}
export default connect()(NavLeft);