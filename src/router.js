/* global Vue */
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ceshi from '@/components/ceshi'
import login from '@/views/login/login'
/** 老师部分**/
import {teachermodule} from '@/routermodule/teachermodule'
import {studentmodule} from '@/routermodule/studentmodule'
Vue.use(Router)

export const router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/ceshi',
      name: 'ceshi',
      component: ceshi
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    ...teachermodule,
    ...studentmodule
  ]
})
