<template>
   <div class="boxall" >
    <div class="title">{{personChartTitle}}</div>
      <v-chart class="navboxall" :options = "option " ref="charts" autoresize ></v-chart>
      <!-- <v-chart class="navboxall" :options = "option1 " ref="charts" autoresize ></v-chart> -->
  </div>
</template>

<script>
export default {
  props: {
    personChartTitle: {
      type: String
    },
    unloadDataName: {
      type: Array
    },
    unloadDataList: {
      type: Array,
      default: () => [100, 100, 100, 100]
    },
    unloadRestDataList: {
      type: Array,
      default: () => [10, 10, 10, 10]
    }
  },
  data () {
    return {
      option: {
        title: {
          text: ' ',
          left: 'center',
          y: '10',
          textStyle: {
            color: '#fff'
          }
        },
        grid: {
          left: 80,
          top: 0,
          bottom: 10
        },
        tooltip: {
          trigger: 'item',
          textStyle: {
            fontSize: 12
          },
          formatter: '{b0}:{c0}'
        },
        xAxis: {
          max: 100,
          splitLine: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            show: false
          },
          axisTick: {
            show: false
          }
        },
        yAxis: [
          {
            type: 'category',
            inverse: false,
            data: this.unloadDataName,
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              margin: -4,
              textStyle: {
                color: '#fff',
                fontSize: 16.25
              }
            }
          }

        ],
        series: [
          {
            type: 'pictorialBar',
            symbol: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAADYElEQVR4nO2dz0sUYRjHP7tIdAmxQ1LdlhCKMohAIsgiyEuHjkUEFQTlpejS/xCCBB06RBGBBKIG4cGyH0qHBKE9eKyFqBQPRQeNCt06vGNY7bq7szPfeZLnAwuzM+/zgw/DDvMu70wOIVveLscJOwycA44A24CfwAfgKXAbeFVvovlC/o/vuVwuTj+x0FWiYdGbgXvA8RrjHgAXgIVaCbMU3SKr1BhtwEtgZx1jTwI7gG7ga5pNNUO+9pBMuEN9klfYD9xMqZdEsCj6AHAiRtxZYFeyrSSHRdGnYsblCD8jJrEoek8TsbsT6yJhLIrelFFsqlgUPZtRbKpYFP2kidjxxLpIGIuiB4AvMeLmgJGEe0kMi6I/AVdjxPVSx91hVlgUDXAXuEaY16jFMnAJeJhqR01iVTTAdeAYUFxjzBRwCLgl6agJrM51rDAO7AP2EmbxthPO8vfAc2Ams84axLpoCGKLrH1mm8eC6KPAGaAL2Fpj7AZgY7T9DfhRY/wc4eflPmH+OjOynI8uEGbpukXlJ4Dz84V8aWWHcj46q4thFzCNTjJRren2UrlLWPM3WYjuAMYIk/tq2oCx9lK5Q11YLboFGARaxXVX0woMtpfK0uuTWvRFoFNcsxKdhF5kqEX3iuuthbQXtehG/gdMG2kvlm/B1xUuWoSLFmFF9CRwg2TnM4pRzskEc8bGiugR4ArhNjkpJqKcJv51sSJ63eOiRbhoES5ahIsW4aJFuGgRLlqEixbhokW4aBEuWoSLFuGiRbhoES5ahIsW4aJFuGgRLlqEWvTHKvs/p1izWu5qvaSCWvTlCvtmgeEUaw5TeUVtpV5SQy16COgBRoHXhMWb3aS7PnAhqjEQ1RwFeuYL+aEUa/5DFmtYHkefOEwQVmcBvKD+FQNvgNN/P+pHiV8MRbhoES5ahIsW4aJFuGgRLlqEixbhokW4aBEuWoSLFuGiRbhoES5ahIsW4aJFuGgRLlqEixbhokVYEx3nudGKXE1jTfS6xUWLcNEiXLQIFy3CRYtw0SJctAgXLcJFi3DRIv430eUq2+axJvp7jePPqmzHySXFmuhHwFKVYzNA/6rv/VR/s9BSlMsM1kTPEN4DPkU4I8vAO6APOAgsrhq7GO3ri8aUo5ipKIep1zv9AtipgOACGIrLAAAAAElFTkSuQmCC',
            symbolRepeat: 'fixed',
            symbolMargin: '5%',
            symbolClip: true,
            symbolSize: 22.5,
            symbolPosition: 'start',
            symbolOffset: [
              20,
              0
            ],
            symbolBoundingData: 300,
            data: this.unloadDataList,
            z: 10
          },
          {
            type: 'pictorialBar',
            itemStyle: {
              normal: {
                opacity: 0.3
              }
            },
            label: {
              normal: {
                show: false
              }
            },
            animationDuration: 0,
            symbolRepeat: 'fixed',
            symbolMargin: '5%',
            symbol: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAADYElEQVR4nO2dz0sUYRjHP7tIdAmxQ1LdlhCKMohAIsgiyEuHjkUEFQTlpejS/xCCBB06RBGBBKIG4cGyH0qHBKE9eKyFqBQPRQeNCt06vGNY7bq7szPfeZLnAwuzM+/zgw/DDvMu70wOIVveLscJOwycA44A24CfwAfgKXAbeFVvovlC/o/vuVwuTj+x0FWiYdGbgXvA8RrjHgAXgIVaCbMU3SKr1BhtwEtgZx1jTwI7gG7ga5pNNUO+9pBMuEN9klfYD9xMqZdEsCj6AHAiRtxZYFeyrSSHRdGnYsblCD8jJrEoek8TsbsT6yJhLIrelFFsqlgUPZtRbKpYFP2kidjxxLpIGIuiB4AvMeLmgJGEe0kMi6I/AVdjxPVSx91hVlgUDXAXuEaY16jFMnAJeJhqR01iVTTAdeAYUFxjzBRwCLgl6agJrM51rDAO7AP2EmbxthPO8vfAc2Ams84axLpoCGKLrH1mm8eC6KPAGaAL2Fpj7AZgY7T9DfhRY/wc4eflPmH+OjOynI8uEGbpukXlJ4Dz84V8aWWHcj46q4thFzCNTjJRren2UrlLWPM3WYjuAMYIk/tq2oCx9lK5Q11YLboFGARaxXVX0woMtpfK0uuTWvRFoFNcsxKdhF5kqEX3iuuthbQXtehG/gdMG2kvlm/B1xUuWoSLFmFF9CRwg2TnM4pRzskEc8bGiugR4ArhNjkpJqKcJv51sSJ63eOiRbhoES5ahIsW4aJFuGgRLlqEixbhokW4aBEuWoSLFuGiRbhoES5ahIsW4aJFuGgRLlqEWvTHKvs/p1izWu5qvaSCWvTlCvtmgeEUaw5TeUVtpV5SQy16COgBRoHXhMWb3aS7PnAhqjEQ1RwFeuYL+aEUa/5DFmtYHkefOEwQVmcBvKD+FQNvgNN/P+pHiV8MRbhoES5ahIsW4aJFuGgRLlqEixbhokW4aBEuWoSLFuGiRbhoES5ahIsW4aJFuGgRLlqEixbhokVYEx3nudGKXE1jTfS6xUWLcNEiXLQIFy3CRYtw0SJctAgXLcJFi3DRIv430eUq2+axJvp7jePPqmzHySXFmuhHwFKVYzNA/6rv/VR/s9BSlMsM1kTPEN4DPkU4I8vAO6APOAgsrhq7GO3ri8aUo5ipKIep1zv9AtipgOACGIrLAAAAAElFTkSuQmCC',
            symbolSize: 22.5,
            symbolBoundingData: 300,
            symbolPosition: 'start',
            symbolOffset: [
              20,
              0
            ],
            data: this.unloadRestDataList,
            z: 5
          }
        ]
      }
    }
  },
  mounted () {
    // this.getRest()
  },
  // methods: {
  //   getRest () {
  //     this.restDataList[0] = 100 - this.unloadDataList[0]
  //     this.restDataList[1] = 10 - this.unloadDataList[1]
  //     this.restDataList[2] = 10 - this.unloadDataList[2]
  //     this.restDataList[3] = 10 - this.unloadDataList[3]
  //     console.log(this.restDataList)
  //   }
  // },
  watch: {
    unloadDataName: {
      handler (value) {
        this.option.yAxis[0].data = value
      }
    },
    unloadDataList: {
      handler (value) {
        this.option.series[0].data = value
        // this.option.series[1].data = value
      }
    },
    unloadRestDataList: {
      handler (value) {
        this.option.series[1].data = value
      }
    }
  }

}
</script>

<style scoped>

.navboxall{
  height:19rem;
  width:100%;
  /* background-color: #fff; */
  }
</style>
