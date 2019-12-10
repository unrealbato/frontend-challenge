<template>
  <v-snackbar
    v-model="isSnackbarActive"
    :timeout="2000"
    :color="snackbar.color"
  >
    {{ snackbar.message }}
    <v-btn dark text @click="closeSnackbar()">
      Close
    </v-btn>
  </v-snackbar>
</template>
<script>
export default {
  data() {
    return {}
  },

  computed: {
    snackbar: {
      get() {
        return this.$store.getters.snackbar_Info
      }
    },
    isSnackbarActive: {
      get() {
        return this.$store.state.isSnackbarActive
      },
      set() {
        this.$store.commit('closeSnackbar', [null, null])
      }
    }
  },

  methods: {
    closeSnackbar() {
      this.$store.commit('closeSnackbar', [null, null])
    }
  }
}
</script>
