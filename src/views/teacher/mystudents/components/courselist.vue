<template>
    <div class="courselist" @click="$emit('onclick')">
        <image class="courseimg"></image>
        <div class="label labelok"><text class="labeltext">已还课</text></div>
        <div class="author"><text class="authortext whitespace1">雨里杀肖邦</text></div>
        <div class="time"><text class="timetext whitespace1">2019/11/15 16:00</text></div>
    </div>
</template>
<script>
export default {
  props: {
    nomarginleft: {type: Boolean, default: false}
  },
  methods: {
    onbtns () {
      this.$emit('btnclick')
    }
  }
}
</script>
<style scoped lang="less">
  @import url('../../../../less/public.less');
  @coursewidth:240px;
  .courselist{
    position: relative;
    width:@coursewidth;
  }
  .courseimg{
    width:@coursewidth;
    height:160px;
    background-color: #7A4CFF;
    border-radius:16px;
  }
  .label{
    position: absolute;
    top:10px;
    left:10px;
    height:36px;
    background-color:#FF8738;
    border-radius:18px;
    padding:0 12px;
  }
  .labelok{
    background-color:rgba(0,0,0,0.5);
  }
  .labeltext{
      font-size:24px;
      color:#fff;
      line-height:36px;
  }
  .author{
      padding-top:20px;
  }
  .authortext{
    font-size:28px;
    color:#303032;
    font-weight:500;
    text-align:center;
  }
  .time{
      padding-top:10px;
  }
  .timetext{
    font-size:24px;
    color:#98989B;
    text-align:center;
  }
</style>
