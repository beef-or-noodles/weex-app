<template>
    <div>
        <div class="toast">
            <div class="toastbox">
                <image class="img" v-if="data.type==='success'" :src="successImg"></image>
                <image class="img" v-if="data.type==='warn'" :src="warnImg"></image>
                <image class="img" v-if="data.type==='error'" :src="errorImg"></image>
                <div class="txtBox">
                    <text class="toasttxt">{{data.message}}</text>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {getImg} from '@/common/public'
import {mapMutations} from 'vuex'
export default {
  name: 'wtoast',
  computed: {
    errorImg () {
      return getImg('s_error.png')
    },
    successImg () {
      return getImg('s_success.png')
    },
    warnImg () {
      return getImg('s_warn.png')
    }
  },
  created () {
    setTimeout(() => {
      this.setToast({show: false})
    }, this.data.time)
  },
  props: {
    data: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  methods: {
    ...mapMutations(['setToast'])
  }
}
</script>

<style lang="less" scoped>
    .toast{
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        align-items: center;
        justify-content: center;
    }
    .toastbox{
        width: 148wx;
        height: 148wx;
        background-color: #303032;
        border-radius:46wx;
        color: white;
        align-items: center;
    }
    .img{
        width: 50wx;
        height: 50wx;
        margin-top: 38wx;
    }
    .txtBox{
        width: 148px;
    }
    .toasttxt{
        font-size: 13wx;
        color: white;
        text-align: center;
        margin-top: 12px;
        padding: 0 10wx;
    }
</style>
