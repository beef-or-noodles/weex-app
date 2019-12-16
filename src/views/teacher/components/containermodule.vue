<template>
  <div class="senioritems" @click="$emit('onclick')">
    <div class="icons"></div>
    <div class="iconname"><text class="nametext">{{modulename}}</text></div>
    <div><text class="numbertext">{{statistics}}</text></div>
  </div>
</template>
<script>
export default {
  props: {
    modulename: {type: String, default: '模块名称'},
    statistics: {type: String, default: '0位'}
  },
  methods: {
    onclick () {

    }
  }
}
</script>
<style scoped lang="less">
  .senioritems{
    flex-direction:column;
    background-color: #fff;
    align-items: center;
    padding:60px 0;
    border-radius:16px;
    overflow: hidden;
  }
  .icons{
    width:120px;
    height:120px;
    border-radius:120px;
    background-color:red;
    overflow:hidden;
  }
  .iconname{
    padding:40px 0 20px 0;
  }
  .nametext{
    font-size:36px;
    color:#303032;
  }
  .numbertext{
    font-size:28px;
    color:#656568;
  }
</style>
