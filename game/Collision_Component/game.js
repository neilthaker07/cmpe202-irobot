
window.onload = function() {
		//will create game canvas 
		var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update });

		//loads the image
		function preload() {

		    game.load.atlas('breakout', './breakout.png', './breakout.json');
		    game.load.image('background', './Pack/Background/background.jpg');
		    game.load.image('paddle', ' ./Pack/Bats/bat_pink_small.png');
		    game.load.image('obj_1_1','./Pack/Bricks/brick_violet_small_1.png');
		    game.load.image('obj_2_1','./Pack/Bricks/brick_blue_small_1.png');
		    game.load.image('obj_3_1','./Pack/Bricks/brick_green_small_1.png');
			game.load.image('obj_4_1','./Pack/Bricks/brick_yello_small_1.png');
			game.load.image('power_up_1','./Pack/PowerUPs/plus.png');
			game.load.image('power_up_2','./Pack/PowerUPs/negativesign.jpg');

		}

		var ball;
		var paddle;
		var objects;

		var ballOnPaddle = true;

		var keyStart;
		var score = 0;
		var scoreText;

		var backgroun;

		function create() {

			//start the game
		    game.physics.startSystem(Phaser.Physics.ARCADE);

		    //When ball touches to bottom wall means player missed it 
		    game.physics.arcade.checkCollision.down = false;

		    //set the background
		    background = game.add.tileSprite(0, 0, 800, 600, 'background');

		    objects = game.add.group();
		    objects.enableBody = true;
		    objects.physicsBodyType = Phaser.Physics.ARCADE;

		    var object;

		    //create objects
		    var x=1,y=0;
			object = objects.create(120 + (x * 36), 100 + (y * 52), `obj_${++y}_1`);
		    object.scale.setTo(0.1,0.1);
            object.body.bounce.set(1);
            object.body.immovable = true;
            x++;

            object = objects.create(120 + (x * 36), 100 + (y * 52), `obj_${++y}_1`);
            object.scale.setTo(0.1,0.1);
            object.body.bounce.set(1);
            object.body.immovable = true;
            x++;

            object = objects.create(120 + (x * 36), 100 + (y * 52), `obj_${++y}_1`);
            object.scale.setTo(0.1,0.1);
            object.body.bounce.set(1);
            object.body.immovable = true;
            x++;

            object = objects.create(120 + (x * 36), 100 + (y * 52), `obj_${++y}_1`  );
            object.scale.setTo(0.1,0.1);
            object.body.bounce.set(1);
            object.body.immovable = true;

            //add paddle
		   	paddle = game.add.sprite(game.world.centerX,500,'paddle');
		   	paddle.scale.setTo(0.1,0.1);
		    paddle.anchor.setTo(0.5, 0.5);

		    //enable physics on paddle
		    game.physics.enable(paddle, Phaser.Physics.ARCADE);

		    paddle.body.collideWorldBounds = true;
		    paddle.body.bounce.set(1);
		    paddle.body.immovable = true;

		    //add the ball
		    ball = game.add.sprite(game.world.centerX, paddle.y - 16, 'breakout', 'ball_1.png');
		    ball.anchor.set(0.5);
		    ball.checkWorldBounds = true;

		    //enable physics on ball
		    game.physics.enable(ball, Phaser.Physics.ARCADE);

		    ball.body.collideWorldBounds = true;
			ball.body.bounce.set(1);
			
			scoreText = game.add.text(32, 550, 'score: 0', { font: "20px Arial", fill: "#ffffff", align: "left" });

		    //Game will start when user press SPACEBAR
		    keyStart = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    		keyStart.onDown.add(startGame, this);

		}

		function update () {

		    // keep the background moving accoring to the cursor movement
		    //background.tilePosition.x += (game.input.speed.x / 2);

		    paddle.x = game.input.x;

		    if (ballOnPaddle)
		    {
		        ball.body.x = paddle.x;
		    }
		    else
		    {
		        game.physics.arcade.collide(ball, objects, ballHitObject, null, this);
		    }

		}

		//This will be called when user press space first time to start the game
		function startGame () {

		    if (ballOnPaddle)
		    {
		        ballOnPaddle = false;
		        ball.body.velocity.y = -300;
		        ball.body.velocity.x = -75;
		    }

		}

		function createDynamicObject(posX, posY){
			// object = objects.create(posX, posY, `power_up_1`);
			var typeSelector = Math.floor((Math.random() * 2) + 1);
			console.log(typeSelector);
			if(typeSelector < 2){
				object = game.add.sprite(posX,posY,'power_up_1');
				object.type = "Slider+";
				object.scale.setTo(0.1,0.1);
			}else{
				object = game.add.sprite(posX,posY,'power_up_2');
				object.type = "Slider-";
				object.scale.setTo(0.05,0.05);
			}
			//object = game.add.sprite(posX,posY,'power_up_1');
			game.physics.enable(object, Phaser.Physics.ARCADE);
			//Set gravity
			object.body.gravity.y = 50;
			return object;
		}

		function ballHitObject (ball, obj) {

			//animation on the hit
			var killTween = game.add.tween(obj.scale);

			killTween.to({x:0,y:0},200,Phaser.Easing.Linear.None);

			score += 10;

			scoreText.text = 'score: ' + score;

			killTween.onComplete.addOnce(()=>{
				obj.kill();
				var test = createDynamicObject(obj.x,obj.y); //need to change for the case if the hit object was last.
				console.log(test.type);
			},this)

		    killTween.start();
		}

	};
