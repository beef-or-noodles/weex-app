<template>
    <div>
        <div class="login" :class="[type==5?'c_padding':'']">
            <image class="img" :src="bg"> </image>
            <image class="sAnimal" v-if="type != 5" :src="s_animal"> </image>
            <div class="centerBox" v-if="init" :class="[type==5?'c_padding':'']">
                <div class="center">
                <image class="icon1" v-if="type!=4" :src="icon1"> </image>
                <image class="icon2" :src="icon2"> </image>
                <image class="icon3" :src="hello"> </image>
                <div class="top">
                    <div class="tabControl" v-if="type == 1 || type == 2">
                        <div class="tabbox" @click="type='1'">
                            <text class="txt" :class="[type==1?'activeTab':'']">账号登录</text>
                            <div class="line" v-if="type === '1'"></div>
                        </div>
                        <div class="tabbox" @click="type='2'">
                            <text class="txt"  :class="[type==2?'activeTab':'']">短信登录</text>
                            <div class="line" v-if="type === '2'"></div>
                        </div>
                    </div>
                    <div class="navBar" v-if="type == 3">
                        <image @click="type='1';btntxt='进入学一拍'" class="lefticon" :src="lefticon"> </image>
                        <text class="navtitle">修改密码</text>
                    </div>
                    <div class="navBar" v-if="type == 4">
                        <text class="navtitle">设置登录密码</text>
                        <text class="skip" @click="type='5';btntxt='完成'">跳过</text>
                    </div>
                    <div class="navBar" v-if="type == 5">
                        <image @click="type='4';btntxt='确认'" class="lefticon" :src="lefticon"> </image>
                        <text class="navtitle">信息填写</text>
                    </div>
                    <div class="navBar" v-if="type == 6">
                        <text class="navtitle">选择机构</text>
                    </div>
                </div>
                <div class="inputBox">
                    <winput v-if="type==1 || type==2 || type==3" type="tel" :maxlength="11" :value="phone" @changes="(val)=>{phone = val}" placeholder="请输入手机号"></winput>
                    <winput v-if="type==1 || type==3 || type==4" :value="pasword" :pascontrol="true" type="password" @changes="(val)=>{pasword = val}" placeholder="确认密码"></winput>
                    <winput v-if="type==4" :value="surepasword" :pascontrol="true" type="password" @changes="(val)=>{surepasword = val}" placeholder="请输入密码"></winput>
                    <div class="codeBox" v-if="type==2 || type==3">
                        <input class="input code" :value="code" type="number" @changes="(val)=>{code = val}" placeholder="验证码"/>
                        <wbutton :text="codeTxt" @btnclick="codeBtn" :disabled="codeDis"></wbutton>
                    </div>
                    <div v-if="type==5">
                        <text class="titles">为了更好的服务教学，请填写你的真实信息</text>
                        <winput :value="info.sName" title="学员姓名：" style-type="2" @changes="(val)=>{info.sName = val}" placeholder="请填写学员姓名"></winput>
                        <winput :value="info.sex" title="性　　别：" @selectChange="selectChange" :selectList="selectList" type="select" style-type="2" placeholder=""></winput>
                        <winput :value="info.time" title="出生年月：" type="date" style-type="2" @changes="(val)=>{info.time = val}" placeholder="请选择日期"></winput>
                        <winput :value="info.pName" title="家长姓名：" style-type="2" @changes="(val)=>{info.pName = val}" placeholder="请填写家长姓名"></winput>
                    </div>
                    <div v-if="type == 6">
                        <scroller class="orgList" scroll-direction="horizontal">
                            <div class="orgBox" @click="selectOrg(item)" v-for="item in 8" :key="item">
                                <image class="oimg" src="http://aimusic-data.oss-cn-hangzhou.aliyuncs.com/test/pianoImg/156947662776973%25E7%259A%2584%25E5%25A4%25B4%25E5%2583%258F.jpg"></image>
                                <text class="orgTxt">金鹰飞扬</text>
                            </div>
                        </scroller>
                        <text class="orgt">选择之后，可在个人中心切换机构</text>
                    </div>
                </div>
                <div class="forget" v-if="type==1">
                    <text class="forgetPas" @click="forgetPas">忘记密码?</text>
                </div>
                <wbutton :text="btntxt" v-if="type!=6" @btnclick="putClick"></wbutton>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {getImg} from '@/common/public'
export default {
  name: 'login',
  data () {
    return {
      init: false,
      type: '5', // 1账号登录 2短信登录 3修改密码 4强制设置密码 5信息填写 6选择机构
      surepasword: '',
      pasword: '',
      phone: '',
      code: '',
      name: '',
      codeTxt: '获取',
      codeDis: false,
      btntxt: '进入学一拍',
      selectList: [
        { title: '男', value: 1},
        { title: '女', value: 2}
      ],
      info: {
        sName: '',
        sex: 1,
        time: '2019-10-22',
        pName: ''
      }
    }
  },
  computed: {
    bg () {
      return getImg('s_login_bg.png')
    },
    s_animal () {
      return getImg('s_animal.png')
    },
    icon1 () {
      return getImg('s_note1.png')
    },
    icon2 () {
      return getImg('s_note2.png')
    },
    hello () {
      return getImg('s_hello.png')
    },
    lefticon () {
      return getImg('navigation_icon1.png')
    }
  },
  created () {
    this.$nextTick(() => {
      this.init = true
    })
  },
  methods: {
    /* 忘记密码 */
    forgetPas () {
      this.type = '3'
      this.btntxt = '确认'
    },
    /* 选择change */
    selectChange (item) {
      console.log(item)
    },
    /* 发送验证码 */
    codeBtn () {
      this.codeDis = true
      this.timeWork()
    },
    /* 倒计时 */
    timeWork () {
      var flag = 1
      var i = 60
      var _this = this

      var countDown = function () {
        i = i - 1
        _this.codeTxt = i + 'S'
        if (i == 0) {
          _this.codeTxt = '获取'
          _this.codeDis = false
          flag = 1
          i = 60
          return
        }
        setTimeout(() => {
          countDown()
        }, 1000)
      }
      countDown()
    },

    /* 选择机构 */
    selectOrg (item) {
      console.log(item)
    },

    /* 确定按钮 */
    putClick () {
      /*this.type = 4*/
      this.toast()
    }
  }
}
</script>

<style lang="less" scoped>
    @import url('../../less/public.less');
    .login{
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right:0;
        align-items: center;
    }
    .img{
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right:0;
    }
     .sAnimal{
         position: absolute;
         width: 185wx;
         height: 174wx;
     }
    .centerBox{
        width: 369wx;
        border-radius:46wx;
        padding-bottom: 6wx;
        background-color: @border-color;
        margin-top: 85wx;
    }
    .c_padding{
        justify-content: center;
        margin-top: 0;
    }
    .center{
        position: relative;
        width: 369wx;
        border-radius:46wx;
        background-color:white ;
        padding: 20px;
        padding-top: 28wx;
        align-items: center;
    }
    .icon1{
        position: absolute;
        width: 30wx;
        height: 30wx;
        right: 52wx;
    }
    .icon2{
        position: absolute;
        width: 52wx;
        height: 52wx;
        top: 7wx;
        right: 0;
    }
    .icon3{
        position: absolute;
        width: 79wx;
        height: 53wx;
        top: -60wx;
        left: 210wx;
    }
    .txt{
        font-size: 17wx;
        color: #98989B;
        margin: 0 20wx;
    }
    .activeTab{
        color: black;
       font-weight: 500;
    }
    .tabbox{
        align-items: center;
    }
    .top{
        margin-bottom: 18px;
    }
    .tabControl{
        flex-direction: row;
    }
    .line{
        width:37wx;
        height: 4wx;
        background-color: @themecolor;
        margin-top: 8wx;
        border-radius: 18wx;
    }
    .input {
             background-color: #fff;
             padding-left: 20wx;
             height: 33wx;
             font-size: 13wx;
             border-radius: 20wx;
             width: 240wx;
             background-color: @input-bg;
             margin-bottom: 14wx;
         }
    .forget{
        width: 240wx;
        height:30wx ;
    }
    .forgetPas{
        color: @border-color;
        font-size: 11wx;
        align-self:flex-end;
    }
    .codeBox{
        flex-direction: row;
    }
    .code{
        width: 140wx;
        margin-right: 8wx;
    }

    .navBar{
        flex-direction: row;
        width: 240wx;
        justify-content: center;
        align-items: center;
        position: relative;
    }
    .lefticon{
        position: absolute;
        width: 18wx;
        height: 18wx;
        left: 0;
    }
    .navtitle{
        font-size: 17wx;
        font-weight: 500;
    }
    .skip{
        font-size:13wx;
        position: absolute;
        right: 0;
        color: @border-color;
    }
    .titles{
        font-size:13wx;
        color: #656568;
        margin-bottom:10wx ;
    }
    .orgList{
        flex-direction: row;
        width: 270wx;
        height: 110wx;
    }
    .orgBox{
        width: 84wx;
        padding: 5px;
    }
    .oimg{
        width: 74wx;
        height: 74wx;
        border-radius: 74wx;
    }
    .orgTxt{
        text-align: center;
        font-size: 13wx;
        color: #303032;
        margin-top: 10wx;
    }
    .orgt{
        color: @border-color;
        font-size: 11wx;
        text-align: center;
        margin-top: 18wx;
    }
</style>
