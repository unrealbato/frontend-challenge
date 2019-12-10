import { mount, createLocalVue } from '@vue/test-utils'
import vuetify from 'vuetify'
import Vue from 'vue'
import index from '@/pages/index.vue'

function createConfig() {
  const localVue = createLocalVue()
  const propsData = {
    pagination_length: 5,
    take: 5
  }
  const mocks = {
    // Vue Auth
    $auth: {
      check: () => false
    },

    // Vue Router
    $router: {
      push: () => {}
    },

    // Axios
    $axios: {
      get: () => Promise.resolve({ data: 'value' })
    },

    // Vuex
    $store: {
      state: {
        total: 100
      },
      commit: () => {}
    }
  }

  return Object.assign({ mocks, propsData, localVue })
}

describe('Home Page', () => {
  const config = createConfig()
  let wrapper

  beforeEach(() => {
    Vue.use(vuetify)
    wrapper = mount(index, config)
    wrapper.setData = {
      take: 5
    }
  })

  it('check pagination length computed property', () => {
    expect(wrapper.vm.pagination_length).toBe(20)
  })

  it('HTML Render The Same', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
