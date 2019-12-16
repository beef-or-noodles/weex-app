<template>
    <div class="popup" @click="">
        <div class="container">
            <div class="characters">
                <div v-if="isstyle == 2" class="rowimg"><image class="image" :src="imageicon"></image></div>
                <div><text class="headline">{{headline}}</text></div>
                <div v-if="isstyle == 1 && suggest"><text class="suggest">{{suggest}}</text></div>
            </div>
            <div class="btncontainer">
                <div class="btns btncancel" @click="onbtns(0)"><text class="btntext">{{btntext1}}</text></div>
                <div class="btns btnverify" @click="onbtns(1)"><text class="btntext">{{btntext2}}</text></div>
            </div>
        </div>
    </div>
</template>

<script>
import {getImg} from '@/common/public'
export default {
  props: {
    isstyle: {type: Number, default: 1}, // 风格 1纯文字 2带图标
    headline: {type: String, default: '是否要退出编辑？'},
    suggest: {type: String, default: '退出后，将不会保存你的编辑信息'},
    btntext1: {type: String, default: '取消'},
    btntext2: {type: String, default: '确认'}
  },
  computed: {
    imageicon () {
      return getImg('s_success.png')
    }
  },
  methods: {
    onbtns (type = 1) {
      this.$emit('btnclick', type)
    }
  }
}
</script>

<style scoped lang="less">
    @import url('../../less/public.less');
    .popup {
        display: flex;
        position:fixed;
        top:0;
        bottom:0;
        left:0;
        right:0;
        background-color:rgba(0,0,0,0.5);
        justify-content: center;
        align-items: center;
    }
    .container{
        width:670px;
        min-height:100px;
        padding:60px 50px;
        background-color: #fff;
        border-radius:16px;
    }
    .rowimg{
        align-items: center;
        justify-content: center;
        padding-bottom:35px;
    }
    .image{
        width:140px;
        height:140px;
    }
    .characters{
        padding:20px 0 60px 0;
    }
    .headline{
        color:#303032;
        font-size:36px;
        text-align: center;
    }
    .suggest{
        color:#656568;
        font-size:28px;
        text-align: center;
        padding-top:20px;
    }
    /**按钮组**/
    .btncontainer {
        flex-direction: row;
        padding:2px 0;
    }
    .btns{
        flex:1;
        height:90px;
        border-radius:50px;
        border-width:2px;
        border-style:solid;
    }
    .btncancel{
        border-color:#303032;
        background-color:#fff;
        margin-right:20px;
    }
    .btnverify{
        border-color:#FFD048;
        background-color:#FFD048;
    }
    .btntext{
        color:#303032;
        font-size:34px;
        line-height:90px;
        text-align: center;
    }
</style>
