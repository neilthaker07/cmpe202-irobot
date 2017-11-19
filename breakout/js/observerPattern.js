function TheBall() {
    this.observers = [];
    this.subjectState = "";
}
	 
TheBall.prototype = {
 
    attach: function(fn) {
        this.observers.push(fn);
    },
 
    detach: function(fn) {
        this.observers = this.observers.filter(
            function(item) {
                if (item !== fn) {
                    return item;
                }
            }
        );
    },

    notifyObservers: function(subjectState) {
        this.observers.forEach(function(item) {
            item.update(subjectState);
        });
    },

    setState: function(status) {
    	this.subjectState = status;
    	this.notifyObservers(this.subjectState);
    }
}

var Score = function() { 

	var observerState = 0;
    
    this.update = function(subjectState){

    	if(subjectState === "collided"){
    		observerState = observerState + 10;
    	} else if(subjectState === "dead"){
    		// Do nothing. Keep the score as it is if the ball is dead
    	}
    };

    this.getObserverState = function(){
    	return observerState;
    }

    this.addLevelCompletionBonus = function(){
    	observerState = observerState + 100; 
    }

    this.addBonusScore = function(){
        observerState = observerState + 50;
    }

    this.addBulletHitBrickScore = function(){
        observerState = observerState + 5;
    }
};

var Life = function() { 

	var observerState = 3;

	this.update = function(subjectState){

		if(subjectState === "collided"){
			// Do nothing. Keep the lives as it is if the ball collides with the brick
		} else if(subjectState === "dead"){
			observerState = observerState - 1;
		}
	};

	this.getObserverState = function(){
		return observerState;
	}
};