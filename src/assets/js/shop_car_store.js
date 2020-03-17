import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    goods: []
  },
  mutations: {
    increment (state, { good, i }) {
      if (i === -1) {
        state.goods.push(good)
      } else {
        state.goods.splice(i, 1, good)
      }
    },
    decrease (state, i) {
      state.goods.splice(i, 1)
    }
  },
  getters: {
    ids: state => {
      const ids = []
      state.goods.forEach(item => {
        ids.push(item.goodsId)
      })
      return ids.toString()
    }
  }
})
