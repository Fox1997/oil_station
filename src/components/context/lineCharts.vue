<template>
<!-- 三条彩色待亮点的折线图 -->
 <div class="boxall" >
    <div class="title">{{eventTitle}}</div>
    <v-chart class="navboxall" :options = "option " autoresize ></v-chart>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'lineCharts',
  props: {
    eventTitle: {
      type: String
    },
    eventXNames: {
      type: Array
    },
    eventXData: {
      type: Array
    },
    eventCountArr: {
      type: Array
    },
    illegalEventsCountArr: {
      type: Array
    },
    illegalRatioArr: {
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
          data: this.EventXNames,
          right: '46px',
          top: '0px',
          textStyle: {
            fontSize: 12,
            color: '#fff'
          }
        },
        grid: {
          x: 22,
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
          data: this.eventXData
        }],
        yAxis: [{
          name: '次',
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
            // margin: 10,
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
          name: '%',
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
          name: this.eventXNames[0],
          type: 'line',
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
          data: this.eventCountArr
        }, {
          name: this.eventXNames[1],
          type: 'line',
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
          data: this.illegalEventsCountArr
        }, {
          name: this.eventXNames[2],
          type: 'line',
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
          data: this.illegalRatioArr
        }]
      }
    }
  },
  watch: {
    eventXData (newVal, oldVal) {
      this.option.xAxis[0].data = newVal
    },
    eventCountArr (newVal, oldVal) {
      this.option.series[0].data = newVal
    },
    illegalEventsCountArr (newVal, oldVal) {
      this.option.series[1].data = newVal
    },
    illegalRatioArr (newVal, oldVal) {
      this.option.series[2].data = newVal
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
