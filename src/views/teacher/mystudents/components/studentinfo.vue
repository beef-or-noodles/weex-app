<!--空列表-->
<template>
    <div class="topcontainer">
        <div class="topportrait"></div>
        <div class="topuserinfo">
            <div class="topnickname">
                <text class="topnicknametext">谢点点</text>
                <image class="gender" :src="isdata.sex?woman:man"></image>
            </div>
            <div class="topage"><text class="topagetext">12岁</text></div>
        </div>
    </div>
</template>
<script>
import {getImg} from '@/common/public'
export default {
  props: {
    // eslint-disable-next-line vue/require-valid-default-prop
    isdata: {type: Object, default: {}} // 用户信息
  },
  computed: {
    man () {
      return getImg('teacher_icon10.png')
    },
    woman () {
      return getImg('teacher_icon11.png')
    }
  }
}
</script>
<style scoped lang="less">
.topcontainer{
    flex-direction:row;
    padding-bottom:20px;
    border-bottom-width:1px;
    border-bottom-style: solid;
    border-bottom-color:#ddd;
    align-items: center;
}
.topportrait{
    width:80px;
    height:80px;
    border-radius:80px;
    background-color: #52B938;
    margin-right:20px;
}
.topuserinfo{
    align-items:flex-start;
    justify-content: center;
}
.topnickname{
    flex-direction: row;
}
.topnicknametext{
    color:#303032;
    font-size:32px;
    font-weight:600;
}
.gender{
    width:32px;
    height:32px;
    margin-left:10px;
}
.topage{
    padding-top:6px;
}
.topagetext{
    font-size:24px;
    color:#656568;
    text-align: left;
}
</style>
