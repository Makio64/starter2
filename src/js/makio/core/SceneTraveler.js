// Manage transition betweenScene
//
// @usage SceneTraveler.to( new Scene() )
// @author David Ronai / Makiopolis.com / @Makio64

const Stage = require('makio/core/Stage')

class SceneTraveler{

	static init(){
		this.currentScene 	= null
		this.nextScene		= null
		Stage.onUpdate.add(this.update)
	}

	static to(scene){
		this.nextScene = scene
		if this.currentScene{
			this.currentScene.transitionOut()
		}
		else{
			this.onTransitionOutComplete()
		}
	}

	static update(dt){
		if(this.currentScene){
			this.currentScene.update(dt)
		}
	}

	static onTransitionOutComplete(){
		this.currentScene = this.nextScene
		console.log('travel to :',this.currentScene.name)
		this.currentScene.transitionIn()
	}

	static resize(){
		if(this.currentScene){
			this.currentScene.resize()
		}
		if(this.nextScene){
			this.nextScene.resize()
		}
	}
}

SceneTraveler.init()
module.exports = SceneTraveler
