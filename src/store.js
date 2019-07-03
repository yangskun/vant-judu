import Vue from 'vue'
import Vuex from 'vuex'
import { Hitokoto, randomImage } from '../api/api'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [
    createPersistedState({
      storage: window.sessionStorage
    })
  ],
  state: {
    hitokoto: [],
    hitokotoType: []
  },
  mutations: {
    getSentonce(state, data) {
      let hitokotoOne = {
        id: data.id,
        hitokoto: data.hitokoto,
        creator: data.creator,
        from: data.from,
        type: data.type,
        comment: []
      }
      state.hitokoto.push(hitokotoOne)
    },
    getHitokotoType(state, type) {
      let hito = []
      state.hitokoto.forEach(value => {
        if (value.type === type) {
          hito.push(value)
        }
      })
      state.hitokotoType = hito
    }
  },
  actions: {
    getSentonce({ commit }, param) {
      Hitokoto(param).then(data => {
        commit('getSentonce', data)
      })
    }
  }
})
