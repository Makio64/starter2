// All great stories start with a Main.coffee
import Vue from 'vue'
import App from '../vue/App.vue'
const Stage 	= require('./makio/core/Stage')
// Stage2d 		= require('makio/core/Stage2d')
// Stage3d 		= require('makio/core/Stage3d')
// Stage3dCSS 	= require('makio/core/Stage3dCSS')
// OrbitControl = require('makio/3d/OrbitControls')
// gui			= require('makio/core/GUI').gui

class Main {


	// Entry point
	constructor(){
		console.log('hello')
		new Vue({
			el: 'body',
			components: {
				app: App
			}
		})
		// ---------------------------------------------------------------------- INIT STAGE 2D / 3D
		// Stage3d.init({background:0x000000})
		// Stage3d.control = new OrbitControl(Stage3d.camera,500)
		// Stage3d.initPostProcessing()
		// Stage3dCSS.init()
		// Stage3dCSS.camera = Stage3d.camera
		// Stage2d.init({background:0x000000})

		// ---------------------------------------------------------------------- UPDATE / RESIZE LISTENERS
		Stage.onUpdate.add(this.update)
		// Stage.onResize.add(this.resize)
	}

	// -------------------------------------------------------------------------- UPDATE

	update = (dt) => {
		// console.log(dt)
	}

	// -------------------------------------------------------------------------- RESIZE

	resize = () => {

	}
}

module.exports = new Main()
