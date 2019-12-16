<!--列表编辑框-->
<template>
    <div class="rowlist" :class="[inputtype === 2?'hasavatar':'']">
      <div class="listtitle"><text class="listtitle_text">{{istitle}}</text></div>
      <template v-if="inputtype === 1">
        <div class="listright" v-if="isstate === 1">
          <text class="listright_text">{{isvalue}}</text>
        </div>
        <div class="listright" v-else>
          <input class="listright_text" :value="isvalue" :type="istype" :placeholder="placeholder" :maxlength="maxlength" @change="onChange"/>
        </div>
      </template>
      <template v-else-if="inputtype === 2">
        <div class="listright listright_right">
          <image class="imgs" :src="isvalue"></image>
        </div>
      </template>
    </div>
</template>
<script>
export default {
  data () {
    return {
      value: ''
    }
  },
  props: {
    inputtype: {type: Number, default: 1}, // 1输入框 2图片上传
    istitle: {type: String, default: '类名'}, // 左侧文字
    isstate: {type: Number, default: 1}, // 状态 1预览 2编辑
    istype: {type: String, default: 'text'}, // 控件的类型 text，date，datetime，email， password，tel，time，url，number
    isvalue: {type: String, default: 'text11'}, // 组件的默认内容
    placeholder: {type: String, default: ''}, // 提示用户可以输入什么。 提示文本不能有回车或换行
    maxlength: {type: Number, default: 20} // 提示用户可以输入什么。 提示文本不能有回车或换行
  },
  created: function () {
    this.$nextTick(()=> {
      this.value = this.isvalue;
    })
  },
  methods: {
    onChange: function (e) {
      this.$emit('inputchange', e.value)
    }
  }
}
</script>
<style scoped lang="less">
  @import url('../../../less/public.less');
  @height:90px;
  .rowlist{
    display: flex;
    align-items:center;
    flex-direction:row;
    height:@height;
    border-bottom-width:1px;
    border-bottom-style:solid;
    border-bottom-color:#ddd;
    margin:0 40px;
    display: flex;
  }
  .listtitle_text{
    color:#303032;
    font-size:28px;
    font-weight:600;
    padding-right:30px;
  }
  .listright{
    flex:1;
  }
  .listright_text{
    font-size:28px;
    color:#98989B;
    text-align:right;
    font-weight:400;
  }

  /***头像部分***/
  .hasavatar{
    height:160px;
  }
  .listright_right{
    flex-direction:row-reverse;
  }
  .imgs{
    width:90px;
    height:90px;
  }

</style>
