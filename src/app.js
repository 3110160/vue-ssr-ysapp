/**
 * Created on 2019/11/6.
 * app.js 为通用入口
 * 在纯客户端应用程序中，我们将在此文件中创建根 Vue 实例，并直接挂载到 DOM。
 * 但是，对于服务器端渲染(SSR)，责任转移到纯客户端 entry 文件。app.js 简单地使用 export 导出一个 createApp 函数
 */
'use strict';
import Vue from 'vue'
import App from './App.vue'
import {
  createRouter
} from "./router/index"
import creatStore from "./store/index"

/**
 * 暴露一个可以重复执行的工厂函数, 为每个请求创建一个新的根 Vue 实例
 * @param context
 */
export function createApp() {
  // 创建 router 实例
  const router = createRouter()
  const store = creatStore()
  const app = new Vue({
    //注入router 到根 Vue实例
    router,
    store,
    // 根实例简单的渲染应用程序组件
    render: h => h(App)
  })
  // 返回app 和 router
  return {
    app,
    router,
    store
  }
}