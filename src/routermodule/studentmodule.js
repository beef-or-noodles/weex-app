/**
 * Created by dev2 on 2019/11/28.
 */
/* 学生模块 */
import index from '@/views/student/index'
import messageList from '@/views/student/messageList' // 消息列表
import messageDetail from '@/views/student/messageDetail' // 消息详情
import classDetail from '@/views/student/classDetail' // 课程详情
import userInfo from '@/views/student/userInfo' // 课程详情
import classMessage from '@/views/student/classMessage' // 课程详情
export const studentmodule = [
  {
    path: '/student/index',
    name: 'studentindex',
    meta: {'title': '学生端首页'},
    component: index
  },
  {
    path: '/student/messageList',
    name: 'messageList',
    meta: {'title': '消息列表'},
    component: messageList
  },
  {
    path: '/student/messageDetail',
    name: 'messageDetail',
    meta: {'title': '消息详情'},
    component: messageDetail
  },
  {
    path: '/student/classDetail',
    name: 'classDetail',
    meta: {'title': '课程详情'},
    component: classDetail
  },
  {
    path: '/student/userInfo',
    name: 'userInfo',
    meta: {'title': '用户详情'},
    component: userInfo
  },
  {
    path: '/student/classMessage',
    name: 'classMessage',
    meta: {'title': '已学课程详情'},
    component: classMessage
  }
]
