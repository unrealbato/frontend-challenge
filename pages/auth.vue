<template>
  <v-row class="height-100 flex-column flex-md-row ma-0">
    <v-col class="teal flex-grow-0 flex-md-grow-1">
      <h1 class="ml-5 font-weight-bold text--center">PushBot</h1>
    </v-col>

    <!--User Login Form-->
    <v-col class="d-flex align-center justify-center">
      <v-form
        ref="loginForm"
        class="width-75"
        lazy-validation
        @submit.prevent="onSubmit()"
      >
        <v-row class="flex-column">
          <v-col>
            <h2 class="title">Log in to your account</h2>
          </v-col>

          <v-col>
            <v-text-field
              v-model="email"
              dense
              filled
              label="Your Email Address"
              prepend-inner-icon="mdi-email-outline"
              type="email"
              required
              :rules="emailCheck"
            ></v-text-field>
            <v-text-field
              v-model="password"
              dense
              filled
              label="Your Password"
              prepend-inner-icon="mdi-lock-outline"
              type="password"
              required
              :rules="passwordCheck"
            ></v-text-field>
          </v-col>

          <v-col>
            <v-btn depressed small text class="d-block"
              >forget your password?</v-btn
            >
            <v-btn depressed small text class="d-block"
              >Don't have an account?</v-btn
            >
          </v-col>

          <v-col>
            <v-btn type="submit" class="" width="100%">LOGIN</v-btn>
          </v-col>

          <v-col class="d-flex">
            <v-btn tile class="red flex-grow-1">GOOGLE</v-btn>
            <v-btn tile class="black flex-grow-1">GITHUB</v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'Auth',
  components: {},
  layout: 'auth',
  auth: 'guest',
  head() {
    return {
      title: 'User Login',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'PushBot User Login Page'
        }
      ]
    }
  },
  data() {
    return {
      email: null,
      emailCheck: [
        (v) => !!v || 'E-mail is required',
        (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ],
      password: null,
      passwordCheck: [(v) => !!v || 'Password is required'],
      trigger: false,
      message: null,
      color: null
    }
  },

  created() {},

  methods: {
    async onSubmit() {
      if (this.$refs.loginForm.validate()) {
        const credential = {
          email: this.email,
          password: this.password
        }
        try {
          await this.$auth.loginWith('local', { data: credential })
          this.$store.commit('activeSnackbar', ['green', 'Successfully login'])
        } catch (err) {
          this.$store.commit('activeSnackbar', ['red', err.response.data.msg])
        }
      }
    }
  }
}
</script>

<style scoped>
.width-75 {
  width: 75%;
}

@media only screen and (max-width: 991px) {
  .text--center {
    text-align: center;
    margin-left: 0 !important;
  }
}
</style>
