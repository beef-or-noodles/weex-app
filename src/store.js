/**
 * Created by dev2 on 2019/11/13.
 */
import Vuex from 'vuex'
const storage = weex.requireModule('storage')
Vue.use(Vuex)
const {publicState} = require('@/store/modules/publicState')
const {userState} = require('@/store/modules/userState')
const storagePlugin = store => {
  store.subscribe((mutation, state) => {
    storage.setItem('VUEX', JSON.stringify(state), event => {
      //cache success
    })
  })
}
export const store = new Vuex.Store({
  modules: {userState, publicState},
  plugins: [storagePlugin]
})
