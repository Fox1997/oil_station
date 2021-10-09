<template>
  <v-chart :options="option" :autoresize="true" theme="light" class = "info-chart"/>
</template>
<script>
// 封装只有1个y轴的图表
export default {
  props: {
    title: { // 图表标题
      type: String
    },
    color: { // 传给图例和图表的颜色
      type: String
    },
    seriesName: { // 图例或和统计图的名称，如 违规次数...
      type: String
    },
    xAxis: {
      type: Array
    },
    yAxis: {
      type: Array
    },
    yAxisName: { // y轴名称，默认是 次数
      type: String,
      default: '次'
    },
    chartType: {
      type: String,
      default: 'bar'
    }
  },
  data () {
    return {
      option: {
        color: this.color,
        title: {
          text: this.title
        },
        tooltip: {
          trigger: 'axis',
          formatter: (arg) => {
            return `${arg[0].name}<br/>${arg[0].seriesName}：${arg[0].data}${this.yAxisName}<br/>`
          }
        },
        legend: {},
        toolbox: {
          show: true,
          feature: {
            magicType: { type: ['line', 'bar'] },
            restore: {},
            saveAsImage: {}
          }
        },
        grid: {
          top: '35%',
          left: '5%',
          right: '4%'
        },
        xAxis: {
          type: 'category',
          boundaryGap: true,
          data: this.xAxis
        },
        yAxis: [
          {
            type: 'value',
            name: this.yAxisName,
            axisLabel: {
              formatter: '{value}'
            }
          }
        ],
        series: [
          {
            name: this.seriesName,
            type: this.chartType,
            data: this.yAxis,
            label: {
              show: false
            }
            // markPoint: {
            //   data: [{ type: 'max', name: '最大值' }]
            // }
          }
        ]
      }
    }
  },
  watch: {
    title: {
      handler (value) {
        this.option.title.text = value
      }
    },
    yAxisName: {
      handler (value) {
        this.option.yAxis[0].name = value
      }
    },
    yAxis: {
      deep: true,
      handler (value) {
        this.option.series[0].data = value
      }
    },
    xAxis: {
      deep: true,
      handler (value) {
        this.option.xAxis.data = value
      }
    }
  }
}
</script>

<style lang="less">

</style>
