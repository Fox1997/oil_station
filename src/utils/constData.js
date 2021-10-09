exports.ip = 'http://192.168.9.3:8080' // 接口地址

// 从sessionStorage中获取场景
exports.getCategoryData = function () {
  return JSON.parse(sessionStorage.getItem('categoryList'))
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
