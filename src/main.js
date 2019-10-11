import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
import vuetify from './plugins/vuetify';
import store from './plugins/vuex';

Vue.config.productionTip = false;
Vue.prototype.$http = axios;
Vue.prototype.$baseUrl = process.env.VUE_APP_URL;

new Vue({
	vuetify,
	store,
	render: h => h(App)
}).$mount('#app');
