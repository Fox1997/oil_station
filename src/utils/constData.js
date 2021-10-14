exports.ip = 'http://192.168.9.3:8080' // 接口地址

// 从sessionStorage中获取场景
exports.getCategoryData = function () {
  return JSON.parse(sessionStorage.getItem('categoryData'))
}
exports.getEventData = function () {
  return JSON.parse(sessionStorage.getItem('eventData'))
}
exports.getLevelData = function () {
  return JSON.parse(sessionStorage.getItem('levelData'))
}
exports.getxAxisArr = function (params, isToday = true) {
  if (isToday) {
    return Object.keys(
      params || {}
    ).map((key) => {
      return /\d{2}:\d{2}/g.exec(key)[0]
    })
  } else {
    return Object.keys(
      params || {}
    ).map((key) => {
      return key.substring(5)
    })
  }
}
// 返回给定数据的 y 坐标数据
exports.getyAxisArr = function (params) {
  return Object.values(
    params || {}
  )
}

// 寻找当前时间，最近的一个整点时间，以确定获取今日数据重发的次数
exports.findInsterval = function () {
  const now = new Date()
  const nowM = now.getMinutes()
  return (61 - nowM) * 60 * 1000
}

// 处理拥堵指数
exports.formatCongestion = function (index) {
  const res = {}
  if (index < 0.2) {
    res.text = '通畅'
    res.color = '#227700'
  } else if (index >= 0.2 && index < 0.5) {
    res.text = '轻度'
    res.color = '#ffff33'
  } else if (index >= 0.5 && index < 0.8) {
    res.text = '中度'
    res.color = '#ee7700'
  } else if (index >= 0.8 && index < 1) {
    res.text = '重度'
    res.color = '#cc0000'
  } else {
    res.text = ''
    res.color = ''
  }
  return res
}
// 格式化时间有关的值，如 300 应该转换为小时、分钟、秒
exports.formatTime = function (time) {
  const res = {}
  if (time <= 300) {
    res.value = parseFloat(time.toFixed(1))
    res.unit = '秒'
  } else if (time <= 3600 && time > 300) {
    res.unit = '分'
    res.value = parseFloat((time / 60).toFixed(1))
  } else {
    res.unit = '时'
    res.value = parseFloat((time / 3600).toFixed(1))
  }
  return res
}

// 格式化违规程度
exports.formatIllLevel = function (value) {
  const res = {}
  // if (value === 0) {
  //   res.value = '基本合规'
  //   res.color = '#006030'
  // } else if (value < 0.5) {
  if (value < 0.5) {
    res.value = '合规'
    // res.color = '#64A600'
    res.color = '#006030'
  } else if (value >= 0.5 && value < 1.5) {
    res.value = '轻度违规'
    res.color = '#977c00'
  } else if (value >= 1.5 && value < 2.5) {
    res.value = '中度违规'
    res.color = '#f75000'
  } else {
    res.value = '严重违规'
    res.color = '#CE0000'
  }
  return res
}
