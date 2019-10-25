import Vue from 'vue';
import VueRouter from 'vue-router';
import projects from '@/components/Projects';

Vue.use(VueRouter);

const routes = [{ path: '/:id', component: projects }];

export default new VueRouter({
	routes: routes
});
