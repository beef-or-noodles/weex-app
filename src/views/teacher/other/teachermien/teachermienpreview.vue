<template>
  <scroller class="wrapper">
    <Navigation routername="teacherinfo" title="个人风采" :isfullscreen="true" :isstyle="2"></Navigation>
    <div class="topcover">
      <template v-if="userinfo.coverimg">
        <image class="coverimgs" :src="userinfo.coverimg"></image>
      </template>
      <image @click="global_routerpush('teachermien')" class= "imageicon" :src ="teachericon2"></image>
    </div>
    <userinfo :username="userinfo.name" :userabstract="userinfo.label"></userinfo>
    <div class="pagecontainer">
      <individual :isstate="2"></individual>
      <template v-if="userinfo.video">
        <div class="containertitle"><text class="containertitle_text">视频风采</text></div>
        <elegantempty :isstate="1" :istype="2" :previewurl="userinfo.video"></elegantempty>
      </template>
      <template v-if="userinfo.atlas.length">
        <div class="containertitle"><text class="containertitle_text">教学图集</text></div>
        <atlaslist :isstate="1" :datalist="userinfo.atlas"></atlaslist>
      </template>
      <div class="rowgroupbtn">
        <div class="groupbtn" @click="global_routerpush('teachermien')"><text class="groupbtn_text">编辑</text></div>
      </div>
    </div>
  </scroller>
</template>

<script>
import {getImg, toast} from '@/common/public'
import Navigation from '@/components/Navigation/Navigation'
import individual from './components/individual'
import elegantempty from './components/elegantempty'
import userinfo from './components/userinfo'
import atlaslist from './components/atlaslist'
export default {
  components: {
    Navigation, elegantempty, atlaslist, individual, userinfo
  },
  data () {
    return {
      userinfo: {
        coverimg: '',
        name: '侯甜甜',
        label: '个人标签 ',
        introduction: '个人简介',
        video: 'http://aimusic-data.oss-cn-hangzhou.aliyuncs.com/test/otherFiles/157294068247711.jpg',
        atlas: [1, 2, 3]
      },
      logo: ''
    }
  },
  computed: {
    teachericon2 () {
      return getImg('teacher_icon2.png')
    },
    teachericon3 () {
      return getImg('teacher_icon3.png')
    }
  },
  methods: {
    onuploadvideo () {
      toast('上传视频')
    },
    ondeleteimage (item) {
      toast(`删除图片${item}`)
    },
    onisupload () {
      toast('上传图片')
    },
    onbtnclick () {
      toast('收到点击事件')
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
