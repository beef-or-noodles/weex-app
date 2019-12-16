<template>
    <div>
        <div>
            <Navigation title="已学课程详情"></Navigation>
            <div class="content">
                <scroller>
                    <div class="con">
                       <div class="top">
                           <div class="classIcon">
                               <image class="classIcon" src="https://aimusic-data.oss-cn-hangzhou.aliyuncs.com/test/otherFiles/15743216260132.png"></image>
                           </div>
                           <div class="rightTitle">
                               <text class="t_t1">第一节【乐理知识-1】</text>
                               <text class="t_t2">2019/01/15 17:00</text>
                           </div>
                       </div>
                    </div>
                </scroller>
            </div>
        </div>
    </div>
</template>

<script>
import Navigation from '@/components/Navigation/Navigation'
export default {
  name: 'classMessage',
  components: {Navigation}
}
</script>

<style lang="less" scoped>
    @import url('../../less/public.less');
    .content{
        position: fixed;
        top: 80px;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: white;
        margin: 40px;
        padding: 30px;
        border-radius: 16px;
    }
    .con{
        height: 1600px;
    }
    .top{
        border-bottom-width:4px ;
        border-bottom-color:#DDDDDD ;
        padding-bottom: 28px;
        flex-direction: row;
        align-items: center;
    }
    .classIcon{
        width: 100px;
        height: 100px;
        border-radius: 100px;
    }
    .rightTitle{
        margin-left: 20px;
    }
    .t_t1{
        font-size: 32px;
        font-weight: 500;
    }
    .t_t2{
        font-size: 28px;
        color: #98989B;
        margin-top: 14px;
    }
</style>
