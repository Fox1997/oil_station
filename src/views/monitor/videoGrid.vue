<template>
  <div class="left car_center">
    <el-card :body-style="{ padding: '0px' }"
    v-for="(item, i) in videoStreamArr"
      :key="`item-${i}`">
       <img
            v-if="item.preview"
            :src="ip + item.preview"
            class="image"
          />
      <div class="video-info">
        <span> {{item.title}} </span>
        <div class="bottom clearfix">
          <div class="time"
           >
          当前平均违规情况：
          <span :style="{'color': illLevel.length=== videoStreamArr.length ?illLevel[i].color:''}" > {{ illLevel.length=== videoStreamArr.length ? illLevel[i].value: ''}} </span>
          </div>
          <el-button type="text" class="button" icon="el-icon-view"
          @click="handleVideo(item)">详情</el-button>
        </div>
      </div>
    </el-card>
    <flv-video-player v-if="isLoadDetail"/>
        <!-- <video controls="controls" class="magin_left"
        v-for="(item, i) in videoStreamArr"
      :key="`item-${i}`"></video> -->
</div>
</template>
<script>
import flvVideoPlayer from './flvVideoPlayer'
import { mapActions } from 'vuex'
import { ip, formatIllLevel, getCategoryData } from '@/utils/constData'
import { reqAvageIllLevel } from '@/api'
// import dayjs from 'dayjs'
export default {
  data () {
    return {
      ip: ip,
      streamArrCate: [],
      illLevel: []
      // isShowPlayer: false
    }
  },
  components: {
    flvVideoPlayer
  },
  computed: {
    isLoadDetail () {
      return this.$store.state.monitor.isLoadDetail
    },
    videoStreamArr () { // 站点视频流
      return this.$store.state.monitor.videoStreamArr
    }
  },
  watch: {
    videoStreamArr: {
      deep: true,
      handler (val) {
        this.getChannelLevel()
      }
    }
  },
  mounted () {
    // this.getIllLevel(4, 1)
    // this.getCateCode('unload')
    this.getChannelLevel()
  },
  methods: {
    ...mapActions(['getCurVideoStream']),
    handleVideo (videoinfo) {
      // 加载点击的视频流信息
      const pullParams = {
        schedulerStr: videoinfo.scheduler_str
      }
      // console.log('点击的视频流信息', pullParams)
      this.getCurVideoStream(pullParams)
      // this.isShowPlayer = true
      // // // 加载点击的视频流的表格数据
      // const eventParams = {
      //   channel_id: parseInt(videoinfo.channel),
      //   start: dayjs(new Date()).format('YYYY-MM-DD'),
      //   end: dayjs(new Date()).format('YYYY-MM-DD')
      // }
      // this.getMonitorAllEvents(eventParams)
    },
    getCateCode (name) {
      const Cate = getCategoryData()
      const categories = Object.keys(Cate).filter(key => key.length === 1).map(key => Cate[key])
      for (let index = 0; index <= categories.length; index++) {
        if (name === categories[index].name) {
          const code = categories[index].code
          // console.log('code', code, name)
          return code
        }
      }
    },
    async getChannelLevel () {
      const videoStream = this.$store.state.monitor.videoStreamArr
      for (let i = 0; i < videoStream.length; i++) {
        // console.log('this.videoStreamArr[i]', this.videoStreamArr[i])
        const cateName = videoStream[i].category
        const cateCode = this.getCateCode(cateName)
        const channel = videoStream[i].channel
        // const level = this.getIllLevel(cateCode, channel)
        const { val: level } = await reqAvageIllLevel({ val: 1, category_code: cateCode, channel_id: channel })
        const levelRest = formatIllLevel(level)
        this.illLevel.push(levelRest)
        // console.log('level', level)
      }
    }

  }
}
</script>

<style lang="less" scoped>
.car_center{
    height: 99%;
    background-color:  #081832;
    width: 70%;
    margin-left:.8rem ;
    box-shadow: -.5rem 0rem .7rem #034c6a inset,
    .5rem 0rem .7rem #034c6a inset;
    //  background-color: #fff;
}
.car_center .el-card{
    width: 33%;
    height: 48%;
    box-sizing: border-box;
    border: 3px solid #08506d;
    float: left;
    margin:0.6% 0.1%;
}

span {
  font-size:1.2rem;
  color: #fff;
}
.time {
  height: 1.2rem;
  line-height:1.2rem;
  font-size: .8rem;
  display: inline-block;
  color: #bdc0c5;
  }
.time span {
  font-size:1rem;
  font-weight: bold;
}
.video-info {
  padding: .8rem;
  height: 22%;
  background-color: #081832;
}
  .bottom {
    margin-top: .3rem;
    line-height: .5rem;
  }

  .button {
    padding: 0;
    float: right;
    height: 1.2rem;
    line-height:1.2rem;
    font-size: .9rem;
    margin-right: .8rem;
  }

  .image {
    padding: 1%;
    background-color: #081832;
    width: 100%;
    height:78%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  .clearfix:after {
      clear: both
  }
</style>
