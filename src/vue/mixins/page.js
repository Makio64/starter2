module.exports = {
	route: {
		activate: function(transition) {
			transition.next()
			TweenLite.to(this.$els.page,1,{opacity:1})
		},
		deactivate: function(transition){
			TweenLite.to(this.$els.page,.4,{opacity:0,onComplete:transition.next})
		}
	}
}
