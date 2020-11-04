import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import FlashMessage from '@smartweb/vue-flash-message'

import InfiniteLoading from 'vue-infinite-loading'
import RotateLoader from 'vue-spinner/src/RotateLoader.vue'
// import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import BootstrapVue from 'bootstrap-vue'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(FlashMessage)
Vue.use(InfiniteLoading, { /* options */ })

Vue.component('rotate-loader', RotateLoader)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
