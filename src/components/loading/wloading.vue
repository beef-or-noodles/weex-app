<template>
    <div>
        <div v-if="getLoading" class="shade" style="z-index: 99;">
            <text>加载中</text>
        </div>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'

export default {
  name: 'wloading',
  computed: {
    ...mapGetters(['getLoading'])
  }
}
</script>

<style lang="less" scoped>
    @import "../../less/public.less";

</style>
