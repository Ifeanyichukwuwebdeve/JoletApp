import axios from '../../axiosConfig'

// import router from '../../../router'
export default {
  namespaced: true,
  state: {
    AllUsers: [],
    singleUser: {},
    withdrawResquest: []
  },
  actions: {
    async getAllUsers ({ commit }) {
      try {
        commit('updateLoadingStatus', true, { root: true })
        const allUsers = await axios.get('admin/users')
        commit('updateLoadingStatus', false, { root: true })
        commit('updateAllUsers', allUsers.data)
      } catch (err) {
        console.error(err)
        const alert = {
          show: true,
          variant: 'error',
          message: 'Login failed.'
        }
        commit('updateLoadingStatus', false, { root: true })
        commit('updateAlert', alert, { root: true })
      }
    },
    async getSingleUser ({ commit }, payload) {
      try {
        commit('updateLoadingStatus', true, { root: true })
        const singleUser = await axios.get(`admin/users/${payload}`)
        commit('updateLoadingStatus', false, { root: true })
        commit('UpdateSingleUser', singleUser.data)
      } catch (err) {
        console.error(err)
        const alert = {
          show: true,
          variant: 'error',
          message: 'Login failed.'
        }
        commit('updateLoadingStatus', false, { root: true })
        commit('updateAlert', alert, { root: true })
      }
    },
    async getWithdrawRequests ({ commit }) {
      try {
        const res = await axios.get('admin/withdraw')
        commit('withdrawResquests', res.data)
      } catch (err) {
        const alert = {
          show: true,
          variant: 'error',
          message: 'Invalid Code'
        }
        commit('updateAlert', alert, { root: true })
      }
    },
    async confirmPayment ({ commit }, payload) {
      try {
        const res = await axios.patch(`admin/withdraw/${payload.id}/payment`,
          payload
        )
        console.log(payload.paid)
        console.log(res.data)
      } catch (err) {
        const alert = {
          show: true,
          variant: 'error',
          message: 'Invalid Code'
        }
        commit('updateAlert', alert, { root: true })
      }
    },
    async getUser () {

    }
  },
  mutations: {
    updateAllUsers (state, payload) {
      state.AllUsers = payload
    },
    UpdateSingleUser (state, payload) {
      state.singleUser = payload
    },
    withdrawResquests (state, payload) {
      state.withdrawResquest = payload
    }
  },
  getters: {
    getUnpaidRequest: (state) => {
      return state.withdrawResquest.filter(request => request.paymentComfirmed !== true)
    }
  }
}
