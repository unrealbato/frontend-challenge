[![Codacy Badge](https://api.codacy.com/project/badge/Grade/dd15e963390743648ebedaf9a8a990e8)](https://www.codacy.com/manual/unrealbato/frontend-challenge?utm_source=github.com&utm_medium=referral&utm_content=unrealbato/frontend-challenge&utm_campaign=Badge_Grade)
[![Netlify Status](https://api.netlify.com/api/v1/badges/3c929911-672e-4c29-b409-13914de6ae9e/deploy-status)](https://app.netlify.com/sites/peaceful-engelbart-703e70/deploys)

# Application Intro

- A user dashboard to manage **Push Notification** apps e.g. configuration, status, share, ...etc

# Technical background

- The App is build using [Nuxt](https://nuxtjs.org/) framework, where its provided as Universal App
- The Front-end UI is managed using [Vuetify](https://vuetifyjs.com/en/), which is a is a Material Design component framework for buildt on Vue.Js
- A Static generated version of the app with [Nuxt generate](https://nuxtjs.org/guide#static-generated-pre-rendering-) feature, provide us the capability to Use [Netlify](netlify.com) as static Hosting
- Vuex implementation to manage
    1. The Snackbar notification across the app
    2. the user object and login status through Nuxt Auth
    3. The user apps fetched through the endpoint
- [Nuxt Auth Module](https://auth.nuxtjs.org/) is used to mange the Authentication process and **Token** flow for both localStorage & Cookies
    - All Routes secured using `middleware: 'auth'` except `login page` is a guest page   
    - All endpoints is secured using `JWT Token` except `login` which used to fetch the token & User Object    
- [Nuxt Axios](https://axios.nuxtjs.org/) Module is used to manage all async calls to endpoints
- The App follow **ESlint** rules
- The App use **Prettier**
- The App is uses **flexbox** Layout to improve responsiveness, using Vuetify [helper classes](https://vuetifyjs.com/en/styles/flex)

# Default Config

## Plugins
1. `global_components` used to define any global Vue Component
2. `vue-chartkick` used to integrate [Chartkick](https://chartkick.com/vue) to implement interactive charts

## Nuxt Axios
- Editing the **BaseURL** using axios Object in `nuxt.config.js`, refer to [doc](https://github.com/axios/axios) for more details
```es6
axios: {
    baseURL: 'https://pushbots-fend-challenge.herokuapp.com'
  },
```

## Nuxt Auth
- You can edit the default endpoints using auth Object in `nuxt.config.js`
```es6
strategies: {
      local: {
        endpoints: {
          login: {
            url: '/login',
            method: 'post',
            propertyName: 'token'
          },
          user: { url: '/api/me', method: 'get', propertyName: false },
          logout: false
        }
```

### Time to build !

```bash
# install dependencies
$ yarn install

# dev serve
$ yarn dev

# generate static project
$ yarn generate

# Jest testing
$ yarn test
$ yarn test -u // update snapshots if needed
```

# Jest Unit Testing
## SnapShot testing
- Two pages snapshots for the final HTML rendered has been taken.
