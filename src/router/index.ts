import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Layout,
    redirect: '/login',
    children: [
      {
        path: '/student',
        name: 'Student',
        redirect: '/student/list',
        component: () => import('@/views/student/index.vue'),
        children: [
          {
            path: '/student/list',
            name: 'StudentList',
            component: () => import('@/views/student/list/index.vue')
          }
        ]
      },
      {
        path: '/liuyan',
        name: 'teacher',
        redirect: '/teacher/list',
        component: () => import('@/views/teacher/index.vue'),
        children: [
          {
            path: '/teacher/list',
            name: 'teacherList',
            component: () => import('@/views/teacher/list/index.vue')
          }
        ]
      },
      {
        path: '/liuyan',
        name: 'liuyan',
        redirect: '/liuyan/list',
        component: () => import('@/views/liuyan/index.vue'),
        children: [
          {
            path: '/liuyan/list',
            name: 'liuyanList',
            component: () => import('@/views/liuyan/list/index.vue')
          }
        ]
      },
      {
        path: '/publish',
        name: 'publish',
        redirect: '/publish/list',
        component: () => import('@/views/publish/index.vue'),
        children: [
          {
            path: '/publish/list',
            name: 'publishList',
            component: () => import('@/views/publish/list/index.vue')
          }
        ]
      },
      {
        path: '/travel',
        name: 'travel',
        redirect: '/travel/list',
        component: () => import('@/views/travel/index.vue'),
        children: [
          {
            path: '/travel/list',
            name: 'travelList',
            component: () => import('@/views/travel/list/index.vue')
          }
        ]
      },
      {
        path: '/video',
        name: 'video',
        redirect: '/video/list',
        component: () => import('@/views/video/index.vue'),
        children: [
          {
            path: '/video/list',
            name: 'videoList',
            component: () => import('@/views/video/list/index.vue')
          }
        ]
      },
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/register/index.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
