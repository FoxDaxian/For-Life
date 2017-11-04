<style lang="scss" scoped>
	@import "./index.scss";
</style>

<template>
	<div class="supplier">
		<div class="avator">
			<img :src="`${ baseUrl }static/logo.jpg`" alt="">
		</div>
		<div class="intro">
			<p class="name">
				<span class="placeholder">姓名:</span>
				<span>freedom-SOHO</span>
			</p>
			<p class="level">
				<span class="placeholder">称号:</span>
				<span>高手</span>
			</p>
			<p class="rate">
				<span class="placeholder">星际:</span>
				<el-rate
					v-model="rate"
					disabled
					show-score
					text-color="#000"
					score-template="">
				</el-rate>
			</p>
			<p class="motto">
				<span class="placeholder">座右铭:</span>
				<span>只管去做好了，没关系的</span>
			</p>
		</div>
	</div>
</template>

<script>
export default {

	name: 'index',

	data () {
		return {
			baseUrl: baseUrl,
			rate: 4.5
		}
	}
}
</script>
