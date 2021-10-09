import {
  reqCategory,
  reqEventsDefine,
  reqLevelsDefine
} from '@/api'
export default {
  // 获取 token 并设置授权状态
  handleAuthenticate ({ commit }, token) {
    commit('SET_TOKEN', { token })
    commit('SET_AUTH_STATUS', true)
    sessionStorage.setItem('token', token)
  },

  // 获取事件定义，并存在 sessionStorage 中
  async getEventsDefine () {
    const res = await reqEventsDefine()
    const eventData = {}
    res.data.map(item => {
      eventData[item.code] = item.name_cn
    })
    sessionStorage.setItem('eventData', JSON.stringify(eventData))
  },

  // 通过Api获取场景，并保存在SessionStore
  async getCategoryList () {
    const res = await reqCategory()
    const categoryList = {}
    res.data.map(item => {
      const data = {
        code: item.code,
        name: item.name,
        name_cn: item.name_cn
      }
      categoryList[item.name] = data
      // categoryList的[]中的数据决定键值对name
    })
    sessionStorage.setItem('categoryList', JSON.stringify(categoryList))
  },

  // 获取违规等级定义，并存在 sessionStorage 中
  async getLevelsDefine () {
    const res = await reqLevelsDefine()
    const levelData = {}

    Object.keys(res).map(k => {
      let color = '#18b566' // 合规的颜色
      switch (res[k]) {
        case '轻度违规':
          color = '#ffc000'
          break
        case '中度违规':
          color = '#fa6d04'
          break
        case '重度违规':
          color = '#f00'
          break
      }
      const val = {
        nameCN: res[k],
        code: parseInt(k),
        color
      }
      levelData[k] = val
    })
    sessionStorage.setItem('levelData', JSON.stringify(levelData))
  }
}
