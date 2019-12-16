<template>
    <div>
        <div class="studentType">
            <img v-if="type == 1" class="typeimg" :src="icon1" alt="">
            <img v-if="type == 2" class="typeimg" :src="icon2" alt="">
            <img v-if="type == 3" class="typeimg" :src="icon3" alt="">
            <text class="txt" v-if="type == 1">学习中</text>
            <text class="txt" v-if="type == 2">未开始</text>
            <text class="txt" v-if="type == 3">完成</text>
        </div>
    </div>
</template>

<script>
import {getImg} from '@/common/public'

export default {
  name: 'studentType',
  props: {
    type: {
      type: [Number, String],
      default: 1
    }
  },
  computed: {
    icon1 () {
      return getImg('s_stady_ing.png')
    },
    icon2 () {
      return getImg('s_stady_no.png')
    },
    icon3 () {
      return getImg('s_stady_over.png')
    }
  }
}
</script>

<style scoped>
    .studentType {
        justify-content: center;
    }

    .typeimg {
        width: 55wx;
        height: 26wx;
    }

    .txt {
        position: absolute;
        font-size: 11wx;
        color: white;
        margin-left: 5wx;
    }
</style>
