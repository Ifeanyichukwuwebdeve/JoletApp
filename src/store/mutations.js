// import Vue from 'vue'

export default {
  updateUserGame (state, userGame) {
    state.userGame = userGame
  },
  updateSnackbar (state, settings) {
    state.snackbar = {
      ...state.snackbar,
      ...settings
    }
  },
  updateLoadingStatus (state, isLoading) {
    state.loading = isLoading
  }
}
