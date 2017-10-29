<style lang="scss" scoped>
@import "./index.scss";
</style>

<template>
	<div class="wrap">
		<div class="areaTop">
			<div class="title">{{areaName}}专区</div>
			<div class="selectRate">
				<el-select @change="change" v-model="selectText" clearable placeholder="请选择">
					<el-option
						v-for="item in options"
						:key="item.value"
						:label="item.label"
						:value="item.value">
					</el-option>
				</el-select>
			</div>
		</div>
		<div class="content">
			<el-row :gutter="20">
				<el-col :span="16">
					<p class="recommendTitle">推荐服务商</p>
				</el-col>
				<el-col :span="8" class="topPart">
					<p class="topTitle">服务商Top10</p>
				</el-col>
			</el-row>
		</div>
	</div>
</template>

<script>
export default {

	name: 'index',
	props: {
		areaName: {
			type: String,
			default: ''
		}
	},
	data () {
		return {
			options: [{
				value: '0',
				label: '1星服务商'
			}, {
				value: '1',
				label: '2星服务商'
			}, {
				value: '2',
				label: '3星服务商'
			}, {
				value: '3',
				label: '4星服务商'
			}, {
				value: '4',
				label: '5星服务商'
			}],
			selectText: '所有'
		}
	},
	methods: {
		change () {
			this.selectText = this.selectText || '所有'
		}
	}
}
</script>
