import axios from './axiosConfig'
// import router from '../router'

export default {
  async getUserGame ({ commit }, id) {
    try {
      const { data } = await axios.get(`game/${id}`)
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
  }
}
