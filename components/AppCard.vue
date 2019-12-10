<template>
  <v-card class="pa-2 ma-1">
    <v-card-title class="pa-1">
      <v-list dense flat max-width="400" max-height="300" class="py-0">
        <v-list-item class="pa-2">
          <v-list-item-avatar>
            <v-avatar tile>
              <v-img :src="app.icon || 'logo.png'"></v-img>
            </v-avatar>
          </v-list-item-avatar>

          <v-list-item-content class="pa-0" disabled>
            <v-list-item-title class="my-2"
              >sincere late structure</v-list-item-title
            >
            <v-list-item-subtitle>
              <span class="pl-0">
                <v-icon small>mdi-cellphone-iphone</v-icon>
                {{ app.totalUsers }}
              </span>

              <span v-for="(platform, index) in platformIcons" :key="index">
                <v-icon small>{{ platform }}</v-icon>
              </span>
            </v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>
            <v-list>
              <v-list-item>
                <v-btn icon>
                  <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
              </v-list-item>
            </v-list>
          </v-list-item-action>
        </v-list-item>
        <v-list-item>
          <line-chart
            :id="app.id"
            :data="dataSet"
            label="Value"
            class="responsive"
          ></line-chart>
        </v-list-item>
        <v-list-item>
          <v-list-item-subtitle class="text-center">
            <span>
              <v-icon color="teal">mdi-rectangle</v-icon>
              Daily active users
            </span>
          </v-list-item-subtitle>
        </v-list-item>
      </v-list>
    </v-card-title>
    <v-card-actions class="pa-0">
      <v-list>
        <v-list-item class="py-0">
          <v-btn v-for="(item, index) in items" :key="index" icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-btn>
        </v-list-item>
      </v-list>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'AppCard',
  props: {
    app: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      items: [
        { icon: 'mdi-send' },
        { icon: 'mdi-history' },
        { icon: 'mdi-cellphone-iphone' },
        { icon: 'mdi-account-group' },
        { icon: 'mdi-settings' },
        { icon: 'mdi-chart-bar' },
        { icon: 'mdi-twitter' }
      ]
    }
  },

  computed: {
    dataSet() {
      const data = this.app.chartData.map((_) => {
        return [_.label, _.value]
      })
      return data
    },
    platformIcons() {
      const icons = Object.keys(this.app.platforms)
        .map((icon) => {
          if (this.app.platforms[icon] === true) {
            if (icon === 'chrome') return 'mdi-google-chrome'
            if (icon === 'ios') return 'mdi-apple'
            if (icon === 'safari') return 'mdi-apple-safari'
            else return `mdi-${icon}`
          }
        })
        .filter((val) => val)
      return icons
    }
  }
}
</script>

<style scoped>
.responsive {
  width: 100% !important;
  height: auto !important;
}
</style>
