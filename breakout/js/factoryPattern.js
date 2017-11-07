function Factory(){

}

Factory.prototype = {

    createPowerUp: function (game, posX, posY, type) {
        var powerUp;
        if(type === 'Slider+')
            powerUp = new BiggerSlider(game,posX, posY);
        if(type === 'Slider-')
            powerUp = new SmallerSlider(game,posX, posY);
        if(type === 'Speed+')
            powerUp = new FasterSpeed(game,posX, posY);
        if(type === 'DualBall')
            powerUp = new DualBall(game,posX, posY);
        console.log(powerUp);
        return powerUp;
    }
}

var BiggerSlider = function (game,posX,posY) {
    var object = game.add.sprite(posX,posY,'sliderPlus');
    object.type = "Slider+";
    object.scale.setTo(0.3,0.3);
    return object;
};

var SmallerSlider = function (game,posX, posY) {
    var object = game.add.sprite(posX,posY,'sliderMinus');
	object.type = "Slider-";
    object.scale.setTo(0.3,0.3);
    return object
};

var FasterSpeed = function (game,posX, posY) {
    var object = game.add.sprite(posX,posY,'speedPlus');
    object.type = "Speed+";
    object.scale.setTo(0.3,0.3);
    return object;
};

var DualBall = function(game,posX, posY){
    var object = game.add.sprite(posX,posY,'plus');
    object.type = "DualBall";
    object.scale.setTo(0.2,0.2);
    return object;
}
