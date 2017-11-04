<style lang="scss" scoped>
	@import "./index.scss";
</style>

<template>
	<div class="wrap">
		<h2>自由，公开，安全是唯一准则，欢迎来到freedom-soho。</h2>
		<el-carousel :interval="4000" type="card" height="200px">
			<el-carousel-item v-for="item in 6" :key="item">
				<h3>{{ item }}</h3>
			</el-carousel-item>
		</el-carousel>
		<p class="areaPart">所有专区</p>
		<!-- 别忘了 bind key -->
		<area-view v-for="(data, index) in areaDatas" :data="data" :key="index"></area-view>
	</div>
</template>

<script>
import areaView from '@/components/area-view'

export default {

	name: 'home',
	components: {
		areaView
	},
	data () {
		return {
			areaDatas: [{
				name: '设计',
				enName: 'design'
			}, {
				name: '策划',
				enName: 'plan'
			}, {
				name: '编程',
				enName: 'programming'
			}, {
				name: '文案',
				enName: 'copy-writing'
			}]
		}
	}
}
</script>
