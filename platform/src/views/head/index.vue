<style lang="scss" scoped>
@import "./index.scss";
</style>

<template>
	<div class="wrap">
		<el-row type="flex" class="row-bg">
			<el-col :span="6" class="logo">
				<img :src="`${ baseUrl }static/logo.jpg`" alt="logo" @click="jumpHome">
				<p>教程</p>
				<p>案例</p>
				<p>关于我们</p>
			</el-col>
			<el-col :span="4" :offset="14" class="panel" v-if="user.isLogin">
				<el-button plain>登录</el-button>
				<el-button plain>注册</el-button>
			</el-col>
			<el-col :span="8" :offset="10" class="panel" v-else>
				<div class="avatorContent">
					<img :src="`${ baseUrl }static/logo.jpg`" alt="avator">
					<div class="userRest">
						<p class="userName">freedom-SOHO</p>
						<p class="level">
							<span>称号：</span>
							<span>高手</span>
						</p>
						<el-rate
						  v-model="user.rate"
						  disabled
						  show-score
						  text-color="#000"
						  score-template="{value}星">
						</el-rate>
						<div class="hr"></div>
						<div class="operate1">
							<span class="ordersBox">
								<i class="el-icon-sort" :class="{orders: user.canOrders}"></i>
								<label>接单状态</label>
							</span>
							<span class="toProfile" @click="jumpProfile">
								<i class="el-icon-tickets"></i>
								<label>个人中心</label>
							</span>
						</div>
						<div class="operate2">
							<el-button plain size="mini">登出</el-button>
						</div>
					</div>
				</div>
				<el-badge :value="15" :max="99" class="item">
					<el-button size="mini" plain>私信</el-button>
				</el-badge>
				<el-badge is-dot class="item">
					<el-button size="mini" plain>动态</el-button>
				</el-badge>
				<el-badge is-dot class="item">
					<el-button size="mini" plain>成交历史</el-button>
				</el-badge>
			</el-col>
		</el-row>
	</div>
</template>

<script>
export default {
	name: 'index',

	data () {
		return {
			baseUrl: baseUrl,
			user: {
				isLogin: false,
				rate: 4.5,
				canOrders: true
			}
		}
	},
	methods: {
		jumpHome () {
			this.$router.push({
				name: 'home'
			})
		},
		jumpProfile () {
			this.$router.push({
				path: `${ baseUrl }profile/relyToUserType`
			})
		}
	}
}
</script>
