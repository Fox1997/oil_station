<template>
 <div >
    <v-chart class="navboxall" :options = "option" ref="charts" autoresize ></v-chart>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'threeCharts',
  props: {
    chartData: {
      type: Array
    },
    chartTitle: {
      type: Array
    },
    chartType: {
      type: Array,
      default: () => ['bar', 'line']
    }
  },
  data () {
    return {
      option: {
        grid: {
          left: '0',
          top: '30',
          right: '0',
          bottom: '10',
          containLabel: true
        },
        legend: {
          top: 0,
          textStyle: {
            color: '#fff'
          },
          itemWidth: 10, // 设置宽度
          itemHeight: 10 // 设置高度
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        xAxis: {
          type: 'category',
          data: this.chartData[0],
          axisTick: { // ---坐标轴 刻度
            show: true // ---是否显示
          },
          // axisLine: { // ---坐标轴 轴线
          //   show: true, // ---是否显示
          //   lineStyle: {
          //     color: 'rgba(255,255,255,.1)',
          //     width: 1,
          //     type: 'dotted'
          //   }
          // },
          // axisLabel: { // X轴文字
          //   textStyle: {
          //     fontSize: 12,
          //     color: '#fff'
          //   }
          // }
          axisLine: {
            lineStyle: { color: '#57617B' }
          },
          axisLabel: {
            // interval: 0,
            textStyle: {
              color: '#fff'
            }
          }
        },
        yAxis: {
          type: 'value',
          // splitLine: { // 分割线
          //   show: true,
          //   lineStyle: {
          //     color: 'rgba(255,255,255,.1)',
          //     width: 1,
          //     type: 'dotted'
          //   }
          // },
          splitLine: {
            show: true,
            lineStyle: {
              type: 'dashed',
              color: '#25CEF3'
            }
          },
          axisLabel: { // Y轴刻度值
            formatter: '{value}',
            textStyle: {
              fontSize: 12,
              color: '#fff',
              formatter: '{value}秒'
            }
          },
          axisLine: { // ---坐标轴 轴线
            show: true // ---是否显示
          }
        },
        series: [{
          name: this.chartTitle[0],
          type: this.chartType[0],
          data: this.chartData[1],
          barWidth: 10,
          barGap: 0.2, // 柱子之间间距 //柱图宽度      两种情况都要设置，设置series 中对应数据柱形的itemStyle属性下的emphasis和normal的barBorderRadius属性初始化时候圆角  鼠标移上去圆角
          itemStyle: {
            normal: {
              barBorderRadius: 50,
              // color: '#446ACF'
              color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                offset: 0,
                color: '#009AFD'
              }, {
                offset: 0.8,
                color: '#33DAFF'
              }], false),
              shadowColor: 'rgba(0, 0, 0, 0.1)'
            }
          }
        }, {
          name: this.chartTitle[1],
          type: this.chartType[1],
          data: this.chartData[2],
          barWidth: 10, // 柱图宽度
          barGap: 0.2,
          itemStyle: {
            normal: { // 设置颜色的渐变
              barBorderRadius: 50,
              // color: '#4fb69d'
              color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                offset: 0,
                color: '#E57230'
              }, {
                offset: 0.8,
                color: '#D8AE22'
              }], false),
              shadowColor: 'rgba(0, 0, 0, 0.1)'
            }
          }
        }]
      }
    }
  },
  watch: {
    chartData (newVal, oldVal) {
      this.option.xAxis.data = newVal[0] // x轴
      this.option.series[0].data = newVal[1] // Y1
      this.option.series[1].data = newVal[2] // Y2
    },
    chartTitle (newVal, oldVal) {
      this.option.series[0].name = newVal[0]
      this.option.series[1].name = newVal[1]
    },
    chartType (newVal, oldVal) {
      this.option.series[0].type = newVal[0]
      this.option.series[1].type = newVal[1]
    }
  }

}
</script>

<style scoped>
.navboxall {
  height: 30rem;
  margin: 3rem 2%;
  width: 96%;
}
</style>
