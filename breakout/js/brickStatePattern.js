var BrickStateManager = function (x,y,bricks,inside_brick,imageKey,param) {

		this.x = x;
		this.y = y;
		this.inside_brick = inside_brick
		this.bricks = bricks;
		this.imageKey = imageKey;

		var currentState;
		
		if(param == 0){
			currentState = new ZeroHit(this);
		}

		if(param == 1){
			currentState = new OneHit(this);
		}

		if(param == 2){
			currentState = new TwoHit(this);
		}

		this.setState = function(state){
			currentState = state;
		};

		this.getState = function(){
			return currentState;
		};

		this.collisionOccured = function(){
			currentState.collisionOccured();
		};

		return currentState;

	}

	var ZeroHit = function(brickStateManager){

		brickStateManager.inside_brick = brickStateManager.bricks.create(100 + (brickStateManager.x * 56), 
			80 + (brickStateManager.y * 72), brickStateManager.imageKey);
    	brickStateManager.inside_brick.scale.setTo(.08, .08);
    	brickStateManager.inside_brick.body.bounce.set(1);
    	brickStateManager.inside_brick.body.immovable = true;

		this.collisionOccured = function(){
			brickStateManager.setState(new OneHit(brickStateManager));
		}

		return brickStateManager;

	}

	var OneHit = function(brickStateManager){

		brickStateManager.inside_brick = brickStateManager.bricks.create(100 + (brickStateManager.x * 56), 
			80 + (brickStateManager.y * 72), brickStateManager.imageKey);
    	brickStateManager.inside_brick.scale.setTo(.08, .08);
    	brickStateManager.inside_brick.body.bounce.set(1);
    	brickStateManager.inside_brick.body.immovable = true;

		this.collisionOccured = function(){
			brickStateManager.setState(new TwoHit(brickStateManager));
		}

		return brickStateManager;

	};

	var TwoHit = function(brickStateManager){

		brickStateManager.inside_brick = brickStateManager.bricks.create(100 + (brickStateManager.x * 56), 
			80 + (brickStateManager.y * 72), brickStateManager.imageKey);
    	brickStateManager.inside_brick.scale.setTo(.08, .08);
    	brickStateManager.inside_brick.body.bounce.set(1);
    	brickStateManager.inside_brick.body.immovable = true;

		this.collisionOccured = function(){
			brickStateManager.setState(new Destroyed(brickStateManager));
		}

		return brickStateManager;

	};

	var Destroyed = function(brickStateManager){

		this.description = "Brick Destroyed after three hits";

		this.collisionOccured = function(){
			console.log("Operation Not Supported");
		}

	};