<template>
    <div class="courserow">
        <template v-for="item in data1">
            <richText :datas="item"></richText>
        </template>
    </div>
</template>
<script>
import richText from './richText'
const fontcolorstyle1 = '#303032'
const fontcolorstyle2 = '#656568'
export default {
  components: {
    richText
  },
  data () {
    return {
      data1: [
        [
          {
            content: 'YY同学: ',
            color: fontcolorstyle1,
            fontweight: true
          }, {
            content: '孩子这节课学习非常不错！',
            color: fontcolorstyle2
          }
        ],
        [
          {
            content: 'YY同学',
            color: fontcolorstyle1,
            fontweight: true
          }, {
            content: ' 回复 ',
            color: fontcolorstyle2
          }, {
            content: '牛顿老师：',
            color: fontcolorstyle1,
            fontweight: true
          }, {
            content: '可不是嘛！上次问他什么都不知道，现在比我还专业！',
            color: fontcolorstyle2
          }
        ],
        [
          {
            content: '牛顿老师',
            color: fontcolorstyle1,
            fontweight: true
          }, {
            content: ' 回复 ',
            color: fontcolorstyle2
          }, {
            content: 'YY同学：',
            color: fontcolorstyle1,
            fontweight: true
          }, {
            content: '那肯定，我们可是专业教学，能真正让孩子学到知识的！',
            color: fontcolorstyle2
          }
        ]
      ]
    }
  },
  methods: {
    onbtns () {
      // this.$emit('btnclick')
    }
  }
}
</script>
<style scoped lang="less">
    .courserow{
        padding:20px 20px 10px 20px;
        background-color:#F1F1F5;
        border-radius:16px;
    }
    .lists{
        flex-direction: column;
        margin-bottom:10px;
    }
    .fonttext{
        font-size:24px;
        color:#656568;
        line-height:40px;
        text-overflow:ellipsis;
        lines:3;
    }
    .aaa{
        color: #7A4CFF;
    }
    .fontusername{
        color:#303032;
        font-weight:600;
    }
</style>
