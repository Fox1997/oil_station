<template>
  <div class="right car_left bow_shadow">
      <div class="left_up bow_shadow">
        <el-dropdown @command="handleCommand">
         <span class="el-dropdown-link">
            选择视频<i class="el-icon-arrow-right el-icon--right"></i>
           </span>
            <span class="video-title">
            {{title}}
           </span>
           <el-switch class="switch"
           @change="getEventType(allEvent)"
            v-model="allEvent"
           active-text="全部"
           inactive-text="违规">
        </el-switch>
        <el-dropdown-menu slot="dropdown">
        <el-dropdown-item  v-for="(item, i) in videoStreamArr"
           :key="`item-${i}`" :command="item"> {{item.title}}</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      </div>
      <div class="left_down ">
        <!-- <div class="text_center">
          <a  class="tab_a tab_aActive">全部事件</a>
          <a  class="tab_a">违规事件</a>
        </div> -->
        <div class="car_content">
           <Table class="table_left"
            :columns="colData"
            :data="tableData"
            ></Table>
        </div>
      </div>
    </div>
</template>

<script>
import dayjs from 'dayjs'
import { getLevelData } from '@/utils/constData'
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      title: '',
      channelId: 0,
      allEvent: true,
      colData: [
        { title: '名称', key: 'name' },
        { title: '等级', key: 'level', align: 'center', width: '140' },
        { title: '发生时间', key: 'datetime' }
      ]
      // tableData: []
    }
  },
  computed: {
    videoStreamArr () { // 站点视频流
      return this.$store.state.monitor.videoStreamArr
    },
    tableDataArr () {
      return this.$store.state.monitor.tableDataArr
    },
    tableData () {
      const levelData = getLevelData()
      return this.tableDataArr.map((item) => {
        let levelClass = 'event-legal' // 默认是合规的
        const otherColsColor = 'other-cols'
        switch (item.level) {
          case levelData[1].nameCN:
            levelClass = 'event-illegal-one'
            break
          case levelData[2].nameCN:
            levelClass = 'event-illegal-two'
            break
          case levelData[3].nameCN:
            levelClass = 'event-illegal-thr'
        }
        item.cellClassName = {
          // 给 level 这列设置样式
          level: levelClass,
          index: otherColsColor,
          name: otherColsColor,
          datetime: otherColsColor

        }
        return item
      })
    }
  },
  // mounted () {
  //   this.initData()
  // },
  watch: {
    videoStreamArr: {
      deep: true,
      handler () {
        this.initData()
      }
    }
    // title: {
    //   deep: true,
    //   handler () {
    //     this.handleCommand()
    //   }
    // }
  },
  methods: {
    ...mapActions(['getMonitorAllEvents', 'getMonitorIllegalEvents']),
    initData () {
      console.log('@', this.videoStreamArr)
      this.title = this.videoStreamArr[0].title
      // console.log(this.videoStreamArr[0])
      // 获取table数据
      const eventParams = {
        channel_id: parseInt(this.videoStreamArr[0].channel),
        start: dayjs(new Date()).format('YYYY-MM-DD'),
        end: dayjs(new Date()).format('YYYY-MM-DD')
      }
      this.getMonitorAllEvents(eventParams)
    },
    getEventType (type) {
      if (type === true) {
        const eventParams = {
          channel_id: parseInt(this.channelId),
          start: dayjs(new Date()).format('YYYY-MM-DD'),
          end: dayjs(new Date()).format('YYYY-MM-DD')
        }
        this.getMonitorAllEvents(eventParams)
      } else {
        const illEventParams = {
          channel_id: parseInt(this.channelId),
          start: dayjs(new Date()).format('YYYY-MM-DD'),
          end: dayjs(new Date()).format('YYYY-MM-DD')
        }
        this.getMonitorIllegalEvents(illEventParams)
      }
    },
    handleCommand (command) {
      this.title = command.title
      this.channelId = command.channel
      if (this.allEvent === true) {
        const eventParams = {
          channel_id: parseInt(command.channel),
          start: dayjs(new Date()).format('YYYY-MM-DD'),
          end: dayjs(new Date()).format('YYYY-MM-DD')
        }
        this.getMonitorAllEvents(eventParams)
      } else {
        const illEventParams = {
          channel_id: parseInt(command.channel),
          start: dayjs(new Date()).format('YYYY-MM-DD'),
          end: dayjs(new Date()).format('YYYY-MM-DD')
        }
        this.getMonitorIllegalEvents(illEventParams)
      }
    }
  }
}
</script>

<style scoped>

.el-dropdown{
  height:98%;
  width:100%;
  font-size:1rem;
  color: #74bcdd;
  margin-top: .5rem;
  padding: .3rem 1rem;
  /* background-color: #fff; */
}
.switch {
  float: right;
}
.el-dropdown-menu {
  background-color: #034c6a;
  top: 8rem !important;
  left: 80rem !important;
}
.el-dropdown-menu__item {
  color: #74bcdd;
  font-size:1rem;
  font-weight: 700;
}

.car_left{
    width: 27.5% !important;
    height: 99% !important;
    background-color:  #081832;
    margin-right: 1.1%;
}
.left_up {
    height:2.8rem  !important;
    width: 100%;
    /* overflow-x: hidden;
    overflow-y: scroll; */
}
.left_down{
    height: 92%;
    margin-top: 2%;
}
.text_center{
    text-align: center;
}

.car_content{
    padding:0 .6rem;
    font-size: .8rem;
    height: 100%;
    color: #eeeeee;
}
.bow_shadow{
    box-shadow: -.3rem 0rem .4rem #034c6a inset,
    .3rem 0rem .4rem #034c6a inset;
    width: 100%;
    box-sizing: border-box;
}
.table_left{
    color: #FFFFff;
    height: 100%;
    width: 100%;
    /* background-color: #fff; */
    /* box-shadow: -.3rem 0rem .3rem #034c6a inset,
     .3rem 0rem .3rem #034c6a inset; */
    border: none !important;
    font-size: 1rem;
}
.table_left .ivu-table {
  height: 100% !important;
  width: 100% !important;
  overflow-x: hidden !important;
  overflow-y: hidden !important;
}
.ivu-table-tip{
  overflow-x: hidden !important;
  overflow-y: hidden !important;
}
.ivu-table-wrapper {
  height: 43rem;
}
.table_style thead tr{
    color: #4b8df8;
}
.table_style thead th{
    border-bottom: none !important;
}
</style>
