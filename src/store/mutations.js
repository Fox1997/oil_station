export default {
  // 设置 token
  SET_TOKEN (state, { token }) {
    state.token = token
  },
  // 设置认证状态
  SET_AUTH_STATUS (state, val) {
    state.authStatus = val
  },
  // 设置场景
  SET_CATEGORY (state, { category }) {
    state.category = category
  },
  // 设置场景为空
  SET_CATEGORY_NULL (state) {
    state.category = {
      nameCN: '',
      name: '',
      code: 0
    }
  }
}
