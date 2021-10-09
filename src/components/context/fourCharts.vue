
<template>
<div class="boxall">
  <v-chart :options = "option" class="navboxall" :autoresize="true" theme="light"></v-chart>
</div>

</template>

<script>
import echarts from 'echarts'
export default {
  name: 'fourCharts',
  props: {
    titleData: {
      // 图表标题
      type: String
    },
    color: {
      // 传给图例和图表的颜色
      type: Array
    },
    yAxisNames: {
      type: Array
    },
    seriesNames: {
      // 图例或和统计图的名称，如 违规次数...
      type: Array
    },
    xAxis: {
      type: Array
    },
    yAxis1: {
      type: Array
    },
    yAxis2: {
      type: Array
    },
    yAxis3: {
      type: Array
    },
    yAxis4: {
      type: Array
    },
    chartTypes: {
      type: Array
    }
  },
  data () {
    return {
      option: {
        title: {
          text: this.titleData
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            lineStyle: {
              color: '#57617B'
            }
          }
        },
        legend: {
          // icon: 'vertical',
          data: this.seriesNames,
          // align: 'center',
          // right: '35%',
          // top: '0',
          textStyle: {
            fontSize: 18,
            color: '#fff'
          },
          // itemWidth: 15,
          // itemHeight: 15,
          itemGap: 20
        },
        grid: {
          left: '20',
          right: '20',
          top: '80',
          bottom: '20',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          axisLabel: {
            show: true,
            textStyle: {
              color: 'rgba(255,255,255,.8)'
            }
          },
          axisLine: {
            lineStyle: {
              color: 'rgba(255,255,255,.8)'
            }
          },
          data: this.xAxis
        },
        yAxis: [{
          name: this.yAxisNames[0],
          // max: 500,
          axisLabel: {
            show: true,
            textStyle: {
              color: 'rgba(255,255,255,.8)'
            }
          },
          axisLine: {
            lineStyle: {
              color: 'rgba(255,255,255,.8)'
            }
          },
          splitLine: {
            lineStyle: {
              color: 'rgba(255,255,255,.5)'
            }
          }
        },
        {
          name: this.yAxisNames[1],
          // max: 60,
          type: 'value',
          axisLabel: {
            show: true,
            textStyle: {
              color: 'rgba(255,255,255,.8)'
            }
          },
          axisLine: {
            lineStyle: {
              color: 'rgba(255,255,255,.8)'
            }
          },
          splitLine: {
            lineStyle: {
              color: 'rgba(255,255,255,.5)'
            }
          }
        }],
        series: [{
          name: this.seriesNames[0],
          type: this.chartTypes[0],
          barWidth: 25,
          smooth: true,
          data: this.yAxis1,
          symbol: 'circle',
          symbolSize: 5,
          showSymbol: false,
          lineStyle: {
            normal: {
              width: 2
            }
          },
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(24, 163, 64, 0.3)'
              }, {
                offset: 0.8,
                color: 'rgba(24, 163, 64, 0)'
              }], false),
              shadowColor: 'rgba(0, 0, 0, 0.1)',
              shadowBlur: 10
            }
          },
          itemStyle: {
            normal: {
              color: this.color[0],
              borderColor: 'rgba(137,189,2,0.27)',
              borderWidth: 12
            }
          }
        }, {
          name: this.seriesNames[1],
          type: this.chartTypes[1],
          data: this.yAxis2,
          yAxisIndex: 1,
          smooth: true,
          symbol: 'circle',
          symbolSize: 5,
          showSymbol: false,
          lineStyle: {
            normal: {
              width: 2
            }
          },
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(39, 122,206, 0.3)'
              }, {
                offset: 0.8,
                color: 'rgba(39, 122,206, 0)'
              }], false),
              shadowColor: 'rgba(0, 0, 0, 0.1)',
              shadowBlur: 10
            }
          },
          itemStyle: {
            normal: {
              color: this.color[1],
              borderColor: 'rgba(0,136,212,0.2)',
              borderWidth: 12
            }
          }
        }, {
          name: this.seriesNames[2],
          type: this.chartTypes[2],
          smooth: true,
          data: this.yAxis3,
          yAxisIndex: 0,
          symbol: 'circle',
          symbolSize: 5,
          showSymbol: false,
          lineStyle: {
            normal: {
              width: 2
            }
          },
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(24, 163, 64, 0.3)'
              }, {
                offset: 0.8,
                color: 'rgba(24, 163, 64, 0)'
              }], false),
              shadowColor: 'rgba(0, 0, 0, 0.1)',
              shadowBlur: 10
            }
          },
          itemStyle: {
            normal: {
              color: this.color[2],
              borderColor: 'rgba(137,189,2,0.27)',
              borderWidth: 12
            }
          }
        }, {
          name: this.seriesNames[3],
          type: this.chartTypes[3],
          smooth: true,
          data: this.yAxis4,
          yAxisIndex: 1,
          symbol: 'circle',
          symbolSize: 5,
          showSymbol: false,
          lineStyle: {
            normal: {
              width: 2
            }
          },
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(24, 163, 64, 0.3)'
              }, {
                offset: 0.8,
                color: 'rgba(24, 163, 64, 0)'
              }], false),
              shadowColor: 'rgba(0, 0, 0, 0.1)',
              shadowBlur: 10
            }
          },
          itemStyle: {
            normal: {
              color: this.color[3],
              borderColor: 'rgba(137,189,2,0.27)',
              borderWidth: 12
            }
          }
        }]
      }
    }
  },
  watch: {
    title: {
      handler (value) {
        this.option.title.text = value
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
    yAxis3: {
      deep: true,
      handler (value) {
        this.option.series[2].data = value
      }
    },
    yAxis4: {
      deep: true,
      handler (value) {
        this.option.series[3].data = value
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

<style scoped>
.boxall {
  margin:.5rem !important;
}
.navboxall {
  width:100%;
  height:24rem;
  padding:0 .5rem;
}
</style>
