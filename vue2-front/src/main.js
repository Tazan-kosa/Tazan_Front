import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './service/router'

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