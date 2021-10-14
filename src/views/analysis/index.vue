<template>
<div >
   <el-row >
    <el-col :span="21" class="select_time" >
        <div class="static_top left">
            <i></i><span>{{title}}概况</span>
        </div>
    </el-col>
    <el-col :span="3" class="right select_time">
    <el-radio-group  size="small"  >
      <el-radio-button label="当日"></el-radio-button>
      <el-radio-button label="本周" disabled ></el-radio-button>
      <el-radio-button label="本月" disabled></el-radio-button>
    </el-radio-group>
  </el-col>
  </el-row>
  <!-- <category-page/> -->
  <router-view></router-view>
</div>
</template>

<script>
// import categoryPage from '@/components/context/categoryPage.vue'
export default {
  data () {
    return {
      title: '全景'
    }
  },
  mounted () {
    this.getCategoryType()
  },
  methods: {
    getCategoryType () {
      // console.log(this.$route.meta.name)
      this.title = this.$route.meta.name
    }
  },
  watch: {
    $route: {
      handler (val, oldval) {
        console.log(val)// 新路由信息
        const cate = JSON.stringify(val.meta.name)
        this.title = (cate.substring(1, cate.length - 1))
      },
      // 深度观察监听
      deep: true
    }
  }

}
</script>

<style scoped lang="less">
.select_time{
    width: 14rem;
    height: 1.8rem;
    margin-top: .8rem;
    margin-bottom: 1.1rem;
    margin-left: 1%;
    padding-left: 1.1rem;
}
.select_time img{
    height: 1rem;
    margin-top: 1rem;
}

.el-radio-button .el-radio-button--small {
  background-color:transparent;
}
.static_top{
    width: 8rem;
    height: 2rem;
    line-height: 2rem;
    background-color: #034c6a;
    margin-bottom: 1.2rem;
    margin-left: 1%;
    padding-left: 1rem;
    border-radius: .05rem;
    box-shadow: 0rem .15rem .15rem #61d2f7;

}

.static_top i{
    width: 1rem;
    height: 1rem;
    display: inline-block;
    position: relative;
    background-image: url("../../assets/img/nav_7.png");
    background-repeat: no-repeat;
    margin-right: .4rem;
    top:.3rem;
}
.static_top span{
    color: #25f3e6;
    font-size:.88rem;
}
</style>
