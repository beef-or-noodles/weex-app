/**
 * Created by dev2 on 2019/11/12.
 */
// 基础路径
import {store} from '../store.js'
import {toast} from '@/common/public'
const basePath = 'http://tstmtb.api.aimusic.art'
/* 请求拦截 */
function beforeRequest () {
  let token = ''
  if (!token) {
    return true
  } else {
    return false
  }
}
var timeout = null
/* post请求 */
function apiHttp (url, data = {}, method = 'post') {

  timeout = setTimeout(() => {
    store.commit('setLoading', true)
  }, 800)
  const stream = weex.requireModule('stream')
  return new Promise((resolve, reject) => {
    let islogin = beforeRequest()
    if (!islogin) {
      reject('请先登录')
      return false
    }
    stream.fetch({
      method: method,
      url: basePath + url,
      type: 'json',
      body: data
    }, function (ret) {
      if (!ret.ok) {
        toast('系统未知错误')
        reject(ret)
      } else {
        if (ret.data.success) {
          resolve(ret.data.resultMap)
        } else {
          toast(ret.data.description)
          reject(ret.data)
        }
      }
      clearTimeout(timeout)
      store.commit('setLoading', false)
    })
  })
}

export default {
  postHttp: function (url, data) {
    return apiHttp(url, JSON.stringify(data), 'post')
  },
  getHttp: function (url, data) {
    let newdatas = []
    for (let item in data) {
      newdatas.push(`${item}=${data[item]}`)
    }
    const newurl = `${url}?${newdatas.join('&')}`
    return apiHttp(newurl, {}, 'get')
  }
}
