// import Vue from 'vue'

export default {
  getUserGame (state, userGame) {
    state.userGame = userGame
  },
  fetchedQuestions (state, questions) {
    state.questions = questions
  },
  removeUserGame (state) {
    state.userGame = {}
  },
  updateAlert (state, settings) {
    state.alert = {
      ...state.snackbar,
      ...settings
    }
  },
  updateLoadingStatus (state, isLoading) {
    state.loading = isLoading
  },
  UpdateCategory: (state, category) => {
    state.category = category
  },
  withdrawinfo: (state, request) => {
    state.withdrawRequests = request
  }
}
