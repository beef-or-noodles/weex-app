<template>
    <div class="message">
        <text>测试页面</text>
        <text class="text1" @click="handleClick()">返回</text>
    </div>
</template>

<script>
export default {
  name: 'ceshi',
  data () {
    return {
      logo: ''
    }
  },
  methods: {
    handleClick (e) {
      this.global_return(1)
    }
  }
}
</script>

<style scoped lang="less">
    .message {
        padding: 20px;
        background-color: #0088fb;
        margin-bottom: 20px;

        .text1 {
            color: red;
        }
    }
</style>
