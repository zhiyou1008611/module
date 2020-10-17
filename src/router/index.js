import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/login.vue')
  }, {
    path: '/userCenter',
    name: 'userCenter',
    component: () => import('../views/userCenter.vue')
  }, {
    path: '/course',
    name: 'course',
    component: () => import('../views/course.vue')
  }, {
    path: '/modules',
    name: '组件',
    component: () => import('../views/modules.vue')
  }, {
    path: '/timer',
    name: '大时钟',
    component: () => import('../views/timer/index.vue')
  }, {
    path: '/WhiteBlock',
    name: '别踩白块',
    component: () => import('../views/WhiteBlock/index.vue')
  }, {
    path: '/Canvas',
    name: '钟表',
    component: () => import('../views/Canvas/index.vue')
  }, {
    path: '/ECharts',
    name: '图表',
    component: () => import('../views/ECharts/index.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
