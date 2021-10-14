import { getCategoryData, getEventData, getLevelData } from '@/utils/constData'
import {
  reqCategory,
  reqEventsDefine,
  reqLevelsDefine,
  reqAllEvents,
  reqStreamQuery
  // reqStreamPull
  // reqIllegalEvents
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
  async getCategoryDefine () {
    const res = await reqCategory()
    const category = {}
    res.data.map(item => {
      const data = {
        code: item.code,
        name: item.name,
        nameCN: item.name_cn
      }
      category[item.name] = data
      // categoryList的[]中的数据决定键值对name
    })
    res.data.map(item => {
      const val = {
        nameCN: item.name_cn,
        name: item.name,
        code: item.code
      }
      category[item.code] = val
    })
    sessionStorage.setItem('categoryData', JSON.stringify(category))
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
        case '严重违规':
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
  },

  // // 获取智能监控所有报警事件,返回数据：事件名称，时间，等级， 场景，图，视频
  // async getMonitorAllEvents ({ commit }, params) {
  //   const resData = await reqAllEvents(params)
  //   const tableData = resData.items.map((item) => {
  //     return {
  //       name: getEventData()[item.event_code],
  //       datetime: item.timestamp,
  //       level: getLevelData()[item.level].nameCN,
  //       category: getCategoryData()[item.category_code].nameCN,
  //       image_path: item.image_path,
  //       video_path: item.video_path
  //     }
  //   })
  //   commit('SET_MONITOR_ALARM_EVENTS', { tableData })
  // },
  // // 获取智能监控违规事件
  // async getMonitorIllegalEvents ({ commit }, params) {
  //   const resData = await reqIllegalEvents(params)
  //   const tableData = resData.items.map((item) => {
  //     return {
  //       name: getEventData()[item.event_code],
  //       datetime: item.timestamp,
  //       level: getLevelData()[item.level].nameCN,
  //       category: getCategoryData()[item.category_code],
  //       image_path: item.image_path,
  //       video_path: item.video_path
  //     }
  //   })
  //   commit('SET_MONITOR_ALARM_EVENTS', { tableData })
  // },
  // TODO:智能监控
  // 获取站点视频流列表
  async getVideoStreamArr ({ commit }) {
    // 后端读取视频流
    const resData = await reqStreamQuery()
    const videoArr = resData.data
    videoArr.forEach(item => {
      item.title = getCategoryData()[item.category].nameCN + item.channel + '号视频'
    })
    commit('SET_VIDEO_STREAM_ARR', { videoArr })
  },

  // // 加载某一路视频流信息
  // async getCurVideoStream ({ commit }, { schedulerStr }) {
  //   const curVideoStream = await reqStreamPull(schedulerStr)
  //   curVideoStream.title = getCategoryData()[curVideoStream.category].nameCN + curVideoStream.channel + '号视频'
  //   commit('SET_CUR_VIDEO_STREAM', { curVideoStream })
  // },
  // TODO:历史事件
  // 报警事件页面的接口数据
  async searchAlarmEvents ({ commit }, params) {
    const resData = await reqAllEvents(params)
    const tableData = resData.items.map((item, index) => {
      return {
        index: index + 1,
        name: getEventData()[item.event_code],
        datetime: item.timestamp,
        level: getLevelData()[item.level].nameCN,
        category: getCategoryData()[item.category_code].nameCN,
        image_path: item.image_path,
        video_path: item.video_path
      }
    })
    commit('SET_ALARM_ALARM_EVENTS', { tableData })
    commit('SET_ALARM_PAGE_DATA', { pageData: resData._meta })
  }
}
