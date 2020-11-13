import axios from '../../axiosConfig'

import router from '../../../router'
// axios.defaults.headers.common.Authorization = `Bearer ${data.token}`
export default {
  namespaced: true,
  state: {
    user: {}
  },
  actions: {
    async login ({ commit }, payload) {
      try {
        // commit('updateLoadingStatus', true, { root: true })
        await axios.post('auth/login', payload)
          .then(res => {
            localStorage.setItem('token', res.data.token)
            commit('updateUser', res.data)
            // have to set this here or else it will be undefined
            // on initial api requests
            axios.defaults.headers.common.Authorization = `Bearer ${res.data.token}`
            router.replace('/dashboard')
            const snackbar = {
              show: true,
              variant: 'error',
              message: 'Login Successful.'
            }
            commit('updateSnackbar', snackbar, { root: true })
            commit('updateLoadingStatus', false, { root: true })
          })
      } catch (err) {
        console.error(err)
        const snackbar = {
          show: true,
          variant: 'error',
          message: 'Login failed.'
        }
        commit('updateLoadingStatus', false, { root: true })
        commit('updateSnackbar', snackbar, { root: true })
      }
    },
    async register ({ commit }, payload) {
      const res = await axios.post(
        'auth/register',
        payload
      )
      console.log(res)
      commit('updateUser', { email: payload.email })

      const snackbar = {
        show: true,
        variant: 'success',
        message: 'Sign up successful!'
      }
      commit('updateSnackbar', snackbar, { root: true })
      router.replace('/login')
    },
    async verify ({ commit }, payload) {
      try {
        const res = await axios.post(
          'auth/verify',
          payload
        )
        console.log(res)
        router.replace('/login')
      } catch (err) {
        const snackbar = {
          show: true,
          variant: 'error',
          message: 'Invalid Code'
        }
        commit('updateSnackbar', snackbar, { root: true })
      }
    },
    async logUserOut ({ commit }, payload) {
      commit('clearUserInfo')
      const snackbar = {
        show: true,
        variant: 'success',
        message: 'Invalid Code'
      }
      commit('removeUserGame', { root: true })
      commit('updateSnackbar', snackbar, { root: true })
      localStorage.removeItem('token')
      router.replace('/')
    },
    async getUser () {

    }
  },
  mutations: {
    updateUser (state, payload) {
      state.user = {
        ...state.user,
        ...payload
      }
    },
    clearUserInfo (state) {
      state.user = {}
    }
  },
  getters: {}
}
