<template>
  <scroller class="conscroller">
      <Navigation title="教师详情" routername="teacherindex"></Navigation>
      <div class="rowcontainer">
          <image @click="global_routerpush('teachermien')" class= "imageicon" :src ="imageicon"></image>
          <div class="infolist">
              <contidinglist :isstate="editorstate" istitle="头像" :inputtype="2" :isvalue="userinfo.avatar" @inputchange= "(val)=>{oninputchange(val,'avatar')}"></contidinglist>
              <contidinglist :isstate="editorstate" istitle="姓名" :isvalue="userinfo.nickName" @inputchange= "(val)=>{oninputchange(val,'nickName')}"></contidinglist>
              <contidinglist :isstate="editorstate" istitle="性别" :isvalue="userinfo.sex" @inputchange= "(val)=>{oninputchange(val,'sex')}"></contidinglist>
              <contidinglist istitle="手机号" :isvalue="userinfo.mobile" @inputchange= "(val)=>{oninputchange(val,'mobile')}"></contidinglist>
              <div class="btnrow">
                  <div class="btnconfirm" @click="changeeditorstate"><text class="btnconfirm_text">{{editorstate==1?'编辑':'提交'}}</text></div>
              </div>
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
        nickName: '岳飞',
        sex: 1,
        mobile: '15532651489'
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
