<template>
  <div class="visual_conTop">
    <div class="visual_conTop_box visual_conTop1">
      <div>
        <h3>服务分</h3>
        <p>{{getScore[0]}}</p>
        <div class="conTop_smil">
          <a class="sz">日环比:<span>+3%</span><i class="fa fa-long-arrow-up"></i></a>
          <a class="xd">周环比:<span>-2%</span><i class="fa fa-long-arrow-down"></i></a>
        </div>
      </div>
    </div>
    <div class="visual_conTop_box visual_conTop2">
      <div>
        <h3>效率分</h3>
        <p>{{getScore[1]}}</p>
        <div class="conTop_smil">
          <a class="sz">缓行</a>
          <a class="xd">平均车速<span>120</span>KM/H</a>
        </div>
      </div>
    </div>
    <div class="visual_conTop_box visual_conTop1">
      <div>
        <h3>安全分</h3>
        <p>{{getScore[2]}}</p>
        <div class="conTop_smil">
          <a class="sz">日环比:<span>+3%</span>
          <i class="fa fa-long-arrow-up"></i></a>
          <a class="xd">周环比:<span>-2%</span>
          <i class="fa fa-long-arrow-down"></i></a>
        </div>
      </div>
    </div>
    <div class="visual_conTop_box visual_conTop2">
      <div>
        <h3>管理分</h3>
        <p>{{getScore[3]}}</p>
        <div class="conTop_smil">
          <a class="null">null</a>
          <a class="xd">月环比:<span>-2%</span><i class="fa fa-long-arrow-down"></i></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Score',
  props: {
    score: {
      type: Array
    }

  },
  computed: {
    getScore () {
      return this.score
    }
  },
  watch: {
    // score (newVal, oldVal) {
    //   this.score = newVal
    // }
  }

}
</script>

<style scoped >
.visual_conTop{
  height:8rem;
}
.visual_conTop .visual_conTop_box{
  height:100%;
  padding:0 .5rem;
}
.visual_conTop .visual_conTop1{
  width:25%;
  height:100%;
  float:left;
}
.visual_conTop .visual_conTop1>div{
  background:url(../../assets/img/ksh40.png) no-repeat;
  background-size:100% 100%;
}
.visual_conTop .visual_conTop2{
  width:25%;
  height:100%;
  float:left;
}
.visual_conTop .visual_conTop2>div{
  background:url(../../assets/img/ksh39.png) no-repeat;
  background-size:100% 100%;
}
.visual_right{
  width:25%;
  height:100%;
  float:right;
}
.visual_conTop .visual_conTop_box>div{height:100%;}
.visual_conTop .visual_conTop_box>div h3{
  color:#fff;
  font-size:.95rem;
  padding:.8rem 0 0 1.4rem;
}
.visual_conTop .visual_conTop_box>div p{
  width:33%;
  float:left;
  line-height:4.5rem;
  color:#20dbfd;
  text-shadow:0 0 1.3rem #00d8ff;
  font-size:2.8rem;
  font-family: 'yjsz';
  text-align:right;
  margin-left:.8rem;
}
.visual_conTop .visual_conTop_box>div .conTop_smil{
  width:45%;
  height:4.5rem;
  float:left;
  margin-left: .5rem;
  padding-top:1.2rem;
  /* background-color: #fff; */
}
.visual_conTop .visual_conTop_box>div .conTop_smil a{
  display:block;
  line-height:1.1rem;
  text-align: left;
  color:#fff;
  padding-left:1.2rem;
}
.visual_conTop .visual_conTop_box>div .conTop_smil span{
  width:1.5rem;
  display:inline-block;
  margin-left:.2rem;
}
.visual_conTop .visual_conTop_box>div .conTop_smil a.sz{color:#fe3e12;}
.visual_conTop .visual_conTop_box>div .conTop_smil a.xd{color:#12fe81;}
.visual_conTop .visual_conTop_box>div .conTop_smil a.null{visibility:hidden;}
</style>
