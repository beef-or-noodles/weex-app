<template>
    <div>
        <div class="coverHeade">
            <div class="left">
                <image class="goback" :src="gobackicon" alt=""></image>
            </div>
            <div class="center">
                <div class="shadeBox">
                    <div class="s_box t_box">
                        <text class="txt title">{{title}}</text>
                    </div>
                </div>
            </div>
            <div class="right">
                <div class="shadeBox s_nobg" v-if="starNum">
                    <div class="s_box s_sbox s_nobg">
                        <div class="h_stxt">
                            <div class="starNum">
                                <text class="textNum">{{starNum}}</text>
                            </div>
                        </div>
                        <div class="h_icon h_sicon">
                            <img class="staricon" :src="star" alt="">
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
  name: 'coverHeader',
  computed: {
    gobackicon () {
      return getImg('s_back.png')
    },
    star () {
      return getImg('s_star.png')
    }
  },
  props: {
    starNum: {
      type: String,
      default: ''
    },
    title:{
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="less" scoped>
    @import "../../../less/public";
    .coverHeade{
        flex-direction: row;
    }
    .left{
        flex: 1;
        align-items: flex-start;
    }
    .center{
        flex: 1;
        align-items: center;
    }
    .right{
        flex: 1;
        align-items: flex-end;
    }
    .shadeBox{
        background-color: #28751F;
    }
    .goback{
        width: 46wx;
        height: 46wx;
    }
    .s_box{
        background-color: #52B938;
        align-items: center;
        justify-content: center;
    }
    .back{
        width: 25wx;
        height: 25wx;
    }
    .title{
        font-size: 17wx;
        color: white;
        font-weight: 500;
    }
    .t_box{
        padding: 0 22wx;
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
    .starNum{
        background-color:rgba(255,226,189,1);
        border-bottom-right-radius: 30wx;
        border-top-right-radius: 30wx;
        padding: 5wx 13wx;
    }
    .h_sicon{
        background-color: @border-color;
    }
    .h_stxt{
        justify-content: center;
        margin-right: 5wx;
        margin-left: -6wx;
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
    .textNum{
        font-size: 17wx;
        color: @border-color;
        font-weight: 500;
    }
    .s_nobg{
        background-color: rgba(0,0,0,0);
    }
</style>
