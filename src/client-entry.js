/**
 * Created on 2019/11/6.
 * 客户端 entry 只需创建应用程序，并且将其挂载到 DOM 中
 */

'use strict';
import {
  createApp
} from './app.js'
import Vue from 'vue';

// 客户端切换路由时都会去调用 asyncData
Vue.mixin({
  beforeMount () {
    const { asyncData } = this.$options
    if (asyncData) {
      // 将获取数据操作分配给 promise
      // 以便在组件中，我们可以在数据准备就绪后
      // 通过运行 `this.dataPromise.then(...)` 来执行其他任务
      this.dataPromise = asyncData({
        store: this.$store,
        route: this.$route
      })
    }
  }
})

// 客户端特定引导逻辑
const {
  app,
  router,
  store
} = createApp()

//这里假定App.vue 模板中根元素具有‘id="app"’
router.onReady(() => {
  if (window.__INITIAL_STATE__) {
    store.replaceState(window.__INITIAL_STATE__)
  }
  app.$mount('#app')
})