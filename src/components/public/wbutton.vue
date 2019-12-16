<template>
    <div>
        <div class="box" :class="[disabled?'disabled':'']"  @click="clicks">
            <div class="buttom">
                <text class="btx">{{text}}</text>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'wbutton',
  data () {
    return {

    }
  },
  props: {
    text: {
      type: String,
      default: '确认'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    clicks () {
      if (!this.disabled) {
        this.$emit('btnclick')
      }
    }
  }
}
</script>

<style lang="less" scoped>
    @import "../../less/public.less";
    .box{
        height: 37wx;
        border-radius: 20wx;
        background-color: @border-color ;
    }
    .disabled{
        opacity: .5;
    }
    .buttom{
        height: 33wx;
        min-width:70wx;
        border-radius: 20wx;
        background-color:@themecolor;
        align-items: center;
        justify-content: center;
        padding: 0 29wx;
    }
    .btx{
        font-weight: 600;
        font-size: 16wx;
        color: black;
    }
</style>
