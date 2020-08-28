import repository from '~/api'
import { Plugin } from '@nuxt/types'

declare module 'vue/types/vue' {
  interface Vue {
    $posts: any,
  }
}

declare module '@nuxt/types' {
  interface Context {
    $posts: any,
  }
}
declare module 'vuex/types/index' {
  interface Store<S> {
    $posts: any,
  }
}

const api: Plugin = ({ $http }, inject) => {
  inject('posts', repository($http)('posts'));
}

export default api
