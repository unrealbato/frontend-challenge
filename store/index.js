export const state = () => ({
  isSnackbarActive: false,
  snackbar: {
    color: null,
    message: null
  },
  apps: null,
  total: null
})

export const mutations = {
  activeSnackbar(state, [color, message]) {
    state.isSnackbarActive = true
    state.snackbar.color = color
    state.snackbar.message = message
  },

  closeSnackbar(state) {
    state.isSnackbarActive = false
  },

  updateApps(state, appsData) {
    state.apps = appsData.data
    state.total = appsData.total
  }
}

export const actions = {}

export const getters = {
  snackbar_Info(state) {
    return state.snackbar
  }
}
