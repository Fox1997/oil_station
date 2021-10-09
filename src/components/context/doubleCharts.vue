<template>
  <v-chart :options="option" :autoresize="true" theme="light" />
</template>
<script>
// 封装只有2个y轴的图表
export default {
  props: {
    title: {
      // 图表标题
      type: String
    },
    color: {
      // 传给图例和图表的颜色
      type: Array
    },
    seriesNames: {
      // 图例或和统计图的名称，如 违规次数...
      type: Array
    },
    xAxis: {
      type: Array
    },
    yAxisNames: {
      // y轴名称，默认是 次数和秒数，这里要对应yAxis1和yAxis2
      type: Array,
      default: () => ['次', '个']
    },
    yAxis1: {
      type: Array
    },
    yAxis2: {
      type: Array
    },
    chartType1: {
      type: String,
      default: 'bar'
    },
    chartType2: {
      type: String,
      default: 'line'
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
            return `${arg[0].name}<br/>${arg[0].seriesName}：${arg[0].data}${this.yAxisNames[0]}<br/> ${arg[1].seriesName}：${arg[1].data}${this.yAxisNames[1]}`
          }
        },
        legend: {
          data: this.seriesNames,
          textStyle: {
            fontSize: 18
          }
        },
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
            name: this.yAxisNames[0],
            axisLabel: {
              formatter: '{value}'
            }
          },
          {
            type: 'value',
            show: true,
            name: this.yAxisNames[1],
            axisLabel: {
              formatter: '{value}'
            },
            axisTick: {
              show: true
            },
            axisLine: {
              lineStyle: {
                width: 1
              }
            }
          }
        ],
        series: [
          {
            name: this.seriesNames[0],
            type: this.chartType1,
            data: this.yAxis1,
            markPoint: {
              data: [{ type: 'max', name: '最大值' }]
            }
          },
          {
            name: this.seriesNames[1],
            type: this.chartType2,
            yAxisIndex: 1, // 多个y轴时使用
            data: this.yAxis2,
            label: {
              show: false
            },
            markPoint: {
              data: [{ type: 'max', name: '最大值' }]
            }
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
    yAxisNames: {
      deep: true,
      handler (val) {
        this.option.yAxis[1].name = val[1]
      }
    },
    yAxis1: {
      deep: true,
      handler (value) {
        this.option.series[0].data = value
      }
    },
    yAxis2: {
      deep: true,
      handler (value) {
        this.option.series[1].data = value
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

<style lang="less" >
</style>
