import Vue from 'vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios";
const VueUploadComponent = require('vue-upload-component')

Vue.use(Buefy)

Vue.component('file-upload', VueUploadComponent)
Vue.config.productionTip = false

// Vue.prototype.$api = 'http://localhost:8000';
Vue.prototype.$api = "http://202.150.151.50/api-e-mosi/public";
Vue.prototype.$assets = 'http://202.150.151.50/e-mosi/public-assets';
Vue.prototype.$http = axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
