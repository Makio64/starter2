<template>
	<div class='title'>
		I love you so much
	</div>
	<menu></menu>
</template>

<script>

const Menu = require('./Menu')

export default {
	components:{
		menu:Menu
	}
}
</script>

<style lang="stylus" scoped>
.title
	color #000
	font-size 100px
</style>
