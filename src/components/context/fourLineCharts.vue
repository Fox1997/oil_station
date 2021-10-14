<template>
  <!-- 四条彩色待亮点的折线图 -->
  <!-- <div class='boxall' >
  <div class='title'>{{chartTitle}}</div>-->
  <v-chart class='navboxall' :options = 'option' autoresize></v-chart>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'lineCharts',
  props: {
    chartTitle: {
      type: Array
    },
    chartData: {
      type: Array
    },
    unit: {
      type: Array
    },
    chartType: {
      type: Array
    }
  },
  data () {
    return {
      option: {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            lineStyle: {
              color: '#fff'
            }
          }
        },
        legend: {
          icon: 'rect',
          itemWidth: 14,
          itemHeight: 5,
          itemGap: 10,
          data: this.chartTitle,
          right: '10px',
          top: '0px',
          textStyle: { fontSize: 12, color: '#fff' }
        },
        grid: { x: 40, y: 50, x2: 45, y2: 40 },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            axisLine: { lineStyle: { color: '#57617B' } },
            axisLabel: { textStyle: { color: '#fff' } },
            data: this.chartData[0]
          }
        ],
        yAxis: [
          {
            type: 'value',
            axisTick: {
              show: false
            },
            axisLine: { lineStyle: { color: '#57617B' } },
            axisLabel: {
              margin: 10,
              textStyle: {
                fontSize: 12,
                color: '#fff'
              },
              formatter: '{value}' + this.unit[0]
            },
            splitLine: { lineStyle: { color: '#57617B' } }
          },
          {
            type: 'value',
            axisTick: {
              show: false
            },
            axisLine: { lineStyle: { color: '#57617B' } },
            axisLabel: {
              margin: 10,
              textStyle: {
                fontSize: 12,
                color: '#fff'
              },
              formatter: '{value}' + this.unit[1]
            },
            splitLine: { show: false, lineStyle: { color: '#57617B' } }
          }
        ],
        series: [
          {
            name: this.chartTitle[0],
            type: this.chartType[0],
            smooth: true,
            lineStyle: { normal: { width: 2 } },
            yAxisIndex: 0,
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: 'rgba(185,150,248,0.3)'
                    },
                    {
                      offset: 0.8,
                      color: 'rgba(185,150,248,0)'
                    }
                  ],
                  false
                ),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
              }
            },
            itemStyle: { normal: { color: '#B996F8' } },
            data: this.chartData[2]
          },
          {
            name: this.chartTitle[1],
            type: this.chartType[1],
            smooth: true,
            lineStyle: { normal: { width: 2 } },
            yAxisIndex: 0,
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: 'rgba(3, 194, 236, 0.3)'
                    },
                    {
                      offset: 0.8,
                      color: 'rgba(3, 194, 236, 0)'
                    }
                  ],
                  false
                ),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
              }
            },
            itemStyle: { normal: { color: '#03C2EC' } },
            data: this.chartData[2]
          },
          {
            name: this.chartTitle[2],
            type: this.chartType[2],
            smooth: true,
            lineStyle: { normal: { width: 2 } },
            yAxisIndex: 1,
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: 'rgba(218, 57, 20, 0.3)'
                    },
                    {
                      offset: 0.8,
                      color: 'rgba(218, 57, 20, 0)'
                    }
                  ],
                  false
                ),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
              }
            },
            itemStyle: { normal: { color: '#DA3914' } },
            data: this.chartData[3]
          },
          {
            name: this.chartTitle[3],
            type: this.chartType[3],
            smooth: true,
            lineStyle: { normal: { width: 2 } },
            yAxisIndex: 1,
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: 'rgba(232, 190, 49, 0.3)'
                    },
                    {
                      offset: 0.8,
                      color: 'rgba(232, 190, 49, 0)'
                    }
                  ],
                  false
                ),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
              }
            },
            itemStyle: { normal: { color: '#E8BE31' } },
            data: this.chartData[4]
          }
        ]
      }
    }
  },
  watch: {
    chartTitle (newVal, oldVal) {
      this.option.legend.data = newVal
      this.option.series[0].name = newVal[0]
      this.option.series[1].name = newVal[1]
      this.option.series[2].name = newVal[2]
      this.option.series[3].name = newVal[3]
    },
    chartData (newVal, oldVal) {
      // console.log('newVal', newVal)
      this.option.xAxis[0].data = newVal[0]
      this.option.series[0].data = newVal[1]
      this.option.series[1].data = newVal[2]
      this.option.series[2].data = newVal[3]
      this.option.series[3].data = newVal[4]
    },
    unit (newVal, oldVal) {
      this.option.yAxis[0].name = newVal[0]
      this.option.yAxis[1].name = newVal[1]
    },
    chartType (newVal, oldVal) {
      this.option.series[0].type = newVal[0]
      this.option.series[1].type = newVal[1]
      this.option.series[2].type = newVal[2]
      this.option.series[3].type = newVal[3]
    }
  }
}
</script>

<style scoped >
.navboxall {
  height: 30rem;
  width: 100%;
  margin-top: 4rem;
  padding: 0 1rem;
  /* background-color: #fff; */
}
</style>
