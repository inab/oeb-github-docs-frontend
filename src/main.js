import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$http = axios;
Vue.prototype.$baseUrl = process.env.VUE_APP_URL;

new Vue({
  render: h => h(App),
}).$mount('#app')
