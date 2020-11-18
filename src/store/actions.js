import axios from './axiosConfig'
// import user from './modules/user'
import router from '../router'

export default {
  async getUserGame ({ commit, rootState }, id) {
    try {
      const { data } = await axios.get(`game/${rootState.auth.user.Game}`)
      commit('updateLoadingStatus', false, { root: true })
      commit('getUserGame', data.gamestatus)
    } catch (error) {
      console.error(error)
      commit('updateLoadingStatus', false, { root: true })
    }
  },
  async withdrawRequest ({ commit }, payload) {
    const res = await axios.post(
      'withdraw',
      payload
    )
    console.log(res)
    const snackbar = {
      show: true,
      variant: 'success',
      message: 'Request sent!'
    }
    commit('updateSnackbar', snackbar, { root: true })
    commit('withdrawinfo', res.data)
  },
  async updateAnswered ({ commit, rootState }, payload) {
    const res = await axios.patch(
      `game/${rootState.userGame._id}/answered`,
      payload
    )
    console.log(res)
    const snackbar = {
      show: true,
      variant: 'success',
      message: 'Game data sent!'
    }
    commit('updateSnackbar', snackbar, { root: true })
    router.push('/dashboard')
  }
}
