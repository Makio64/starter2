// All great stories start with a Main.js
const Vue		= require('vue')
const VueRouter = require('vue-router')
const Stage 	= require('./makio/core/Stage')

Vue.use(VueRouter)

class Main {
	// Entry point
	constructor(){

		console.log('hello')

		let app = Vue.extend({
			components: {
				  app: require('../vue/App.vue')
			  }
		})

		const router = new VueRouter()
		router.map({
			'/page1': {
				component: function (resolve) {
					  require(['../vue/page1.vue'], resolve)
				}
			},
			'/page2': {
				component: function (resolve) {
					  require(['../vue/page2.vue'], resolve)
				}
			}
		})

		router.start(app,"body")
		router.go('/page1')

		// ---------------------------------------------------------------------- UPDATE / RESIZE LISTENERS
		// Stage.onUpdate.add(this.update)
	}

	// -------------------------------------------------------------------------- UPDATE

	// update = (dt) => {
	// 	// console.log(dt)
	// }

}

module.exports = new Main()
