<template>
  <div class="boxall">
    <div class="title">{{radarTitle}}</div>
    <v-chart class="navboxall" :options = "option " ref="charts" autoresize ></v-chart>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'radarChart',
  props: {
    radarTitle: {
      type: String
    },
    safeboxEventNames: {
      type: Array
    },
    safeboxEventCount: {
      type: Array,
      default: () => [0, 0, 0, 0, 0, 0]
    }

  },
  watch: {
    radarTitle: {
      handler (value) {
        this.option.series[0].data[0].name = value
      }
    },
    safeboxEventCount: {
      handler (value) {
        this.option.series[0].data[0].value = value
      }
    }
  },
  data () {
    return {
      option: {
        tooltip: {
          show: true,
          trigger: 'item'
        },
        radar: {
          center: ['50%', '50%'], // 偏移位置
          radius: '70%',
          startAngle: 60, // 起始角度
          splitNumber: 4,
          shape: 'circle',
          splitArea: {
            areaStyle: {
              color: 'transparent'
            }
          },
          axisLabel: {
            show: false,
            fontSize: 20,
            color: '#000',
            fontStyle: 'normal',
            fontWeight: 'normal'
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: 'rgba(255, 255, 255, 0.5)'
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: 'rgba(255, 255, 255, 0.5)'
            }
          },
          indicator: [
            { name: this.safeboxEventNames[0], max: 20, color: '#fff' },
            { name: this.safeboxEventNames[1], max: 20, color: '#fff' },
            { name: this.safeboxEventNames[2], max: 20, color: '#fff' },
            { name: this.safeboxEventNames[3], max: 20, color: '#fff' },
            { name: this.safeboxEventNames[4], max: 20, color: '#fff' },
            { name: this.safeboxEventNames[5], max: 20, color: '#fff' }
          ]
        },
        series: [{
          type: 'radar',
          data: [
            {
              value: this.safeboxEventCount,
              name: this.radarTitle,
              symbol: 'circle',
              // 拐点大小
              symbolSize: 12,
              // 线的样式
              lineStyle: {
                normal: {
                  color: 'transparent'
                }
              },
              // ⚪点样式,雷达图拐点只能接受一个颜色参数
              itemStyle: {
                normal: {
                  // color: function (params) {
                  //   var colorList = ['#e9df3d', '#f79c19', '#21fcd6', '#08c8ff', '#df4131']
                  //   return colorList[params.dataIndex]
                  // }
                  color: '#f79c19'
                }
              },
              // 数据圈内的样式
              areaStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 1, 0,
                    [{
                      offset: 0,
                      color: 'rgba(203, 158, 24, 0.8)'
                    }, {
                      offset: 1,
                      color: 'rgba(190, 96, 20, 0.8)'
                    }],
                    false)
                }
              }
            }
          ]
        }]
      }
    }
  }

}
</script>

<style scoped>
.navboxall{
  height: 20rem;
  width: 100%;
  }
</style>
