<!--教学图集-->
<template>
    <div class="rowlist">
        <div class="listitem" :class="[index%2 == 0?'marginleft':'']" v-for="(item,index) in datalist">
            <image class="itemimage" src="http://b-ssl.duitang.com/uploads/blog/201312/04/20131204184148_hhXUT.jpeg"></image>
            <image  @click="$emit('deleteimage',item)" v-if="isstate == 2" class="deletebtn" :src="teachericon6"></image>
        </div>
        <div v-if="isstate == 2" @click="$emit('isupload')" class="listitem newadd" :class="[datalist.length%2 == 0?'marginleft':'']">
            <image class="newaddimage" :src="teachericon5"></image>
        </div>
    </div>
</template>
<script>
import {getImg} from '@/common/public'
export default {
  data () {
    return {
      value: ''
    }
  },
  props: {
    isstate: {type: Number, default: 1}, // 状态 1预览 2编辑
    datalist: {
      type: Array,
      default: () => {
        return []
      }
    } // 预览图片
  },
  computed: {
    teachericon5 () {
      return getImg('teacher_icon5.png')
    },
    teachericon6 () {
      return getImg('teacher_icon6.png')
    }
  },
  created: function () {
    this.$nextTick(()=> {})
  },
  methods: {
    onChange: function (e) {

    }
  }
}
</script>
<style scoped lang="less">
  @itemimage:325px;
  .rowlist{
    flex-direction:row;
    flex-wrap: wrap ;
  }
  .listitem{
      position: relative;
      background-color:#F1F1F5;
      margin-top:20px;
      margin-left:20px;
      width:@itemimage;
      height:@itemimage;
      border-radius:16px;
  }
  .marginleft{
      margin-left:0;
  }
  .itemimage{
      width:@itemimage;
      height:@itemimage;
  }
  .deletebtn{
      position: absolute;
      top:24px;
      right:24px;
      width:55px;
      height:55px;
  }
  .newadd{
    justify-content: center;
    align-items: center;
  }
  .newaddimage {
    width:80px;
    height:80px;
  }
</style>
