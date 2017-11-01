/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.slider = undefined;

var _preload = __webpack_require__(1);

var _create = __webpack_require__(2);

var slider;
function onload() {
    var game = new Phaser.Game(1000, 680, Phaser.CANVAS, 'phaser-example', { preload: _preload.preload, create: _create.create, update: update, render: render });

    //bricks or patterns
    var bricks;

    // slider
    var leftButton;
    var rightButton;

    var sliderSpeed = 15;

    // powerUp
    var counter = 0;
    var object;

    // ball
    var ball;
    var ballOnSlider = true;

    // music
    var collisionSound;
    var backgroundMusic;
    var isBackgroundMusicOn = true;
    var soundButton;

    // Ball veloctiy configuration
    var speedUp = false;
    var speedMultiplier = 10;

    // score
    var lives = 3;
    var score = 0;

    //Bonus Ball Power Up
    var bonusBall;
    var isBonusBallLive = false;

    var scoreText;
    var livesText;
    var introText;
    var limitPowerUpsPerLevel = 5;
    var numberOfPowerUpsGenerated = 0;

    // preload
    (0, _preload.preload)(game);

    //
    (0, _create.create)(game, collisionSound, backgroundMusic, bricks, leftButton, rightButton, ball, soundButton, bonusBall, isBonusBallLive, scoreText, livesText);

    // create components
    // function create() 
    // {
    //     game.add.tileSprite(0, 0, 1000, 700, 'background'); // background image
    //     //  We check bounds collisions against all walls other than the bottom one
    //     game.physics.arcade.checkCollision.down = false;

    //     collisionSound = game.add.audio('collisionSound');
    //     backgroundMusic = game.sound.play('backgroundMusic', 0.1, true);

    //     bricks = game.add.group();
    //     bricks.enableBody = true;
    //     bricks.physicsBodyType = Phaser.Physics.ARCADE;

    //     addPatterns();
    //     addSlider();
    //     addBall();  
    // 	addSoundButton();
    // 	calculateScore();
    //     addText();

    // 	game.input.onDown.add(releaseBall, this); // Ball intial position
    // }

    // update components at runtime
    function update() {
        updateSlider();
        updateBall();
        game.physics.arcade.collide(object, slider, powerUpHitSlider, null, this);
        updateBallVelocity();
    }

    // function addPatterns(){

    //     var brick;
    //     var num = Math.floor(Math.random() * (4 - 0)) + 0;
    //     switch (num) {
    //         case 0:
    //             brick = pattern0(bricks);
    //             break;
    //         case 1:
    //             brick = pattern1(bricks);
    //             break;
    //         case 2:
    //             brick = pattern2(bricks);
    //             break;
    //         case 3:
    //             brick = pattern3(bricks);
    //             break;
    //         case 4:
    //             brick = pattern4(bricks);
    //             break;

    //     }

    // }

    // function addSlider()
    // {
    //     // Slider
    //     slider = game.add.sprite(game.world.centerX, 640, 'slider');
    //     slider.scale.setTo(0.5,0.5);
    //     slider.anchor.setTo(0.5, 0.5);

    //     // Slider boundary
    //     game.physics.enable(slider, Phaser.Physics.ARCADE); 
    //     slider.body.collideWorldBounds = true;
    //     slider.body.bounce.set(0);
    //     slider.body.immovable = true;

    //     // Slider left right
    //     leftButton = game.add.sprite();
    //     leftButton.alpha = 0;
    //     rightButton = game.add.sprite();
    //     rightButton.alpha = 0;
    // }

    // function addBall()
    // {
    //     // Ball
    //     ball = game.add.sprite(game.world.centerX, slider.y - 16, 'breakout', 'ball_1.png');
    //     ball.anchor.set(0.5);
    //     ball.checkWorldBounds = true;

    //     game.physics.enable(ball, Phaser.Physics.ARCADE);
    //     ball.body.collideWorldBounds = true;
    //     ball.body.bounce.set(1);

    //     ball.animations.add('spin', [ 'ball_1.png', 'ball_2.png', 'ball_3.png', 'ball_4.png', 'ball_5.png' ], 50, true, false);

    //     ball.events.onOutOfBounds.add(ballLost, this);
    // }

    // function addSoundButton(){

    // 	soundButton = game.add.button(900, 10, 'volumeButton', changeVolumePreference, this);
    // 	soundButton.name = "Mute";
    // 	soundButton.scale.set(1, 1);
    // 	soundButton.smoothed = false;    
    // }

    // function addBonusBall()
    // {
    //     initializeBonusBall();

    //     isBonusBallLive = true;

    //     bonusBall.body.velocity.y = -300;
    //     bonusBall.body.velocity.x = -75;
    //     bonusBall.animations.play('spin');

    // }

    // function initializeBonusBall()
    // {
    //     // Ball
    //     bonusBall = game.add.sprite(game.world.centerX, slider.y - 16, 'breakout', 'ball_1.png');
    //     bonusBall.anchor.set(0.5);
    //     bonusBall.checkWorldBounds = true;

    //     game.physics.enable(bonusBall, Phaser.Physics.ARCADE);
    //     bonusBall.body.collideWorldBounds = true;
    //     bonusBall.body.bounce.set(1);

    //     bonusBall.animations.add('spin', [ 'ball_1.png', 'ball_2.png', 'ball_3.png', 'ball_4.png', 'ball_5.png' ], 50, true, false);

    //     bonusBall.events.onOutOfBounds.add(ballLost, this);
    // }

    // function calculateScore()
    // {
    //     scoreText = game.add.text(32, 650, 'score: 0', { font: "20px Arial", fill: "#ffffff", align: "left" });
    //     livesText = game.add.text(900, 650, 'lives: 3', { font: "20px Arial", fill: "#ffffff", align: "left" });
    // }

    // function addText()
    // {
    //     introText = game.add.text(game.world.centerX, 400, '- click to start -', { font: "40px Arial", fill: "#ffffff", align: "center" });
    //     introText.anchor.setTo(0.5, 0.5);
    // }

    function changeVolumePreference(button) {

        if (isBackgroundMusicOn == true) {
            backgroundMusic.pause();
            isBackgroundMusicOn = false;
            soundButton.loadTexture('muteButton');
        } else {
            backgroundMusic.resume();
            isBackgroundMusicOn = true;
            soundButton.loadTexture('volumeButton');
        }
    }

    function updateSlider() {
        // Slider movement using keyboard left and right
        // Check key states every frame. Move ONLY one of the left and right key is hold.
        if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
            slider.x -= sliderSpeed;
            leftButton.alpha = 0.6;
        } else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
            slider.x += sliderSpeed;
            rightButton.alpha = 0.6;
        } else {
            slider.rotation = 0;
            leftButton.alpha = rightButton.alpha = 0;
        }
    }

    function updateBall() {
        if (ballOnSlider) {
            ball.body.x = slider.x;
        } else {
            game.physics.arcade.collide(ball, slider, ballHitSlider, null, this);
            game.physics.arcade.collide(ball, bricks, ballHitBrick, null, this);
            game.physics.arcade.collide(bonusBall, slider, ballHitSlider, null, this);
            game.physics.arcade.collide(bonusBall, bricks, ballHitBrick, null, this);
        }
    }

    function updateBallVelocity() {
        if (speedUp == true) {

            speedMultiplier = 25;
            ball.body.velocity.x = -800;
            ball.body.velocity.y = -200;

            speedUp = false;

            setTimeout(function () {
                resetBallVelocity();
            }, 15000);
        }
    }

    function powerUpHitSlider(_objectPowerUp, _slider) {
        _objectPowerUp.body.velocity.y = 0;
        var objectType = _objectPowerUp.type;
        _objectPowerUp.kill();

        if (objectType === "Slider+") {
            increaseSliderSize();
        } else if (objectType === "Slider-") {
            decreaseSliderSize();
        } else if (objectType === "Speed+") {
            speedUp = true;
        } else if (objectType === "Speed-") {
            //decreaseBallSpeed();
        }
    }

    function increaseSliderSize() {
        slider.scale.setTo(1, 1);
        setTimeout(function () {
            slider.scale.setTo(0.5, 0.5);
        }, 5000);
    }

    function decreaseSliderSize() {
        slider.scale.setTo(0.4, 0.4);
        setTimeout(function () {
            slider.scale.setTo(0.5, 0.5);
        }, 5000);
    }

    // function releaseBall() 
    // {
    //     if (ballOnSlider)
    //     {
    //         ballOnSlider = false;
    //         ball.body.velocity.y = -300;
    //         ball.body.velocity.x = -75;
    //         ball.animations.play('spin');
    //         introText.visible = false;
    //     }
    // }

    function resetBallVelocity() {

        speedMultiplier = 10;

        ball.body.velocity.y = -300;
        ball.body.velocity.x = -75;
    }

    function ballLost() {

        if (isBonusBallLive == false) {
            lives--;
            livesText.text = 'lives: ' + lives;

            if (lives === 0) {
                gameOver();
            } else {
                ballOnSlider = true;

                ball.reset(slider.body.x + 16, slider.y - 16);

                ball.animations.stop();
            }
        } else {
            isBonusBallLive = false;
        }
    }

    function ballHitSlider(_ball, _slider) {
        var diff = 0;
        if (_ball.x < _slider.x) {
            //  Ball is on the left-hand side of the slider
            diff = _slider.x - _ball.x;
            _ball.body.velocity.x = -1 * speedMultiplier * diff;
        } else if (_ball.x > _slider.x) {
            //  Ball is on the right-hand side of the slider
            diff = _ball.x - _slider.x;
            _ball.body.velocity.x = speedMultiplier * diff;
        } else {
            //  Ball is perfectly in the middle
            //  Add a little random X to stop it bouncing straight up!
            _ball.body.velocity.x = 2 + Math.random() * 8;
        }
    }

    function gameOver() {
        ball.body.velocity.setTo(0, 0);
        speedMultiplier = 10;
        introText.text = 'Game Over!';
        introText.visible = true;
    }

    function render() {
        game.debug.text('Hold left/right to move the ufo.');
    }
    function checkToCreatePowerUp() {
        var typeSelector;
        if (limitPowerUpsPerLevel > numberOfPowerUpsGenerated) {
            typeSelector = Math.floor(Math.random() * 20 + 1);
            console.log(typeSelector);
        } else {
            typeSelector = 5;
        }
        return typeSelector;
    }
    function createDynamicObject(posX, posY, type) {
        console.log('inside createObject');
        switch (type) {
            case 1:
                {
                    object = game.add.sprite(posX, posY, 'sliderPlus');
                    object.type = "Slider+";
                    object.scale.setTo(0.3, 0.3);
                }
                break;
            case 2:
                {
                    object = game.add.sprite(posX, posY, 'sliderMinus');
                    object.type = "Slider-";
                    object.scale.setTo(0.3, 0.3);
                }
                break;
            case 3:
                {
                    object = game.add.sprite(posX, posY, 'speedPlus');
                    object.type = "Speed+";
                    object.scale.setTo(0.3, 0.3);
                }
                break;
            case 4:
                {
                    object = game.add.sprite(posX, posY, 'speedMinus');
                    object.type = "Speed-";
                    object.scale.setTo(0.3, 0.3);
                }
            default:
                break;
        }
        game.physics.enable(object, Phaser.Physics.ARCADE);
        //Set gravity
        object.body.gravity.y = 50;
        numberOfPowerUpsGenerated++;
    }

    function ballHitBrick(ball, obj) {

        collisionSound.play();

        //animation on the hit
        var killTween = game.add.tween(obj.scale);

        killTween.to({ x: 0, y: 0 }, 200, Phaser.Easing.Linear.None);

        updateScore();

        killTween.onComplete.addOnce(function () {
            obj.kill();
        }, this);

        killTween.start();

        if (!isLevelFinish()) {
            var type = checkToCreatePowerUp();
            if (type <= 4) {
                createDynamicObject(obj.x, obj.y, type); //need to change for the case if the hit object was last.
            }
        } else {
            resetToNextLevel();
        }
    }

    function updateScore() {
        score += 10;
        scoreText.text = 'score: ' + score;
    }

    function nextLevelScoreUpdate() {
        score += 100;
        scoreText.text = 'score: ' + score;
    }

    function isLevelFinish() {
        console.log('bricks: ' + bricks.countLiving());
        if (bricks.countLiving() == 1) {
            return true;
        }
        return false;
    }

    function resetToNextLevel() {
        score += 100;
        scoreText.text = 'score: ' + score;
        introText.text = 'Next Level';
        introText.visible = true;
        ballOnSlider = true;
        ball.body.velocity.set(0);
        ball.x = slider.x + 16;
        ball.y = slider.y - 16;
        ball.animations.stop();
        numberOfPowerUpsGenerated = 0;
        loadNewLevel();
    }

    function loadNewLevel() {
        setTimeout(function () {
            addPatterns();
            introText.text = 'click to start';
        }, 2500);
    }
};
onload();
exports.slider = slider;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
      value: true
});
// preloading components
function preload(game) {
      console.log(game.load);
      game.load.atlas('breakout', '../images/breakout.png', '../json/breakout.json');
      console.log('game load after atlas ' + game.load);

      //background image changed
      game.load.image('background', '../images/background.jpg');

      game.load.image('slider', '../images/slider.png');
      game.load.image('sliderPlus', '../images/sliderSizePlus.png');
      game.load.image('sliderMinus', '../images/sliderSizeDecrease.png');
      game.load.image('speedPlus', '../images/speedIncrease.png');
      game.load.image('speedMinus', '../images/speedDecrease.png');
      game.load.image('muteButton', '../images/muteBtn.png');
      game.load.image('volumeButton', '../images/volume.png');

      game.load.audio('collisionSound', '../sound/collision.mp3');
      game.load.audio('backgroundMusic', '../sound/gameplay.mp3');

      //pattern Images
      game.load.image('candy', '../images/candy.png');
      game.load.image('coin', '../images/coin.png');
      game.load.image('redapple', '../images/redapple.png');
      game.load.image('greenapple', '../images/greenapple.png');
      game.load.image('custardapple', '../images/custardapple.png');
      game.load.image('orange', '../images/orange.png');
      game.load.image('peru', '../images/peru.png');
      game.load.image('watermelon', '../images/watermelon.png');
      game.load.image('banana', '../images/banana.png');
      game.load.image('blackberry', '../images/blackberry.png');

      return game;
}
exports.preload = preload;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.create = undefined;

var _index = __webpack_require__(0);

function create(game, collisionSound, backgroundMusic, bricks, leftButton, rightButton, ball, soundButton, bonusBall, isBonusBallLive, scoreText, livesText) {
    game.add.tileSprite(0, 0, 1000, 700, 'background'); // background image
    //  We check bounds collisions against all walls other than the bottom one
    game.physics.arcade.checkCollision.down = false;

    collisionSound = game.add.audio('collisionSound');
    backgroundMusic = game.sound.play('backgroundMusic', 0.1, true);

    bricks = game.add.group();
    bricks.enableBody = true;
    bricks.physicsBodyType = Phaser.Physics.ARCADE;

    addPatterns(bricks);
    addSlider(game, _index.slider, leftButton, rightButton);
    addBall(game, ball);
    addSoundButton(game, soundButton);
    calculateScore(game, bonusBall, isBonusBallLive);
    addText(game, scoreText, livesText);

    game.input.onDown.add(releaseBall, this); // Ball intial position
}
exports.create = create;


function addPatterns(bricks) {

    var brick;
    var num = Math.floor(Math.random() * (4 - 0)) + 0;
    switch (num) {
        case 0:
            brick = pattern0(bricks);
            break;
        case 1:
            brick = pattern1(bricks);
            break;
        case 2:
            brick = pattern2(bricks);
            break;
        case 3:
            brick = pattern3(bricks);
            break;
        case 4:
            brick = pattern4(bricks);
            break;

    }
}

function addSlider(game, slider, leftButton, rightButton) {
    // Slider
    slider = game.add.sprite(game.world.centerX, 640, 'slider');
    slider.scale.setTo(0.5, 0.5);
    slider.anchor.setTo(0.5, 0.5);

    // Slider boundary
    game.physics.enable(slider, Phaser.Physics.ARCADE);
    slider.body.collideWorldBounds = true;
    slider.body.bounce.set(0);
    slider.body.immovable = true;

    // Slider left right
    leftButton = game.add.sprite();
    leftButton.alpha = 0;
    rightButton = game.add.sprite();
    rightButton.alpha = 0;
}

function addBall(game, ball) {
    // Ball
    ball = game.add.sprite(game.world.centerX, _index.slider.y - 16, 'breakout', 'ball_1.png');
    ball.anchor.set(0.5);
    ball.checkWorldBounds = true;

    game.physics.enable(ball, Phaser.Physics.ARCADE);
    ball.body.collideWorldBounds = true;
    ball.body.bounce.set(1);

    ball.animations.add('spin', ['ball_1.png', 'ball_2.png', 'ball_3.png', 'ball_4.png', 'ball_5.png'], 50, true, false);

    ball.events.onOutOfBounds.add(ballLost, this);
}

function addSoundButton(game, soundButton) {

    soundButton = game.add.button(900, 10, 'volumeButton', changeVolumePreference, this);
    soundButton.name = "Mute";
    soundButton.scale.set(1, 1);
    soundButton.smoothed = false;
}

function addBonusBall(game, bonusBall, isBonusBallLive) {
    initializeBonusBall(game);

    isBonusBallLive = true;

    bonusBall.body.velocity.y = -300;
    bonusBall.body.velocity.x = -75;
    bonusBall.animations.play('spin');
}

function initializeBonusBall(game, bonusBall) {
    // Ball
    bonusBall = game.add.sprite(game.world.centerX, _index.slider.y - 16, 'breakout', 'ball_1.png');
    bonusBall.anchor.set(0.5);
    bonusBall.checkWorldBounds = true;

    game.physics.enable(bonusBall, Phaser.Physics.ARCADE);
    bonusBall.body.collideWorldBounds = true;
    bonusBall.body.bounce.set(1);

    bonusBall.animations.add('spin', ['ball_1.png', 'ball_2.png', 'ball_3.png', 'ball_4.png', 'ball_5.png'], 50, true, false);

    bonusBall.events.onOutOfBounds.add(ballLost, this);
}

function calculateScore(game, scoreText, livesText) {
    scoreText = game.add.text(32, 650, 'score: 0', { font: "20px Arial", fill: "#ffffff", align: "left" });
    livesText = game.add.text(900, 650, 'lives: 3', { font: "20px Arial", fill: "#ffffff", align: "left" });
}

function addText(game, introText) {
    introText = game.add.text(game.world.centerX, 400, '- click to start -', { font: "40px Arial", fill: "#ffffff", align: "center" });
    introText.anchor.setTo(0.5, 0.5);
}

function releaseBall(ballOnSlider, ball, introText) {
    if (ballOnSlider) {
        ballOnSlider = false;
        ball.body.velocity.y = -300;
        ball.body.velocity.x = -75;
        ball.animations.play('spin');
        introText.visible = false;
    }
}

/***/ })
/******/ ]);
//# sourceMappingURL=app.bundle.js.map