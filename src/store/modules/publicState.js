/**
 * Created by dev2 on 2019/11/13.
 */
const {states} = require('../state')
export const publicState = {
  state: states.publicState,
  getters: {
    getLoading (state) {
      return state.loading
    },
    getToast (state) {
      return state.toast
    }
  },
  mutations: {
    setLoading (state, data = true) {
      state.loading = data
    },
    setToast (state, data = {}) {
      let init = {show: true, type: 'error', message: '系统错误', time: 3000}
      for (let key in data) {
        init[key] = data[key]
      }
      state.toast = init
    }
  }
}
