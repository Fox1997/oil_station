import axios from 'axios'
import { ip } from '@/utils/constData'
import axiosStore from './axiosStore'
import { Base64 } from 'js-base64'
/*
* request 请求函数模块
* 返回值：promise 对象（异步返回的是 response.data）
*/

// 创建一个 axios 实例
const instance = axios.create({
  baseURL: ip,
  withCredentials: true // send cookies when cross-domain requests
})

// 进行路由拦截，路由切换时取消上个路由发出的请求
instance.interceptors.request.use(config => {
  config.cancelToken = new axios.CancelToken(function (cancel) {
    axiosStore.commit('pushToken', { cancelToken: cancel })
  })
  return config
})

// 认证接口(HTTP Basic Authorization认证)
instance.interceptors.request.use(
  config => {
    // console.log('111', window.sessionStorage.token)
    if (!sessionStorage.getItem('token')) {
      config.headers.Authorization = `Basic ${Base64.encode('admin:admin123')}`
    }
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

// 向除了认证接口（reqAuth）的其他接口的请求头中加入token：
instance.interceptors.request.use(
  config => {
    if (sessionStorage.key('token')) {
      config.headers.Authorization = 'Bearer ' + sessionStorage.getItem('token')
    }
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

// 封装了常用的 get 和 post 方法
export default function request (url, data = {}, type = 'GET') {
  return new Promise(function (resolve, reject) {
    // 执行异步 ajax 请求
    let promise

    if (type === 'GET') {
      // 拼接 url
      let dataStr = ''

      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&'
      })
      if (dataStr !== '') {
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      }
      promise = instance.get(url)
    } else {
      promise = instance.post(url, data)
    }

    promise
      .then(function (response) {
        // 成功了调用 resolve()
        resolve(response.data)
      })
      .catch(function (error) {
        // 失败了调用 reject()
        reject(error)
      })
  })
}
