<template>
    <div>
        <div class="inputBox" v-if="styleType == 1">
            <div class="inputIcon" @click="passIconChange" v-if="pascontrol">
                <image class="img" :src="typess.passIcon"></image>
            </div>
            <input :maxlength="maxlength" class="input" :value="value" @change="inputChange" :type="typess.type" :placeholder="placeholder"/>
        </div>
        <div class="inputBox2"  v-if="styleType == 2">
            <div class="inputIcon" @click="passIconChange" v-if="pascontrol">
                <image class="img" :src="typess.passIcon"></image>
            </div>
            <text class="title2">{{title}}</text>
            <wselect v-if="type=='select'" @changes="selectChange" :list="selectList"></wselect>
            <input :maxlength="maxlength" v-else class="input input2" @change="inputChange" :value="value" :type="typess.type" :placeholder="placeholder"/>
        </div>
    </div>
</template>

<script>
import {getImg} from '@/common/public'
export default {
  name: 'winput',
  data () {
    return {
      types: 'password'
    }
  },
  computed: {
    typess () {
      let txt = this.types
      if (this.pascontrol) {
        if (txt === 'password') {
          return {type: 'password', passIcon: getImg('s_pasword_show.png')}
        } else {
          return {type: 'text', passIcon: getImg('s_pasword_hide.png')}
        }
      } else {
        return {type: txt, passIcon: ''}
      }
    }
  },
  watch: {
    type: {
      handler (newName, oldName) {
        this.types = newName
        if (newName === 'select') { // 如果是选择就处理出默认项 只是单选
          this.selectList.forEach(ls => {
            if (ls.value == this.value) {
              ls['checked'] = true
            } else {
              ls['checked'] = false
            }
          })
        }
      },
      immediate: true
    }
  },
  props: {
    placeholder: {
      type: String,
      default: '请输入内容'
    },
    type: {
      type: String,
      default: 'text'
    },
    value: {
      type: [String, Number],
      default: ''
    },
    maxlength: {
      type: [Number],
      default: 30
    },
    pascontrol: {// 是否使用密码显示隐藏按键
      type: Boolean,
      default: false
    },
    styleType: { // 使用样式
      type: [String, Number],
      default: 1
    },
    title: { // 样式2的左侧文字
      type: [String],
      default: '文字：'
    },
    selectList: { // select数据
      type: [Array],
      default: function () {
        return []
      }
    }
  },
  methods: {
    passIconChange () {
      let txt = this.types
      if (txt === 'password') {
        this.types = 'text'
      } else {
        this.types = 'password'
      }
    },
    selectChange (item) {
      this.$emit('selectChange', item)
    },
    inputChange (item) {
      this.$emit('changes', item.value)
    }
  }
}
</script>

<style lang="less" scoped>
    @import "../../less/public.less";
    .inputBox {
        padding-left: 20wx;
        height: 33wx;
        border-radius: 20wx;
        width: 240wx;
        background-color: @input-bg;
        margin-bottom: 14wx;
        justify-content: center;
        position: relative;
    }
    .input{
        width: 190wx;
        background-color: @input-bg;
        font-size: 13wx;
    }
    .inputIcon{
        position: absolute;
        width: 15px;
        height: 15px;
        right: 10wx;
    }
    .img{
        width: 15px;
        height: 15px;
    }
    .inputBox2{
        background-color: white;
        height: 30wx;
        margin-bottom: 5wx;
        position: relative;
        border-bottom-style: solid;
        border-bottom-width:1wx;
        border-bottom-color: #303032;
        flex-direction: row;
        justify-content: left;
        align-items: center;
    }
    .input2{
        background-color: white;
        width: 160wx;
    }
    .title2{
        font-size: 13wx;
        color: #303032;
        font-weight: 500;
    }
</style>
