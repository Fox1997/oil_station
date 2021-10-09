<template>
        <div class="clearfix">
            <div class="sy">
                <v-chart :options = "option1" class="chart" id="echarts1" autoresize> </v-chart>
            </div>
            <div class="sy" >
                <v-chart :options = "option2" class="chart" id="echarts2" autoresize></v-chart>
            </div>
            <div class="sy" >
                <v-chart :options = "option3" class="chart" id="echarts3" autoresize></v-chart>
            </div>
        </div>
</template>

<script>
// import { reqMaskData } from '@/api'
export default {
  name: 'ThreeCircle',
  props: {
    circleRationList: {
      type: Array
    }
  },
  data () {
    return {
      option1: {
        series: [{
          type: 'pie',
          radius: ['70%', '85%'],
          color: '#0088cc',
          label: {
            normal: {
              position: 'center'
            }
          },
          data: [{
            value: this.circleRationList[0],
            name: '航站楼',
            label: {
              normal: {
                show: false
              }
            }
          },
          {
            value: 100 - this.circleRationList[0],
            name: '剩余',
            label: {
              normal: {
                formatter: this.circleRationList[0] + '%',
                textStyle: {
                  color: '#aaa',
                  fontSize: 20
                }
              }
            },
            itemStyle: {
              normal: {
                color: 'rgba(255,255,255,.2)'
              },
              emphasis: {
                color: '#fff'
              }
            }
          }]
        }]
      },
      option2: {
        series: [{
          type: 'pie',
          radius: ['70%', '85%'],
          color: '#fccb00',
          label: {
            normal: {
              position: 'center'
            }
          },
          data: [{
            value: this.circleRationList[1],
            name: '货运区',
            label: {
              normal: {
                show: false
              }
            }
          },
          {
            value: 100 - this.circleRationList[1],
            name: '剩余',
            label: {
              normal: {
                formatter: this.circleRationList[1] + '%',
                textStyle: {
                  color: '#aaa',
                  fontSize: 20
                }
              }
            },
            itemStyle: {
              normal: {
                color: 'rgba(255,255,255,.2)'
              },
              emphasis: {
                color: '#fff'
              }
            }
          }]
        }]
      },
      option3: {
        series: [{
          type: 'pie',
          radius: ['70%', '85%'],
          color: '#62b62f',
          label: {
            normal: {
              position: 'center'
            }
          },
          data: [{
            value: this.circleRationList[2],
            name: '机坪',
            label: {
              normal: {
                show: false
              }
            }
          },
          {
            value: 100 - this.circleRationList[2],
            name: '剩余',
            label: {
              normal: {
                formatter: this.circleRationList[2] + '%',
                textStyle: {
                  color: '#aaa',
                  fontSize: 20
                }
              }
            },
            itemStyle: {
              normal: {
                color: 'rgba(255,255,255,.2)'
              },
              emphasis: {
                color: '#fff'
              }
            }
          }]
        }]
      }
    }
  },
  watch: {
    terMaskRation: {
      deep: true,
      handler (val) {
        this.option1.series[0].data[0].value = val
        this.option1.series[0].data[1].value = 100 - val
        this.option1.series[0].data[1].label.normal.formatter = val + '%'
      }
    },
    transMaskRation: {
      deep: true,
      handler (val) {
        this.option2.series[0].data[0].value = val
        this.option2.series[0].data[1].value = 100 - val
        this.option2.series[0].data[1].label.normal.formatter = val + '%'
      }
    },
    airMaskRation: {
      deep: true,
      handler (val) {
        this.option3.series[0].data[0].value = val
        this.option3.series[0].data[1].value = 100 - val
        this.option3.series[0].data[1].label.normal.formatter = val + '%'
      }
    }
  },
  methods: {
    // async getWeekData () {
    //   const { ratio_mask: TerMaskRation } = await reqMaskData({ category_code: 1, group: 'week' })
    //   const { ratio_mask: TransMaskRation } = await reqMaskData({ category_code: 2, group: 'week' })
    //   const { ratio_mask: AirMaskRation } = await reqMaskData({ category_code: 3, group: 'week' })
    //   this.terMaskRation = (TerMaskRation * 100).toFixed(1)
    //   this.transMaskRation = (TransMaskRation * 100).toFixed(1)
    //   this.airMaskRation = (AirMaskRation * 100).toFixed(1)
    // }
  },
  computed: {

  }
}

</script>

<style scoped >
#echarts1,#echarts2,#echarts3{ position:relative;}

#echarts1:before,
#echarts2:before,
#echarts3:before{
  position:absolute;
  /* background-color: #fff; */
  content: "";
  text-align: center;
  left:1rem;
  bottom: -2rem;
  color: #fff;
  opacity: .7;
  font-size: .8rem;}

#echarts1:before{ content: "航站楼佩戴率"}
#echarts2:before{ content: "货运区佩戴率"}
#echarts3:before{ content: "机坪佩戴率"}
.sy{
  float:left;
  width: 30%;
  height: 6.5rem;
  font-weight: bold;
  margin:1rem 1%;
  /* background-color: #fff; */
  }
.chart{
    height: 6.5rem;
    width: 6.5rem;
    /* background-color: #fff; */
}

.clearfix:after {
clear: both
}

</style>
