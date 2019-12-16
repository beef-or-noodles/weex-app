<!--图片和视频上传-->
<template>
    <div class="rowlist" @click="onChange">
      <image v-if="isstate==2 && istype == 2  && previewurl !==''" class="backgroundimage" :src="previewurl"></image>
      <image class="uploadimage" :src="teachericon3"></image>
      <div><text class="uploadtext" :class="[textclass]">{{character}}</text></div>
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
    istype: {type: Number, default: 1}, // 状态 1图片上传 2视频上传
    previewurl: {type: String, default: ''}, // 预览图片
    character: {type: String, default: '点击上传图片'} // 提示文字
  },
  computed: {
    textclass () {
      const isstate = this.isstate
      const istype = this.istype
      if(isstate == 2 && istype == 2 && this.previewurl){
        return 'textwhite'
      }else{
        return ''
      }
    },
    teachericon3 () {
      const istype= this.istype
      if (istype === 1){
        return getImg('teacher_icon3.png')
      } else {
        const previewurl= this.previewurl
        if(previewurl){
          return getImg('teacher_icon7.png')
        }else{
          return getImg('teacher_icon4.png')
        }
      }
    }
  },
  created: function () {
    this.$nextTick(()=> {})
  },
  methods: {
    onChange: function (e) {
      const isstate = this.isstate
      if(isstate == 2){
        this.$emit('uploadvideo')
      }
    }
  }
}
</script>
<style scoped lang="less">
  .rowlist{
    flex-direction: column;
    height:400px;
    background-color: #F1F1F5;
    align-items: center;
    justify-content: center;
    border-radius:16px;
  }
  .backgroundimage{
      position:absolute;
      top:0;
      bottom:0;
      left:0;
      right:0;
      background-color:red;
  }
  .uploadimage {
    width:80px;
    height:80px;
    margin-bottom:30px;
  }
  .uploadtext{
    color:#303032;
    font-size:28px;
  }
  .textwhite{
    color: #fff;
  }
</style>
