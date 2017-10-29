<style>
</style>

<template>
	<div id="app">
		<my-head></my-head>
		<router-view/>
		<my-footer></my-footer>
	</div>
</template>

<script>
import myHead from '@/views/head'
import myFooter from '@/views/footer'

export default {
	name: 'app',
	components: {
		myHead,myFooter
	}
}
</script>

