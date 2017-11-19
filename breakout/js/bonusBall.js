var addBonusBall = function(game, bonusBall, slider)
{
    bonusBall = initializeBonusBall(game, bonusBall, slider);

    bonusBall.body.velocity.y = -300;
    bonusBall.body.velocity.x = -75;
    bonusBall.animations.play('spin');

    return bonusBall;
}

function initializeBonusBall(game, bonusBall, slider)
{
    // Ball
    bonusBall = game.add.sprite(game.world.centerX, slider.y - 16, 'breakout', 'ball_1.png');
    bonusBall.customKey = "bonusBall";
    bonusBall.anchor.set(0.5);
    bonusBall.checkWorldBounds = true;

    game.physics.enable(bonusBall, Phaser.Physics.ARCADE);
    bonusBall.body.collideWorldBounds = true;
    bonusBall.body.bounce.set(1);

    bonusBall.animations.add('spin', [ 'ball_1.png', 'ball_2.png', 'ball_3.png', 'ball_4.png', 'ball_5.png' ], 50, true, false);

    //bonusBall.events.onOutOfBounds.add(ballLost, this); // moved to main file
    return bonusBall;
}
