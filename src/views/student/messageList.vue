<template>
    <div>
        <layout>
            <coverHeader title="消息中心"></coverHeader>
            <div class="shadeBox">
                <div class="s_box">
                    <div class="top">
                        <div class="top_left">
                            <text class="txt alltxt">共12条</text>
                        </div>
                        <div class="top_center">
                            <text class="c_txt">4条未读</text>
                        </div>
                        <div class="top_right">
                            <text class="txt clear_txt">清除未读</text>
                        </div>
                    </div>
                    <div class="content">
                        <scroller class="scrollers">
                            <div v-if="false">
                                <div class="list" :class="[item==1?'l_active':'']" :key="item" v-for="item in 8">
                                    <div class="l_icon">
                                        <image class="icon" src="https://aimusic-data.oss-cn-hangzhou.aliyuncs.com/test/otherFiles/15743216260132.png"></image>
                                    </div>
                                    <div class="l_left">
                                        <text class="l_title whitespace1">系统消息</text>
                                        <text class="l_desc whitespace1">你的孩子已经完成了【约翰·汤普森简易钢琴2】课程学习！你的孩子已经完成了【约翰·汤普森简易钢琴2】课程学习！你的孩子已经完成了【约翰·汤普森简易钢琴2】课程学习！你的孩子已经完成了【约翰·汤普森简易钢琴2】课程学习！你的孩子已经完成了【约翰·汤普森简易钢琴2】课程学习！</text>
                                        <text class="time txt">05-03</text>
                                    </div>
                                </div>
                            </div>
                            <noMessage v-else></noMessage>
                        </scroller>
                    </div>
                </div>
            </div>
        </layout>
    </div>
</template>

<script>
import layout from './components/layout'
import coverHeader from './components/coverHeader'
import noMessage from '@/components/public/noMessage'
export default {
  name: 'messageList',
  components: {
    layout, coverHeader,noMessage
  }
}
</script>

<style lang="less" scoped>
    @import "../../less/public";
    .txt{
        font-size: 11wx;
    }
    .shadeBox{
        border-radius: 46wx;
        margin-top: 15wx;
        padding-bottom: 6wx;
    }
    .s_box{
        border-radius: 46wx;
        height:252wx;
        padding: 10wx 25wx;
    }
    .top{
        border-bottom-style: solid;
        border-bottom-width:1wx ;
        border-bottom-color: #DDDDDD;
        flex-direction: row;
        padding: 9wx 0;
    }
    .top_left{
        flex: 1;
    }
    .top_center{
        flex: 1;
        align-items: center;
    }
    .top_right{
        flex: 1;
        align-items: flex-end;
    }
    .alltxt{
        color:#656568 ;
    }
    .c_txt{
        font-size: 13wx;
        font-weight: 500;
    }
    .clear_txt{
        color: @border-color;
    }
    .scrollers{
        height: 200wx;
    }
    .list{
        padding:9wx ;
        background-color: #F0F0F0;
        margin-top: 9wx;
        border-radius: 60wx;
        flex-direction: row;
        align-items: center;

    }
    .l_active{
        background-color: @themecolor;
    }
    .icon{
        width: 37wx;
        height: 37wx;
        border-radius: 40wx;
    }
    .l_left{
        margin-left: 9wx;
    }
    .l_title{
        font-size: 13wx;
        font-weight: 500;
    }
    .l_desc{
        width: 520wx;
        margin-top: 3wx;
        font-size: 11wx;
        color: #656568;
    }
    .time{
        position: absolute;
        right: 0;
        top:0;
    }
</style>
