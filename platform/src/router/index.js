import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
	{
		path: '/platform/',
		name: 'home',
		component: Home
	}
	]
})
