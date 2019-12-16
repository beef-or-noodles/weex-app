<template>
    <div class="row">
        <scroller style="height: 500px">
            <div>
            <text class="message" @click="handsleClicks">进入老师首页</text>
            <div class="click" @click="click">你点我呀</div>
            <div class="click"></div>
            {{count}}
            <text class="click" @click="countPlus">点我vuex+{{getCount}}-------{{getCount2}} {{img}}</text>
            <div class="message">
                <text class="text1" @click="handleClick()">点击测试页999面</text>
            </div>
            <div>
                <image class="imgs" src="http://aimusic-data.oss-cn-hangzhou.aliyuncs.com/test/otherFiles/157294068247711.jpg"
                     alt=""></image>

              <!--  <image class="imgs" :src="global_imgpath('abc.jpg')" alt=""></image>-->

                <image class="imgs" :src="img" alt=""></image>
                <image class="imgs" src="http://47.110.55.133:8080/uploads/gif/20191122/1574414984803.gif"></image>
            </div>
            </div>
        </scroller>
    </div>
</template>
<script>
import {mapMutations, mapGetters} from 'vuex'
import {getImg} from '@/common/public'
export default {
  data () {
    return {
      message: '2222222'
    }
  },
  computed: {
    ...mapGetters(['getCount', 'getCount2']),
    count () {
      return this.getCount
    },
    img () {
      return getImg('bcd.png')
    }
  },
  methods: {
    ...mapMutations(['setCount', 'setCount2']),
    handsleClicks (e) {
      this.global_routerpush('teacherindex')
    },
    handleClick (e) {
      this.global_routerpush('ceshi')
    },
    click () {
      this.getHttp('/am/v1/company/report', {id: 1}).then(data => {

      }).catch(err => {
        console.log(err)
      })
    },
    countPlus () {
      console.log('123')
      this.setCount(1)
      this.setCount2(1)
    }
  }
}
</script>
<style scoped lang="less">
    .row {
        font-size: 300px;
    }

    .message {
        padding: 20px;
        background-color: #0088fb;
        margin-bottom: 20px;
        font-size: 30px;

        .text1 {
            color: red;
        }
    }

    .imgs {
        width: 750px;
        height: 550px;
    }

    .imgs2 {
        width: 750px;
        height: 550px;
    }

    .click {
        font-size: 30px;
    }
</style>
