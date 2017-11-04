<style lang="scss" scoped>
@import "./index.scss";
</style>

<template>
	<div class="wrap">
		<div class="head">
			<p class="name" v-text="this.$route.params.enName"></p>
			<el-select @change="change" v-model="selectText" clearable placeholder="请选择">
				<el-option
				v-for="item in options"
				:key="item.value"
				:label="item.label"
				:value="item.value">
				</el-option>
			</el-select>
		</div>
		<div class="content">
			<supplier></supplier>
			<supplier></supplier>
			<supplier></supplier>
			<supplier></supplier>
			<supplier></supplier>
			<supplier></supplier>
			<supplier></supplier>
		</div>
		<div class="pagination">
			<el-pagination
			    layout="prev, pager, next"
			    :page-size="20"
			    :total="200">
			</el-pagination>
		</div>
	</div>
</template>

<script>
import supplier from '@/components/supplier-view'

export default {
	name: 'index',
	components: {
		supplier
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
			selectText: '3星服务商'
		}
	},
	methods: {
		change (arg) {
			if (!this.selectText) {
				arg = 3
				this.selectText = '3星服务商'
			}
		}
	}
}
</script>
