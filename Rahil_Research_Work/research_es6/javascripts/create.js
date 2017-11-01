import {slider} from './index';
function create(game,collisionSound,backgroundMusic,bricks,leftButton,rightButton,ball,soundButton,bonusBall,isBonusBallLive,scoreText,livesText) 
{
    game.add.tileSprite(0, 0, 1000, 700, 'background'); // background image
    //  We check bounds collisions against all walls other than the bottom one
    game.physics.arcade.checkCollision.down = false;

    collisionSound = game.add.audio('collisionSound');
    backgroundMusic = game.sound.play('backgroundMusic', 0.1, true);
    
    bricks = game.add.group();
    bricks.enableBody = true;
    bricks.physicsBodyType = Phaser.Physics.ARCADE;

    addPatterns(bricks);
    addSlider(game, slider, leftButton, rightButton);
    addBall(game, ball);  
    addSoundButton(game, soundButton);
    calculateScore(game, bonusBall, isBonusBallLive);
    addText(game, scoreText, livesText);

    game.input.onDown.add(releaseBall, this); // Ball intial position
}
export {create};

function addPatterns(bricks){
    
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

function addSlider(game, slider, leftButton, rightButton)
{
    // Slider
    slider = game.add.sprite(game.world.centerX, 640, 'slider');
    slider.scale.setTo(0.5,0.5);
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

function addBall(game, ball)
{
    // Ball
    ball = game.add.sprite(game.world.centerX, slider.y - 16, 'breakout', 'ball_1.png');
    ball.anchor.set(0.5);
    ball.checkWorldBounds = true;

    game.physics.enable(ball, Phaser.Physics.ARCADE);
    ball.body.collideWorldBounds = true;
    ball.body.bounce.set(1);

    ball.animations.add('spin', [ 'ball_1.png', 'ball_2.png', 'ball_3.png', 'ball_4.png', 'ball_5.png' ], 50, true, false);

    ball.events.onOutOfBounds.add(ballLost, this);
}

function addSoundButton(game, soundButton){
    
    soundButton = game.add.button(900, 10, 'volumeButton', changeVolumePreference, this);
    soundButton.name = "Mute";
    soundButton.scale.set(1, 1);
    soundButton.smoothed = false;    
}

function addBonusBall(game, bonusBall, isBonusBallLive)
{
    initializeBonusBall(game);

    isBonusBallLive = true;

    bonusBall.body.velocity.y = -300;
    bonusBall.body.velocity.x = -75;
    bonusBall.animations.play('spin');

}

function initializeBonusBall(game, bonusBall)
{
    // Ball
    bonusBall = game.add.sprite(game.world.centerX, slider.y - 16, 'breakout', 'ball_1.png');
    bonusBall.anchor.set(0.5);
    bonusBall.checkWorldBounds = true;

    game.physics.enable(bonusBall, Phaser.Physics.ARCADE);
    bonusBall.body.collideWorldBounds = true;
    bonusBall.body.bounce.set(1);

    bonusBall.animations.add('spin', [ 'ball_1.png', 'ball_2.png', 'ball_3.png', 'ball_4.png', 'ball_5.png' ], 50, true, false);

    bonusBall.events.onOutOfBounds.add(ballLost, this);
}

function calculateScore(game, scoreText, livesText)
{
    scoreText = game.add.text(32, 650, 'score: 0', { font: "20px Arial", fill: "#ffffff", align: "left" });
    livesText = game.add.text(900, 650, 'lives: 3', { font: "20px Arial", fill: "#ffffff", align: "left" });
}

function addText(game, introText)
{
    introText = game.add.text(game.world.centerX, 400, '- click to start -', { font: "40px Arial", fill: "#ffffff", align: "center" });
    introText.anchor.setTo(0.5, 0.5);
}

function releaseBall(ballOnSlider, ball, introText) 
{
    if (ballOnSlider)
    {
        ballOnSlider = false;
        ball.body.velocity.y = -300;
        ball.body.velocity.x = -75;
        ball.animations.play('spin');
        introText.visible = false;
    }
}