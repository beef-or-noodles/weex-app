/**
 * Created by dev2 on 2019/11/13.
 */
var states = {
  userState: {
    count: 1,
    add: {
      index: 1,
      push: 1
    }
  },
  publicState: {
    loading: false, // 加载动画状态
    toast: { // 提示 show是否显示 type 图标icon success error warn; time自动关闭时间 message提示文字
      show: false,
      type: 'success',
      message: '系统错误',
      time: 3
    }
  }
}
export {
  states
}
