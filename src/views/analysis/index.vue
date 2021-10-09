<template>
<div >
   <el-row >
    <el-col :span="21" class="select_time" >
        <div class="static_top left">
            <i></i><span>总体概况</span>
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
    <router-view></router-view>
</div>
</template>

<script>
export default {
  components: {

  }

}
</script>

<style scoped lang="less">
.select_time{
    width: 12rem;
    height: 1.8rem;
    margin-top: .8rem;
    margin-bottom: 1.1rem;
    margin-left: 1%;
    padding-left: 1.1rem;

}
.select_time img{
    height: 1rem;
    margin-top: .9rem;
}

.select_time input{
    border: none;
    background-color: transparent;
    width: 4rem;
    height: 1rem;
    top:-.2rem;
    margin-left: .5rem;
    position: relative;
    text-indent: 1em;
    outline: none;
}
.el-radio-button .el-radio-button--small {
  background-color:transparent;
}
.static_top{
    width: 6rem;
    height: 1.8rem;
    line-height: 1.8rem;
    background-color: #04425f;
    margin-bottom: 1.2rem;
    margin-left: 1%;
    padding-left: 1rem;
    border-radius: .05rem;
    box-shadow: 0rem .15rem .15rem #61d2f7;

}

.static_top i{
    width: .8rem;
    height: .8rem;
    display: inline-block;
    position: relative;
    background-image: url("../../assets/img/nav_7.png");
    background-repeat: no-repeat;
    margin-right: .4rem;
    top:.05rem;
}
.static_top span{
    color: #25f3e6;
}
</style>
