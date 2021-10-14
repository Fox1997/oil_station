<template>
<div>
    <data-boxes :value = "value" :info = "info" />
    <category-table :title="title">
      <template v-slot:left>
        <single-chart
        :chartData = "chartData1"
        :chartTitle= "chartTitle1"
        :chartType= "chartType1"/>
      </template>
      <template v-slot:center>
        <four-charts
        :chartData = "chartData2"
        :chartTitle= "chartTitle2"
        :chartType= "chartType2"
        :unit = "unit"/>
      </template>
      <template v-slot:right>
        <three-charts :chartData = "chartData3"
        :chartTitle= "chartTitle3"
        :chartType= "chartType3"/>
      </template>
    </category-table>
</div>
</template>

<script>
import dataBoxes from '@/components/context/dataBoxes.vue'
import categoryTable from '@/components/context/categoryTable.vue'
import threeCharts from '@/components/context/threeCharts'
import fourCharts from '@/components/context/fourLineCharts'
import singleChart from '@/components/context/singleChart'
import { formatCongestion, formatTime, getxAxisArr, getyAxisArr } from '@/utils/constData'
import {
  reqRefuelServiceScore,
  reqServiceCarCount,
  reqOverSpeed,
  reqAvarageRefuelTime,
  reqConIndex,
  reqIllegalRatio,
  reqRefuelInspect,
  reqRefuelTimeOut,
  reqIllegalEventsCount
} from '@/api'
export default {
  name: 'refuel',
  components: {
    dataBoxes,
    categoryTable,
    threeCharts,
    fourCharts,
    singleChart
  },
  data () {
    return {
      title: [
        '加油区巡检情况',
        '加油区违规情况',
        '加油区服务情况'
      ],
      info: [
        {
          name: '服务分',
          unit: '(分)'
        },
        {
          name: '服务车辆数',
          unit: '(辆)'
        },
        {
          name: '车辆超速',
          unit: '(辆)'
        },
        {
          name: '平均加油时间',
          unit: '(秒)'
        },
        {
          name: '拥挤程度',
          unit: ''
        },
        {
          name: '违规率',
          unit: '(%)'
        }
      ],
      value: [],
      chartData1: [],
      chartTitle1: ['巡检次数'],
      chartType1: ['line'],
      chartData2: [],
      chartTitle2: ['车辆超速次数', '等待超时次数', '违规次数', '违规率'],
      chartType2: ['line', 'line', 'line', 'line'],
      unit: ['次', '%'],
      chartData3: [],
      chartTitle3: ['服务车辆数', '平均加油时间'],
      chartType3: ['line', 'line']
    }
  },
  created () {
    this.initData()
  },
  methods: {
    async initData () {
      const { val: score } = await reqRefuelServiceScore({ val: 1 })
      const { val: serCount } = await reqServiceCarCount({ val: 1 })
      const { val: overSpeed } = await reqOverSpeed({ val: 1 })
      const { val: refTime } = await reqAvarageRefuelTime({ val: 1 })
      const { val: conIndex } = await reqConIndex({ val: 1 })
      const { val: illRatio } = await reqIllegalRatio({ val: 1, category_code: 4 })

      const s1 = parseFloat((score * 100).toFixed(1))
      const s2 = serCount
      const s3 = overSpeed
      const s4 = formatTime(refTime).value
      const unit = formatTime(refTime).unit
      this.info.splice(3, 1, {
        name: '平均加油时间',
        unit: '(' + unit + ')'
      })
      const s5 = formatCongestion(conIndex).text
      const s6 = parseFloat((illRatio * 100).toFixed(1))
      this.value = [s1, s2, s3, s4, s5, s6]

      // 图表数据
      const xArr1 = getxAxisArr(await reqRefuelInspect())
      const inspectArr = getyAxisArr(await reqRefuelInspect())
      this.chartData1 = [xArr1, inspectArr]
      // console.log('11111111111111111111111', this.chartData1)

      const xArr2 = getxAxisArr(await reqIllegalRatio({ category_code: 4 }))
      const overSpeedArr = getyAxisArr(await reqOverSpeed())
      const timeOutArr = getyAxisArr(await reqRefuelTimeOut())
      const illEventArr = getyAxisArr(await reqIllegalEventsCount({ category_code: 4 }))
      const ratioArr = getyAxisArr(await reqIllegalRatio({ category_code: 4 }))
      const illRatioArr = ratioArr.map(item => parseFloat((item * 100).toFixed(1)))
      this.chartData2 = [xArr2, overSpeedArr, timeOutArr, illEventArr, illRatioArr]
      // console.log('2222222222222222222222222222', this.chartData2)

      const xArr3 = getxAxisArr(await await reqServiceCarCount())
      const carArr = getyAxisArr(await reqServiceCarCount())
      const timeArr = getyAxisArr(await reqAvarageRefuelTime())
      // const illRatioArr = getyAxisArr(await reqIllegalRatio({ category_code: 1 }))
      this.chartData3 = [xArr3, carArr, timeArr]
      console.log('333333333333333', this.chartData3)
    }
  }
}

</script>

<style>

</style>
