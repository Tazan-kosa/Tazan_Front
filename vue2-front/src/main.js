import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './service/router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.config.productionTip = false

// register modal component
Vue.component('modal', {
  template: '#modal-template'
})

new Vue({
  vuetify,
  router,
  render: h => h(App),

  el: '#app',
      data: {
  showModal: false
  }

}).$mount('#app')