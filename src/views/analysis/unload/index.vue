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
        <double-bar
        :chartData = "chartData2"
        :chartTitle= "chartTitle2"
        :chartType= "chartType2"
        :unit = "unit"
        :activeHeight ="activeHeight"/>
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
import threeCharts from '@/components/context/threeCharts.vue'
import doubleBar from '@/components/context/doubleBar.vue'
import { getxAxisArr, getyAxisArr } from '@/utils/constData'
import {
  reqUnloadScore,
  reqUnloadInvade,
  reqUnloadInspect,
  reqUnloadCount,
  reqManageCount,
  reqIllegalRatio,
  reqIllegalEventsCount
} from '@/api'
export default {
  name: 'unload',
  components: {
    dataBoxes,
    categoryTable,
    threeCharts,
    doubleBar
  },
  data () {
    return {
      title: [
        '巡检和卸油情况',
        '违规事件及违规率',
        '经理出现次数和入侵情况'
      ],
      info: [
        {
          name: '管理分',
          unit: '(分)'
        },
        {
          name: '入侵次数',
          unit: '(次)'
        },
        {
          name: '巡检次数',
          unit: '(次)'
        },
        {
          name: '卸油次数',
          unit: '(次)'
        },
        {
          name: '经理出现次数',
          unit: '(次)'
        },
        {
          name: '违规率',
          unit: '(%)'
        }
      ],
      value: [],
      chartData1: [],
      chartTitle1: ['巡检次数', '卸油次数'],
      chartType1: ['line', 'line'],
      chartData2: [],
      chartTitle2: ['违规次数', '违规率'],
      chartType2: ['bar', 'line'],
      unit: ['次', '%'],
      activeHeight: 30,
      chartData3: [],
      chartTitle3: ['入侵次数', '经理出现次数'],
      chartType3: ['line', 'line']
    }
  },
  created () {
    this.initData()
  },
  methods: {
    async initData () {
      const { val: score } = await reqUnloadScore({ val: 1 })
      const { val: invadeCount } = await reqUnloadInvade({ val: 1 })
      const { val: inspectCount } = await reqUnloadInspect({ val: 1 })
      const { val: unloadCount } = await reqUnloadCount({ val: 1 })
      const { val: manageCount } = await reqManageCount({ val: 1 })
      const { val: illRatio } = await reqIllegalRatio({ val: 1, category_code: 3 })

      const s1 = parseFloat((score * 100).toFixed(1))
      const s2 = invadeCount
      const s3 = inspectCount
      const s4 = unloadCount
      const s5 = manageCount
      const s6 = parseFloat((illRatio * 100).toFixed(1))

      this.value = [s1, s2, s3, s4, s5, s6]
      console.log(this.value)

      // 图表数据
      const xArr1 = getxAxisArr(await reqUnloadInspect())
      const inspectArr = getyAxisArr(await reqUnloadInspect())
      const unloadArr = getyAxisArr(await reqUnloadCount())
      this.chartData1 = [xArr1, inspectArr, unloadArr]
      // console.log('11111111111111111111111', this.chartData1)

      const xArr2 = getxAxisArr(await reqIllegalRatio({ category_code: 3 }))
      const illEventArr = getyAxisArr(await reqIllegalEventsCount({ category_code: 3 }))
      const ratioArr = getyAxisArr(await reqIllegalRatio({ category_code: 3 }))
      const illRatioArr = ratioArr.map(item => parseFloat((item * 100).toFixed(1)))
      this.chartData2 = [xArr2, illEventArr, illRatioArr]
      // console.log('2222222222222222222222222222', this.chartData2)

      const xArr3 = getxAxisArr(await await reqUnloadInvade())
      const invadeArr = getyAxisArr(await reqUnloadInvade())
      const manageArr = getyAxisArr(await reqManageCount())
      // const illRatioArr = getyAxisArr(await reqIllegalRatio({ category_code: 1 }))
      this.chartData3 = [xArr3, invadeArr, manageArr]
      console.log('333333333333333', this.chartData3)
    }
  }
}

</script>

<style>

</style>
