/**
 * Created by dev2 on 2019/11/13.
 * userState.js
 */
const {states} = require('../state')
export const userState = {
  state: states.userState,
  getters: {
    getCount (state) {
      return state.count
    },
    getCount2 (state) {
      return state.add.index
    }
  },
  mutations: {
    setUserInit (state, data = {}) {
      for (let key in data) {
        state[key] = data[key]
      }
    },
    setCount (state, data) {
      state.count = state.count + data
    },
    setCount2 (state, data = 1) {
      state.add.index = state.add.index + data
    }
  },
  actions: {

  }
}
