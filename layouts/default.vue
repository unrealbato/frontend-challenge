<template>
  <v-app dark>
    <!--Navbar-->
    <v-app-bar fixed app>
      <v-app-bar-nav-icon />
      <v-avatar class="mx-2">
        <img src="logo.png" alt="pushbot" />
      </v-avatar>

      <v-text-field
        solo
        dark
        dense
        placeholder="Search your apps"
        prepend-inner-icon="search"
        hide-details
      ></v-text-field>

      <v-spacer />
      <v-btn v-for="(item, index) in NavButtons" :key="index" text
        ><v-icon class="mr-1">{{ item.icon }}</v-icon>
        {{ item.title }}
      </v-btn>

      <span class="d-flex flex-column mx-2 pa-2">
        <h5 v-text="`${$auth.user.name}`"></h5>
        <v-chip x-small>
          <v-icon dense left x-small>mdi-crown-outline</v-icon>
          {{ $auth.user.plan }}
        </v-chip>
      </span>

      <v-menu v-model="showLogout" offset-y absloute>
        <template v-slot:activator="{ on }">
          <v-avatar class="clickable" v-on="on">
            <img :src="$auth.user.avatar" :alt="$auth.user.name" />
          </v-avatar>
        </template>
        <v-list>
          <v-list-item @click="Logout()">
            <v-list-item-title>LogOut</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <!--Main Content-->
    <v-content>
      <v-container fill-height>
        <nuxt />
      </v-container>
    </v-content>

    <!--Footer-->
    <v-footer :fixed="fixed" app class="d-flex justify-center">
      <span class="text-center">PushBot &copy;{{ Year }}</span>
    </v-footer>

    <!--Notification-->
    <snackbar></snackbar>
  </v-app>
</template>

<script>
export default {
  middleware: 'auth',
  data() {
    return {
      fixed: false,
      showLogout: false
    }
  },
  computed: {
    Year() {
      return new Date().getFullYear()
    },
    NavButtons() {
      return [
        { icon: 'mdi-account-group', title: this.$auth.user.totalApps },
        { icon: 'mdi-apps', title: this.$auth.user.totalDevices }
      ]
    }
  },
  methods: {
    Logout() {
      this.$auth.logout()
    }
  }
}
</script>
<style>
.clickable:hover {
  cursor: pointer;
}
</style>
