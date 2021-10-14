<template>
  <div class="con1 left">
    <div class="left_table left bow_shadow">
        <p class="set_list">
          <Icon type="ios-create" />
          详细信息
        </p>
        <detail-page @showEventVideo="showEventVideo"/>
    </div>
      <event-table @showEventVideo="showEventVideo" class="bow_shadow right right_table"/>
      <!-- 播放器 -->
       <Modal
        v-model="isShowPlayer"
        footer-hide
        @on-cancel="cancelModal">
        <p slot="header" >
             <Icon type="ios-analytics" />
            <span style="margin-left:.5rem">{{ getCurRowEventData.name}} </span>
            <span style="font-size:.9rem;margin-left:.5rem">
              <Icon type="ios-locate" />
              ({{ getCurRowEventData.category}}) </span>
            <span style="font-size:.9rem;margin-left:.5rem">
              <Icon type="ios-locate" />
              {{ getCurRowEventData.level}} </span>
            <span style="font-size:.9rem;margin-left:.5rem">{{ getCurRowEventData.datetime}} </span>
        </p>
        <div>
        <Mp4Player
          ref="VideoMp4"
          :src="IP + getCurRowEventData.video_path"
          :posterSrc="getCurRowEventData.image_path"
        />
       </div>
    </Modal>
</div>
</template>

<script>
import eventTable from './eventTable'
import detailPage from './detailPage'
import Mp4Player from '@/components/common/Mp4Player'
import { ip } from '@/utils/constData'
import { mapGetters } from 'vuex'

export default {
  components: {
    eventTable,
    detailPage,
    Mp4Player
  },
  data () {
    return {
      IP: ip,
      isShowPlayer: false
    }
  },
  computed: {
    ...mapGetters(['getCurRowEventData'])
  },
  methods: {
    showEventVideo (event) { // 查看视频
      // 传入行号
      this.$store.commit('SET_CUR_ROW_EVENT', { index: event.index })
      this.isShowPlayer = true
    },
    cancelModal () {
      this.isShowPlayer = false
      // 暂停
      this.$refs.VideoMp4.$refs.videoPlayer.player.pause()
    }
  }
}
</script>

<style scoped>
.con1{
    width: 100%;
    background-color: #081832cc;
    /*padding-bottom: 4px;*/
    box-sizing: border-box;
    overflow: auto;
    margin: .8rem;
    height: 48rem;
}
.con1::before{
    content: "";
    display: block;
    clear: both;
    visibility: hidden;
    height: 0;
}

.left_table{
    height: 98%;
    border-radius: .3rem;
    width:20%!important;
    background-color:  #081832;
}
.right_table{
    height: 98%;
    border-radius: .2rem;
    width:78%!important;
    background-color:  #081832;
    margin:0 1%;
    /* background-color: #fff; */
}
.bow_shadow{
    box-shadow: -.3rem 0rem .4rem #034c6a inset,
    .3rem 0rem .4rem #034c6a inset;
    width: 100%;
    box-sizing: border-box;
}
.set_list{
    padding: .8rem 5%;
    color: #eee;
    font-size: .95rem;
}

</style>
