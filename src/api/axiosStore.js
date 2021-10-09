import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cancelTokenArr: [] // 取消请求的数组
  },
  mutations: {
    pushToken (state, { cancelToken }) {
      state.cancelTokenArr.push(cancelToken)
    },
    clearToken ({ cancelTokenArr }) {
      cancelTokenArr.forEach((item) => {
        item('取消请求')
      })
      cancelTokenArr = [] // 取消所有的请求
    }
  }
})
