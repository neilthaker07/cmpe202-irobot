'use strict';

class factory{
    constructor(){

    }
    createPowerUp(type){
        var powerUp;
        if(type === 'Slider+')
            powerUp = new BiggerSlider();
        if(type === 'Slider-')
            powerUp = new SmallerSlider();
        if(type === 'Speed+')
            powerUp = new FasterSpeed();
        if(type === 'Speed-')
            powerUp = new SlowerSpeed();
        if(type === 'DoubleBall')
            powerUp = new DualBall();
        return powerUp;
    }

}

class BiggerSlider{
    constructor(){
        this.type = "Slider+";
    }
}

class SmallerSlider{
    constructor(){
        this.type = "Slider-";
    }
}
class FasterSpeed{
    constructor(){
        this.type = "Speed+";
    }
}
class SlowerSpeed{
    constructor(){
        this.type = "Speed-";
    }
}
class DualBall{
    constructor(){
        this.type = "DoubleBall";
    }
}

let factoryIns = new factory();
var powerUp = factoryIns.createPowerUp("Slider+")
console.log(powerUp);