import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = () => import('@/pages/home')
const List = () => import('@/pages/list')
// import Home from '../components/home/index.vue'
// import List from '../components/list/index.vue'

/**
 * 作为一个函数引出，避免在服务器上运行时产生数据交叉污染
 * @returns {VueRouter}
 */
export function createRouter() {
  return new Router({
    // 要记得增加mode属性，因为#后面的内容不会发送至服务器，服务器不知道请求的是哪一个路由
    mode: 'history',
    fallback: false,
    routes: [
      {
        path: '/',
        component: Home
      },
      {
        path: '/home',
        component: Home
      },
      {
        path: '/list',
        component: List
      }
    ]
  })
}