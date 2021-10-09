<template>
<!-- 水平横向的柱状图 -->
  <div class="boxall" >
    <div class="title">{{checkoutTitle}}</div>
    <v-chart class="navboxall"  :options="option" ref="charts" autoresize></v-chart>
  </div>
</template>

<script>
export default {
  props: {
    checkoutTitle: {
      type: String
    },
    checkoutXNames: {
      type: Array
    },
    checkoutData: {
      type: Array,
      default: () => [100, 100, 100, 100]
    }
  },
  data () {
    return {
      option: {
        tooltip: {
          show: true
        },
        grid: {
          top: '0%',
          left: '20%',
          bottom: '0%'
        },
        xAxis: {
          min: 0,
          max: 100,
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            show: false
          }
        },
        yAxis: {
          data: this.checkoutXNames,
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            color: 'rgba(255,255,255,.6)',
            fontSize: 16
          }
        },
        series: [{
          type: 'bar',
          label: {
            show: true,
            zlevel: 10000,
            position: 'right',
            padding: 5,
            color: '#49bcf7',
            fontSize: 13,
            formatter: '{c}次'
          },
          itemStyle: {
            color: '#49bcf7'
          },
          barWidth: '18',
          data: this.checkoutData,
          z: 10
        }, {
          type: 'bar',
          barGap: '-100%',
          itemStyle: {
            color: '#fff',
            opacity: 0.1
          },
          barWidth: '18',
          data: [100, 100, 100, 100],
          z: 5
        }]
      }

    }
  },
  mounted () {
  },
  watch: {
    checkoutData (newVal, oldVal) {
      this.option.series[0].data = newVal
    }
  },
  methods: {

  }

}
</script>
<style scoped>
.navboxall{
  height:10rem;
  width:100%;
  /* background-color: #fff; */
  }
</style>
