import { mount, createLocalVue } from '@vue/test-utils'
import vuetify from 'vuetify'
import Vue from 'vue'
import auth from '@/pages/auth.vue'

function createConfig() {
  const localVue = createLocalVue()
  const propsData = {}
  const mocks = {
    // Vue Auth
    $auth: {
      check: () => false
    },
    // Vuex
    $store: {
      state: {},
      commit: () => {}
    }
  }
  return Object.assign({ mocks, propsData, localVue })
}

describe('Auth Page', () => {
  const config = createConfig()
  let wrapper

  beforeEach(() => {
    Vue.use(vuetify)
    wrapper = mount(auth, config)
  })

  it('HTML Render The Same', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
