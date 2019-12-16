<template>
    <div>
        <div class="studentIndex">
            <img class="imgBg" :src="imgBg" alt="">
            <div class="centerBox">
                <slot></slot>
            </div>
        </div>
    </div>
</template>
<script>
import {getImg} from '@/common/public'
export default {
  name: 'contentBg',
  computed: {
    imgBg () {
      return getImg('s_indexbg.png')
    }
  }
}
</script>

<style lang="less" scoped>
    .studentIndex{
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        flex: 1;
    }
    .imgBg{
        flex: 1;
    }
    .centerBox{
        position: absolute;
        top: 0;
        padding: 18wx 40wx;
        left: 0;
        right: 0;
    }
</style>
