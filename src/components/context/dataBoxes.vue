<template>
  <div >
    <!--数据总概-->
    <div class="con_div">
        <div class="con_div_text left">
            <div class="con_div_text01 left">
                <img src="../../assets/img/info_1.png" class="left text01_img">
                <div class="left text01_div">
                    <p>{{info[0].name}}{{info[0].unit}}</p>
                    <p>{{value[0]}}</p>
                </div>
            </div>
            <div class="con_div_text01 right">
                <img src="../../assets/img/info_2.png" class="left text01_img">
                <div class="left text01_div">
                    <p>{{info[1].name}}{{info[1].unit}}</p>
                    <p>{{value[1]}}</p>
                </div>
            </div>
        </div>
        <div class="con_div_text left">
            <div class="con_div_text01 left">
                <img src="../../assets/img/info_4.png" class="left text01_img">
                <div class="left text01_div">
                    <p>{{info[2].name}}{{info[2].unit}}</p>
                    <p class="sky">{{value[2]}}</p>
                </div>
            </div>
            <div class="con_div_text01 right">
                <img src="../../assets/img/info_5.png" class="left text01_img">
                <div class="left text01_div">
                    <p>{{info[3].name}}{{info[3].unit}}</p>
                    <p class="sky">{{value[3]}}</p>
                </div>
            </div>
        </div>
        <div class="con_div_text left">

            <div class="con_div_text01 left">
                <img src="../../assets/img/info_6.png" class="left text01_img">
                <div class="left text01_div">
                    <p>{{info[4].name}}{{info[4].unit}}</p>
                    <p class="org">{{value[4]}}</p>
                </div>
            </div>
            <div class="con_div_text01 right">
                <img src="../../assets/img/info_7.png" class="left text01_img">
                <div class="left text01_div">
                    <p>{{info[5].name}}{{info[5].unit}}</p>
                    <p class="org">{{value[5]}}</p>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Array
    },
    info: {
      type: Array
    }
  }

}
</script>

<style scoped>
.con_div{
    height: 7rem;
    width: 98%;
    margin-left: 2%;
    margin-bottom: 1.4rem;
}
.con_div_text{
    height: 100%;
    background-color: #034c6a;
    width: 32%;
    margin-right: 1.3%;
}
.con_div_text01{
    width: 50%;
    height: 100%;
}
.con_div_text{
    height: 100%;
    background-color: #034c6a;
    width: 32%;
    margin-right: 1.3%;
}
.con_div_text01{
    width: 50%;
    height: 100%;
}
.text01_img{
    width: 2.5rem;
    height: 2.5rem;
    margin-left: 5%;
  margin-top: 2.3rem;
}
.text01_div{
    margin-top: 1.2rem;
    margin-left: 5%;
    text-align: center;

}
.text01_div p{
    line-height: 2rem;
}
.text01_div p:nth-child(1){
    font-size: .9rem;
    color: #ffffff;
}
.text01_div p:nth-child(2){
    font-size: 1.8rem;
    color: #ffff43;
    font-weight: 600;

}
.red{
    color: red !important;
}
.sky{
    color: #25f3e6 !important;
}
.org{
    color: #ff4e4e !important;
}
</style>
