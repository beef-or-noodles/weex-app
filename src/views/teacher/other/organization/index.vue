<template>
  <scroller class="conscroller">
      <Navigation title="机构信息" routername="teacherindex"></Navigation>
      <div class="infolist">
          <contidinglist :isstate="editorstate" istitle="机构标志" :inputtype="2" :isvalue="userinfo.avatar" @inputchange= "(val)=>{oninputchange(val,'avatar')}"></contidinglist>
          <contidinglist :isstate="editorstate" istitle="机构全称" :isvalue="userinfo.nickName" @inputchange= "(val)=>{oninputchange(val,'nickName')}"></contidinglist>
          <contidinglist :isstate="editorstate" istitle="企业简称" :isvalue="userinfo.sex" @inputchange= "(val)=>{oninputchange(val,'sex')}"></contidinglist>
          <contidinglist :isstate="editorstate" istitle="管理员" :isvalue="userinfo.sex1" @inputchange= "(val)=>{oninputchange(val,'sex1')}"></contidinglist>
          <contidinglist :isstate="editorstate" istitle="手机号" :isvalue="userinfo.sex2" @inputchange= "(val)=>{oninputchange(val,'sex2')}"></contidinglist>
          <contidinglist :isstate="editorstate" istitle="城市" :isvalue="userinfo.sex3" @inputchange= "(val)=>{oninputchange(val,'sex3')}"></contidinglist>
          <contidinglist :isstate="editorstate" istitle="详细地址" :isvalue="userinfo.sex4" @inputchange= "(val)=>{oninputchange(val,'sex4')}"></contidinglist>
          <div class="btnrow">
              <div class="btnconfirm" @click="changeeditorstate"><text class="btnconfirm_text">{{editorstate==1?'编辑':'提交'}}</text></div>
          </div>
      </div>
    </scroller>
</template>

<script>
import {getImg,toast} from '@/common/public'
import Navigation from '@/components/Navigation/Navigation'
import contidinglist from '../../components/coneditorlist'

export default {
  components: {
    Navigation, contidinglist
  },
  data () {
    return {
      userinfo: {
        avatar: 'https://aimusic-data.oss-cn-hangzhou.aliyuncs.com/test/avatar/d2304e1b949a42c3a0d1f8df1b079957.png',
        nickName: '四川天籁艺术培训学院',
        sex: '四川天籁',
        sex1: '毕加索',
        sex2: '15144684425',
        sex3: '四川省 成都市 高新区',
        sex4: '环球中心777号'
      },
      editorstate: 1
    }
  },
  created: function () {
    this.$nextTick(() => {
    })
  },
  computed: {
    imageicon () {
      return getImg('teacher_icon1.png')
    }
  },
  methods: {
    changeeditorstate(){
      const editorstate=this.editorstate
      if (editorstate === 1) {
        this.editorstate = 2
      } else {
        this.editorstate = 1
      }
    },
    oninputchange (item,name) {
      let userinfo = this.userinfo
      userinfo[name] = item
      this.userinfo = userinfo
    }
  }
}
</script>

<style scoped lang="less">
@import url('./index.less');
</style>
