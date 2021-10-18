<template>
<el-row>
  <div class="con1 left" >
    <video-grid></video-grid>
    <detail-table/>
  </div>
</el-row>
</template>

<script>
import videoGrid from './videoGrid'
import detailTable from './detailTable'
import { mapActions } from 'vuex'
export default {
  name: 'Monitor',
  components: {
    videoGrid,
    detailTable
  },
  data () {
    return {
      timer: null,
      categories: [],
      isGetStream: false // 是否获取到流信息
    }
  },
  computed: {
    videoStreamArr () { // 站点视频流
      return this.$store.state.monitor.videoStreamArr
    }
  },
  watch: {
    isGetStream: {
      handler (val) {
        if (val) {
          window.clearInterval(this.timer)
        }
      }
    }
  },
  mounted () {
    // this.getCategory()
    this.timer = window.setInterval(() => {
      if (sessionStorage.getItem('token')) {
        this.getVideoStreamArr() // 确保获取到 token 后，再发送获取视频流列表的请求
        this.isGetStream = true
      }
      // console.log(this.getVideoStreamArr())
    }, 10)
  },
  methods: {
    ...mapActions(['getVideoStreamArr'])
  }
}
</script>

<style scoped>
.con1{
    width: 100%;
    background-color: #081832cc;
    /*padding-bottom: 4px;*/
    box-sizing: border-box;
    overflow: hidden;
    margin: .8rem;
    height: 48rem;
}
.con1::before{
    content: "";
    display: block;
    clear: both;
    visibility: hidden;
    height: 0;
}

/* .set_list{
    padding: .5rem 5%;
    color: #eee;
    font-size: 1rem;
}
.list_i{
    width: 1rem;
    height: 1rem;
    display: inline-block;
    background-image: url("../../assets/img/nav_1.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    top:.3rem;
    position: relative;
}
.ztree li a{
    color: #FFFFff !important;
} */

</style>
