<template>
<el-row>
  <div class="con1 left" >
    <div class="left car_left">
      <div class="left_up bow_shadow">
        <p>
          <input type="text" placeholder="输入车牌号" class="carNo_input">
          <input type="button" class="find_but">
        </p>
        <p class="set_list"><i class="list_i"></i> 设备列表：</p>
        <p ><ul id="treeDemo" class="ztree"></ul></p>
      </div>
      <div class="left_down bow_shadow">
        <div class="text_center">
          <a href="javascript:void (0)" class="tab_a tab_aActive">基本信息</a>
          <a href="javascript:void (0)" class="tab_a">云台控制</a>
        </div>
        <div class="car_content">
            <!-- <p><span>车牌号：</span><span>K89076</span></p>
            <p><span>驾驶人姓名：</span><span>K89076</span></p>
            <p><span>车辆品牌：</span><span>K89076</span></p>
            <p><span>车辆型号：</span><span>K89076</span></p>
            <p><span>所属公司：</span><span>K89076xxxxxxxxxxxxxxxxxx</span></p>
            <p><span>行驶里程：</span><span>xxxxx</span></p>
            <p><span>状态：</span><span>xxxxx</span></p>
            <p><span>所在位置：</span><span>xxxxxxxxxxxxx</span></p> -->
        </div>
      </div>
    </div>
    <div class="left car_center">
        <video controls="controls" class="magin_left"  v-for="(item, i) in videoStreamArr"
      :key="`item-${i}`"></video>
    </div>
  </div>
</el-row>
</template>

<script>
// import VideoGrid from './VideoGrid'
// import VideoDetail from './detail'
import { mapActions } from 'vuex'
export default {
  name: 'Monitor',
  components: {
    // VideoGrid,
    // VideoDetail
  },
  data () {
    return {
      timer: null
    //   isGetStream: false // 是否获取到流信息
    }
  },
  computed: {
    // isLoadDetail () {
    //   return this.$store.state.monitor.isLoadDetail
    // }
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
    // this.timer = window.setInterval(() => {
    if (sessionStorage.getItem('token')) {
      this.getVideoStreamArr() // 确保获取到 token 后，再发送获取视频流列表的请求
      // this.isGetStream = true
    //   console.log(this.getVideoStreamArr)
    }
    // }, 10)
  },
  methods: {
    ...mapActions(['getVideoStreamArr'])
  }
}
</script>

<style scoped>
/* .con1 .left {
  height: 100% !important;
  background-color: #fff;
} */
.con1{
    width: 100%;
    background-color: #081832cc;
    /*padding-bottom: 4px;*/
    box-sizing: border-box;
    overflow: auto;
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
.left{
    float: left;
}
.right{
    float: right;
}
.car_left{
    width: 18%;
    height: 100% !important;
    background-color:  #081832;
}
.left_up{
    height: 58%;
}
/* .bow_shadow{
    box-shadow: -.5rem 0rem .5rem #034c6a inset,
    .5rem 0rem .5rem #034c6a inset;
    width: 100%;
    box-sizing: border-box;
} */
.carNo_input{
    width: 75%;
    height: 1.8rem;
    margin-top: .8rem;
    margin-bottom: .5rem;
    text-indent: 2em;
    margin-left: 5%;
    border:.2rem solid #072951;
    border-radius: .2rem;
}
.find_but{
    height: 1.5rem;
    background-image: url("../../assets/img/find.png");
    width: 1.5rem;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: relative;
    top:.3rem;
    border:none;
    background-color: transparent;
}
.set_list{
    padding: .5rem 5%;
    color: #eee;
    font-size: .8rem;
}
.list_i{
    width: 1.2rem;
    height: 1.2rem;
    display: inline-block;
    background-image: url("../../assets/img/nav_1.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    top:.3rem;
    position: relative;
}
.ztree li a{
    color: #FFFFff !important;
}
.left_down{
    height: 40%;
    margin-top: 2%;
}
.text_center{
    text-align: center;
}
.tab_a{
    width: 45%;
    height: 1.8rem;
    line-height: 1.8rem;
    color: #FFFFff;
    background-color: #667fa7;
    display: inline-block;
    margin-right: 1%;
    margin-top: .6rem;
    font-size: 1rem;
}
.tab_aActive{
    background-color:#034c6a !important;
    font-weight: 600;
}
.car_content{
    margin-top: 5% ;
    margin-left: 8%;
    font-size: .8rem;
    color: #eeeeee;
}
.car_content p{
    padding-top: .2rem;
    padding-bottom: .2rem;
}
.car_center{
    height: 100%;
    background-color:  #081832;
    width: 80%;
    margin-left: 1%;
    /* background-color: #fff; */
}
.car_center video{
    width: 32.5%;
    height: 49%;
    box-sizing: border-box;
    box-shadow: -.5rem 0rem .7rem #034c6a inset,
    .5rem 0rem .7rem #034c6a inset;
    float: left;
}
.bow_shadow{
    box-shadow: -.3rem 0rem .4rem #034c6a inset,
    .3rem 0rem .4rem #034c6a inset;
    width: 100%;
    box-sizing: border-box;
}
.magin_top{
    margin-top: 1%;
}
.magin_left{
    padding: .2rem;
}

</style>
