// Preloader of the main bundle
// add micro loader/anim here
class Preloader {

	constructor(){
		document.addEventListener('DOMContentLoaded', this.init)
	}

	init(){
		document.removeEventListener('DOMContentLoaded', Preloader.init)
		require.ensure(['./Main'], (require)=>{
			const Main = require('./Main')
			new Main()
		})
	}
}
module.exports = new Preloader()
