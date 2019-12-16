/* 老师模块 */
import teacherindex from '@/views/teacher/index'
import teacherinfo from '@/views/teacher/other/teacherinfo/index'
import teachermien from '@/views/teacher/other/teachermien/teachermien'
import teachermienpreview from '@/views/teacher/other/teachermien/teachermienpreview'
/** *机构管理***/
import organizationview from '@/views/teacher/other/organization/index'
/** *我的学员***/
import studentslist from '@/views/teacher/mystudents/studentslist/index'
import curriculum from '@/views/teacher/mystudents/curriculum/index' // 已学课程
import curriculumdetails from '@/views/teacher/mystudents/curriculumdetails/index' // 课程详情

export const teachermodule = [
  {
    path: '/teacher/index',
    name: 'teacherindex',
    meta: {'title': '教师端首页'},
    component: teacherindex
  }, {
    path: '/teacher/teacherinfo',
    name: 'teacherinfo',
    meta: {'title': '教师个人信息'},
    component: teacherinfo
  }, {
    path: '/teacher/teachermien',
    name: 'teachermien',
    meta: {'title': '教师个人风采编辑页面'},
    component: teachermien
  }, {
    path: '/teacher/teachermienpreview',
    name: 'teachermienpreview',
    meta: {'title': '教师个人风采预览'},
    component: teachermienpreview
  },
  /** *机构管理***/
  {
    path: '/organization/info',
    name: 'organizationview',
    meta: {'title': '机构信息'},
    component: organizationview
  },
  /** *我的学员***/
  {
    path: '/mystudents/studentslist',
    name: 'mystudents',
    meta: {'title': '我的学员'},
    component: studentslist
  },{
    path: '/mystudents/curriculum/:id',
    name: 'curriculum',
    meta: {'title': '已学课程'},
    component: curriculum
  },{
    path: '/mystudents/curriculumdetails/:id',
    name: 'curriculumdetails',
    meta: {'title': '课程详情'},
    component: curriculumdetails
  }
]
