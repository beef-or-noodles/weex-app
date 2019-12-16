<template>
    <div>
        <div class="header">
            <div class="left">
                <div class="shadeBox">
                    <div class="s_box">
                        <div class="h_icon">
                            <text v-if="true" class="visitor">游</text>
                            <img v-else class="icon" src="https://aimusic-data.oss-cn-hangzhou.aliyuncs.com/test/otherFiles/1575018297860WX20191128-224734%25402x.png" alt="">
                        </div>
                        <div class="h_txt">
                            <div class="nickName">
                                <text class="txt">游客账号</text>
                            </div>
                            <div class="grade">
                                <div class="gradBox" v-if="true">
                                    <text class="logintxt">点击登录</text>
                                </div>
                                <div class="gradBox" v-else>
                                    <text class="logintxt">等级：C1</text>
                                    <grade-icon :type="1"></grade-icon>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="right">
                <div class="shadeBox t_box">
                    <div class="s_box s_sbox">
                        <div class="h_stxt">
                            <div class="starNum">
                                <text class="textNum">教学系统</text>
                            </div>
                            <div class="mNum tNum">
                                <text class="txtm">50</text>
                            </div>
                        </div>
                        <div class="h_icon h_sicon">
                            <img class="staricon" :src="tManger" alt="">
                        </div>
                    </div>
                </div>
                <div class="shadeBox">
                    <div class="s_box s_sbox">
                        <div class="h_stxt">
                            <div class="starNum">
                                <text class="textNum">99</text>
                            </div>
                        </div>
                        <div class="h_icon h_sicon">
                            <img class="staricon" :src="star" alt="">
                        </div>
                    </div>
                </div>
                <div class="shadeBox m_box">
                    <div class="s_box">
                        <div class="h_icon h_micon">
                            <img class="staricon" :src="messageIcon" alt="">
                        </div>
                        <div class="mNum">
                            <text class="txtm">50</text>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {getImg} from '@/common/public'
export default {
  name: 'sHeader',
  computed: {
    star () {
      return getImg('s_star.png')
    },
    tManger () {
      return getImg('s_tv.png')
    },
    messageIcon () {
      return getImg('s_inde_message.png')
    }
  }
}
</script>

<style lang="less" scoped>
    @import "../../../less/public";
    .txt{
        font-size: 13wx;
    }
    .header{
        flex-direction: row;
    }
    .left{
        flex: 1;
        align-items: flex-start;
    }
    .right{
        flex: 1;
        flex-direction: row;
        justify-content: flex-end;
    }
    .center{
        flex:1;
        align-items: center;
    }
    .s_box{
        padding: 5px;
        flex-direction: row;
        justify-content: center;
        height: 46wx;
    }
    .s_sbox{
        flex-direction: row-reverse;
    }
    .h_icon{
        width: 37wx;
        height: 37wx;
        border-radius: 37wx;
        align-items: center;
        justify-content: center;
        background-color: @themecolor;
    }
    .h_sicon{
        background-color: @border-color;
    }
    .icon{
        width: 37wx;
        height: 37wx;
        border-radius: 37wx;
    }
    .staricon{
        width: 28wx;
        height: 28wx;
        border-radius: 28wx;
    }
    .visitor{
        font-size: 18wx;
        font-weight: 500;
    }
    .h_txt{
        justify-content: center;
        margin: 0 30wx 0 9wx;
    }
    .h_stxt{
        justify-content: center;
        margin-right: 5wx;
        margin-left: -6wx;
    }
    .nickName{
        font-weight: 500;
    }
    .gradBox{
        flex-direction: row;
        justify-content: center;
        margin-top: 3wx;
    }
    .logintxt{
        font-size: 11wx;
        color: @border-color;
    }
    .textNum{
        font-size: 17wx;
        color: @border-color;
        font-weight: 500;
    }
    .g_icon{
        width: 13wx;
        height: 13wx;
    }
    .starNum{
        background-color:rgba(255,226,189,1);
        border-bottom-right-radius: 30wx;
        border-top-right-radius: 30wx;
        padding: 5wx 13wx;
    }
    .m_box{
        margin-left: 9wx;
    }
    .t_box{
        margin-right: 9wx;
    }
    .h_micon{
        background-color: white;
        position: relative;
    }
    .mNum{
        position: absolute;
        width: 15wx;
        height: 15wx;
        background-color: @border-color;
        align-items: center;
        justify-content: center;
        border-radius: 50wx;
        right: 8wx;
    }
    .txtm{
        font-size:9wx;
        color: white;
    }
    .tNum{
        top: 0;
        right: 0;
    }
</style>
