<template>
  <div id="app" class="full-height">
   <router-view />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { reqToken } from '@/api'
export default {
  name: 'App',
  created () {
    this.initData()
  },
  methods: {
    ...mapActions([
      'handleAuthenticate',
      'getEventsDefine',
      'getLevelsDefine',
      'getCategoryDefine'
    ]),
    async getToken () {
      const { token } = await reqToken() // 发送请求获取token
      if (token) {
        // 如果获取到token，调用vuex的action中的handleAuthenticate，router = Home
        this.handleAuthenticate(token)
        this.$router.replace({ name: 'Home' })
      }
    },
    initData () {
      if (!sessionStorage.getItem('categoryData')) {
        this.getCategoryDefine() // 获取场景定义
      }
      if (!sessionStorage.getItem('eventData')) {
        this.getEventsDefine() // 获取事件定义
      }
      if (!sessionStorage.getItem('levelData')) {
        this.getLevelsDefine() // 获取违规等级定义
      }
      // if (sessionStorage.getItem('token')) {
      //   sessionStorage.removeItem('token')
      // }
      // 获取到这些数据后，再进行 token 获取
      this.getToken()
    }
  }
}
</script>
<style>
#app {
  padding: 0 16px;
}
</style>
