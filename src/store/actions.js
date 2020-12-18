import axios from './axiosConfig'
// import user from './modules/user'
import router from '../router'
export default {
  async getUserGame ({ commit, rootState }) {
    try {
      const { data } = await axios.get(`game/${rootState.auth.user.Game}`)
      commit('updateLoadingStatus', false, { root: true })
      commit('getUserGame', data.gamestatus)
    } catch (error) {
      console.error(error)
      commit('updateLoadingStatus', false, { root: true })
    }
  },
  async getQuestions ({ commit, rootState }) {
    try {
      let quizApi
      if (rootState.category === null) {
        quizApi = 'https://opentdb.com/api.php?amount=20'
        console.log(quizApi)
      } else if (rootState.category === 9) {
        quizApi = `https://opentdb.com/api.php?amount=${rootState.category}`
        console.log(quizApi)
      } else if (rootState.category === 21) {
        quizApi = `https://opentdb.com/api.php?amount=${rootState.category}`
        console.log(quizApi)
      } else if (rootState.category === 14) {
        quizApi = `https://opentdb.com/api.php?amount=${rootState.category}`
        console.log(quizApi)
      } else if (rootState.category === 13) {
        quizApi = `https://opentdb.com/api.php?amount=${rootState.category}`
        console.log(quizApi)
      }
      fetch(quizApi, {
        method: 'get'
      })
        .then(response => {
          return response.json()
        })
        .then(jsonData => {
          commit('fetchedQuestions', jsonData.results)
        })
        .catch(err => {
          const alert = {
            show: true,
            variant: 'danger',
            message: err.message
          }
          commit('updateAlert', alert, { root: true })
          commit('fetchedQuestions', [])
        })
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
    const alert = {
      show: true,
      variant: 'success',
      message: 'Request sent!'
    }
    commit('updateAlert', alert, { root: true })
    commit('withdrawinfo', res.data)
  },
  async updateAnswered ({ commit, rootState, dispatch }, payload) {
    const res = await axios.patch(
      `game/${rootState.userGame._id}/answered`,
      payload
    )
    // const { data } = await axios.get(`game/${rootState.auth.user.Game}`)
    // commit('updateLoadingStatus', false, { root: true })
    // commit('getUserGame', data.gamestatus)
    dispatch('getUserGame')
    console.log(res)

    const alert = {
      show: true,
      variant: 'success',
      message: 'Game data sent!'
    }
    commit('updateAlert', alert, { root: true })
    router.push('/dashboard')
  }
}
