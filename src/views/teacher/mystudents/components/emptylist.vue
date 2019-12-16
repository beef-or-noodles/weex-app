<!--空列表-->
<template>
    <div class="emptyrow">
        <template v-if="istype === 1">
            <image class="teachericon9" :src="teachericon9"></image>
            <div> <text class="emptytext emptytext1">这个学员没有学习完任何课程</text> </div>
        </template>
        <template v-else-if="istype === 2">
            <div class="emptyrow2">
                <image class="teachericon17" :src="teachericon17"></image>
                <div><text class="emptytext emptytext2">你还未添加点评～</text></div>
            </div>
        </template>
        <template v-else-if="istype === 3">
            <div class="emptyrow2">
                <div><text class="emptyrow3_title1">还没有任何评论～</text></div>
                <div class="emptyrow3_title2row" @click="ontype2"><text class="emptyrow3_title2">添加评论</text></div>
            </div>
        </template>
        <template v-else>
            <div>空</div>
        </template>
    </div>
</template>
<script>
import {getImg} from '@/common/public'

export default {
  props: {
    istype: {type: Number, default: 1}
  },
  computed: {
    teachericon17 () {
      return getImg('teacher_icon17.png')
    },
    teachericon9 () {
      return getImg('teacher_icon9.png')
    }
  },
  methods: {
    ontype2 () {
      this.$emit('onclick')
    }
  }
}
</script>
<style scoped lang="less">
    .emptyrow{
        justify-content: center;
        align-items: center;
    }
    .emptytext{
        color:#303032;padding:20px 0;
    }
    /***类型1***/
    .teachericon9{
        width:200px;
        height:200px;
    }
    .emptytext1{
        font-size:28px;
    }
    /***类型2***/
    .emptyrow2{
        padding:30px 0;
    }
    .teachericon17{
        width:300px;
        height:300px;
    }
    .emptytext2{
        font-size:32px;
        font-weight:500;
    }
    /***类型3***/
    .emptyrow3_title1{
        color:#303032;
        font-size:32px;
        font-weight:500;
        padding-bottom:30px;
    }
    .emptyrow3_title2row{
        width:280px;
        height:90px;
        background-color:#FFD048;
        border-radius:50px;
    }
    .emptyrow3_title2{
        color:#303032;
        font-size:34px;
        line-height:90px;
        text-align: center;
        font-weight:600;
    }
</style>
