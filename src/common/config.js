/**
 *系统全局配置文件
 *@module Core
 */
// 全局公共=>配置文件
const _loaclkey = 'TABLRT_'

export const uploadUrl = 'https://aimusic-data.oss-cn-hangzhou.aliyuncs.com/' // 资源地址

export const global_config = {
  global_version: `${_loaclkey}VERSION`, // md5 版本号标识
  global_vuexkey: `${_loaclkey}CACHEKEY`, // vuex key值
  global_pagesize: 10, // 全局分页条数
  sessionexps: 3600, // 默认缓存时间  单位秒
  sessionkey: `${_loaclkey}WEBCACHEKEY`,
  buildkey: `BUILDKEY`// build 防止死循环
}

/***导航自定义返回事件***/
export const NAVIGATION_CUSTOMKEY="NAVIGATION_CUSTOMKEY"

/***
// 一些全局的config配置
const modeUrlObj = {
  // 生产环境
  'production': {
    baseURL: 'http://xxx:9091/pro/',
    authBaseURL: ''
  },
  // 开发环境
  'development': {
    baseURL: 'http://xxxx:9091/dev/',
    authBaseURL: ''
  },
  // 测试环境
  'test': {
    baseURL: 'http://xxxx:9091/test/',
    authBaseURL: ''
  }
}
export default modeUrlObj[process.env.NODE_ENV]
***/
