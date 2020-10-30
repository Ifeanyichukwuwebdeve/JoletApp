import axios from '../../axiosConfig'

// import router from '../../../router'

export default {
  namespaced: true,
  state: {
  },
  actions: {
    async updateUser ({ commit, rootState }, payload) {
      const res = await axios.patch(
        `users/${rootState.auth.user.id}`,
        payload
      )
      console.log(res)
      commit('auth/updateUser', payload, { root: true })
    },
    async updateUserPassword ({ commit, rootState }, payload) {
      const res = await axios.post(
        `users/${rootState.auth.user.id}/update-password`,
        payload
      )
      console.log(res)
      const message = res.status === 200 ? 'Update password successful!' : 'Update password failed.'
      const snackbar = {
        show: true,
        message
      }
      commit('updateSnackbar', snackbar, { root: true })
    }
  },
  mutations: {
  },
  getters: {}
}
