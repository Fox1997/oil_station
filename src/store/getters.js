export default {

  getCurRowEventData (state) { // 获取被点击的那一行的数据
    return state.alarmEvents.tableDataArr.filter(item => item.index === state.alarmEvents.curRowIndex)[0] || {}
  }
}
