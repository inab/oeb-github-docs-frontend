import Vue from 'vue';
import App from './App.vue';
import axios from './plugins/axios';

import vuetify from './plugins/vuetify';
import store from './plugins/vuex';

Vue.config.productionTip = false;
Vue.prototype.$http = axios;
Vue.prototype.$baseUrl = process.env.VUE_APP_URL;
Vue.prototype.$repolist = process.env.VUE_APP_REPOLIST;
Vue.prototype.$gh = process.env.VUE_APP_GH;

new Vue({
	vuetify,
	store,
	render: h => h(App)
}).$mount('#app');
