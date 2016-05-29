// Preloader of the main bundle
// add micro loader/anim here
if(isProduction){
	require('offline-plugin/runtime').install()
}

class Preloader {

	constructor(){
		document.addEventListener('DOMContentLoaded', this.init)
	}

	init(){
		document.removeEventListener('DOMContentLoaded', Preloader.init)
		require.ensure(['./Main'], (require)=>{
			const Main = require('./Main')
		})
	}
}

module.exports = new Preloader()
