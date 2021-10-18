<template>
<div class="flv-video-container">
    <Modal
   v-model="isShowModal"
   footer-hide
    @on-cancel="cancelModal">
      <p  slot="header">{{ this.videoTitle }}</p>
       <div >
        <video id="videoPlayer" class="video" controls autoplay></video>
      </div>
  </Modal>
</div>
</template>

<script>
import flvjs from 'flv.js'
import { mapActions } from 'vuex'

export default {
  name: 'flvjs', // 不能使用 video 命名
  data () {
    return {
      flvPlayer: null,
      isShowModal: false
    }
  },
  // props: {
  //   isLoadDetail: {
  //     type: Boolean
  //   }
  // },
  computed: {
    // ...mapState(['rootFontSize']),
    // titleStyle () {
    //   return {
    //     fontSize: this.rootFontSize + 'px'
    //   }
    // },
    isLoadDetail () {
      return this.$store.state.monitor.isLoadDetail
    },
    videoTitle () {
      return this.$store.state.monitor.curVideoStream.title
    },
    videoSrc () {
      return this.$store.state.monitor.curVideoStream.url
    }
  },
  mounted () {
    if (flvjs.isSupported()) {
      var videoElement = document.getElementById('videoPlayer')
      if (typeof this.flvPlayer !== 'undefined') {
        if (this.flvPlayer !== null) {
          this.flvPlayer.unload()
          this.flvPlayer.detachMediaElement()
          this.flvPlayer.destroy()
          this.flvPlayer = null
        }
      }
      this.flvPlayer = flvjs.createPlayer({
        type: 'flv',
        isLive: true,
        hasVideo: true,
        url: this.videoSrc
      })
      this.flvPlayer.attachMediaElement(videoElement)
      this.flvPlayer.load()
      this.flvPlayer.play()
      this.isShowModal = true
    }
  },
  destroyed () {
    this.flv_destroy()
  },
  methods: {
    ...mapActions([
      'closeDetailsLoadVideoGridPages',
      'getStationVideoStreamUrl'
      // 'updateStationVideoStreamState'
    ]),
    cancelModal () {
      // 暂停
      // this.flv_pause()
      // this.flv_destroy()
      // this.isShowModal = false
      this.$store.commit('SET_IS_LOAD_DETAIL', { payload: false })

      // this.$refs.videoPlayer.$refs.videoPlayer.player.pause()
      // this.flv_destroy()
    },
    // returnVideoGrid () {
    //   this.flv_destroy()
    //   this.$store.commit('SET_IS_LOAD_DETAIL', { payload: false })
    // },
    flv_load_mds () {
      // console.log('视频地址:', this.videoSrc)
      var videoElement = document.getElementById('videoPlayer')
      if (typeof this.flvPlayer !== 'undefined') {
        if (this.flvPlayer != null) {
          this.flvPlayer.unload()
          this.flvPlayer.detachMediaElement()
          this.flvPlayer.destroy()
          this.flvPlayer = null
        }
      }
      this.flvPlayer = flvjs.createPlayer({
        type: 'flv',
        isLive: true,
        hasVideo: true,
        url: this.videoSrc
      })
      this.flvPlayer.attachMediaElement(videoElement)
      this.flvPlayer.load()
      this.flvPlayer.play()
    },
    flv_start () {
      this.flvPlayer.play()
    },
    flv_pause () {
      this.flvPlayer.pause()
    },
    flv_destroy () {
      if (this.flvPlayer != null) {
        this.flvPlayer.pause()
        this.flvPlayer.unload()
        this.flvPlayer.detachMediaElement()
        this.flvPlayer.destroy()
        this.flvPlayer = null
      }
    }
  }
}
</script>

<style lang="less" scoped>
.video {
  height: 100%;
  width: 100%;
}

</style>
