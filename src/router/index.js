import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = () => import('@/pages/home')
const List = () => import('@/pages/list')

export function createRouter() {
  return new Router({
    // 要记得增加mode属性，因为#后面的内容不会发送至服务器，服务器不知道请求的是哪一个路由
    mode: 'history',
    fallback: false,
    routes: [
      {
        path: '/',
        component: Home
      },{
        path: '/home',
        component: Home
      },{
        path: '/list',
        component: List
      }
    ]
  })
}