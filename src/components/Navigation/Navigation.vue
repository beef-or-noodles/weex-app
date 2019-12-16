<template>
    <div class="navigation" :class="[isfullscreen?'istransparent':'']">
        <div class="goback">
            <image @click="oniconback" class="imageicon" :src="imageicon"></image>
        </div>
        <div class="title">
            <text class="titletetx" :class="[isstyle == 2?'titletetx_white':'']">{{title}}</text>
        </div>
        <div class="goback">
            <slot name="headerright"></slot>
        </div>
    </div>
</template>

<script>
import {getImg} from '@/common/public'
import {NAVIGATION_CUSTOMKEY} from '@/common/config'
export default {
  props: {
    isfullscreen: {type: Boolean, default: false}, // 是否是全屏
    isstyle: {type: Number, default: 1}, // 风格 1黑色 2白色
    title: {type: String, default: '标题'},
    routername: {type: String, default: ''},
    routerparameter: {
      type: [Object],
      default: function () {
        return {}
      }
    }
  },
  computed: {
    imageicon () {
      let isstyle = this.isstyle
      if (isstyle === 2) {
        return getImg('navigation_icon1_white.png')
      } else {
        return getImg('navigation_icon1.png')
      }
    }
  },
  methods: {
    oniconback () {
      const rename = this.routername
      if (rename !== '') {
        if(NAVIGATION_CUSTOMKEY === rename){
          this.$emit('goback')
        } else {
          let _parameter = this.routerparameter
          if (JSON.stringify(_parameter) === '{}' || !_parameter) {
            this.global_routerpush(rename)
          } else {
            this.global_routerpush(rename, _parameter)
          }
        }
      } else {
        this.$router.go(-1)
      }
    }
  }
}
</script>

<style scoped lang="less">
    @import url('../../less/public.less');
    .navigation {
        display:flex;
        flex-direction: row;
        background-color: @themecolor;
        height:@navigation_height;
        align-items:center;
    }
    .istransparent{
        position: fixed;
        left:0;
        right:0;
        top:0;
        color:#fff;
        background-color: transparent;
        z-index:10;
    }
    .goback {
        color:#fff;
        padding:0 @themepadding;
    }
    .imageicon {
        width:40px;
        height:40px;
    }
    .title{
        flex:1;
        align-items:center;
    }
    .titletetx{
        font-size:36px;
    }
    .titletetx_white{
        color:#fff;
    }
</style>
