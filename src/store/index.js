import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import state from './state'
Vue.use(Vuex)
// 导入vuex的各个模块
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
