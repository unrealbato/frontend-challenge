<template>
  <v-app dark>
    <v-content>
      <v-container fluid fill-height class="pa-0">
        <nuxt />
      </v-container>
    </v-content>

    <!--Notification-->
    <snackbar></snackbar>
  </v-app>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>
<style></style>
