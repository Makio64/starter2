<template>
	<div class="menu">
		<a v-link="{ path: 'page1' }">page1</a>
		<a v-link="{ path: 'page2' }">page2</a>
	</div>
</template>

<style lang="stylus" scoped>
.menu
	position absolute
	top 0
	left 0
	color #F00
</style>
