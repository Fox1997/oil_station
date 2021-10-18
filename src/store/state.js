export default {
  // TODO:命名规则--若指定了一个范围，如 safeChartData ，就不需要再指明 safeChartSecurityScore 这种长命名了
  token: sessionStorage.getItem('token'),

  // 认证状态：空的是 false，非空则为 true
  authStatus: !!sessionStorage.getItem('token'),

  // 默认的场景
  category: {
    code: 0,
    name: '',
    nameCN: ''
  },
  // 智能监控数据
  monitor: {
    isLoadDetail: false, // 是否加载详情视频

    // 所有的视频流
    videoStreamArr: [],

    curVideoStream: null, // 当前查看详情的视频流信息

    // 事件列表
    tableDataArr: []
  },
  // 报警事件数据
  alarmEvents: {
    // 事件列表
    tableDataArr: [],

    curRowIndex: 1, // 默认事件详情展示第一条数据

    // 分页功能需要的数据
    pageData: {
      itemTotal: 0, // 总条数
      curPage: 1, // 当前页
      pageSize: 25 // 每页数量
    }
  }
}
