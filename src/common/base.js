export const base = {
  /** 页面回跳**/
  global_return (backnumber = -1) {
    this.$router.back(backnumber)
  },
  /** 页面跳转**/
  global_routerpush (name, params = null, type = 1) {
    let _obj = {name: name}
    if (params && JSON.stringify(params) !== '{}') {
      _obj.params = params
    }
    if (type === 1) {
      this.$router.push(_obj)
    } else if (type === 2) {
      this.$router.replace(_obj)
    }
  },
  /** 本地图片加载**/
  global_imgpath (imgpath) {
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
}
