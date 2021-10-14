<template>
  <Card class="events-card">
    <p class="event-item">
      事件区域：{{ getCurRowEventData.category || '' }}</p>
    <p class="event-item"  >
      事件名称：{{ getCurRowEventData.name }}
    </p>
    <p class="event-item" >
      事件等级：<span :class="levelClass">{{ getCurRowEventData.level }}</span>
    </p>
    <p class="event-item" >
      发生时间：{{ getCurRowEventData.datetime }}
    </p>
    <p class="event-item" >
      事件照片：
      <span>（点击图片可查看）</span>
        <img
        :src="ip + getCurRowEventData.image_path" v-viewer width="40" height="40"/>
    </p>
    <p class="event-item" >
      事件视频：
      <Button
        v-if="getCurRowEventData.video_path !== 'null'"
        @click="showVideo"
        size="small"
        type="warning"
      >
        查看视频
      </Button>
      <!-- <video src="" controls="controls"></video> -->
      <span v-else>无视频</span>
    </p>
  </Card>
</template>

<script>
// 视频
import { mapGetters } from 'vuex'
import { ip, getLevelData } from '@/utils/constData'

export default {
  name: 'detailPage',
  data () {
    return {
      ip: ip,
      videoModal: false,
      scale: 1 // 缩放比例

    }
  },
  computed: {
    // 获取被点击的那一行的数据
    ...mapGetters(['getCurRowEventData']),
    // 等级样式设置
    levelClass () {
      const levelData = getLevelData()
      let level = 'event-legal' // 默认是合规的
      switch (this.getCurRowEventData.level) {
        case levelData[1].nameCN:
          level = 'event-illegal-one'
          break
        case levelData[2].nameCN:
          level = 'event-illegal-two'
          break
        case levelData[3].nameCN:
          level = 'event-illegal-thr'
      }
      return level
    }
  },
  methods: {
    showVideo () { // 查看视频
      this.$emit('showEventVideo', this.getCurRowEventData)
    },
    showImg () {

    }
    // clickDetailEventVideo () {
    //   this.videoModal = true
    // },
    // cancelModal (index) {
    //   this.videoModal = false
    //   this.$refs['VideoMp4' + index][0].$refs.videoPlayer.player.pause()
    // }
  }
}
</script>

<style lang="less" scoped>
.events-card {
  height: 80%;
  background: transparent;
  border: none;
  border-top:.1rem solid #034c6a;
  .event-item {
    padding: .8rem .8rem;
    color: #fff;
    font-size: .9rem;
    line-height: .9rem;
  }
  .ivu-card-body {
    padding: .5rem;
  }
}

img {
  padding-top: 2rem;
  width:100%;
  height:15rem;
}
</style>
