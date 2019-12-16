<template>
    <div>
        <div class="grade">
            <img :class="[row?'grade_icon_row':'grade_icon']" v-if="type==1" :src="icon1" alt="">
            <img :class="[row?'grade_icon_row':'grade_icon']" v-if="type==2" :src="icon2" alt="">
            <img :class="[row?'grade_icon_row':'grade_icon']" v-if="type==3" :src="icon3" alt="">
            <img :class="[row?'grade_icon_row':'grade_icon']" v-if="type==4" :src="icon4" alt="">
            <img :class="[row?'grade_icon_row':'grade_icon']" v-if="type==5" :src="icon5" alt="">
            <img :class="[row?'grade_icon_row':'grade_icon']" v-if="type==6" :src="icon6" alt="">
            <img :class="[row?'grade_icon_row':'grade_icon']" v-if="type==7" :src="icon7" alt="">
        </div>
    </div>
</template>

<script>
import {getImg} from '@/common/public'
export default {
  name: 'grade_icon',
  props: {
    type: {
      type: [Number, String],
      default: 1
    },
    row: {
      type: [Boolean],
      default: true
    }
  },
  computed: {
    icon1 () {
      return getImg('s_gard1.png')
    },
    icon2 () {
      return getImg('s_gard2.png')
    },
    icon3 () {
      return getImg('s_gard3.png')
    },
    icon4 () {
      return getImg('s_gard4.png')
    },
    icon5 () {
      return getImg('s_gard5.png')
    },
    icon6 () {
      return getImg('s_gard6.png')
    },
    icon7 () {
      return getImg('s_gard7.png')
    }
  }
}
</script>

<style scoped>
    .grade{
        flex-direction: row;
    }
    .grade_icon_row{
        width: 13wx;
        height: 13wx;
    }
    .grade_icon{
        width: 40px;
        height: 40px;
    }
</style>
