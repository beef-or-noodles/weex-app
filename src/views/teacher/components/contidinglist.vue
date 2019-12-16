<template>
    <div class="senioritems senioritems_orange">
      <div class="container">
        <div class="rowleftcontainer">
          <div class="lefttitle"><text class="whitespace1 titletetx">郭莹莹家长的新评论郭莹莹家长的新评论</text></div>
          <div class="leftcontainer"><text class="whitespace1 containertext">李老师孩子这节课学的怎么样呢李老师孩子这节课学的怎么样呢?</text></div>
          <div class="letbtn">
            <text @click="onbtns(1)" class="btnstyle1">添加评价</text>
            <text @click="onbtns(2)" class="btnstyle2">回复</text>
            <text @click="onbtns(3)" class="btnstyle2">标为已读</text>
          </div>
        </div>
        <div class="rowrightcontainer">
          <div class="rightimgs"></div>
          <div class="rightname"><text class="whitespace1 rightnametext">夜的第七章夜的第七章夜的第七章夜的第七章</text></div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  props: {
    modulename: {type: String, default: '模块名称'},
    statistics: {type: String, default: '0位'}
  },
  methods: {
    onbtns () {
      this.$emit('btnclick')
    }
  }
}
</script>
<style scoped lang="less">
  @import url('../../../less/public.less');
  .senioritems{
    background-color: #DDDDDD;
    margin-bottom:20px;
    border-radius:16px;
  }
  .senioritems_orange{
    background-color:@boxbg_orange;
  }
  .senioritems_purple{
    background-color:@boxbg_purple;
  }
  .senioritems_blue{
    background-color:@boxbg_blue;
  }
  .container{
    flex-direction:row;
    background-color:#fff;
    margin-left:16px;
    border-radius:16px;
    padding:16px 16px 16px 32px;
  }
  /**左侧侧部分**/
  .rowleftcontainer{
    flex:1;
    margin-right:16px;
  }
  .lefttitle{
    padding:10px 0;
  }
  .titletetx{
    font-size:32px;
    color:#303032;
    font-weight:600;
  }
  .containertext{
    color:#656568;
    font-size:24px;
  }
  .letbtn{
    padding-top:22px;
    flex-direction:row;
  }
  .btnstyle1{
    font-size:28px;
    color:#98989B;
    margin-right:30px;
  }
  .btnstyle2{
    font-size:28px;
    color:#FF8738;
    margin-right:30px;
  }
  /**右侧部分**/
  .rowrightcontainer{
    width:180px;
  }
  .rightimgs{
    height:120px;
    border-radius:16px;
    background-color: #0088fb;
  }
  .rightname{
    padding-top:8px;
  }
  .rightnametext{
    color:#303032;
    font-size:20px;
    text-align: center;
    font-weight:500;
  }
</style>
