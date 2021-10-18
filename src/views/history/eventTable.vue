<template>
<div >
        <div class="table_find">
            <p>
              <label>选择场景：</label>
             <select clearable v-model="queryForm.category_code">
                <option v-for="item in categoryList"
                :value="item.code"
                :key="item.code">
                {{ item.nameCN }}
                </option>
              </select>
              <label>选择事件：</label>
              <select clearable v-model="queryForm.event_code">
                <option v-for="item in eventList"
                :value="item.key"
                :key="item.key"
                class="option-item">
                {{ item.value }}
                </option>
              </select>
              <label>违规等级：</label>
              <select clearable v-model="queryForm.level">
                <option v-for="item in levelList"
                :value="item.code"
                :key="item.code">
                {{ item.nameCN }}
                </option>
              </select>
              <label>日期：</label>
                <!-- <el-date-picker v-model="queryForm.time"
                    type="date" placeholder="选择日期">
                </el-date-picker> -->
                <el-date-picker
                    v-model="queryForm.time"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期">
                </el-date-picker>
              <span class="more_find right"  @click="handleSearch">
                查询>>
              </span>
            </p>
             <!--  -->
        </div>
        <div class="table_div">
            <p class="table_but">
            <Table class="table_style"
            :columns="colData"
            :data="this.tableData"
            ></Table>
            <el-pagination class="page"
              @current-change="handleCurrentChange"
              :total="this.pageData.itemTotal"
              :current="this.pageData.curPage"
              :page-size="this.pageData.pageSize"
              layout="total,  prev, pager, next, jumper"
              >
              </el-pagination>
            </p>
        </div>
</div>

</template>

<script>
import { getCategoryData, getLevelData, getEventData } from '@/utils/constData'
import { mapActions } from 'vuex'
import dayjs from 'dayjs'
export default {
  name: 'eventTable',
  computed: {
    // 获取场景，事件，违规等级
    categoryList () {
      const obj = getCategoryData()
      //   console.log(Object.keys(obj).map(key => obj[key]))
      return Object.keys(obj).filter(key => key.length === 1).map(key => obj[key])
    },
    levelList () {
      return Object.keys(getLevelData()).map(key => getLevelData()[key])
    },
    eventList () {
      const obj = getEventData()
      return Object.keys(obj).map(key => {
        const item = {
          key: parseInt(key),
          value: obj[key]
        }
        return item
      })
    },
    page () {
      return this.$store.state.alarmEvents.pageData.curPage
    },
    // 获取存在alarmEvents.tableDataArr中的数据
    tableDataArr () {
      return this.$store.state.alarmEvents.tableDataArr
    },
    // 对Table样式进行处理
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
    },
    pageData () {
      return this.$store.state.alarmEvents.pageData
    }
  },
  mounted () {
    this.handleSearch()
  },
  watch: {
    page: {
      deep: true,
      handler (val) { // 监听到页码改变就需要重新发送请求
        const paramsSelect = {
          category_code: this.queryForm.category_code,
          level: this.queryForm.level,
          start: this.queryForm.time[0]
            ? dayjs(this.queryForm.time[0]).format('YYYY-MM-DD')
            : dayjs(new Date() - 30 * 24 * 3600 * 1000).format('YYYY-MM-DD'),
          end: this.queryForm.time[1]
            ? dayjs(this.queryForm.time[1]).format('YYYY-MM-DD')
            : dayjs(new Date()).add(1, 'day').format('YYYY-MM-DD'),
          page: val,
          event_code: this.queryForm.event_code
        }
        this.searchAlarmEvents(paramsSelect)
      }
    }
  },
  methods: {
    ...mapActions(['searchAlarmEvents']),
    // 将筛选条件传入
    handleSearch () {
      const paramsSelect = {
        category_code: this.queryForm.category_code,
        level: this.queryForm.level,
        start: this.queryForm.time[0]
          ? dayjs(this.queryForm.time[0]).format('YYYY-MM-DD')
          : dayjs(new Date() - 30 * 24 * 3600 * 1000).format('YYYY-MM-DD'),
        end: this.queryForm.time[1]
          ? dayjs(this.queryForm.time[1]).format('YYYY-MM-DD')
          : dayjs(new Date()).add(1, 'day').format('YYYY-MM-DD'),
        page: 1,
        event_code: this.queryForm.event_code
      }
      // 将参数传给action中的searchAlarmEvents，action->  mutation -> state中的alarmEvents.tableDataArr
      this.searchAlarmEvents(paramsSelect)
    },
    // 查看详情
    showEventDetail (event) {
      this.$store.commit('SET_CUR_ROW_EVENT', { index: event.index })
    },
    handleCurrentChange (val) {
      this.$store.commit('SET_CUR_PAGE', { curPage: val })
    }
  },
  data () {
    return {
      // 查询条件
      queryForm: {
        category_code: '',
        level: '',
        event_code: null,
        time: []
      },
      currentPage: 1,
      totalNum: 0,
      colData: [
        { title: '序号', key: 'index', width: '180' },
        { title: '事件名称', key: 'name', width: 'auto' },
        { title: '事件等级', key: 'level', align: 'center' },
        { title: '发生时间', key: 'datetime' },
        {
          title: '事件详情',
          key: 'detail',
          align: 'center',
          render: (h, params) => {
            return h(
              'Button',
              {
                props: {
                  type: 'success'
                  // size: 'small'
                },
                style: {
                  marginRight: '.05rem'
                },
                on: {
                  click: () => this.showEventDetail(params.row)
                }
              },
              '查看详情'
            )
          }
        },
        {
          title: '事件视频',
          key: 'vidio',
          align: 'center',
          render: (h, params) => {
            if (params.row.video_path === 'null') {
              return h('Span', {}, '无视频')
            } else {
              return h(
                'Button',
                {
                  props: {
                    type: 'warning'
                    // size: 'small'
                  },
                  on: {
                    click: () => {
                      this.$emit('showEventVideo', params.row)
                    }
                  }
                },
                '查看视频'
              )
            }
          }
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.table_find{
    width: 100%;
    // background-color: ;
    height: 10% !important;
    padding: .5rem 0;
    border-bottom: .2rem solid #a5c5f83b;
    font-size: .9rem;
}

.more_find{
    cursor: pointer;
    position: relative;
    // top:.3rem;
    color: #fff;
}
.table_find .glyphicon{
    margin-right: .2rem;
}
.table_find p{
    margin: .6rem;
}
.table_find label{
    color: #eeeeee;
    width: 8%;
    display: inline-block;
    text-align: right;
}
// 表格高度
.ivu-table-wrapper{
  height:38.5rem;
}
.page {
  margin-top:1rem;
}
/* .table_find input[type=text],.table_find input[type=date]{
    width: 16%;
    height: 1.3rem;
    border-radius: .15rem;
    text-indent: 1em;
    border:.1rem solid#4b8df8;
    background-color: #cccccc4f;
} */
.table_find select {
    width: 12%;
    height: 1.3rem;
    border-radius: .15rem;
    text-indent: 1em;
    border:.1rem solid #4b8df8;
    background-color: #666;
    color: #eeeeee;
}
.el-range-editor--small.el-input__inner {
     /* width: 23%; */
    background-color: transparent;
    height: 1.3rem;
    border-radius: .15rem;
    /* text-indent: 1em; */
    border:.1rem solid #4b8df8;
    background-color: #666;
    color: #eeeeee;
}
/* .el-input__inner {
   display: none !important;
} */
/* 复选框小正方形 */
/* .table_find input[type=checkbox]{
    width: .8rem;
    height: .8rem;
    position: relative;
    top:.15rem;
    margin-right: .3rem;
} */
.table_find span{
    color: #b2cbf3;
    margin-right: 1%;
}

.table_style{
    color: #FFFFff;
    // box-shadow: -.3rem 0rem .3rem #034c6a inset,
    // .3rem 0rem .3rem #034c6a inset;
    border: none !important;
    font-size: 1rem;
}

.table_style thead tr{
    color: #4b8df8;
}
.table_style thead th{
    border-bottom: none !important;
}
.table_div{
    margin-top: .1rem;
    // width: 100%;
    color: #FFFFff;
}
.table_but{
    text-align: right;
    font-size: .8rem;
    padding: .3rem;
    // padding-top: .2rem;
    margin-right: .8rem;

}
.table_but a{
    margin-right: 1.2rem;
    color: #FFFFff;
}
.table_but a i{
    margin-right: .5rem;
}
</style>
