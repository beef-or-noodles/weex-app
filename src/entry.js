/* global Vue */
/* weex initialized here, please do not move this line */

const { store } = require('./store')
const storage = weex.requireModule('storage')
const { router } = require('./router')
/* const api = require('@/http/request.js') */
const App = require('@/index.vue')
const wbutton = require('@/components/public/wbutton.vue') // 按钮
const winput = require('@/components/public/winput.vue') // 输入框
const wselect = require('@/components/public/wselect.vue') // 输入框
const wloading = require('@/components/loading/wloading') // 加载
const wtoasts = require('@/components/public/wtoast') // 提示
const {base} = require('@/common/base.js')
/* eslint-disable no-new */
new Vue(Vue.util.extend({el: '#root', router, store}, App))
if (weex.config.env.platform === 'Web') {

} else {
  router.push('/student/classMessage')
  //router.push('/student/index')
}

Vue.prototype.global_return = base.global_return
Vue.prototype.global_routerpush = base.global_routerpush
Vue.prototype.global_imgpath = base.global_imgpath

/* 全局组件 */
Vue.component('wbutton', wbutton)
Vue.component('winput', winput)
Vue.component('wselect', wselect)
Vue.component('wloadings', wloading)
Vue.component('wtoasts', wtoasts)
storage.getItem('VUEX', function (event) {
  if (event.result === 'success' && event.data) {
    // 这里可以使用extend等方法，这里仅举例说明
    var datas = JSON.parse(event.data)
    store.commit('setUserInit', datas.userState)
  }
})

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
/* post请求 */
function apiHttp (url, data = {}, method = 'post') {
  store.commit('setLoading', true)
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
        store.commit('setToast')
        reject(ret)
      } else {
        if (ret.data.success) {
          resolve(ret.data.resultMap)
        } else {
          store.commit('setToast', {message: ret.data.description})
          reject(ret.data)
        }
      }
      /* clearTimeout(timeout) */
      store.commit('setLoading', false)
    })
  })
}

const postHttp = function (url, data) {
  return apiHttp(url, JSON.stringify(data), 'post')
}
const getHttp = function (url, data) {
  let newdatas = []
  for (let item in data) {
    newdatas.push(`${item}=${data[item]}`)
  }
  const newurl = `${url}?${newdatas.join('&')}`
  return apiHttp(newurl, {}, 'get')
}
const setToast = function (data = {}) {
  store.commit('setToast', data)
}

Vue.prototype.postHttp = postHttp
Vue.prototype.getHttp = getHttp
Vue.prototype.toast = setToast //参数选填{type: 'error', message: '系统错误', time: 3000}
/* 初始化 loading toast */
store.commit('setLoading', false)
store.commit('setToast', {show: false})
