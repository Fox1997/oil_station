<template>
  <div class="boxall">
        <div class="title">口罩佩戴情况</div>
                    <!-- <div class="tabs">
                        <ul class="clearfix">
                            <li><a :class="{active:isActive1}"  @click="getDayRation('day')" >当日</a></li>
                            <li><a :class="{active:isActive2}" @click="getDayRation('week')">本周</a></li>
                            <li><a :class="{active:isActive3}" @click="getDayRation('month')">本月</a></li>
                        </ul>
                    </div> -->
                    <three-circle
                    :circleRationList = "circleRationList"
                    class="circle"/>
                    <div class="addnew">
                        <div class="tit02"><span>各场景口罩佩戴数目</span></div>
                        <div class="adduser">
                            <ul class="clearfix">
                                <li class="clearfix">
                                    <span class="pulll_left iconfont icon-checkout">  航站楼</span>
                                    <span class="pulll_right num1"> {{tableNumList[0]}} </span> </li>
                                <li class="clearfix">
                                    <span class="pulll_left iconfont icon-unload"> 货运区</span>
                                    <span class="pulll_right num2">{{tableNumList[1]}} </span> </li>
                                <li class="clearfix">
                                    <span class="pulll_left iconfont icon-refuel"> 机坪</span>
                                    <span class="pulll_right num3">{{tableNumList[2]}} </span> </li>
                            </ul>
                        </div>
                    </div>
  </div>
</template>

<script>
// import { reqMaskData } from '@/api'
import threeCircle from './threeCircle'
export default {
  name: 'circleCharts',
  components: {
    threeCircle
  },
  props: {
  },
  data () {
    return {
      tableNumList: [87, 109, 96],
      circleRationList: [62, 88, 79]
    }
  },
  watch: {
  },
  mounted () {
    // this.getDayRation('day')
    // this.isActive1 = true
  },
  methods: {
    // async getDayRation (span) {
    //   const { ratio_mask: TerMaskRationDay } = await reqMaskData({ category_code: 1, group: span })
    //   const { ratio_mask: TransMaskRationDay } = await reqMaskData({ category_code: 2, group: span })
    //   const { ratio_mask: AirMaskRationDay } = await reqMaskData({ category_code: 3, group: span })
    //   this.terMaskRation = (TerMaskRationDay * 100).toFixed(1)
    //   this.transMaskRation = (TransMaskRationDay * 100).toFixed(1)
    //   this.airMaskRation = (AirMaskRationDay * 100).toFixed(1)
    //   if (span === 'day') {
    //     this.isActive1 = true
    //     this.isActive2 = false
    //     this.isActive3 = false
    //   } else if (span === 'week') {
    //     this.isActive1 = false
    //     this.isActive2 = true
    //     this.isActive3 = false
    //   } else if (span === 'month') {
    //     this.isActive1 = false
    //     this.isActive2 = false
    //     this.isActive3 = true
    //   }
    //   console.log('口罩佩戴率', span, this.terMaskRation, this.transMaskRation, this.airMaskRation)
    // },
    // async getWeekRation () {
    //   const { ratio_mask: TerMaskRationWeek } = await reqMaskData({ category_code: 1, group: 'week' })
    //   const { ratio_mask: TransMaskRationWeek } = await reqMaskData({ category_code: 2, group: 'week' })
    //   const { ratio_mask: AirMaskRationWeek } = await reqMaskData({ category_code: 3, group: 'week' })
    //   this.terMaskRation = (TerMaskRationWeek * 100).toFixed(1)
    //   this.transMaskRation = (TransMaskRationWeek * 100).toFixed(1)
    //   this.airMaskRation = (AirMaskRationWeek * 100).toFixed(1)
    //   console.log('本周的口罩佩戴率', this.terMaskRation, this.transMaskRation, this.airMaskRation)
    // },
    // async getMonthRation () {
    //   const { ratio_mask: TerMaskRationMonth } = await reqMaskData({ category_code: 1, group: 'month' })
    //   const { ratio_mask: TransMaskRationMonth } = await reqMaskData({ category_code: 2, group: 'month' })
    //   const { ratio_mask: AirMaskRationMonth } = await reqMaskData({ category_code: 3, group: 'month' })
    //   this.terMaskRation = (TerMaskRationMonth * 100).toFixed(1)
    //   this.transMaskRation = (TransMaskRationMonth * 100).toFixed(1)
    //   this.airMaskRation = (AirMaskRationMonth * 100).toFixed(1)
    //   console.log('本月的口罩佩戴率', this.terMaskRation, this.transMaskRation, this.airMaskRation)
    // }
  }
}

</script>

<style scoped>
.tabs {
  text-align: center;
  padding: .3rem 0;
  }
.tabs a {
    position: relative;
    display: inline-block;
    margin-left: .5rem;
    padding:.1rem .6rem;
    color: #898989;
    transition: all .3s ease-out 0s;
    font-size: 1rem;
}
.tabs li{
  display:inline-block;}
.tabs a:after {
    position: absolute;
    width: .1rem;
    height: .5rem;
    background-color: rgba(255,255,255,.1);
    content: '';
    margin-left:0;
    right:-.1rem;
    margin-top: .3rem;

}
.tabs li a.active
  {border: .1rem solid rgba(25,186,139,.17);
  background: rgba(255,255,255,.05);
  color:#fff;
  }
.clearfix:after {
  clear: both
}
.pulll_left{float:left;}
.pulll_right{float:right;}

.circle {
  height: 11rem;
}

.tit02{
  text-align:center;
  margin: .4rem 0;
  position: relative
  }
.tit02 span{
  border: .1rem solid rgba(25,186,139,.4);
  letter-spacing: .1rem;
  padding: .3rem .5rem;
  background: rgba(255,255,255,.1);
  font-size: 0.85rem;
  color: #49bcf7;
  }
.tit02:before,.tit02:after{
  position:absolute;
  width:5rem;
  height: .1rem;
  background: rgba(25,186,139,.4);
  content: "";
  top: .5rem;}
.tit02:after{ right:0;}
.tit02:before{ left:0;}
.adduser {
  height:6rem;
}
.adduser li
  {
    height:3rem;
  }
.adduser span{
  line-height:2rem;
  font-size: 1rem;
  color: rgba(255,255,255,.9);
  margin-left: 1.0rem;
  }
.num1 {
    margin-right: 1.5rem !important;
    font-size: 1.2rem !important;
    color:#0088cc !important;
}
.num2 {
    margin-right: 1.5rem !important;
    font-size: 1.2rem !important;
    color:#fccb00 !important;
}
.num3 {
    margin-right: 1.5rem !important;
    font-size: 1.2rem !important;
    color:#62b62f  !important;
}
.boxall {
  height: 26rem;
  margin-top: .8rem;
}
</style>
