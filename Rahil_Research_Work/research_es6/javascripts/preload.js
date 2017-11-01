// preloading components
function preload(game)
    {
        console.log(game.load);
        game.load.atlas('breakout', '../images/breakout.png', '../json/breakout.json');
        console.log(`game load after atlas ${game.load}`);
        
        //background image changed
        game.load.image('background', '../images/background.jpg');
        
        game.load.image('slider', '../images/slider.png');
        game.load.image('sliderPlus','../images/sliderSizePlus.png');
        game.load.image('sliderMinus','../images/sliderSizeDecrease.png');
        game.load.image('speedPlus','../images/speedIncrease.png');
        game.load.image('speedMinus','../images/speedDecrease.png');
		game.load.image('muteButton','../images/muteBtn.png');
        game.load.image('volumeButton','../images/volume.png');
		
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
 export {preload};
