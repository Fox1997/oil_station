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
  reqSafeManageScore,
  reqNotCloseDoor,
  reqNotStaff,
  reqOpenBox,
  reqOpenSafeBox,
  reqIllegalRatio,
  reqIllegalEventsCount
} from '@/api'
export default {
  name: 'safebox',
  components: {
    dataBoxes,
    categoryTable,
    threeCharts,
    doubleBar
  },
  data () {
    return {
      title: [
        '违规综合情况',
        '违规事件及违规率',
        '钱箱保险柜管理'
      ],
      info: [
        {
          name: '管理分',
          unit: '(分)'
        },
        {
          name: '未关门次数',
          unit: '(次)'
        },
        {
          name: '非工作人员出现',
          unit: '(次)'
        },
        {
          name: '开启钱箱次数',
          unit: '(次)'
        },
        {
          name: '开启保险柜次数',
          unit: '(次)'
        },
        {
          name: '违规率',
          unit: '(%)'
        }
      ],
      value: [],
      chartData1: [],
      chartTitle1: ['未关门次数', '非工作人员出现'],
      chartType1: ['bar', 'bar'],
      chartData2: [],
      chartTitle2: ['违规次数', '违规率'],
      chartType2: ['bar', 'line'],
      unit: ['次', '%'],
      chartData3: [],
      chartTitle3: ['开启钱箱次数', '开启保险柜次数'],
      chartType3: ['bar', 'bar'],
      activeHeight: 30
    }
  },
  created () {
    this.initData()
  },
  methods: {
    async initData () {
      const { val: score } = await reqSafeManageScore({ val: 1 })
      const { val: notClose } = await reqNotCloseDoor({ val: 1 })
      const { val: notStaff } = await reqNotStaff({ val: 1 })
      const { val: openBox } = await reqOpenBox({ val: 1 })
      const { val: openSafe } = await reqOpenSafeBox({ val: 1 })
      const { val: illRatio } = await reqIllegalRatio({ val: 1, category_code: 6 })

      const s1 = parseFloat((score * 100).toFixed(1))
      const s2 = notClose
      const s3 = notStaff
      const s4 = openBox
      const s5 = openSafe
      const s6 = parseFloat((illRatio * 100).toFixed(1))

      this.value = [s1, s2, s3, s4, s5, s6]

      // 图表数据
      const xArr1 = getxAxisArr(await reqNotCloseDoor())
      const notCloseDoorArr = getyAxisArr(await reqNotCloseDoor())
      const notStaffArr = getyAxisArr(await reqNotStaff())
      this.chartData1 = [xArr1, notCloseDoorArr, notStaffArr]
      // console.log('11111111111111111111111', this.chartData1)

      const xArr2 = getxAxisArr(await reqIllegalRatio({ category_code: 6 }))
      const illEventArr = getyAxisArr(await reqIllegalEventsCount({ category_code: 6 }))
      const ratioArr = getyAxisArr(await reqIllegalRatio({ category_code: 6 }))
      const illRatioArr = ratioArr.map(item => parseFloat((item * 100).toFixed(1)))
      this.chartData2 = [xArr2, illEventArr, illRatioArr]
      // console.log('2222222222222222222222222222', this.chartData2)

      const xArr3 = getxAxisArr(await await reqOpenBox())
      const boxArr = getyAxisArr(await reqOpenBox())
      const safeboxArr = getyAxisArr(await reqOpenSafeBox())
      // const illRatioArr = getyAxisArr(await reqIllegalRatio({ category_code: 1 }))
      this.chartData3 = [xArr3, boxArr, safeboxArr]
      console.log('333333333333333', this.chartData3)
    }
  }
}

</script>

<style>

</style>
