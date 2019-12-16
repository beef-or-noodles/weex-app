/**
 * Created by dev2 on 2019/11/13.
 */
/** 根据字符串 计算是否超出固定宽度
 * value 需要展示的文字
 * maxperform 最大行数
 * deviceWidth 容器宽度
 * fontsize 字体大小
 * **/
export function onstatistics (value, maxperform = 5, deviceWidth = 200, fontsize = 20) {
  const re1 = /\d/g
  const re2 = /[a-zA-Z]/g
  const re3 = /[\u4e00-\u9fa5，。]/g
  const re5 = /[,.\s]/g // 4个占用一个 汉字
  let iscount = 0
  if (value.match(re1) != null) { // 数字
    iscount = iscount + (value.match(re1)).length / 2
  }
  if (value.match(re2) != null) { // 字母
    iscount = iscount + (value.match(re2)).length / 3
  }
  if (value.match(re3) != null) { // 汉字
    iscount = iscount + (value.match(re3)).length
  }
  if (value.match(re5) != null) { // 其他字符
    iscount = iscount + (value.match(re5)).length / 4
  }
  iscount = Math.ceil(iscount)
  if (deviceWidth * maxperform > iscount * fontsize) {
    return false
  } else {
    return true
  }
}

/* 提示框 */
export function toast (message) {
  const modal = weex.requireModule('modal')
  modal.toast({
    message: message,
    duration: 2
  })
}
/** 本地图片加载**/
export const getImg = function (imgpath) {
  let platform = weex.config.env.platform
  if (platform === 'Web') {
    return `images/${imgpath}`
  } else if (platform === 'android') { // android 不需要后缀
    let imgName = imgpath.substr(0, imgpath.lastIndexOf('.'))
    return `local:///${imgName}`
  } else {
    return `local:///${imgpath}`
  }
}
export default {
  getImg: getImg
}
