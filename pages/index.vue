<template>
  <v-row class="height-100">
    <!--Left Side: APPS List-->
    <v-col class="flex-grow-1">
      <v-row class="my-2">
        <v-btn v-for="(item, index) in items" :key="index" text small>
          <v-icon class="mr-2">{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-row>
      <v-row v-if="isAppsReady">
        <AppCard
          v-for="app in $store.state.apps"
          :key="app.id"
          :app="app"
        ></AppCard>
        <v-pagination
          v-model="page"
          :length="pagination_length"
          total-visible="5"
          @input="fetchApps()"
        >
        </v-pagination>
      </v-row>
      <v-row v-else class="my-2">
        <v-col class="mx-auto my-2">
          <v-skeleton-loader
            class=""
            width="300"
            type="list-item-avatar, card"
          ></v-skeleton-loader>
        </v-col>
      </v-row>
    </v-col>

    <!--Right Side: Logs-->
    <v-col class="d-flex flex-sm-grow-0 justify-center">
      <v-btn>
        <v-icon>mdi-plus</v-icon>
        NEW INTEGRATION
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
import AppCard from '../components/AppCard'

export default {
  components: {
    AppCard
  },
  head() {
    return {
      title: 'Dashboard',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'PushBot dashboard'
        }
      ]
    }
  },
  data() {
    return {
      isAppsReady: false,
      page: 1,
      take: 5,
      skip: 5,
      sortBy: 'title',
      direction: 'desc',
      items: [
        { icon: 'mdi-check', title: 'COMPLETE' },
        { icon: 'mdi-settings', title: 'IN SETUP' },
        { icon: 'mdi-share', title: 'SHARED' },
        { icon: 'mdi-chart-bar-stacked', title: 'ACTIVE' }
      ]
    }
  },
  computed: {
    pagination_length() {
      return this.$store.state.total / this.take
    }
  },
  created() {},
  mounted() {
    this.fetchApps()
  },
  methods: {
    fetchApps() {
      this.isAppsReady = false
      this.$axios
        .get(
          `/api/apps?take=${this.take}&skip=${this.skip}&sortBy=${this.sortBy}&direction=${this.direction}`
        )
        .then((res) => {
          this.isAppsReady = true
          this.$store.commit('updateApps', res.data)
        })
    }
  }
}
</script>
