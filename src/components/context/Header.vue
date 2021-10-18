<template>
<el-row class="head_top">
  <el-col :span="6">
    <div class="title_button left">
      <el-link icon="el-icon-s-home"
      @click="handleMenu(Title[0].name,0)"
      :style="{'color':Title[0].color}">首页</el-link>
      <el-dropdown @command="chooseCategoryType">
        <el-link icon="el-icon-s-data"
        @click="handleMenu(Title[1].name,1)"
        :style="{'color':Title[1].color}">数据统计
        <i class="el-icon-arrow-down"></i>
        </el-link>
          <el-dropdown-menu slot="dropdown" >
          <el-dropdown-item :command="item.name"
          v-for="(item,index) in categories"
          :key="index"  >
          {{item.nameCN}}
          </el-dropdown-item>
          </el-dropdown-menu>
      </el-dropdown>
    </div>
    </el-col>
  <el-col :span="12">
    <div class=""><span>加油站现场智能监管系统</span>
    </div>
  </el-col>
    <el-col :span="6">
    <div class="title_button right" >
      <el-link  icon="el-icon-s-order" :style="{'color':Title[2].color}" @click="handleMenu(Title[2].name,2)">历史数据</el-link>
      <el-link icon="el-icon-video-camera-solid" :style="{'color':Title[3].color}" @click="handleMenu(Title[3].name,3)">实时监控</el-link>
      <!-- <el-link icon="el-icon-s-data"  :style="{'color':Title[4].color}" >退出  </el-link>-->
    </div>
    </el-col>
</el-row>

</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Header',
  data () {
    return {
      Title: [{
        name: 'Main',
        color: 'antiquewhite'
      },
      {
        name: 'overview',
        color: 'antiquewhite'
      },
      {
        name: 'History',
        color: 'antiquewhite'
      },
      {
        name: 'Monitor',
        color: 'antiquewhite'
      },
      {
        name: 'Exit',
        color: 'antiquewhite'
      }],
      categories: []
    }
  },
  created () {
    this.Title[0].color = '#409EFF'
  },
  computed: {
    ...mapState(['category'])
  },
  mounted () {
    this.initDate()
  },
  beforeDestroy () {
    this.$store.commit('SET_CATEGORY_NULL') // 跳转页面前清空
  },
  destroyed () {
  },
  methods: {
    ...mapActions([
      'getCategoryDefine'
    ]),
    initDate () {
      if (!sessionStorage.getItem('categoryData')) {
        this.getCategoryDefine() // 获取场景定义
      }
      const Cate = JSON.parse(sessionStorage.getItem('categoryData'))
      const categoriesArr = Object.keys(Cate).filter(key => key.length === 1).map(key => Cate[key])
      this.categories = categoriesArr
      // console.log(this.categories)
    },
    // header配色和内容
    handleMenu (title, num) {
      for (var i = 0; i < this.Title.length; i++) {
        if (i === num) {
          this.Title[i].color = '#409EFF'
        } else {
          this.Title[i].color = 'antiquewhite'
        }
      }
      this.$router.push({ name: title })
    },
    // 选择场景类型
    chooseCategoryType (command) {
      // this.selectOverview = false
      // console.log(command)
      // 将选择的场景传给路由
      this.Title[1].color = '#409EFF'
      this.Title[0].color = 'antiquewhite'
      this.$router.push({ name: command })
      this.$store.commit('SET_CATEGORY', { category: command })
    }
  }
}

</script>

<style lang="less" scoped>
.left {
  float: left;
}
.right {
  float: right;
}
.head_top
{
  position:relative;
  background: url('~@/assets/img/title-header.png') no-repeat center center;
  height: 5rem;
  line-height: 5rem;
  margin-bottom: 1.5rem;
  // background-color: #fff;
}
// 标题样式
.head_top span{
text-align: center;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
font-size: 2.5rem;
background: linear-gradient( 0deg,#0095d6, #46daff);
background-size: cover;
-webkit-background-clip: text;
background-clip: text;
-webkit-text-fill-color: transparent;
font-weight: bolder; cursor: text;
}
.el-dropdown-menu {
  background-color: transparent;
  border: .1rem solid #07a7ff ;
}

.el-dropdown-menu__item {
  color:aliceblue;
  font-size:.9rem !important;
  padding:.6rem;
}
.el-dropdown-menu__item:not(.is-disabled):hover {
     background-color: transparent;
}
.el-dropdown-menu__item:focus, .el-dropdown-menu__item:not(.is-disabled):hover {
  // color:#fff;
}
.title_button .el-link  {
  font-size:1.2rem ;
  margin: 2rem 1.6rem -2.8rem 1.6rem;
  // float: right;
  height: 3rem;
  line-height: 3rem;
  background-color: transparent;
  // border:none;
  color:antiquewhite ;
  // background-color: #fff;
}
// .title_button .el-link {
//   color:#409EFF;
// }
</style>
