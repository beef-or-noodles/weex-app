<template>
    <div class="wrapper">
        <router-view/>
        <wtoast v-if="isWeb && getToast.show" :data="getToast"></wtoast>
        <wtoasts v-else-if="getToast.show" :data="getToast"></wtoasts>
        <!--web使用-->
        <wloading v-if="isWeb"></wloading>
        <!--android使用-->
        <wloadings v-else></wloadings>
    </div>
</template>

<script>
import wloading from '@/components/loading/wloading'
import wtoast from '@/components/public/wtoast'
import {mapGetters} from 'vuex'

export default {
  name: 'App',
  data () {
    return {}
  },
  components: {
    wloading, wtoast
  },
  computed: {
    ...mapGetters(['getLoading', 'getToast']),
    isWeb () {
      let platform = weex.config.env.platform
      if (platform === 'Web') {
        return true
      } else {
        return false
      }
    }
  },
  methods: {}
}
</script>

<style lang="less" scoped>
    @import url('./less/public.less');

    .wrapper {
        background-color: @boxbodycolor;
    }
</style>
