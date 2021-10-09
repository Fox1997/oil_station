<template>
      <div class="div_any">
        <div class="left div_any01">
            <div class="div_any_child">
                <div class="div_any_title"><img src="img/title_1.png">车辆类型统计 </div>
                <p id="char1" class="p_chart"></p>
            </div>
            <div class="div_any_child">
                <div class="div_any_title"><img src="img/title_2.png">车辆状态统计 </div>
                <p id="char2" class="p_chart"></p>
            </div>
        </div>
        <div class="div_any02 left ">
            <div class="div_any_child div_height">
                <div class="div_any_title any_title_width"><img src="img/title_3.png">车辆行驶地图 </div>
                <div id="map_div"></div>
            </div>
        </div>
        <div class="right div_any01">
            <div class="div_any_child">
                <div class="div_any_title"><img src="img/title_4.png">车辆行驶统计 </div>
                <p id="char3" class="p_chart"></p>
            </div>
            <div class="div_any_child">
                <div class="div_any_title"><img src="img/title_5.png">车辆报警统计 </div>
                <p id="char4" class="p_chart"></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'detailTable'

}
</script>

<style scoped>
.div_any{
    width: 98%;
    margin-left: 2%;
    margin-bottom: 1.4rem;
    height: 35rem;
    /* background-color: #fff; */
}

.div_any01{
    width: 23%;
    margin-right: 2%;
}
.div_any02{
    width: 48%;
    margin-right: 2%;
}
.div_height{
    height:35rem !important;
}
.div_any_child{
    width: 100%;
    height: 17rem;
    box-shadow: -.5rem 0rem .8rem #034c6a inset,
    0rem -.5rem .8rem #034c6a inset,
    .5rem 0rem .8rem #034c6a inset,
    0rem .5rem .8rem #034c6a inset;
    border: .1rem solid #034c6a;
    box-sizing: border-box;
    position: relative;
    margin-top: .8rem;
}
.div_any_title{
    background-color: #034c6a;
    border-radius: .9rem;
    position: absolute;
    height: 1.5rem;
    width: 60%;
    top:-.75rem;
    color: #ffffff;
    font-weight: bold;
    font-size: .85rem;
    left: 20%;
    line-height: 1.5rem;
    text-align: center;
}
#map_div{
    width: 96%;
    height: 94%;
    margin: 4% auto;

}
.div_any_title img{
    width: .9rem;
    height: .9rem;
    position: relative;
    top:.1rem;
    margin-right: .3rem;
}
.p_chart{
    height: 17rem;
    padding: .3rem .5rem;
    margin-top: .7rem;

}
</style>
