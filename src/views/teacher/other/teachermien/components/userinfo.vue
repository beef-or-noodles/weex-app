<!--用户基本信息-->
<template>
    <div class="rowuser">
        <div class="username">
            <template v-if="isstate===1">
                <text class="usernametext">{{username}}</text>
            </template>
            <template v-else>
                <input class="usernametext" v-model="username" type="text" placeholder="输入你的姓名" maxlength="6" @change="onchange"/>
            </template>
        </div>
        <div class="userabstract">
            <template v-if="isstate===1">
                <text class="userabstracttext">{{userabstract}}</text>
            </template>
            <template v-else>
                <input class="userabstracttext" v-model="userabstract" type="text" placeholder="输入你的个人标签 例：#12年教学经验" maxlength="26" @change="onchange"/>
            </template>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  props: {
    isstate: {type: Number, default: 1}, // 状态 1预览 2编辑
    username: {type: String, default: ''}, // 姓名
    userabstract: {type: String, default: ''} // 标签
  },
  methods: {
    onchange (event) {
      console.log('onchange:', event.value)
    }
  }
}
</script>
<style scoped lang="less">
  @import url('../../../../../less/public.less');
  .rowuser{
    flex-direction: column;
    padding:0px 40px 40px 40px;
  }
  .usernametext{
    font-size:60px;
    color:#303032;
    text-align: right;
  }
  .userabstract{
      padding-top:20px;
  }
  .userabstracttext{
    font-size:28px;
    color:#98989B;
    text-align: right;
  }
</style>
