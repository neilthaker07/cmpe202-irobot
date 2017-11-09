var BrickStateManager = function () {

		var currentState = new ZeroHit(this);

		this.setState = function(state){
			currentState = state;
		};

		this.showState = function(){
			console.log("Current State: " + currentState.description);
		};

		this.collisionOccured = function(){
			currentState.collisionOccured();
		};

	}

	var ZeroHit = function(brickStateManager){

		this.description = "Brick Initialized with ZeroHit State";

		this.collisionOccured = function(){

			brickStateManager.setState(new OneHit(brickStateManager));
		}

	}

	var OneHit = function(brickStateManager){

		this.description = "Brick after one hit with the ball";

		this.collisionOccured = function(){

			brickStateManager.setState(new TwoHit(brickStateManager));
		}

	};

	var TwoHit = function(brickStateManager){

		this.description = "Brick after two hit with the ball";

		this.collisionOccured = function(){

			brickStateManager.setState(new Destroyed(brickStateManager));
		}

	};

	var Destroyed = function(brickStateManager){

		this.description = "Brick Destroyed after three hits";

		this.collisionOccured = function(){
			console.log("Operation Not Supported");
		}

	};