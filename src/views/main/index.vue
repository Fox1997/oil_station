<template>
  <el-row class="totalDis">
    <!-- 便利店数据，事件违规情况，违规等级情况 -->
    <el-col :span="6" class="paddingDis">
      <horizontal-chart
      :checkoutTitle= "checkoutTitle"
      :checkoutXNames= "checkoutXNames"
      :checkoutData= "checkoutData" />

      <three-charts class="marginDis"
      :chartTitle= "eventTitle"
      :chartXNames= "eventXNames"
      :chartXData = "eventXData"
      :yDataArr = "yDataArr"
      :unit = "unit"
      :type = "type" />

      <box-Chart
      :illegalTitle= "illegalTitle"
      :colTitle= "colTitle"
      :rowTitle= "rowTitle"
      :illegalData= "illegalData"/>
    </el-col>
    <el-col :span="12">
      <!-- 分数 -->
    <Score :score = "score"/>
    <!-- 服务人次，服务车辆数，平均服务事件，平均加油时间 -->
    <four-charts
      class="marginDis"
      :xAxis= "xAxis"
      :titleData= "titleData"
      :color= "color"
      :seriesNames= "seriesNames"
      :yAxisNames= "yAxisNames"
      :chartTypes= "chartTypes"
      :yAxis1= "yAxis1"
      :yAxis2= "yAxis2"
      :yAxis3= "yAxis3"
      :yAxis4= "yAxis4"
     ></four-charts>
     <!-- 中间底部数据 -->
    <center-part
    :illRatio= "illRatio"
    :serviceRatio = "serviceRatio"
    :conIndex = "conIndex"
    :manageRatio = "manageRatio"
    :refuelInspect = "refuelInspect"
    ></center-part>
   </el-col>
    <el-col :span="6" class="paddingDis">
      <!-- 财务室数据 -->
      <radar-chart
      :radarTitle="radarTitle"
      :safeboxEventNames = "safeboxEventNames"
      :safeboxEventCount = "safeboxEventCount"/>
      <!-- 卸油区数据 -->
      <person-chart  class="marginDis"
      :personChartTitle= "personChartTitle"
      :unloadDataName= "unloadDataName"
      :unloadDataList = "unloadDataList"
      :unloadRestDataList = "unloadRestDataList"
     />
  </el-col>
</el-row>
</template>

<script>
import horizontalChart from '@/components/context/horizontalChart.vue'
import threeCharts from './threeLineCharts'
import boxChart from '@/components/context/boxChart.vue'
import fourCharts from '@/components/context/fourCharts'
// import circleCharts from '@/components/context/circleCharts'
import radarChart from '@/components/context/radarChart'
import personChart from '@/components/context/personChart'
import Score from './Score.vue'
import centerPart from './centerPart.vue'
import { getxAxisArr, getyAxisArr, formatCongestion } from '@/utils/constData'
import
{
  reqServerScore,
  reqEfficientScore,
  reqSecurityScore,
  reqManageScore,
  reqEnterCount,
  reqILLegalPosCount,
  reqLongQueueCount,
  reqServiceTimeoutCount,
  reqEventCount,
  reqIllegalRatio,
  reqIllegalEventsCount,
  reqLightIllegalCount,
  reqModerateIllegalCout,
  reqSeriousIllegalCout,
  reqServiceCount,
  reqServiceTime,
  reqServiceCarCount,
  reqAvarageRefuelTime,
  reqUnloadCount,
  reqUnloadScore,
  reqUnloadInspect,
  reqUnloadInvade,
  reqNotCloseDoor,
  reqLeaveTimeOut,
  reqOpenSafeBox,
  reqNotStaff,
  reqOpenBox,
  reqStaffNotEnough,
  reqConIndex,
  reqServiceRatio,
  reqManageRatio,
  reqRefuelInspect
} from '@/api'
export default {
  name: 'index',
  components: {
    horizontalChart,
    threeCharts,
    boxChart,
    Score,
    fourCharts,
    centerPart,
    radarChart,
    // circleCharts,
    personChart
  },
  data () {
    return {
      timer: null,
      isGetData: false,
      // 中间分数
      score: [],
      // 左上角便利店数据
      checkoutTitle: '便利店事件数据',
      // 左上角便利店事件名称
      checkoutXNames: [
        '顾客进店',
        '违规操作',
        '超时等待',
        '服务超时'
      ],
      // 左上角便利店数据
      checkoutData: [],
      // 左侧折线图名称
      eventTitle: '事件检测情况',
      // 左侧折线图X轴名称
      eventXNames: ['事件次数', '违规次数', '违规率'],
      // 折线图x轴数据
      eventXData: [],
      // 折线图y轴数据
      yDataArr: [],
      unit: ['次', '%'],
      type: ['line', 'line', 'line'],
      // 左边违规等级
      illegalTitle: '违规次数',
      colTitle: [
        '违规等级',
        '轻度',
        '中度',
        '重度'
      ],
      // 左边3*4的框
      rowTitle: [
        '加油区',
        '卸油区',
        '财务室'
      ],
      illegalData: [],
      // 中间折线图数据
      titleData: '便利店服务及加油站加油情况',
      xAxis: [],
      yAxis1: [],
      yAxis2: [],
      yAxis3: [],
      yAxis4: [],
      color: ['#f79c19', '#21fcd6', '#08c8ff', '#df4131'],
      seriesNames: ['便利店服务人数', '平均服务时间', '加油站服务车辆数', '平均加油时间'],
      yAxisNames: ['次', '秒'],
      chartTypes: ['line', 'line', 'line', 'line'],
      // 违规率，服务率和拥挤指数
      illRatio: 0,
      conIndex: '',
      serviceRatio: 0,
      manageRatio: 0,
      refuelInspect: 0,
      // 最右边底部卸油口数据
      personChartTitle: '卸油区情况',
      unloadDataName: [],
      unloadDataList: [],
      unloadRestDataList: [],
      // 财务室数据
      radarTitle: '财务室情况',
      safeboxEventNames: ['未关防盗门', '离开时间过长', '开启保险柜', '出现非工作人员', '开启钱箱', '人员不足'],
      safeboxEventCount: []
    }
  },
  watch: {
    // isGetData: {
    //   hander (val) {
    //     if (val) {
    //       window.clearInterval(this.timer)
    //     }
    //   }
    // }
  },
  mounted () {
    // window.setInterval(() => {
    // if (sessionStorage.getItem('token')) {
    this.initData()
    // this.isGetData = true
    // }
    // }, 10)
  },
  methods: {
    async initData () {
      // 获取进店次数,违规操作Pos机，等待超时，服务超时
      const { val: enterCount } = await reqEnterCount({ val: 1 })
      const { val: illegalPosCount } = await reqILLegalPosCount({ val: 1 })
      const { val: longQueueCount } = await reqLongQueueCount({ val: 1 })
      const { val: serviceTimeoutCount } = await reqServiceTimeoutCount({ val: 1 })
      this.checkoutData = [enterCount, illegalPosCount, longQueueCount, serviceTimeoutCount]

      // 获取事件次数，违规率，违规事件次数
      const xData = getxAxisArr(await reqEventCount())
      const eventCount = getyAxisArr(await reqEventCount())
      const illegalEventsCount = getyAxisArr(await reqIllegalEventsCount())
      const illegalRatio = getyAxisArr(await reqIllegalRatio())
      const illegalRatioArr = illegalRatio.map(item => parseFloat((item * 100).toFixed(1)))
      this.eventXData = xData
      this.yDataArr = [eventCount, illegalEventsCount, illegalRatioArr]
      // 获取各个场景的违规次数
      // console.log('event', this.eventXData, this.eventYData)

      // 不同场景的不同违规程度情况
      // 轻度
      const { val: refuelLightIll } = await reqLightIllegalCount({ val: 1, category_code: 4 })
      const { val: unloadLightIll } = await reqLightIllegalCount({ val: 1, category_code: 3 })
      const { val: safeboxLightIll } = await reqLightIllegalCount({ val: 1, category_code: 6 })
      // console.log(refuelLightIll, unloadLightIll, safeboxLightIll)
      // 中度
      const { val: refuelModerateIll } = await reqModerateIllegalCout({ val: 1, category_code: 4 })
      const { val: unloadModerateIll } = await reqModerateIllegalCout({ val: 1, category_code: 3 })
      const { val: safeboxModerateIll } = await reqModerateIllegalCout({ val: 1, category_code: 6 })
      // console.log(refuelModerateIll, unloadModerateIll, safeboxModerateIll)
      // 重度
      const { val: refuelSeriousIll } = await reqSeriousIllegalCout({ val: 1, category_code: 4 })
      const { val: unloadSeriousIll } = await reqSeriousIllegalCout({ val: 1, category_code: 3 })
      const { val: safeboxSeriousIll } = await reqSeriousIllegalCout({ val: 1, category_code: 6 })
      // console.log(refuelSeriousIll, unloadSeriousIll, safeboxSeriousIll)
      this.illegalData = [refuelLightIll, refuelModerateIll, refuelSeriousIll,
        unloadLightIll, unloadModerateIll, unloadSeriousIll,
        safeboxLightIll, safeboxModerateIll, safeboxSeriousIll]

      // 获取分数
      const { val: serverScore } = await reqServerScore({ val: 1 })
      const { val: efficientScore } = await reqEfficientScore({ val: 1 })
      const { val: securityScore } = await reqSecurityScore({ val: 1 })
      const { val: manageScore } = await reqManageScore({ val: 1 })
      const s1 = parseFloat((serverScore * 100).toFixed(1))
      const s2 = parseFloat((efficientScore * 100).toFixed(1))
      const s3 = parseFloat((securityScore * 100).toFixed(1))
      const s4 = parseFloat((manageScore * 100).toFixed(1))
      this.score = [s1, s2, s3, s4]

      // 服务人数，服务车辆数，平均服务时间，平均加油时间
      const serviceCount = await reqServiceCount()
      const avaServiceTime = await reqServiceTime()
      const serviceCarCount = await reqServiceCarCount()
      const avaRefuelTime = await reqAvarageRefuelTime()
      this.xAxis = getxAxisArr(serviceCount)
      this.yAxis1 = getyAxisArr(serviceCount)
      this.yAxis2 = getyAxisArr(avaServiceTime)
      this.yAxis3 = getyAxisArr(serviceCarCount)
      this.yAxis4 = getyAxisArr(avaRefuelTime)

      // 获取违规率，服务率和拥挤指数，经理在站率，加油区巡检次数
      const { val: seRatio } = await reqServiceRatio({ val: 1 })
      const { val: index } = await reqConIndex({ val: 1 })
      const { val: iRatio } = await reqIllegalRatio({ val: 1 })
      const { val: mRatio } = await reqManageRatio({ val: 1 })
      const { val: reInspect } = await reqRefuelInspect({ val: 1 })
      this.illRatio = parseFloat((iRatio * 100).toFixed(1))
      this.serviceRatio = parseFloat((seRatio * 100).toFixed(1))
      this.conIndex = formatCongestion(index).text
      this.manageRatio = parseFloat((mRatio * 100).toFixed(1))
      this.refuelInspect = reInspect

      // 卸油区数据
      const { val: unScore } = await reqUnloadScore({ val: 1 })
      const { val: unCount } = await reqUnloadCount({ val: 1 })
      const { val: unInspect } = await reqUnloadInspect({ val: 1 })
      const { val: unInvade } = await reqUnloadInvade({ val: 1 })
      const unloadScore = parseFloat((unScore * 100).toFixed(1))
      this.unloadDataName = ['管理分', '卸油次数', '巡检次数', '入侵次数']
      this.unloadDataList = [unloadScore, unCount, unInspect, unInvade]
      const restUnloadScore = parseFloat((100 - unloadScore).toFixed(1))
      const restUnCount = 100 - unCount
      const restUnInspect = 100 - unInspect
      const restUnInvade = 100 - unInvade
      this.unloadRestDataList = [restUnloadScore, restUnCount, restUnInspect, restUnInvade]
      // console.log('this.unloadRestDataList', this.unloadRestDataList)

      // 财务室数据
      const { val: notCloseDoor } = await reqNotCloseDoor({ val: 1 })
      const { val: leaveTimeOut } = await reqLeaveTimeOut({ val: 1 })
      const { val: openSafe } = await reqOpenSafeBox({ val: 1 })
      const { val: notStaff } = await reqNotStaff({ val: 1 })
      const { val: openBox } = await reqOpenBox({ val: 1 })
      const { val: staffNotEnough } = await reqStaffNotEnough({ val: 1 })
      this.safeboxEventCount = [notCloseDoor, leaveTimeOut, openSafe, notStaff, openBox, staffNotEnough]
      // console.log(this.safeboxEventCount)
    }
  }

}
</script>

<style scoped >
.marginDis{
  margin:.6rem 0
}
.el-row {
  /* background-color: #fff; */
  padding:.6rem 0rem ;
}
.paddingDis {
  padding:0 .6rem ;
}
</style>
