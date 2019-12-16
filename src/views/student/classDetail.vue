<template>
    <div>
        <layout>
            <coverHeader title="约翰·汤普森简易钢琴" star-num="3/9"></coverHeader>
            <div class="content"></div>
                <scroller scroll-direction="horizontal" class="scroller">
                    <div class="list" v-for="item in 4" :key="item"
                        :class="[bgType(item)]"
                    >
                        <div class="topBox">
                            <image v-if="item==1" :src="icon1" class="icon"></image>
                            <image v-if="item==2" :src="icon2" class="icon"></image>
                            <image v-if="item==3" :src="icon3" class="icon"></image>
                            <image v-if="item==4" :src="icon4" class="icon"></image>
                            <div class="plan" :class="[bgType(item)]" v-if="true">
                                <text class="planTxt">80%</text>
                            </div>
                            <div class="over" v-else>
                                <image v-if="item==1" :src="icon5" class="icon2"></image>
                                <image v-if="item==2" :src="icon6" class="icon2"></image>
                                <image v-if="item==3" :src="icon7" class="icon2"></image>
                                <image v-if="item==4" :src="icon8" class="icon2"></image>
                            </div>

                            <text class="t_title">课程回放</text>
                            <text class="t_time">15分钟</text>
                        </div>
                        <div class="star">
                            <fivepointedstar :maxstar="3" :minstar="1"></fivepointedstar>
                        </div>
                        <text class="beginT">未开始</text>
                    </div>
                </scroller>
        </layout>
    </div>
</template>

<script>
import {getImg} from '@/common/public'
import layout from './components/layout'
import coverHeader from './components/coverHeader'
import fivepointedstar from '@/components/fivepointedstar/fivepointedstar'
export default {
  name: 'messageDetail',
  components: {
    layout, coverHeader, fivepointedstar
  },
  computed: {
    icon1 () {
      return getImg('teacher_icon14.png')
    },
    icon2 () {
      return getImg('teacher_icon16.png')
    },
    icon3 () {
      return getImg('teacher_icon15.png')
    },
    icon4 () {
      return getImg('teacher_icon13.png')
    },
    icon5 () {
      return getImg('s_over1.png')
    },
    icon6 () {
      return getImg('s_over2.png')
    },
    icon7 () {
      return getImg('s_over3.png')
    },
    icon8 () {
      return getImg('s_over4.png')
    }
  },
  methods: {
    bgType (item) {
      let txt = ''
      switch (item) {
        case 1:
          txt = 'bg1'
          break
        case 2:
          txt = 'bg2'
          break
        case 3:
          txt = 'bg3'
          break
        case 4:
          txt = 'bg4'
          break
      }
      return txt
    }
  }
}
</script>

<style lang="less" scoped>
    @import "../../less/public";
    .txt{
        font-size: 11wx;
    }
    .content{
        width: 620wx;
        flex-direction: row;
        margin-top: 15wx;
    }
    .scroller{
         flex-direction: row;
     }
    .list{
        width: 155wx;
        height: 237wx;
        margin-right: 7wx;
        border-radius: 46wx;
        align-items: center;
    }
    .topBox{
        width: 155wx;
        height: 155wx;
        border-radius: 46wx;
        background-color: white;
        align-items: center;
        justify-content: center;
    }

    .icon{
        width: 90wx;
        height: 90wx;
    }
    .t_title{
        font-size: 17wx;
        font-weight: 500;
        margin-top: 15wx;
    }
    .t_time{
        font-size: 13wx;
        color: #98989B;
        margin-top: 5wx;
    }
    .bg1{
        background-color: @border-color;
    }
    .bg2{
        background-color: #3E8CFC;
    }
    .bg3{
        background-color: #52B938;
    }
    .bg4{
        background-color: #7A4CFF;
    }
    .star{
        margin: 14wx 0;
    }
    .beginT{
        color: white;
        font-weight: 500;
        font-size: 15wx;
    }
    .plan{
        width: 46wx;
        height: 46wx;
        border-radius: 55wx;
        border-color: white;
        border-width: 4wx;
        border-style: solid;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 15wx;
        right: 15wx;
    }
    .planTxt{
        font-size: 17wx;
        color: white;
    }
    .over{
        position: absolute;
        top: 15wx;
        right: 15wx;
    }
    .icon2{
        width:55wx ;
        height: 55wx;
    }
</style>
