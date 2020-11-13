// import Vue from 'vue'

export default {
  getUserGame (state, userGame) {
    state.userGame = userGame
  },
  removeUserGame (state) {
    state.userGame = {}
  },
  updateSnackbar (state, settings) {
    state.snackbar = {
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
