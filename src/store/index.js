import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

import actions from './actions'
import state from './state'
import mutations from './mutations'
// import getters from './getters'
import auth from './modules/auth'
import user from './modules/user'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { auth, user },
  state,
  actions,
  mutations,
  plugins: [vuexLocal.plugin]
})
