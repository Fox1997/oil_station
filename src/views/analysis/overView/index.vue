<template>
<div>
    <data-boxes :value = "value" :info = "info" />
    <data-tables :title="title">
      <template v-slot:checkout>
        <double-bar :chartData= "chartData1" :chartTitle= "chartTitle1" :chartType = "chartType1"/>
      </template>
       <template v-slot:unload>
        <double-bar :chartData= "chartData2" :chartTitle= "chartTitle2" :chartType = "chartType2"/>
      </template>
      <template v-slot:ill>
        <line-charts :yDataArr= "chartData3"
        :chartXNames= "chartTitle3"
        :chartXData = "xData"
        :type = "chartType3"
        :unit = "illUnit"/>
      </template>
       <template v-slot:refuel>
        <double-bar :chartData= "chartData4" :chartTitle= "chartTitle4" :chartType = "chartType4"/>
      </template>
       <template v-slot:safe>
        <double-bar :chartData= "chartData5" :chartTitle= "chartTitle5" :chartType = "chartType5"/>
      </template>
    </data-tables>
</div>
</template>

<script>
import dataBoxes from '@/components/context/dataBoxes.vue'
import dataTables from '@/components/context/dataTables.vue'
import doubleBar from '@/components/context/doubleBar'
import lineCharts from '@/components/context/lineCharts'
import { formatIllLevel, getxAxisArr, getyAxisArr } from '@/utils/constData'
import {
  reqScore,
  reqAvageIllLevel,
  reqIllegalRatio,
  reqEventsCount,
  reqManageRatio,
  reqManageCount,
  reqUnloadCount,
  reqUnloadInspect,
  reqOpenSafeBox,
  reqOpenBox,
  reqServiceCount,
  reqServiceTime,
  reqServiceCarCount,
  reqAvarageRefuelTime,
  reqLightIllegalCount,
  reqModerateIllegalCout,
  reqSeriousIllegalCout
} from '@/api'
export default {
  name: 'overView',
  components: {
    dataBoxes,
    dataTables,
    doubleBar,
    lineCharts
  },
  data () {
    return {
      title: [
        '便利店服务情况',
        '卸油区巡检、卸油情况',
        '各程度违规情况',
        '加油区服务情况',
        '财务室工作情况'
      ],
      info: [
        {
          name: '综合分',
          unit: '(分)'
        },
        {
          name: '平均违规程度',
          unit: ''
        },
        {
          name: '经理出现次数',
          unit: '(次)'
        },
        {
          name: '经理在站率',
          unit: '(%)'
        },
        {
          name: '事件次数',
          unit: '(次)'
        },
        {
          name: '违规率',
          unit: '(%)'
        }
      ],
      value: [],
      chartTitle1: ['服务人数', '平均服务时间'],
      chartType1: ['bar', 'line'],
      chartData1: [],
      chartTitle2: ['巡检次数', '卸油次数'],
      chartType2: ['bar', 'bar'],
      chartData2: [],
      chartTitle3: ['轻度违规', '中度违规', '严重违规'],
      xData: [],
      illUnit: ['次'],
      chartType3: ['line', 'bar', 'bar'],
      chartData3: [],
      chartTitle4: ['服务车辆数', '平均加油时间'],
      chartType4: ['bar', 'line'],
      chartData4: [],
      chartTitle5: ['开启保险柜', '开启钱箱'],
      chartType5: ['bar', 'bar'],
      chartData5: []
    }
  },
  created () {
    this.initData()
  },
  methods: {
    async initData () {
      const { val: score } = await reqScore({ val: 1 })
      const { val: aveLevel } = await reqAvageIllLevel({ val: 1 })
      const { val: manageCount } = await reqManageCount({ val: 1 })
      const { val: manageRatio } = await reqManageRatio({ val: 1 })
      const { val: eventCount } = await reqEventsCount({ val: 1 })
      const { val: illRatio } = await reqIllegalRatio({ val: 1 })
      const illLevel = formatIllLevel(aveLevel).value
      const s = parseFloat((score * 100).toFixed(1))
      const m = parseFloat((manageRatio * 100).toFixed(1))
      const i = parseFloat((illRatio * 100).toFixed(1))
      this.value = [s, illLevel, manageCount, m, eventCount, i]

      // 图表数据
      const checkX = getxAxisArr(await reqServiceCount())
      const checkCount = getyAxisArr(await reqServiceCount())
      const checkTime = getyAxisArr(await reqServiceTime())
      this.chartData1 = [checkX, checkCount, checkTime]

      const unloadX = getxAxisArr(await reqUnloadCount())
      const unloadCount = getyAxisArr(await reqUnloadCount())
      const unloadInspect = getyAxisArr(await reqUnloadInspect())
      this.chartData2 = [unloadX, unloadCount, unloadInspect]

      const illX = getxAxisArr(await reqLightIllegalCount())
      const illLightCount = getyAxisArr(await reqLightIllegalCount())
      const illModerateCount = getyAxisArr(await reqModerateIllegalCout())
      const illSeriousCount = getyAxisArr(await reqSeriousIllegalCout())
      this.xData = illX
      this.chartData3 = [illLightCount, illModerateCount, illSeriousCount]

      const refuelX = getxAxisArr(await reqServiceCarCount())
      const refuelCount = getyAxisArr(await reqServiceCarCount())
      const refuelTime = getyAxisArr(await reqAvarageRefuelTime())
      this.chartData4 = [refuelX, refuelCount, refuelTime]

      const safeX = getxAxisArr(await reqOpenBox())
      const safeOpenBox = getyAxisArr(await reqOpenBox())
      const safeOpenSafeBox = getyAxisArr(await reqOpenSafeBox())
      this.chartData5 = [safeX, safeOpenBox, safeOpenSafeBox]
    }
  }
}

</script>

<style>

</style>
