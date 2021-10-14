<template>
<div>
    <data-boxes :value = "value" :info = "info" />
    <category-table :title="title">
      <template v-slot:left>
        <three-charts
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
import { formatTime, getxAxisArr, getyAxisArr } from '@/utils/constData'
import {
  reqCheckOutServerScore,
  reqServiceRatio,
  reqServiceCount,
  reqServiceTime,
  reqEnterCount,
  reqServiceTimeoutCount,
  reqIllegalEventsCount,
  reqLongQueueCount,
  reqIllegalRatio
} from '@/api'
export default {
  name: 'checkOut',
  components: {
    dataBoxes,
    categoryTable,
    threeCharts,
    fourCharts
  },
  data () {
    return {
      title: [
        '收银台合规情况',
        '收银台情况',
        '收银台违规情况'
      ],
      info: [
        {
          name: '服务分',
          unit: '(分)'
        },
        {
          name: '服务率',
          unit: '(%)'
        },
        {
          name: '服务人数',
          unit: '(次)'
        },
        {
          name: '平均服务时间',
          unit: '(秒)'
        },
        {
          name: '进店人数',
          unit: '(次)'
        },
        {
          name: '违规率',
          unit: '(%)'
        }
      ],
      value: [],
      chartData1: [],
      chartTitle1: ['进店人数', '平均服务时间'],
      chartType1: ['line', 'line'],
      chartData2: [],
      chartTitle2: ['服务人数', '服务率', '违规次数', '违规率'],
      chartType2: ['bar', 'line', 'bar', 'line'],
      unit: ['次', '%'],
      chartData3: [],
      chartTitle3: ['服务超时', '排队人数超限'],
      chartType3: ['line', 'line']
    }
  },
  created () {
    this.initData()
  },
  methods: {
    async initData () {
      const { val: score } = await reqCheckOutServerScore({ val: 1 })
      const { val: serRatio } = await reqServiceRatio({ val: 1 })
      const { val: serCount } = await reqServiceCount({ val: 1 })
      const { val: serTime } = await reqServiceTime({ val: 1 })
      const { val: enterCount } = await reqEnterCount({ val: 1 })
      const { val: illRatio } = await reqIllegalRatio({ val: 1, category_code: 1 })

      const s1 = parseFloat((score * 100).toFixed(1))
      const s2 = parseFloat((serRatio * 100).toFixed(1))
      const s3 = serCount
      const s4 = formatTime(serTime).value
      const unit = formatTime(serTime).unit
      this.info.splice(3, 1, {
        name: '平均服务时间',
        unit: '(' + unit + ')'
      })
      // console.log(this.info)
      const s5 = enterCount
      const s6 = parseFloat((illRatio * 100).toFixed(1))
      this.value = [s1, s2, s3, s4, s5, s6]
      // console.log(this.value)

      const xArr1 = getxAxisArr(await reqServiceTime())
      const serTimeArr = getyAxisArr(await reqServiceTime())
      const enterCountArr = getyAxisArr(await reqEnterCount())
      this.chartData1 = [xArr1, enterCountArr, serTimeArr]
      // console.log('11111111111111111111111', this.chartData1)

      const illX = getxAxisArr(await reqIllegalRatio({ category_code: 1 }))
      const illEventArr = getyAxisArr(await reqIllegalEventsCount({ category_code: 1 }))
      const serCountArr = getyAxisArr(await reqServiceCount())
      const serRatioArr = getyAxisArr(await reqServiceRatio())
      const illRatioArr = getyAxisArr(await reqIllegalRatio({ category_code: 1 }))
      this.chartData2 = [illX, serCountArr, serRatioArr, illEventArr, illRatioArr]

      const xArr3 = getxAxisArr(await await reqServiceTimeoutCount())
      const outTimeArr = getyAxisArr(await reqServiceTimeoutCount())
      const overNumArr = getyAxisArr(await reqLongQueueCount())
      // const illRatioArr = getyAxisArr(await reqIllegalRatio({ category_code: 1 }))
      this.chartData3 = [xArr3, outTimeArr, overNumArr]
    }
  }
}

</script>

<style>

</style>
