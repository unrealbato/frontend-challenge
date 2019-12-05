<template>
  <v-row>
    <v-col>
      <div>
        <v-btn text small><v-icon>mdi-check</v-icon> COMPLETE</v-btn>
        <v-btn text small><v-icon>mdi-settings</v-icon> IN SETUP</v-btn>
        <v-btn text small><v-icon>mdi-share</v-icon> SHARED</v-btn>
        <v-btn text small><v-icon>mdi-chart-bar-stacked</v-icon> ACTIVE</v-btn>
      </div>
      <v-row>
        <AppCard></AppCard>
      </v-row>
    </v-col>
    <v-col> </v-col>
  </v-row>
</template>

<script>
import AppCard from '../components/AppCard'
export default {
  components: {
    AppCard
  }
}
</script>
