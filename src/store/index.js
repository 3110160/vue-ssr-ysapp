import Vue from 'vue';
import Vuex from 'vuex';
import home from './home'
Vue.use(Vuex);

const creatStore = () => {
  return new Vuex.Store({
    modules: {
      home
    }
  })
}

export default creatStore;