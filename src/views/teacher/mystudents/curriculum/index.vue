<template>
    <scroller class="container">
      <Navigation title="已学课程" routername="teacherindex"></Navigation>
      <div class="rowcontainer">
        <studentinfo :isdata="studentinfo"></studentinfo>
        <div class="isrowlist">
            <div class="leftborder"></div>
            <div v-for="item of datalist" :key="item.id">
                <div class="topnav">
                    <div class="isorigin"></div>
                    <div class="createtime"><text class="createtimetext">{{item.time}}</text></div>
                </div>
                <div class="rowlist">
                    <div class="listitem" v-for="items of item.list" :key="items">
                        <courselist @onclick="onclick"></courselist>
                    </div>
                </div>
            </div>
        </div>
      </div>
  </scroller>
</template>

<script>
import {getImg} from '@/common/public'
import Navigation from '@/components/Navigation/Navigation'
import courselist from '../components/courselist'
import studentinfo from '../components/studentinfo'
export default {
  components: {
    Navigation, courselist, studentinfo
  },
  data () {
    return {
      studentinfo: {
        id: 1,
        sex: 1,
        list: [1, 2, 3, 4, 5]
      },
      datalist: [
        {id: 1, time: '2019/11/15', list: [1, 2, 3, 4, 5]},
        {id: 2, time: '2019/11/14', list: [1, 2, 3]}
      ]
    }
  },
  methods: {
    onclick (item) {
      this.global_routerpush('curriculumdetails',{id:1})
    }
  }
}
</script>

<style scoped lang="less">
@import url('./index.less');
</style>
