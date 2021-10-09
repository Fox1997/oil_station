import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
// import Analysis from '@/views/analysis'
Vue.use(VueRouter)

// 解决错误：Avoided redundant navigation to current location: "/xxx".因为用到了replace和push两种方法
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace (location) {
  return originalReplace.call(this, location).catch(err => err)
}

const routes = [{
  path: '/',
  name: 'Home',
  component: Home,
  meta: {
    requireAuth: true
  },
  redirect: '/main',
  children: [
    {
      path: '/main',
      name: 'Main',
      component: () => import('@/views/main'),
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/analysis',
      name: 'Analysis',
      component: () => import('@/views/analysis'),
      meta: {
        requireAuth: true
      },
      redirect: '/overview ',
      children: [
        {
          path: '/overview',
          name: 'overview',
          component: () => import('@/views/analysis/overView'),
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/gate',
          name: 'gate',
          component: () => import('@/views/analysis/gate'),
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/checkout',
          name: 'checkout',
          component: () => import('@/views/analysis/checkout'),
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/refuel',
          name: 'refuel',
          component: () => import('@/views/analysis/refuel'),
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/safebox',
          name: 'safebox',
          component: () => import('@/views/analysis/safebox'),
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/switching',
          name: 'switching',
          component: () => import('@/views/analysis/switching'),
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/unload',
          name: 'unload',
          component: () => import('@/views/analysis/unload'),
          meta: {
            requireAuth: true
          }
        }
      ]
    },
    {
      path: 'monitor',
      name: 'Monitor',
      component: () => import('@/views/monitor'),
      meta: {
        requireAuth: true
      }
    },
    {
      path: 'history',
      name: 'History',
      component: () => import('@/views/history'),
      meta: {
        requireAuth: true
      }
    }
  ]
}]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
