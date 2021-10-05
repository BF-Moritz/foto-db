import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Schueler from '../views/Schueler.vue';
import AddSchueler from '../views/AddSchueler.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/schueler',
		name: 'Schueler',
		component: Schueler
	},
	// {
	// 	path: '/schueler/:id',
	// 	name: 'OneSchueler',
	// 	component: OneSchueler
	// },
	// {
	// 	path: '/photos',
	// 	name: 'Photos',
	// 	component: Photos
	// },
	{
		path: '/add/schueler',
		name: 'AddSchueler',
		component: AddSchueler
	}
	// {
	// 	path: '/add/photo',
	// 	name: 'AddPhoto',
	// 	component: AddPhoto
	// }
];

const router = new VueRouter({
	routes
});

export default router;
