<template>
  <v-card>
    <v-card-title>
      <v-list flat>
        <v-list-item>
          <v-list-item-avatar>
            <v-avatar>
              <v-img src="https://picsum.photos/50/50"></v-img>
            </v-avatar>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>sincere late structure</v-list-item-title>
            <v-list-item-subtitle
              class="d-flex align-content-center justify-even"
            >
              <v-icon x-small>mdi-cellphone-iphone</v-icon> 5329
              <v-icon small>mdi-apple</v-icon>
            </v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <v-btn icon><v-icon>mdi-dots-vertical</v-icon></v-btn>
          </v-list-item-action>
        </v-list-item>
        <v-list-item> </v-list-item>
      </v-list>
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  name: 'AppCard',
  data() {
    return {
      chartData: [
        {
          label: '2019-11-13',
          value: 249
        },
        {
          label: '2019-11-14',
          value: 351
        },
        {
          label: '2019-11-15',
          value: 973
        },
        {
          label: '2019-11-16',
          value: 180
        },
        {
          label: '2019-11-17',
          value: 666
        },
        {
          label: '2019-11-18',
          value: 845
        },
        {
          label: '2019-11-19',
          value: 455
        },
        {
          label: '2019-11-20',
          value: 717
        }
      ],
      value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]
    }
  }
}
</script>

<style scoped></style>
