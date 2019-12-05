<template>
  <v-row class="height-100">
    <v-col class="teal">
      <h1 class="ml-5">PushBot</h1>
    </v-col>

    <v-col class="d-flex align-center">
      <v-row justify="center" align="center">
        <v-form action="" class="black--text width-50">
          <v-row class="flex-column">
            <v-col>
              <h2 class="title">Log in to your account</h2>
            </v-col>

            <v-col>
              <v-text-field
                label="Your Email Address"
                prepend-inner-icon="email"
                filled
                type="email"
                required
              ></v-text-field>
              <v-text-field
                label="Your Password"
                prepend-inner-icon="lock"
                filled
                type="password"
                required
              ></v-text-field>
            </v-col>

            <v-col class="d-flex flex-column">
              <v-btn text class="teal--text pl-0">forget your password?</v-btn>
              <v-btn text class="teal--text pl-0">Don't have an account?</v-btn>
            </v-col>

            <v-col>
              <v-btn class="teal" width="100%">LOGIN</v-btn>
            </v-col>

            <v-col class="d-flex">
              <v-btn tile class="red flex-grow-1">GOOGLE</v-btn>
              <v-btn tile class="black flex-grow-1">GITHUB</v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-row>

      <div></div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'Auth',
  layout: 'admin'
}
</script>

<style scoped>
.half {
  background-color: #009688;
}

.width-50 {
  width: 50%;
}
</style>
