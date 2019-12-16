<template>
    <div class="comstar">
        <image v-for="(item,index) in studentinfo" :key="index" class= "mastergraph" :src ="item?star:nostart"></image>
    </div>
</template>
<script>
import {getImg} from '@/common/public'

export default {
  data () {
    return {
      studentinfo: []
    }
  },
  created: function () {
    this.$nextTick(() => {
      const minstar = this.minstar
      let maxstar = new Array(this.maxstar).fill(0)
      if (minstar) {
        for (let i = 0; i < minstar; i++) {
          maxstar[i] = 1
        }
      }
      this.studentinfo = maxstar
    })
  },
  props: {
    minstar: {type: Number, default: 0},
    maxstar: {type: Number, default: 1}
  },
  computed: {
    star () {
      return getImg('s_star.png')
    },
    nostart () {
      return getImg('s_start_no.png')
    }
  }
}
</script>
<style lang="less" scoped>
.comstar{
    flex-direction:row;
    align-items: center;
    justify-content: center;
}
.mastergraph{
    width:35px;
    height:35px;
    margin-left:7px;
}
</style>
