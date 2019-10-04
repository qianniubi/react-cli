import axios from 'axios';
import { baseUrlDev, baseUrlProd, ISDEV } from './../config/app.config';

axios.defaults.headers = {
  'Content-Type': 'application/x-www-form-urlencoded',
  'X-Requested-With': 'XMLHttpRequest'
};

/**
 * 设置域名
 */
axios.defaults.baseURL = ISDEV ? baseUrlDev : baseUrlProd;

// 请求超时的时间限制
axios.defaults.timeout = 20000;

// 添加请求拦截器
axios.interceptors.request.use((config) => {
  // 在发送请求之前做些什么
  return config
}, (error) => {
  // 对请求错误做些什么
  return Promise.reject(error)
});

// 添加响应拦截器
axios.interceptors.response.use((response) => {
  // 只返回数据
  return response.data
}, (error) => {
  const status = error.response.status
  if (status >= 500) {
    alert('服务繁忙请稍后再试')
  } else if (status >= 400) {
    alert(error.response.data.message)
  }
  return Promise.reject(error)
})

export default axios;