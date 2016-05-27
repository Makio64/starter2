//
// Wrapper for requestAnimationFrame, Resize & Update
// this.author : David Ronai / this.Makio64 / makiopolis.com
//

const Signal = require("signals")

//---------------------------------------------------------- Class Stage

class Stage {

	constructor(){
		this.skipLimit		= 32
		this.skipActivated  = true
		this.lastTime 		= 0
		this.pause 			= false

		this.onResize 	= new Signal()
		this.onUpdate 	= new Signal()

		this.width 		= window.innerWidth
		this.height 	= window.innerHeight

		window.onresize = ()=> {
			this.width 		= window.innerWidth
			this.height 	= window.innerHeight
			this.onResize.dispatch()
		}

		this.lastTime = Date.now()
		requestAnimationFrame( this.update )
	}

	update = ()=>{
		let t = Date.now()
		let dt = t - this.lastTime
		this.lastTime = t
		requestAnimationFrame( this.update )

		if( (this.skipActivated && dt > this.skipLimit) || this.pause){
			return
		}

		this.onUpdate.dispatch(dt)
	}
}

module.exports = new Stage()
