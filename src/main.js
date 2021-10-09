import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ViewUI from 'view-design' // 引入 ViewUI
import 'view-design/dist/styles/iview.css'

import ElementUI from 'element-ui' // 引入 ElementUI
import 'element-ui/lib/theme-chalk/index.css'

import '@/assets/css/base.css'
import '@/assets/css/global.css'
import '@/assets/font/iconfont.css' // 引入 iconfont 图标

// 手动导入 ECharts 各模块来减小打包体积
import 'echarts/lib/chart/line'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/pie'
import 'echarts/lib/chart/radar'

// title,legend,tooltip 是 echarts 的组件，在图表中使用需要按组件导入，否则图表的标题图例可能不能显示。
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/title'
import 'echarts/lib/component/toolbox'

import Echarts from 'vue-echarts'
import light from '@/assets/theme/chartsTheme.json' // 可以使用 v-chart 来使用这个组件

// 视频播放 vue-video-player
import VueVideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'

// 路由拦截, 切换路由强制取消上一各页面发起的请求
// import axiosStore from '@/api/axiosStore'
import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'

import 'lib-flexible/flexible'
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

Vue.use(ElementUI, { size: 'small', zIndex: 3000 })
Vue.use(ViewUI)

Echarts.registerTheme('light', light) // 注册主题
Vue.component('v-chart', Echarts)
Vue.use(VueVideoPlayer)
Vue.use(Viewer, {
  defaultOptions: {
    zIndex: 9999
  }
})

Viewer.setDefaults({
  Options: {
    zoomable: true
  }
})

Vue.config.productionTip = false

// router.beforeEach((to, from, next) => {
//   // 进行路由拦截，路由切换时取消上个路由发出的请求
//   axiosStore.commit('clearToken')

//   // const isAuthenticate = store.state.authStatus
//   // if (isAuthenticate) {
//   //   next()
//   // }
// })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
