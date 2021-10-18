<template>
  <div class="visual_conTop">
    <div class="visual_conTop_box visual_conTop1">
      <div>
        <h3>服务分</h3>
        <p>{{score[0]}}</p>
        <div class="conTop_smil">
          <a :style="{color: scoreWeek.length&&scoreWeek[0].color }">周环比:<span>{{scoreWeek.length&&scoreWeek[0].value}}</span><i class="fa fa-long-arrow-up"></i></a>
          <a :style="{color: scoreMonth.length&&scoreMonth[0].color }">月环比:<span>{{scoreMonth.length&&scoreMonth[0].value}}</span><i class="fa fa-long-arrow-down"></i></a>
        </div>
      </div>
    </div>
    <div class="visual_conTop_box visual_conTop2">
      <div>
        <h3>效率分</h3>
        <p>{{score[1]}}</p>
        <div class="conTop_smil">
         <a :style="{color: scoreWeek.length&&scoreWeek[1].color }">周环比:<span>{{scoreWeek.length&&scoreWeek[1].value}}</span><i class="fa fa-long-arrow-up"></i></a>
          <a :style="{color: scoreMonth.length&&scoreMonth[1].color }">月环比:<span>{{scoreMonth.length&&scoreMonth[1].value}}</span><i class="fa fa-long-arrow-down"></i></a>
        </div>
      </div>
    </div>
    <div class="visual_conTop_box visual_conTop1">
      <div>
        <h3>安全分</h3>
        <p>{{score[2]}}</p>
        <div class="conTop_smil">
         <a :style="{color: scoreWeek.length&&scoreWeek[2].color }">周环比:<span>{{scoreWeek.length&&scoreWeek[2].value}}</span><i class="fa fa-long-arrow-up"></i></a>
          <a :style="{color: scoreMonth.length&&scoreMonth[2].color }">月环比:<span>{{scoreMonth.length&&scoreMonth[2].value}}</span><i class="fa fa-long-arrow-down"></i></a>
        </div>
      </div>
    </div>
    <div class="visual_conTop_box visual_conTop2">
      <div>
        <h3>管理分</h3>
        <p>{{score[3]}}</p>
        <div class="conTop_smil">
          <a :style="{color: scoreWeek.length&&scoreWeek[3].color }">周环比:<span>{{scoreWeek.length&&scoreWeek[3].value}}</span><i class="fa fa-long-arrow-up"></i></a>
          <a :style="{color: scoreMonth.length&&scoreMonth[3].color }">月环比:<span>{{scoreMonth.length&&scoreMonth[3].value}}</span><i class="fa fa-long-arrow-down"></i></a>
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
    },
    scoreWeek: {
      type: Array
    },
    scoreMonth: {
      type: Array
    }

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
