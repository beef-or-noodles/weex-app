<template>
    <div>
        <layout>

            <sHeader v-if="type == 1"></sHeader>
            <coverHeader title="套课名称" v-else></coverHeader>
            <div class="mainBox shadeBox">
                <div class="s_box s_cbox">
                    <scroller scroll-direction="horizontal" class="scrollers">
                        <div class="listBox" v-for="(item,index) in 6" :key="index">
                            <div class="course">
                                <img class="courseImg" :src="courseImg" alt="">
                                <div class="course_c">
                                    <div class="course_bg" :class="[index%2 == 1?'opacity_bg':'']">
                                        <div class="noneBox1"></div>
                                        <div class="noneBox2"></div>
                                    </div>
                                    <div class="couese_mes">
                                        <div class="cou_img">
                                            <img class="cou_imgs" src="https://aimusic-data.oss-cn-hangzhou.aliyuncs.com/test/otherFiles/1575018297860WX20191128-224734%25402x.png" alt="">
                                        </div>
                                        <text class="cou_title whitespace1">约翰·汤普森简易钢琴</text>
                                        <div class="plan">
                                            <div class="bar">
                                                <div class="planBar" :style="{width:setWidthBar(index*10)+'wx'}"></div>
                                            </div>
                                            <text class="cent">{{index*10}}%</text>
                                        </div>
                                        <div class="studytype">
                                            <studentType :type="1"></studentType>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="org">
                                <div>
                                    <img class="orgicon" src="https://aimusic-data.oss-cn-hangzhou.aliyuncs.com/test/otherFiles/1575274113936%25E9%25BB%2598%25E8%25AE%25A4%25E5%259B%25BE3d%25203.png" alt="">
                                </div>
                                <text class="orgTxt">天籁艺术 ></text>
                            </div>
                        </div>
                    </scroller>
                </div>
            </div>
            <div class="message" v-if="message&&type==1">
                <div class="messageBox">
                    <img class="dialog" :src="diaIcon" alt="">
                    <div class="m_txtBox">
                        <text class="m_txt">你好，吴同学</text>
                        <text class="m_txt1">你的作业练习还未完成，快开始今天的练习吧！</text>
                    </div>
                    <img class="cloase" @click="message=false" :src="closeIcon" alt="">
                </div>
            </div>
            <image v-if="type==1" class="monkey" @click="message=true" :src="monkeyIcon" alt=""></image>
        </layout>
    </div>
</template>

<script>
import {getImg} from '@/common/public'
import gradeIcon from '@/components/gradeIcon/grade_icon'
import studentType from '@/components/studentType/studentType'
import sHeader from './components/sHeader'
import coverHeader from './components/coverHeader'
import layout from './components/layout'
export default {
  name: 'index',
  components: {
    gradeIcon, studentType, sHeader, coverHeader, layout
  },
  computed: {
    monkeyIcon () {
      return getImg('s_animal.png')
    },
    diaIcon () {
      return getImg('s_dialog.png')
    },
    closeIcon () {
      return getImg('s_close.png')
    },
    courseImg () {
      return getImg('s_index_book.png')
    }
  },
  data () {
    return {
      message: false,
      type: 1 // 1:首页 2套课详情
    }
  },
  methods: {
    boxClick (type) {
      this.toast({
        type: 'success',
        message: 'hahaha'
      })
    },
    setWidthBar (width) {
      let num = 90 / 100
      return num * width
    }
  }
}
</script>

<style lang="less" scoped>
    @import "../../less/public";
    .txt{
        font-size: 13wx;
    }
    .mainBox{
        margin-top: 15wx;
        border-radius: 46wx;
        padding-bottom:6wx ;
    }
    .message{
        position: absolute;
        width: 280wx;
        height: 220wx;
        right:0;
        bottom: 0;
    }
    .monkey{
        position: absolute;
        width: 120wx;
        height: 120wx;
        right:0;
        bottom: 0;
    }
    .messageBox{
        height: 136wx;
    }
    .dialog{
        width:200wx;
        height: 136wx;
        position: absolute;
    }
    .m_txtBox{
        position: absolute;
        left: 25wx;
        top: 20wx;
        width: 155wx;
        height: 80wx;
        padding: 5wx;
        align-items: center;
    }
    .m_txt{
        font-size: 13wx;
        color: white;
        font-weight: 500;
    }
    .m_txt1{
        color: white;
        font-size: 11wx;
        color: white;
        margin-top: 5wx;
    }
    .cloase{
        width: 25wx;
        height: 25wx;
        position: absolute;
        left: 153wx;
    }

    .s_cbox{
        height:252wx;
        border-radius: 46wx;
        align-items: center;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    .scrollers{
        width: 620wx;
        height: 220wx;
        flex-direction: row;
    }
    .listBox{
        width: 200wx;
        height: 220wx;
        background-color: white;
        margin-right: 15wx;
        align-items: center;
    }
    .org{
        height: 28wx;
        flex-direction: row;
        background-color: @themecolor;
        border-radius: 28wx;
        align-items: center;
        min-width: 95wx;
        margin-top: 10wx;
        padding: 3wx;
    }
    .orgicon{
        width: 22wx;
        height: 22wx;
        border-radius: 22wx;
    }
    .orgTxt{
        font-size: 11wx;
        margin-left: 5wx;
        font-weight: 500;
    }
    .course{
        width: 198wx;
        height: 180wx;
        position: relative;
        align-items: center;
    }
    .courseImg{
        width: 198wx;
        height:39wx;
        position: absolute;
        bottom: 0;
    }
    .course_c{
        width: 139wx;
        height: 155wx;
        align-items: center;
    }
    .couese_mes{
        width: 139wx;
        height: 145wx;
        background-color: #FFD891;
        padding: 5px;
        border-top-left-radius: 12wx;
        border-top-right-radius: 12wx;
        align-items: center;
    }
    .studytype{
        position: absolute;
        top: 20wx;
        left: 5wx;
        width: 55wx;
        height: 26wx;
    }
    .noneBox1{
        width:113wx;
        height: 6wx;
        background-color:#7A4CFF ;
        border-top-left-radius: 12wx;
        border-top-right-radius: 12wx;
    }
    .noneBox2{
        width:125wx;
        height: 6wx;
        background-color:#FF8738 ;
        border-top-left-radius: 12wx;
        border-top-right-radius: 12wx;
    }
    .cou_img{
        width: 129wx;
        height: 88wx;
        border-radius: 12wx;
        border-style:solid;
        border-width: 2wx;
        border-color: white;
        overflow: hidden;
    }
    .cou_imgs{
        width: 125wx;
        height: 84wx;
        border-radius: 12wx;
    }
    .course_bg{
        align-items: center;
    }
    .opacity_bg{
        opacity: 0;
    }
    .cou_title{
        font-size: 13wx;
        font-weight: 500;
        margin: 8wx 0;
    }
    .cent{
        font-size: 11wx;
        font-weight: 500;
        margin-left:10wx;
    }
    .plan{
        flex-direction: row;
        align-items: center;
    }
    .bar{
        width: 90wx;
        height: 6wx;
        border-radius: 6wx;
        background-color: white;
    }
    .planBar{
        height: 6wx;
        border-radius: 6wx;
        background-color: #52B938;
    }
</style>
