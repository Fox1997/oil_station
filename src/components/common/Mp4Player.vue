<template>
  <video-player
    class="vjs-custom-skin"
    ref="videoPlayer"
    :options="playerOptions"
    :playsinline="true"
    customEventName="customstatechangedeventname"
  ></video-player>
</template>

<script>
// import 'videojs-flash'

export default {
  name: 'Mp4Player', // 不能使用 video 命名
  props: {
    src: {
      type: String
      // default: 'http://vjs.zencdn.net/v/oceans.mp4'
    },
    posterSrc: {
      type: String
    }
  },
  data () {
    return {
      player: null,
      playerOptions: {
        sources: [
          {
            type: 'video/mp4',
            src: this.src || 'http://vjs.zencdn.net/v/oceans.mp4'
          }
        ],
        autoplay: false, // 自动播放
        muted: true, // 消除所有音频
        fluid: true, // 按比例缩放适应容器
        aspectRatio: '16:9', // 画面比例
        poster: this.posterSrc // 首屏图片
        // height: "120",
        // width: "260",
        // controls: true, // 控制条
        // preload: "auto", // 预加载
        // muted: true, // 消除所有音频
        // loop: false, // 不循环播放
      }
    }
  },
  watch: {
    src: {
      handler (val) {
        this.playerOptions.sources[0].src = val
      }
    },
    posterSrc: {
      handler (val) {
        this.playerOptions.poster = val
      }
    }
  }
}
</script>
<style lang="less" >
.vjs-custom-skin {
  .video-js .vjs-big-play-button {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
