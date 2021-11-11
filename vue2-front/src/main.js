import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './service/router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import axios from "axios";

// import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// make BootstrapVue available
Vue.use(BootstrapVue)
// optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.config.productionTip = false;
Vue.prototype.$axios=axios;

// profile component화
import Profile from './components/common/Profile'
Vue.component(Profile.name, Profile)

new Vue({
  vuetify,
  router,
  render: h => h(App),

  el: '#app',
      data: {
  showModal: false
  }

}).$mount('#app')