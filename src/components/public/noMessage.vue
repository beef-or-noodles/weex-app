<template>
    <div>
        <div class="nomessage">
            <img v-if="type == 1" :class="[row?'noicon_row':'noicon']" :src="noIcon" alt="">
            <img v-if="type == 2" :class="[row?'noicon_row':'noicon']" :src="noIcon2" alt="">
            <text :class="[row?'txt_row':'txt']">{{title}}</text>
            <div class="ls_btn" v-if="btnTitle" @click="btnclick">
                <text class="txt_no">{{btnTitle}}</text>
            </div>
        </div>
    </div>
</template>

<script>
import {getImg} from '@/common/public'
export default {
  name: 'noMessage',
  computed: {
    noIcon () {
      return getImg('teacher_icon17.png')
    },
    noIcon2 () {
      return getImg('teacher_icon9.png')
    }
  },
  props: {
    type: {
      type: Number,
      default: 1
    },
    row: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      default: '暂时没有任何消息哦~'
    },
    btnTitle: {
      type: String,
      default: ''
    }
  },
  methods: {
    btnclick () {
      this.$emit('btnClick')
    }
  }
}
</script>

<style lang="less" scoped>
    @import url('../../less/public.less');
    .nomessage{
        align-items: center;
        justify-content: center;
    }
    .noicon{
        width: 400px;
        height: 400px;
    }
    .noicon_row{
        width: 137wx;
        height: 137wx;
    }
    .txt_row{
        font-size: 15wx;
    }
    .txt{
        font-size: 32px
    }
    .txt_no{
        font-size:32px;
    }
    .ls_btn{
        width: 240px;
        height: 72px;
        border-radius: 80px;
        background-color: @themecolor;
        align-items: center;
        justify-content: center;
        margin-top: 40px;
    }
</style>
