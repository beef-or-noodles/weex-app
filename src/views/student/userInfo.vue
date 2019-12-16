<template>
    <div>
        <div class="userInfo">
            <Navigation title="个人中心">
                <div slot="headerright">
                    <image class="setIcon" :src="setIcon" alt=""></image>
                </div>
            </Navigation>
            <div class="info_box">
                <div class="info_icon">
                    <image class="info_icon" src="https://aimusic-data.oss-cn-hangzhou.aliyuncs.com/test/otherFiles/15743216260132.png"></image>
                </div>
                <div class="info_mes">
                    <div class="info_title">
                        <div class="i_ti">
                            <text class="name">吴同学</text>
                            <gradeIcon type="1" :row="false"></gradeIcon>
                        </div>
                        <div class="org_detail">
                            <image class="org_icon" src="https://aimusic-data.oss-cn-hangzhou.aliyuncs.com/test/otherFiles/15743216260132.png"></image>
                            <text class="org_text">院校风采</text>
                            <image class="org_icon2" :src="rightIcon"></image>
                        </div>
                    </div>
                    <div class="info_bar">
                        <div class="bar">
                            <div class="planBar" :style="{width:setWidthBar(10)+'px'}"></div>
                        </div>
                    </div>
                    <div class="info_num">
                        <div class="i_n1">
                            <text class="n1">等级：A0</text>
                        </div>
                        <div class="i_n2">
                            <text class="n1">经验：80/200</text>
                        </div>
                    </div>
                </div>
            </div>
            <div class="contentBox">
                <div class="y_bg">
                    <div class="con_top">
                        <text class="co_left">已学课程</text>
                        <text class="co_right">共20课</text>
                    </div>
                </div>
                <div class="line"></div>
                <list  v-if="true" class="list" @loadmore="fetch" loadmoreoffset="10">
                    <cell class="cell" @click="detail" :key="index" v-for="(item,index) in lists">
                        <div class="panel">
                            <div class="ls_icon">
                                <image class="ls_icon" src="https://aimusic-data.oss-cn-hangzhou.aliyuncs.com/test/otherFiles/15743216260132.png"></image>
                            </div>
                            <div class="ls-text">
                                <text class="ls_title whitespace1">第一节【乐理知识-1】</text>
                                <text class="ls_time">2019/01/15 17:00</text>
                            </div>
                            <div class="ls_msg">
                                <div class="ls_t">
                                    <text class="ms">2</text>
                                </div>
                                <image class="org_icon2 ls_i" :src="rightIcon"></image>
                            </div>
                        </div>
                    </cell>
                </list>
                <div v-else class="nomes">
                    <noMessage btnTitle="去学习" @btnClick="goStudy" :type="2" :row="false" title="你还没有学习完任何课程"></noMessage>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navigation from '@/components/Navigation/Navigation'
import gradeIcon from '@/components/gradeIcon/grade_icon'
import noMessage from '@/components/public/noMessage'
import {getImg} from '@/common/public'
export default {
  name: 'userInfo',
  components: {
    Navigation, gradeIcon, noMessage
  },
  data () {
    return {
      lists: [1, 2, 3]
    }
  },
  computed: {
    setIcon () {
      return getImg('s_settle.png')
    },
    rightIcon () {
      return getImg('navigation_icon1.png')
    }
  },
  methods: {
    setWidthBar (width) {
      let num = 482 / 100
      return num * width
    },
    fetch (event) {
      setTimeout(() => {
        const length = this.lists.length
        for (let i = length; i < length + 5; ++i) {
          this.lists.push(i + 1)
        }
      }, 300)
    },
    /* 去学习按钮 */
    goStudy () {
      console.log('点击')
    },
    detail () {}
  }
}
</script>

<style lang="less" scoped>
    @import url('../../less/public.less');
    .userInfo{
        background-color: white;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }
    .setIcon{
        width: 40px;
        height: 40px;
    }
    .info_box{
        background-color: @themecolor;
        padding: 40px;
        flex-direction: row;
        align-items: center;
        padding-bottom: 60px;
    }
    .info_icon{
        width: 140px;
        height: 140px;
        border-radius: 140px;
    }
    .info_mes{
        flex: 1;
        padding-left: 30px;
    }
    .info_title{
        flex-direction: row;
        margin-bottom: 30px;
    }
    .i_ti{
        flex-direction: row;
        align-items: center;
    }
    .name{
        font-size: 40px;
        font-weight: 500;
        margin-right: 15px;
        flex: 1;
    }
    .org_detail{
        flex: 1;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
    }
    .org_icon{
        width: 40px;
        height: 40px;
        border-radius: 40px;
    }
    .org_text{
        font-size:24px;
        font-weight: 500;
        margin: 0 10px;
    }
    .org_icon2{
        width: 24px;
        height: 24px;
        transform: rotate(180deg);
    }
    .bar{
        width: 495px;
        height: 12px;
        border-radius: 12px;
        background-color: white;
    }
    .planBar{
        width: 0;
        height: 12px;
        border-radius: 12px;
        background-color: @border-color;
    }
    .info_num{
        flex-direction: row;
        margin-top: 14px;
    }
    .n1{
        font-size: 24px;
        color:#303032 ;
    }
    .i_n1{
        flex: 1;
    }
    .i_n2{
        justify-content: flex-end;
    }

    .contentBox{
        background-color: white;
        border-top-left-radius: 60px;
        border-top-right-radius: 60px;
        margin-top: -10px;
        align-items: center;
    }
    .y_bg{
        background-color: @themecolor;
        padding-top: 10px;
    }
    .con_top{
        flex-direction: row;
        align-items: center;
        background-color: white;
        border-top-left-radius: 60px;
        border-top-right-radius: 60px;
        padding: 40px 40px 20px 40px;
        width: 750px;
    }
    .line{
        width: 670px;
        height: 1px;
        background-color:#DDDDDD;
    }
    .co_left{
        font-size: 36px;
        font-weight: 500;
        padding: 20px 0;
        flex: 1;
    }
    .co_right{
        justify-content: flex-end;
        color: #98989B;
    }
    .panel{
        background-color: #F1F1F5;
        padding: 20px;
        border-radius: 60px;
        margin-top: 30px;
        justify-content: right;
        flex-direction: row;
        align-items: center;
    }
    .ls_icon{
        width: 100px;
        height: 100px;
        border-radius: 100px;
    }
    .ls-text{
        margin-left: 20px;

    }
    .ls_title{
        font-size:32px;
        width: 410px;
    }
    .ls_time{
        margin-top: 14px;
        color: #98989B;
        font-size: 28px;
    }
    .ls_msg{
        flex-direction: row;
        justify-content: flex-end;
        width: 100px;
    }
    .ls_t{
        background-color: @border-color;
        width: 36px;
        min-height: 36px;
        border-radius: 36px;
        align-items: center;
        justify-content: center;
        margin-right: 20px;
    }
    .ms{
        font-size: 24px;
        color: white;
    }
    .ls_i{
        width: 40px;
        height: 40px;
        opacity: .5;
    }
    .cell{
        padding: 0 40px;
    }

</style>
