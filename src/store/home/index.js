import {
  getHot
} from '@/service/home'
const home = {
  state: () => {
    hotGoods: []
  },
  gatter: {

  },
  actions: {
    getHot({
      commit,
      state
    }, params) {
      return getHot().then(res => {
        commit('setHotGoods', res.data.data)
      })
    }
  },
  mutations: {
    setHotGoods(state, payload) {
      state.hotGoods = payload
    }
  }
}

export default home;