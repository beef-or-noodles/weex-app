<template>
  <scroller class="conscroller">
      <Navigation title="我的学员" routername="teacherindex"></Navigation>
      <div class="container">
          <div class="listcontainer" v-for="item in studentlist" :key="item.id">
              <studentinfo :isdata="item"></studentinfo>
              <div class="middletitle">
                  <div class="title"><text class="titletext">已学课程</text></div>
                  <div class="middleright" v-if="item.list.length"><text class="middlerighttext" @click="lookup(item)">查看全部</text><image class="arrow" :src="arrow"></image></div>
              </div>
              <template v-if="item.list.length">
                  <scroller class="crollerperverse" scroll-direction="horizontal" show-scrollbar="false">
                      <div class="listitem" :class="[index===0?'nopaddingleft':'']" v-for="(item,index) of item.list" :key="item">
                          <courselist></courselist>
                      </div>
                  </scroller>
              </template>
              <template v-else>
                  <emptylist></emptylist>
              </template>
          </div>
      </div>
   </scroller>
</template>

<script>
import {getImg} from '@/common/public'
import Navigation from '@/components/Navigation/Navigation'
import courselist from '../components/courselist'
import emptylist from '../components/emptylist'
import studentinfo from '../components/studentinfo'

export default {
  components: {
    Navigation, courselist, emptylist, studentinfo
  },
  data () {
    return {
      studentlist: [
        {id: 1, sex: 1, list: [1, 2, 3, 4, 5]},
        {id: 2, sex: 0, list: []},
        {id: 3, sex: 0, list: []}
      ]
    }
  },
  computed: {
    arrow () {
      return getImg('teacher_icon12.png')
    }
  },
  methods: {
    lookup (item) {
      if (item.list.length) {
        this.global_routerpush('curriculum', {id: item.id})
      }
    }
  }
}
</script>

<style scoped lang="less">
@import url('./index.less');
</style>
