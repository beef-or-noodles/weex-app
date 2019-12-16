<template>
    <div>
        <div class="select" @click="selectClic">
            <image class="img" :src="img"></image>
            <text class="text">{{value}}</text>
        </div>
        <wxc-popup popup-color="white"
                   style="z-index: 90;"
                   :show="show"
                   @wxcPopupOverlayClicked="popupOverlayBottomClick"
                   pos="bottom"
                   height="200">
            <scroller>
            <div class="demo-content">
                <scroller>
                    <div class="selectBox">
                        <text @click="selectopstion(item)" :class="[item.checked?'opstionActive':'']" v-for="(item,index) in selectList" :key="index" class="opstion">{{item.title}}</text>
                    </div>
                </scroller>
            </div>
            </scroller>
        </wxc-popup>
    </div>
</template>

<script>
import {getImg} from '@/common/public'
import {WxcPopup} from 'weex-ui'
export default {
  name: 'wselect',
  components: {WxcPopup},
  data () {
    return {
      value: 'value',
      show: false,
      selectList: []
    }
  },
  watch: {
    list: {
      handler: function (val) {
        this.selectList = val
        val.forEach(ls => {
          if (ls.checked) {
            this.value = ls.title
          }
        })
      },
      immediate: true
    }
  },
  props: {
    list: { // select数据
      type: [Array],
      default: function () {
        return []
      }
    }
  },
  computed: {
    img () {
      return getImg('s_triangle.png')
    }
  },
  methods: {
    selectClic () {
      this.show = true
    },
    popupOverlayBottomClick () {
      this.show = false
    },
    selectopstion (item) {
      this.list.forEach(ls => {
        ls.checked = false
      })
      item.checked = true
      this.value = item.title
      this.show = false
      this.$emit('changes', item)
    }
  }
}
</script>

<style lang="less" scoped>
    @import "../../less/public.less";
    .select{
        position: relative;
        flex-direction: row;
        min-width: 60wx;
        padding-right: 15px;
        align-items: center;
    }
    .img{
        position: absolute;
        width: 13wx;
        height: 13wx;
        right: 0;
    }
    .text{
        font-size: 13wx;
    }
    .selectBox{
        align-items: center;
        padding: 20wx 0;
    }
    .opstion{
        font-size: 18wx;
        color: @fs-info;
        padding: 10wx 0;
  }
    .opstionActive{
        color: @border-color;
    }
</style>
