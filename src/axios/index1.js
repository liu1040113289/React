import Axios from 'axios'
let Promise = require('es6-promise').Promise

let axios = Axios.create({
  baseURL: "http://127.0.0.1:9080/",
  //设置cross跨域 并设置访问权限 允许跨域携带cookie信息
  withCredentials: true,
  crossDomain: true,
  //默认返回json数据
  responseType: 'json',
  //post请求头
  headers: { "Content-Type": "application/x-www-form-urlencoded" }
});

// 添加响应拦截器
axios.interceptors.request.use(config => {
  return config;
}, error => {
  return Promise.reject(error);
});


// 添加响应拦截器
axios.interceptors.response.use((response) => { // 请求成功的回调
  return Promise.resolve(response)
}, (error) => {                                  // 请求失败的回调
  return Promise.reject(error)
})


export default axios