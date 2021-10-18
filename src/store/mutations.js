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
  },
  // TODO:报警事件
  // 设置报警事件页面报警事件数据
  SET_ALARM_ALARM_EVENTS (state, { tableData }) {
    state.alarmEvents.tableDataArr = tableData
  },
  // 设置当前页码
  SET_CUR_PAGE (state, { curPage }) {
    state.alarmEvents.pageData.curPage = curPage
  },
  // 设置分页数据
  SET_ALARM_PAGE_DATA (state, { pageData }) {
    state.alarmEvents.pageData.itemTotal = pageData.total_items
    state.alarmEvents.pageData.curPage = pageData.page
    state.alarmEvents.pageData.pageSize = pageData.per_page
  },
  // 点击按钮查看详情
  SET_CUR_ROW_EVENT (state, { index }) {
    state.alarmEvents.curRowIndex = index
  },
  // TODO:智能分析
  // 设置所有视频流
  SET_VIDEO_STREAM_ARR (state, { videoArr }) {
    state.monitor.videoStreamArr = videoArr
  },
  // 设置智能监控报警事件数据
  SET_MONITOR_ALARM_EVENTS (state, { tableData }) {
    state.monitor.tableDataArr = tableData
  },
  // 设置当前视频流信息
  SET_CUR_VIDEO_STREAM (state, { curVideoStream }) {
    state.monitor.curVideoStream = curVideoStream
  },
  // 设置是否查看详情
  SET_IS_LOAD_DETAIL (state, { payload }) {
    state.monitor.isLoadDetail = payload
  }
}
