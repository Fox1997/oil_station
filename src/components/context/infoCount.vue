<template>
<!-- 封装的统计信息的组件 -->
  <div class="info-count">
    <div
      v-for="(item, index) in infoData"
      :key="index"
      class="countSum"
      :style="{ width: countWidth }"
    >
      <div class="countTitle">{{ item.title }}</div>
      <div class="countContent">
        <!-- 值和单位 -->
        <span style="font-size:18px" :style="{color: item.color || '#20d1d2'}">{{ item.value }}</span>

        <span style="font-size:18px">{{ item.unit }}</span></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    countWidth: {
      type: String,
      default: '22%'
    },
    infoData: { // [{title:'xx', value:50, unit:'次'}]
      type: Array
    }
  }
}
</script>

<style lang="less" >
.info-count {
  height: 86px;
  text-align: center;
  position: relative;
  .countSum {
    display: inline-block;
    box-sizing: border-box;
    height: 70px;
    margin: 8px 35px ;

    border: 1px solid #1081b2;
    border-radius: 4px;
    .countTitle {
      height: 30%;
      padding-top: 6px;
      font-size: 16px;
      color: #fff;
    }
    .countContent {
      height: 60%;
      padding-top: 8px;
    }
  }
}
</style>
