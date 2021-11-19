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

axios.defaults.baseURL = 'http://kosa3.iptime.org:50201'
axios.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';
axios.defaults.headers.common['Authorization'] = localStorage.getItem('Authorization');
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