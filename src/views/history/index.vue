<template>
  <div class="con1 left" id="car_control">
    <div class="left_table left bow_shadow">
        <p class="set_list">
          <i class="list_i"></i> 设备列表
        </p>
        <ul id="treeDemo" class="ztree"></ul>
    </div>
    <div class="right  right_table">
        <div class="table_find">
            <p>
              <label>名称：</label>
              <input type="text" placeholder="请输入名称">
              <label>编号：</label>
              <input type="text" placeholder="请输入编号">
              <label>选择类型：</label>
              <select>
                <option>xxxxxx</option>
              </select>
              <label>关键字：</label>
              <input type="text" placeholder="请输入关键字">
            </p>
            <p>
              <label>出生日期：</label>
              <input type="date">
              <label>编号：</label>
              <input type="text" placeholder="请输入编号">
              <label>品牌：</label>
              <select><option>xxxxxx</option></select>
              <label>关键字：</label>
              <input type="text" placeholder="请输入关键字">
            </p>
            <p>
              <label>选择方式：</label>
              <input type="checkbox">
              <span>方式一</span>
              <input type="checkbox">
              <span>方式一</span>
              <input type="checkbox">
              <span>方式一</span>
              <input type="checkbox">
              <span>方式一</span>
              <input type="checkbox">
              <span>方式一</span>
              <button class="btn btn-primary btn-sm">
                <span class="glyphicon glyphicon-search"></span>
                查询
              </button>
              <span class="more_find right" onclick="openList()" id="open">
                高级查询>>
              </span>
            </p>

            <div class="find_expend">
                <p>
                  <label>名称：</label>
                  <input type="text" placeholder="请输入名称">
                  <label>编号：</label>
                  <input type="text" placeholder="请输入编号">
                  <label>选择类型：</label>
                  <select><option>xxxxxx</option></select>
                  <label>关键字：</label>
                  <input type="text" placeholder="请输入关键字">
                </p>
                <p>
                  <label>出生日期：</label>
                  <input type="date">
                  <label>编号：</label>
                  <input type="text" placeholder="请输入编号">
                  <label>品牌：</label>
                  <select><option>xxxxxx</option></select>
                  <label>关键字：</label>
                  <input type="text" placeholder="请输入关键字">
                  <span class="more_find right" onclick="closeList()">收起>></span>
                </p>
            </div>
        </div>
        <div class="table_div">
            <p class="table_but">
              <a href="javascript:void(0)" onclick="add()">
                <i class="glyphicon glyphicon-plus"></i>
                新增
              </a>
              <a href="javascript:void(0)">
                <i class="glyphicon glyphicon-remove"></i>
                删除
              </a>
              <a href="javascript:void(0)">
                <i class="glyphicon glyphicon-print"></i>
                打印
              </a>
              <a href="javascript:void(0)">
                <i class="glyphicon glyphicon-export"></i>
                导出
              </a>
            </p>
            <p>
            <table id="table" class="table_style" border="0"></table>
            </p>
        </div>
    </div>
</div>
</template>

<script>
export default {

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
.left{
    float: left;
}
.right{
    float: right;
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
    width:79.5%!important;
    background-color:  #081832;
    margin-left: 0.5%;
}
.table_find{
    width: 100%;
    padding: .5rem 0;
    border-bottom: .2rem solid #a5c5f83b;
    font-size: .8rem;
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
.list_i{
    width: .9rem;
    height: .9rem;
    display: inline-block;
    background-image: url("../../assets/img/nav_1.png");
    top:.2rem;
    position: relative;
}
.more_find{
    cursor: pointer;
    position: relative;
    top:.3rem;
}
.table_find .glyphicon{
    margin-right: .2rem;
}
.table_find button{
    padding: .2rem .5rem;
}
.table_find p{
    margin-top: .4rem;
}
.table_find label{
    color: #eeeeee;
    width: 8%;
    display: inline-block;
    text-align: right;
}
.table_find input[type=text],.table_find input[type=date]{
    width: 16%;
    height: 1.3rem;
    border-radius: .15rem;
    text-indent: 1em;
    border:.1rem solid#4b8df8;
    background-color: #cccccc4f;
}
.table_find select{
    width: 12%;
    height: 1.3rem;
    border-radius: .15rem;
    text-indent: 1em;
    border:.1rem solid #4b8df8;
    background-color: #cccccc4f;
}
/* 复选框小正方形 */
.table_find input[type=checkbox]{
    width: .8rem;
    height: .8rem;
    position: relative;
    top:.15rem;
    margin-right: .3rem;
}
.table_find span{
    color: #b2cbf3;
    margin-right: 2%;
}
.find_expend{
    display: none;
}
.table_div{
    margin-top: .5rem;
    color: #FFFFff;
}
.table_but{
    text-align: right;
    font-size: .8rem;
    padding-bottom: .3rem;
    padding-top: .5rem;

}
.table_but a{
    margin-right: .8rem;
    color: #FFFFff;
}
.table_but a i{
    margin-right: .3rem;
}
.table_style{
    color: #FFFFff;
    box-shadow: -.35rem 0rem .5rem #034c6a inset,
    .35rem 0rem .5rem #034c6a inset;
    border: none !important;
    font-size: 1.2rem;
}
/* .table_style a{
    margin-right: .5rem;
}
.table_style td{
    border: none !important;
}
.table_style tbody tr:nth-child(2n+1){
    background-color: #072951;
    box-shadow: -10px 0px 15px #034c6a inset,
    10px 0px 15px #034c6a inset;
}
.table_style thead tr{
    color: #4b8df8;
}
.table_style thead th{
    border-bottom: none !important;
}
.table_style tbody tr:nth-child(2n):hover{
    background-color: rgba(75, 141, 248, 0.12);
} */
</style>
