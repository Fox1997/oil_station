<template>
<!-- 三条彩色待亮点的折线图 -->
 <div class="boxall" >
    <div class="title">{{chartTitle}}</div>
    <v-chart class="navboxall" :options = "option " autoresize ></v-chart>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'lineCharts',
  props: {
    chartTitle: {
      type: String,
      default: ''
    },
    chartXNames: {
      type: Array
    },
    chartXData: {
      type: Array
    },
    yDataArr: {
      type: Array
    },
    unit: {
      type: Array,
      default: () => ['%', '%']
    },
    type: {
      type: Array
    }
  },
  data () {
    return {
      option: {
        tooltip: { // 鼠标指上时的标线
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
          itemGap: 13,
          data: this.chartXNames,
          right: '46px',
          top: '0px',
          textStyle: {
            fontSize: 12,
            color: '#fff'
          }
        },
        grid: {
          x: 25,
          y: 28,
          x2: 28,
          y2: 30
        },
        xAxis: [{
          type: 'category',
          boundaryGap: false,
          axisLine: {
            lineStyle: {
              color: '#fff'
            }
          },
          axisLabel: {
            textStyle: {
              color: 'rgba(255,255,255,.8)'
            }
          },
          data: this.chartXData
        }],
        yAxis: [{
          name: this.unit[0],
          type: 'value',
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: 'rgba(255,255,255,.8)'
            }
          },
          axisLabel: {
            // margin: 10,s
            show: true,
            textStyle: {
              fontSize: 12,
              color: 'rgba(255,255,255,.8)'
            }
          },
          splitLine: {
            lineStyle: {
              color: '#57617B'
            }
          }
        },
        {
          name: this.unit[1],
          type: 'value',
          max: 100,
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: 'rgba(255,255,255,.8)'
            }
          },
          axisLabel: {
            textStyle: {
              fontSize: 12,
              color: 'rgba(255,255,255,.8)'
            }
          },
          splitLine: {
            lineStyle: {
              color: '#57617B'
            }
          }
        }],
        series: [{
          name: this.chartXNames[0],
          type: this.type[0],
          smooth: true,
          lineStyle: {
            normal: {
              width: 2
            }
          },
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(137, 189, 27, 0.3)'
              }, {
                offset: 0.8,
                color: 'rgba(137, 189, 27, 0)'
              }], false),
              shadowColor: 'rgba(0, 0, 0, 0.1)',
              shadowBlur: 10
            }
          },
          itemStyle: {
            normal: {
              color: 'rgb(137,189,27)'
            }
          },
          data: this.yDataArr[0]
        }, {
          name: this.chartXNames[1],
          type: this.type[1],
          smooth: true,
          lineStyle: {
            normal: {
              width: 2
            }
          },
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(0, 136, 212, 0.3)'
              }, {
                offset: 0.8,
                color: 'rgba(0, 136, 212, 0)'
              }], false),
              shadowColor: 'rgba(0, 0, 0, 0.1)',
              shadowBlur: 10
            }
          },
          itemStyle: {
            normal: {
              color: 'rgb(0,136,212)'
            }
          },
          data: this.yDataArr[1]
        }, {
          name: this.chartXNames[2],
          type: this.type[2],
          yAxisIndex: 1,
          smooth: true,
          lineStyle: {
            normal: {
              width: 2
            }
          },
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(219, 50, 51, 0.3)'
              }, {
                offset: 0.8,
                color: 'rgba(219, 50, 51, 0)'
              }], false),
              shadowColor: 'rgba(0, 0, 0, 0.1)',
              shadowBlur: 10
            }
          },
          itemStyle: {
            normal: {
              color: 'rgb(219,50,51)'
            }
          },
          data: this.yDataArr[3]
        }]
      }
    }
  },
  watch: {
    chartXData (newVal, oldVal) {
      this.option.xAxis[0].data = newVal
    },
    yDataArr (newVal, oldVal) {
      // console.log('newVal', newVal)
      this.option.series[0].data = newVal[0]
      this.option.series[1].data = newVal[1]
      this.option.series[2].data = newVal[2]
    },
    unit (newVal, oldVal) {
      this.option.yAxis[0].name = newVal[0]
      this.option.yAxis[1].name = newVal[1]
    },
    type (newVal, oldVal) {
      this.option.series[0].type = newVal[0]
      this.option.series[1].type = newVal[1]
      this.option.series[2].type = newVal[2]
    }
  }

}
</script>

<style scoped >

.navboxall{
  height:10rem;
  width:100%;
  /* background-color: #fff; */
  }
</style>
