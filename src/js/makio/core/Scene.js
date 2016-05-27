// Abstract Scene
// @author David Ronai / Makiopolis.com / @Makio64

const SceneTraveler = require('./SceneTraveler')

class Scene {

	constructor(name){
		this.name = name
	}

	update(dt){}

	resize(){}

	transitionIn(){ this.onTransitionInComplete() }

	transitionOut(){ this.onTransitionOutComplete()}

	onTransitionInComplete(){}

	onTransitionOutComplete(){
		this.dispose()
		SceneTraveler.onTransitionOutComplete()
	}

	dispose(){}
}

module.exports = Scene
