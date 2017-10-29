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
		<area-view :areaName="'设计'"></area-view>
		<area-view :areaName="'策划'"></area-view>
		<area-view :areaName="'编程'"></area-view>
		<area-view :areaName="'文案'"></area-view>
	</div>
</template>

<script>
import areaView from '@/components/areaView'

export default {

	name: 'home',
	components: {
		areaView
	},
	data () {
		return {

		}
	}
}
</script>
