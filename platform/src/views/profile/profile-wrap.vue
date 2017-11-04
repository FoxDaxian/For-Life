<style lang="scss" scoped>

</style>

<template>
	<div class="profileWrap">
		<supplier></supplier>
	</div>
</template>

<script>
import supplier from './supplier/'

export default {
	name: 'profile-wrap',
	components: {
		supplier
	},
	data () {
		return {

		}
	},
	mounted () {
		console.log(this.$route.params)
	}
}
</script>
