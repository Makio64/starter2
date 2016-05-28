// Preloader of the main bundle
// add micro loader/anim here
class Preloader {

	constructor(){
		console.log('haha')
		document.addEventListener('DOMContentLoaded', this.init)
	}

	init(){
		console.log('fufufu')
		document.removeEventListener('DOMContentLoaded', Preloader.init)
		require.ensure(['./Main'], (require)=>{
			console.log('LOL')
			const Main = require('./Main')
		})
	}
}

console.log('FU')
module.exports = new Preloader()
