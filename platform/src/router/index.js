import Vue from 'vue'
import Router from 'vue-router'
import RouterWrap from '@/views/route-wrap'
import Home from '@/views/home'
import Area from '@/views/area'
import ProfileWrap from '@/views/profile/profile-wrap'
import ProfileSupplier from '@/views/profile/supplier'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [{
		path: `${ baseUrl }`,
		component: RouterWrap,

		children: [{
			path: '',
			name: 'home',
			component: Home
		}, {
			path: 'area/:enName',
			component: Area
		}, {
			path: 'profile/:userType',
			component: ProfileWrap
		}]
	}]
})
