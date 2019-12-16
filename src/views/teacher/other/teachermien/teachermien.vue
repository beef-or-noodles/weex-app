<template>
  <scroller class="wrapper">
    <Navigation @goback="ongoback" :routername="routername" title="个人风采" :isfullscreen="true" :isstyle="2"></Navigation>
    <div class="topcover">
      <template v-if="userinfo.coverimg">
        <image class="coverimgs" :src="userinfo.coverimg"></image>
      </template>
      <template v-else>
          <div class="rowupload">
            <image class= "uploadimage" :src ="teachericon3"></image>
            <div><text class="uploadtext">点击上传图片</text></div>
          </div>
      </template>
      <image @click="global_routerpush('teachermien')" class= "imageicon" :src ="teachericon2"></image>
    </div>
    <userinfo isstate="2" :username="userinfo.name" :userabstract="userinfo.label"></userinfo>
    <div class="pagecontainer">
      <individual :isstate="1"></individual>
      <div class="containertitle"><text class="containertitle_text">视频风采</text></div>
      <elegantempty :isstate="2" :istype="2" :character="userinfo.video?'重新上传':'点击上传视频（非必选）'" :previewurl="userinfo.video" @uploadvideo="onuploadvideo"></elegantempty>
      <div class="containertitle"><text class="containertitle_text">教学图集</text></div>
      <template v-if="userinfo.atlas.length">
        <atlaslist :isstate="2" :datalist="userinfo.atlas" @deleteimage="ondeleteimage" @isupload="onisupload"></atlaslist>
      </template>
      <template v-else>
        <elegantempty character="点击上传图片(非必选)"></elegantempty>
      </template>
      <div class="rowgroupbtn">
        <div class="groupbtn groupbtn_green" @click="ongoback"><text class="groupbtn_text groupbtn_textwhite">取消</text></div>
        <div class="groupbtn groupbtn_marginleft" @click="global_routerpush('teachermien')"><text class="groupbtn_text">保存</text></div>
      </div>
    </div>
    <popup v-if="popupshow" @btnclick="onbtnclick"></popup>
  </scroller>
</template>

<script>
import {getImg, toast} from '@/common/public'
import Navigation from '@/components/Navigation/Navigation'
import individual from './components/individual'
import elegantempty from './components/elegantempty'
import atlaslist from './components/atlaslist'
import userinfo from './components/userinfo'
import popup from '@/components/popup/popup'
import {NAVIGATION_CUSTOMKEY} from '@/common/config'
export default {
  components: {
    Navigation, elegantempty, atlaslist, individual, userinfo, popup
  },
  data () {
    return {
      popupshow: false,
      userinfo: {
        coverimg: '',
        name: '',
        label: '',
        introduction: '个人简介',
        video: 'http://aimusic-data.oss-cn-hangzhou.aliyuncs.com/test/otherFiles/157294068247711.jpg',
        atlas: []
      },
      logo: ''
    }
  },
  computed: {
    routername () {
      return NAVIGATION_CUSTOMKEY
    },
    teachericon2 () {
      return getImg('teacher_icon2.png')
    },
    teachericon3 () {
      return getImg('teacher_icon3.png')
    }
  },
  methods: {
    ongoback (){
      this.popupshow = true;
    },
    onbtnclick (type) {
      if (type) {
        this.popupshow = false
        this.global_routerpush('teacherinfo')
      }else{
        this.popupshow = false;
      }
    },
    onuploadvideo () {
      toast('上传视频')
    },
    ondeleteimage (item) {
      toast(`删除图片${item}`)
    },
    onisupload () {
      toast('上传图片')
    }
  }
}
</script>

<style scoped lang="less">
@import url('./index.less');
.wrapper{
  position: fixed;
  top:0;
  bottom:0;
  left: 0;
  right:0;
  background-color: #fff;
}
.pagecontainer{
  padding:0 40px;
}
</style>
