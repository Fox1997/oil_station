<template>
<!-- 3*4的块状 -->
  <div class="boxall">
    <div class="title">{{illegalTitle}}</div>
    <div class="navboxall visual_chart sfzcll">
      <a>{{colTitle[0]}}</a>
      <a>{{colTitle[1]}}</a>
      <a>{{colTitle[2]}}</a>
      <a>{{colTitle[3]}}</a>
      <div class="sfzcll_pos_box">
        <div class="sfzcll_box">
          <img class="sfzcll_bkJk" src="../../assets/img/ksh34.png">
          <img class="sfzcll_bkJk" src="../../assets/img/ksh34.png">
          <img class="sfzcll_bkJk" src="../../assets/img/ksh34.png">
          <img class="sfzcll_bkJk" src="../../assets/img/ksh34.png">
          <label><img src="../../assets/img/ksh35.png">{{rowTitle[0]}}</label>
          <div class="sfzcll_smallBk">
            <div class="col1">
              <span>{{illegalData[0]}}</span>次
            </div>
          </div>
          <div class="sfzcll_smallBk">
            <div class="col2">
              <span>{{illegalData[1]}}</span>次
            </div>
          </div>
          <div class="sfzcll_smallBk">
            <div class="col3">
              <span>{{illegalData[2]}}</span>次
            </div>
          </div>
          <div class="clear"></div>
        </div>
        <div class="sfzcll_box">
          <img class="sfzcll_bkJk" src="../../assets/img/ksh34.png">
          <img class="sfzcll_bkJk" src="../../assets/img/ksh34.png">
          <img class="sfzcll_bkJk" src="../../assets/img/ksh34.png">
          <img class="sfzcll_bkJk" src="../../assets/img/ksh34.png">
          <label><img src="../../assets/img/ksh35.png">{{rowTitle[1]}}</label>
          <div class="sfzcll_smallBk">
            <div class="col1">
              <span>{{illegalData[3]}}</span>次
            </div>
          </div>
          <div class="sfzcll_smallBk">
            <div class="col2">
              <span>{{illegalData[4]}}</span>次
            </div>
          </div>
          <div class="sfzcll_smallBk">
            <div class="col3">
              <span>{{illegalData[5]}}</span>次
            </div>
          </div>
          <div class="clear"></div>
        </div>

        <div class="sfzcll_box">
          <img class="sfzcll_bkJk" src="../../assets/img/ksh34.png">
          <img class="sfzcll_bkJk" src="../../assets/img/ksh34.png">
          <img class="sfzcll_bkJk" src="../../assets/img/ksh34.png">
          <img class="sfzcll_bkJk" src="../../assets/img/ksh34.png">
          <label><img src="../../assets/img/ksh35.png">{{rowTitle[2]}}</label>
          <div class="sfzcll_smallBk">
            <div class="col1">
              <span>{{illegalData[6]}}</span>次
            </div>
          </div>
          <div class="sfzcll_smallBk">
            <div class="col2">
              <span>{{illegalData[7]}}</span>次
            </div>
          </div>
          <div class="sfzcll_smallBk">
            <div class="col3">
              <span>{{illegalData[8]}}</span>次
            </div>
          </div>
          <div class="clear"></div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'boxChart',
  props: {
    illegalTitle: {
      type: String
    },
    colTitle: {
      type: Array
    },
    rowTitle: {
      type: Array
    },
    illegalData: {
      type: Array
    }
  }

}
</script>

<style scoped>
.navboxall{
  height:14rem;
  width:100%;
  /* background-color: #fff; */
}
.clear{clear:both;}
/* .visual_chart{width:100%;height:100%;position:absolute;} */
.visual_chart{opacity:0.6}
.sfzcll{
  position:relative;
  font-size:.9rem
}
.sfzcll a{
  width:25%;
  text-align:center;
  line-height:1.8rem;
  color:#fff;
  display:inline-block;
  /* background-color: #fff; */
}
.sfzcll .sfzcll_pos_box{
  width:100%;
  height:calc(100% - 1.8rem);
  /* background-color: #fff; */
}
.sfzcll .sfzcll_box{
  width:100%;
  height:calc(33% - .3rem);
  background:rgba(15,47,72,0.8);
  border:.05rem solid #1380bd;
  position:relative;
  margin-bottom:.2rem;
  /* background-color: #fff; */
}
.sfzcll .sfzcll_box:last-of-type{
  margin:0;
}
.sfzcll .sfzcll_box .sfzcll_bkJk{
  position:absolute;
}
/* 边框上的小方点 */
.sfzcll .sfzcll_box .sfzcll_bkJk:first-of-type{
  top:-.1rem;
  left:-.1rem;
}
.sfzcll .sfzcll_box .sfzcll_bkJk:nth-child(2){
  top:-.1rem;
  right:-.1rem;
}
.sfzcll .sfzcll_box .sfzcll_bkJk:nth-child(3){
  bottom:-.1rem;
  right:-.1rem;
}
.sfzcll .sfzcll_box .sfzcll_bkJk:nth-child(4){
  bottom:-.1rem;
  left:-.1rem;
}
.sfzcll .sfzcll_box label{
  width:25%;
  color:#fff;
  text-align:center;
  float:left;
  height:3.8rem;
  line-height:3.8rem;
}
.sfzcll .sfzcll_box label img{
  width:1.2rem;
  height:1.2rem;
  margin-right:.25rem;
  margin-top:-.1rem;
}
.sfzcll .sfzcll_box .sfzcll_smallBk{
  width:25%;
  height:100%;
  float:left;
  padding:.1rem .1rem;
  /* background-color: #fff; */
}
.sfzcll .sfzcll_box .sfzcll_smallBk>div{
  height:100%;
  background:url(../../assets/img/ksh38.png) no-repeat;
  background-size:100% 100%;
  text-align: center;
  line-height:3.8rem;

}
.sfzcll .sfzcll_box .sfzcll_smallBk .col1{color:#00ffc6;}
.sfzcll .sfzcll_box .sfzcll_smallBk .col2{color:#ffe400;}
.sfzcll .sfzcll_box .sfzcll_smallBk .col3{color:#ef6e3c;}

</style>
