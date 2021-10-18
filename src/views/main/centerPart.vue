<template>
  <div class="boxall">
    <div class="visualSssf_left">
      <h3>卸油口情况</h3>
        <a class="leftTitle">加油区巡检次数：</a>
        <a class="active">{{refuelInspect}}次</a>
        <a class="leftTitle">加油区拥堵情况：</a>
        <a class="active" :style="{color:conIndex.color}">{{conIndex.text}} </a>
    </div>
    <div class="visualSssf_right">
      <v-chart :options = "option1" class="visualSssf_right_box" :autoresize="true" theme="light"></v-chart>
      <v-chart :options = "option2" class="visualSssf_right_box" :autoresize="true" theme="light"></v-chart>
      <v-chart :options = "option3" class="visualSssf_right_box" :autoresize="true" theme="light"></v-chart>
    </div>
  </div>
</template>

<script>
export default {
  name: 'centerPart',
  props: {
    illRatio: {
      type: Number
    },
    serviceRatio: {
      type: Number
    },
    conIndex: {
      type: Object
    },
    refuelInspect: {
      type: Number
    },
    manageRatio: {
      type: Number
    }
  },
  watch: {
    illRatio: {
      handler (value) {
        this.option1.series[0].data[0].value = value
        this.option1.series[0].data[1].value = 100 - value
      }
    },
    serviceRatio: {
      handler (value) {
        this.option2.series[0].data[0].value = value
        this.option2.series[0].data[1].value = 100 - value
      }
    },
    manageRatio: {
      handler (value) {
        this.option3.series[0].data[0].value = value
        this.option3.series[0].data[1].value = 100 - value
      }
    }
  },
  data () {
    return {
      option1: {
        title: {
        // text: `${value}万辆`,
          text: '违规率',
          subtext: '',
          left: 'center',
          top: 'center', // top待调整
          textStyle: {
            color: '#fff',
            fontSize: 16,
            fontFamily: 'PingFangSC-Regular'
          },
          subtextStyle: {
            color: '#ff',
            fontSize: 14,
            fontFamily: 'PingFangSC-Regular',
            top: 'center'
          },
          itemGap: -1// 主副标题间距
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/> {c}' + '%'
        },
        series: [{
          name: '违规率',
          type: 'pie',
          clockWise: true,
          radius: ['65%', '70%'],
          itemStyle: {
            normal: {
              label: {
                show: false
              },
              labelLine: {
                show: false
              }
            }
          },
          hoverAnimation: true,
          data: [{
            value: this.illRatio,
            name: '完成',
            itemStyle: {
              normal: {
                borderWidth: 8,
                borderColor: {
                  colorStops: [{
                    offset: 0,
                    color: '#1d54f7' || '#00cefc' // 0% 处的颜色
                  }, {
                    offset: 1,
                    color: '#68eaf9' || '#367bec' // 100% 处的颜色
                  }]
                },
                color: { // 完成的圆环的颜色
                  colorStops: [{
                    offset: 0,
                    color: '#1d54f7' || '#00cefc' // 0% 处的颜色
                  }, {
                    offset: 1,
                    color: '#68eaf9' || '#367bec' // 100% 处的颜色
                  }]
                },
                label: {
                  show: false
                },
                labelLine: {
                  show: false
                }
              }
            }
          }, {
            name: '未完成',
            value: 100 - this.illRatio,
            itemStyle: {
              normal: {
                label: {
                  show: false
                },
                labelLine: {
                  show: false
                },
                color: 'rgba(0, 0, 0, 0)',
                borderColor: 'rgba(0, 0, 0, 0)',
                borderWidth: 0
              }
            }
          }]
        }]
      },
      option2: {
        title: {
        // text: `${value}万辆`,
          text: '服务率',
          subtext: '',
          left: 'center',
          top: 'center', // top待调整
          textStyle: {
            color: '#fff',
            fontSize: 16,
            fontFamily: 'PingFangSC-Regular'
          },
          subtextStyle: {
            color: '#ff',
            fontSize: 14,
            fontFamily: 'PingFangSC-Regular',
            top: 'center'
          },
          itemGap: -1// 主副标题间距
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/> {c}' + '%'
        },
        series: [{
          name: '服务率',
          type: 'pie',
          clockWise: true,
          radius: ['65%', '70%'],
          itemStyle: {
            normal: {
              label: {
                show: false
              },
              labelLine: {
                show: false
              }
            }
          },
          hoverAnimation: true,
          data: [{
            value: this.serviceRatio,
            name: '完成',
            itemStyle: {
              normal: {
                borderWidth: 8,
                borderColor: {
                  colorStops: [{
                    offset: 0,
                    color: '#02df94' || '#25d6bc' // 0% 处的颜色
                  }, {
                    offset: 1,
                    color: '#28d3d0' || '#14dbaa' // 100% 处的颜色
                  }]
                },
                color: { // 完成的圆环的颜色
                  colorStops: [{
                    offset: 0,
                    color: '#02df94' || '#25d6bc' // 0% 处的颜色
                  }, {
                    offset: 1,
                    color: '#28d3d0' || '#14dbaa' // 100% 处的颜色
                  }]
                },
                label: {
                  show: false
                },
                labelLine: {
                  show: false
                }
              }
            }
          }, {
            name: '未完成',
            value: 100 - this.serviceRatio,
            itemStyle: {
              normal: {
                label: {
                  show: false
                },
                labelLine: {
                  show: false
                },
                color: 'rgba(0, 0, 0, 0)',
                borderColor: 'rgba(0, 0, 0, 0)',
                borderWidth: 0
              }
            }
          }]
        }]
      },
      option3: {
        title: {
        // text: `${value}万辆`,
          text: '经理在站率',
          subtext: '',
          left: 'center',
          top: 'center', // top待调整
          textStyle: {
            color: '#fff',
            fontSize: 15,
            fontFamily: 'PingFangSC-Regular'
          },
          subtextStyle: {
            color: '#ff',
            fontSize: 14,
            fontFamily: 'PingFangSC-Regular',
            top: 'center'
          },
          itemGap: -1// 主副标题间距
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/> {c}' + '%'
        },
        series: [{
          name: '经理在站率',
          type: 'pie',
          clockWise: true,
          radius: ['65%', '70%'],
          itemStyle: {
            normal: {
              label: {
                show: false
              },
              labelLine: {
                show: false
              }
            }
          },
          hoverAnimation: true,
          data: [{
            value: this.manageRatio,
            // name: '完成',
            itemStyle: {
              normal: {
                borderWidth: 8,
                borderColor: {
                  colorStops: [{
                    offset: 0,
                    color: '#eb3600' || '#cc9a00' // 0% 处的颜色
                  }, {
                    offset: 1,
                    color: '#d0a00e' || '#d0570e' // 100% 处的颜色
                  }]
                },
                color: { // 完成的圆环的颜色
                  colorStops: [{
                    offset: 0,
                    color: '#eb3600' || '#cc9a00' // 0% 处的颜色
                  }, {
                    offset: 1,
                    color: '#d0a00e' || '#d0570e' // 100% 处的颜色
                  }]
                },
                label: {
                  show: false
                },
                labelLine: {
                  show: false
                }
              }
            }
          }, {
            // name: '未完成',
            value: 100 - this.manageRatio,
            itemStyle: {
              normal: {
                label: {
                  show: false
                },
                labelLine: {
                  show: false
                },
                color: 'rgba(0, 0, 0, 0)',
                borderColor: 'rgba(0, 0, 0, 0)',
                borderWidth: 0
              }
            }
          }]
        }]
      }
    }
  }

}
</script>

<style scoped>
.boxall{
  height:13rem;
  border:.05rem solid #345f92;
  margin:.8rem .8rem;
  /* position:absolute;
  bottom:.2rem;
  left:.2rem; */
  z-index:99;}
.visualSssf_left{
  width:35%;
  float:left;
  color:#fff;
  padding:.8rem 1.1rem 0 1.1rem;
}
.visualSssf_left h3{
  color:#fff;
  font-size:1.1rem;
  font-weight:600;
  margin-bottom:1rem;
  }
.visualSssf_left .leftTitle{
  width:60%;
  color:#fff;
  display:inline-block;
  margin-top:1rem;
  cursor:pointer;
  font-size:.9rem;
}
.visualSssf_left a{
  width:40%;
  color:#fff;
  display:inline-block;
  margin-top:1rem;
  cursor:pointer;
  font-size:1.2rem;
  }
.visualSssf_left a.active{color:#01f0ff;}
.visualSssf_right{
  width:60%;
  height:100%;
  float:left;
}
.visualSssf_right .visualSssf_right_box{
  width:33%;
  float:left;
  height:100%;
  }
</style>
