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
  }
}
