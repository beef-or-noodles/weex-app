<template>
    <scroller class="conscroller">
      <Navigation title="谢点点-雨里杀肖邦" routername="teacherindex"></Navigation>
      <div class="mincontainer">
          <image class= "mastergraph" src ="https://aimusic-data.oss-cn-hangzhou.aliyuncs.com/test/otherFiles/157526779779211.jpg"></image>
          <div class="minborder"></div>
      </div>
      <div class="mancontainer">
          <div class="container_top">
              <div><text class="toptitle">练习数据</text></div>
              <div class="rigthtop">
                  <div class="rowspeed"><text class="rowspeedtext">8/9</text></div>
                  <div class="rowstar"><image class= "rowstarimage" :src ="star"></image></div>
              </div>
          </div>
          <div class="container_modular">
              <div class="itemmodular">
                  <image class= "itemimage" :src ="playback"></image>
                  <div class="maintitle"><text class="maintitletext">课程回放</text></div>
                  <div class="subhead"><text class="subheadtext">已完成，观看10次</text></div>
                  <fivepointedstar :minstar="1" :maxstar="1"></fivepointedstar>
                  <div class="modularbtn"><text class="modularbtntext">观看回放</text></div>
              </div>
              <div class="itemmodular">
                  <image class= "itemimage" :src ="points"></image>
                  <div class="maintitle"><text class="maintitletext">知识点精讲</text></div>
                  <div class="subhead"><text class="subheadtext">已完成，观看4次</text></div>
                  <fivepointedstar :minstar="2" :maxstar="2"></fivepointedstar>
                  <div class="modularbtn"><text class="modularbtntext">观看回放</text></div>
              </div>
              <div class="itemmodular">
                  <image class= "itemimage" :src ="exercises"></image>
                  <div class="maintitle"><text class="maintitletext">习题练习</text></div>
                  <div class="subhead"><text class="subheadtext">已完成，答题10次</text></div>
                  <fivepointedstar :minstar="3" :maxstar="3"></fivepointedstar>
                  <div class="modularbtn"><text class="modularbtntext">查看记录</text></div>
              </div>
              <div class="itemmodular">
                  <image class= "itemimage" :src ="piano"></image>
                  <div class="maintitle"><text class="maintitletext">钢琴练习</text></div>
                  <div class="subhead"><text class="subheadtext">已完成，练习2次</text></div>
                  <fivepointedstar :minstar="2" :maxstar="3"></fivepointedstar>
                  <div class="modularbtn"><text class="modularbtntext">查看记录</text></div>
              </div>
          </div>
          <div class="container_top">
              <div><text class="toptitle">我的点评</text></div>
          </div>
        <template v-if="teachercomment">
            <div class="teachercomment">
                <div class="teachercommenttop">
                    <div class="teacherinfo">
                        <image class= "teacherimage" src ="https://aimusic-data.oss-cn-hangzhou.aliyuncs.com/test/avatar/77e660f145bd40c684a377b87357b1a5.png"></image>
                        <div><text class="teachername">牛顿老师的点评</text></div>
                    </div>
                    <div><text class="commentmodify">修改</text></div>
                </div>
                <div class="commentcontent"><text class="commentcontenttext" :class="[isopen?'':'whitespace6']">{{teachercomment}}</text></div>
                <div class="openmore" v-if="hashide" @click="isopen = isopen?false:true">
                    <div><text class="opentext">{{isopen?'收起':'展开'}}</text></div>
                    <image class= "openmoreimage" :class="[isopen?'rotate180':'']" :src ="arrow"></image>
                </div>
            </div>
        </template>
        <template v-else>
            <emptylist :istype="2"></emptylist>
        </template>
          <div class="container_top">
              <div><text class="toptitle">评论（{{commentlist.length}}）</text></div>
          </div>
          <template v-if="commentlist.length">
              <div class="rowcomment">
                  <comments></comments>
              </div>
          </template>
          <template v-else>
              <emptylist :istype="3" @onclick="onaddcomment"></emptylist>
          </template>
          <div class="braceheight"></div>
          <div class="container_btns">
              <text class="btnstext">{{commentlist.length?'查看评论':'添加点评'}}</text>
          </div>
      </div>
  </scroller>
</template>

<script>
import {getImg, onstatistics} from '@/common/public'
import Navigation from '@/components/Navigation/Navigation'
import fivepointedstar from '@/components/fivepointedstar/fivepointedstar'
import emptylist from '../components/emptylist'
import comments from './components/comments'

export default {
  components: {
    Navigation, fivepointedstar, emptylist, comments
  },
  data () {
    return {
      hashide: false, // 是否显示展开模块
      isopen: false, // 展开状态
      studentinfo: {},
      datalist: [],
      teachercomment: '过硬的实刻苦学习专业的理论知识,积累累了较累了多的社会实践经验积累累了较多的社会实践经验积累了较多的社会实践经验积累累了较多的社会实践经验积累了较多的社会实践经验积累累了较多的社会实践经验积累了较多的社会实践经验积累累了较多的社会实践经验积累了较多的社会实践经验',
      commentlist: [1, 2, 3]
    }
  },
  created: function () {
    this.$nextTick(() => {
      let dada = onstatistics(this.teachercomment, 6, 630, 28)
      if (dada) {
        this.hashide = true
      }
      console.log(1212, dada)
    })
  },
  computed: {
    star () {
      return getImg('s_star.png')
    },
    playback () {
      return getImg('teacher_icon14.png')
    },
    points () {
      return getImg('teacher_icon16.png')
    },
    exercises () {
      return getImg('teacher_icon15.png')
    },
    piano () {
      return getImg('teacher_icon13.png')
    },
    arrow () {
      return getImg('teacher_icon8.png')
    }
  },
  methods: {
    onaddcomment () {
      console.log(111)
    },
    onclick (item) {
      this.global_routerpush('curriculumdetails', {id: 1})
    },
    lookup (item) {

    }
  }
}
</script>

<style scoped lang="less">
@import url('./index.less');
.teachercomment{
    margin:0 40px 20px 40px;
    background-color:#F1F1F5;
    padding:20px;
}
.teachercommenttop{
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-bottom:20px;
    border-bottom-color: #DDDDDD;
    border-bottom-width:1px;
    border-bottom-style: solid;
}
.teacherinfo{
    flex-direction: row;
    align-items: center;
}
.teacherimage{
    width:60px;
    height:60px;
    border-radius:60px;
}
.teachername{
    color:#303032;
    font-size:32px;
    padding-left:20px;
}
.commentmodify{
    color:#FF8738;
    font-size:28px;
}
.commentcontent{
    margin:20px 0;
}
.commentcontenttext{
    color:#656568;
    font-size:28px;
    line-height:40px;
}
.openmore{
    flex-direction: row;
    align-items: center;
    justify-content: center;
}
.opentext{
    color:#FF8738;
    font-size:24px;
    margin-right:4px;
}
.openmoreimage{
    width:32px;
    height:32px;
}

.rowcomment{
    padding:0 40px;
}
.mancontainer{
    min-height:600px;
    background-color:#fff;
}
.centers{
    background-color:red;
}
.container_row1{
    padding:0 40px;
}
</style>
