'use strict';

class SliderIncreaseSizeHandler {
    constructor(next){
        this.next = next;
    }

    handleRequest(request){
      var next;
      if(request === 'Slider+'){
       /* slider.scale.setTo(1,1);
        setTimeout(function(){ slider.scale.setTo(0.5,0.5); }, 5000);*/

        console.log(request+" slider + + ");
      }
      else
      {
        if(this.next!=null)
        {
          this.next.handleRequest(request);
        }
      }
    }

    setNext(next){
        this.next = next;
        return next;
    }
}

class SliderDecreaseSizeHandler {
    constructor(next){
        this.next = next;
    }

    handleRequest(request){
      var next;
      if(request === 'Slider-'){
       /* slider.scale.setTo(0.4,0.4);
        setTimeout(function(){ slider.scale.setTo(0.5,0.5); }, 5000);*/

        console.log(request+" slider - - ");
      }
      else
      {
        if(this.next!=null)
        {
          this.next.handleRequest(request);
        }
      }
    }

    setNext(next){
        this.next = next;
        return next;
    }
}

class BallSpeedUpHandler {
    constructor(next){
        this.next = next;
    }

    handleRequest(request){
      var next;
      if(request === 'Speed+'){
          console.log(request+" speed up ");
      //  speedUp = true;
      }
      else
      {
        if(this.next!=null)
        {
          this.next.handleRequest(request);
        }
      }
    }

    setNext(next){
        this.next = next;
        return next;
    }
}

class DoubleBallHandler {
    constructor(next){
        this.next = next;
    }

    handleRequest(request){
      var next;
      if(request === 'DoubleBall'){
        console.log(request+" ball double");
      }
      else
      {
        if(this.next!=null)
        {
          this.next.handleRequest(request);
        }
      }
    }

    setNext(next){
        this.next = next;
        return next;
    }
}

class Chain{
  handleAllRequests(request){
    var c1 = new SliderIncreaseSizeHandler();
    var c2 = new SliderDecreaseSizeHandler();
    var c3 = new BallSpeedUpHandler();
    var c4 = new DoubleBallHandler();

    c1.setNext(c2).setNext(c3).setNext(c4);
    c1.handleRequest(request);
    }

 powerUpHitSlider(_objectPowerUp){
    _objectPowerUp.body.velocity.y = 0;
    var objectType = _objectPowerUp.type;
    _objectPowerUp.kill();

    handleRequest(objectType);
    }
}

new Chain().handleAllRequests("DoubleBall");
