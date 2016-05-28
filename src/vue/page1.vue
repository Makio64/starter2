<template>
	<div v-el:page>
		A LOT
	</div>
</template>


<script>
const pageMixin = require("./mixins/page.js")

export default {
	mixins: [pageMixin]
}
</script>


<style lang="stylus" scoped>
div
	font-size 170px
	color #F00
	opacity 0
	will-change transform
</style>
