<!--个人简介-->
<template>
    <div class="rowlist" @click="onChange">
        <div class="containertitle"><text class="containertitle_text">个人简介</text></div>
        <template v-if="isstate === 1">
            <textarea :rows="8" maxlength="200" class="textarea" v-model="value" placeholder="请输入个人简介…" @change="onchange"></textarea>
        </template>
        <template v-else>
            <div class="rowpreviewtext"><text class="previewtext" :class="[hasmore?'whitespace7':'']">{{value}}</text></div>
            <div class="hasmore" v-if="hasmore" @click="hasmore=false">
                <div class="rowmore">
                    <text class="unfold">展开</text>
                    <image class="uploadimage" :src="teachericon8"></image>
                </div>
            </div>
        </template>
    </div>
</template>
<script>
import {getImg} from '@/common/public'
export default {
  data () {
    return {
      hasmore: false,
      value: '我的性格11偏于内AAA向，忠诚、的人奋求奋求求奋求实求实求实的人奋求求奋求实求实求实的人奋求求奋求实求实求实的人，会不断追求人格的自我完善；明显的特点是乐观自信、温和开朗、稳重宽厚，因此，我人际关系和谐，适应环境能力较强。爱好电脑、科普知识-科普知识科普知识科普知识科普知识科普知识科普知识科普知识科普知识科普知识科普普知识科普'
    }
  },
  props: {
    isstate: {type: Number, default: 1}, // 状态 1预览 2编辑
  },
  computed: {
    teachericon8 () {
      return getImg('teacher_icon8.png')
    }
  },
  created: function () {
    this.$nextTick(() => {
      let statistics = this.onstatistics
      if (statistics) {
        this.hasmore = true
      }
    })
  },
  methods: {
    onstatistics () {
      // eslint-disable-next-line no-undef
      const deviceWidth = WXEnvironment.deviceWidth
      const klio1 = Math.floor(deviceWidth * 28 / 750)
      const klio = Math.floor(deviceWidth * 120 / 750)
      const isinfo = Math.floor((deviceWidth - klio) / klio1)
      const re1 = /\d/g
      const re2 = /[a-zA-Z]/g
      const re3 = /[\u4e00-\u9fa5,，.。、]/g
      const value = this.value
      let iscount = 0
      if (value.match(re1) != null) { // 数字
        iscount = iscount + Math.ceil((value.match(re1)).length / 2)
      }
      if (value.match(re2) != null) { // 字母
        iscount = iscount + Math.ceil((value.match(re2)).length / 3)
      }
      if (value.match(re3) != null) { // 汉字
        iscount = iscount + (value.match(re3)).length
      }
      if (isinfo * 7 >= iscount) {
        return false
      }else{
        return true
      }
    },
    onchange (event) {
      console.log('onchange:', event.value)
    }
  }
}
</script>
<style scoped lang="less">
  @import url('../../../../../less/public.less');
  @import url('../index.less');
  .rowlist{
    flex-direction: column;
    background-color: #F1F1F5;
    border-radius:16px;
  }
  .containertitle{
    padding:30px 0;
  }
  .textarea {
      font-size:28px;
      padding:10px 20px 20px 20px;
      color: #656568;
  }
  .textarea:focus {
      border-width: 4px;
      border-color: #3399ff;
  }
  .previewtext{
      font-size:28px;
      margin:10px 20px 20px 20px;
      color: #656568;
      line-height:40px;
  }
  .hasmore{
      flex-direction: row;
      justify-content: center;
      align-items:center;
  }
  .rowmore{
      flex-direction: row;
  }
  .unfold{
      color:#FF8738;
      font-size:24px;
  }
  .uploadimage{
      width:32px;
      height:32px;
      justify-content: center;
  }
</style>
