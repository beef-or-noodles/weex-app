<template>
  <scroller class="conscroller">
    <Navigation title="天籁艺术教学系统"></Navigation>
    <div class="containerinfo">
      <div class="rows">
        <div class="topinfo1">
          <div class="organization_portrait"></div>
          <div><text class="organizationname">成都天籁艺术教学机构</text></div>
          <div class="organization_rightarrow">
            <image class="imageicon" :src="imageicon"></image>
          </div>
        </div>
      </div>
      <div class="rowueseinfo">
        <div class="uese_portrait"></div>
        <div class="ueseinfo">
          <div class="userrole">
            <div><text class="username">李相赫</text></div>
            <div class="rowrolename"><text class="rolename">管理员</text></div>
          </div>
          <div><text class="userrolephone">手机：13001947359</text></div>
        </div>
        <div>
          <text class="userinfo_update_text" @click="()=>{global_routerpush('teacherinfo')}">修改信息</text>
        </div>
      </div>
    </div>
    <!---
      <div class="containermodule">
          <containermodule></containermodule>
      </div>
    -->
    <div class="containermodule containermodule_senior">
        <div class="senioritems">
            <containermodule modulename="我的学员" statistics="100位" @onclick="()=>{global_routerpush('mystudents')}"></containermodule>
        </div>
        <div class="senioritems" @click="()=>{global_routerpush('teacherinfo')}">
            <containermodule modulename="课程管理" statistics="275课"></containermodule>
        </div>
        <div class="senioritems" @click="()=>{global_routerpush('teacherinfo')}">
            <containermodule modulename="教师管理" statistics="100位"></containermodule>
        </div>
        <div class="senioritems" @click="()=>{global_routerpush('teacherinfo')}">
            <containermodule modulename="学员管理" statistics="300位"></containermodule>
        </div>
    </div>
    <div class="containermessage">
        <div class="messagetop">
          <text class="messagetoptext1">消息</text>
          <text class="messagetoptext2">10</text>
          <text class="messagetoptext3">共23条</text>
        </div>
        <div style="flex-direction:column">
          <contidinglist @btnclick="onbtnclick"></contidinglist>
          <contidinglist @btnclick="onbtnclick"></contidinglist>
          <contidinglist @btnclick="onbtnclick"></contidinglist>
          <contidinglist @btnclick="onbtnclick"></contidinglist>
          <contidinglist @btnclick="onbtnclick"></contidinglist>
        </div>
    </div>
  </scroller>
</template>

<script>
import {toast, getImg} from '@/common/public'
import containermodule from './components/containermodule'
import contidinglist from './components/contidinglist'
import Navigation from '@/components/Navigation/Navigation'
export default {
  components: {
    Navigation, containermodule, contidinglist
  },
  data () {
    return {
      logo: ''
    }
  },
  computed: {
    imageicon () {
      return getImg('navigation_icon1.png')
    }
  },
  methods: {
    onbtnclick () {
      console.log(111);
      toast('收到点击事件')
    }
  }
}
</script>

<style scoped lang="less">
@import url('./index.less');
</style>
