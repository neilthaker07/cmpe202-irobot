function SliderIncreaseSizeHandler(next){
  this.next = next;
}

SliderIncreaseSizeHandler.prototype = {
    handleRequest: function(request, slider, game, speedUp, dualBallIsActive, isBonusBallLive, bonusBall, ball, lives, livesText, ballOnSlider){
      if(request === 'Slider+'){
        slider.scale.setTo(1,1);
        setTimeout(function(){ slider.scale.setTo(0.5,0.5); }, 5000);

        console.log(request+" slider + + ");
      }
      else
      {
        if(this.next!=null)
        {
          this.next.handleRequest(request, slider, game, speedUp, dualBallIsActive, isBonusBallLive, bonusBall, ball, lives, livesText, ballOnSlider);
        }
      }
    },

    setNext: function(next){
        this.next = next;
        return next;
    }
}

function SliderDecreaseSizeHandler(next){
  this.next = next;
}

SliderDecreaseSizeHandler.prototype = {
    handleRequest: function(request, slider, game, speedUp, dualBallIsActive, isBonusBallLive, bonusBall, ball, lives, livesText, ballOnSlider){
      if(request === 'Slider-'){
        slider.scale.setTo(0.4,0.4);
        setTimeout(function(){ slider.scale.setTo(0.5,0.5); }, 5000);

        console.log(request+" slider - - ");
      }
      else
      {
        if(this.next!=null)
        {
          this.next.handleRequest(request, slider, game, speedUp, dualBallIsActive, isBonusBallLive, bonusBall, ball, lives, livesText, ballOnSlider);
        }
      }
    },

    setNext(next){
        this.next = next;
        return next;
    }
}

function BallSpeedUpHandler(next){
  this.next = next;
}

BallSpeedUpHandler.prototype = {
    handleRequest: function(request, slider, game, speedUp, dualBallIsActive, isBonusBallLive, bonusBall, ball, lives, livesText, ballOnSlider){
      if(request === 'Speed+'){
          console.log(request+" speed up ");
          this.speedUp = true;
      }
      else
      {
        if(this.next!=null)
        {
          this.next.handleRequest(request, slider, game, speedUp, dualBallIsActive, isBonusBallLive, bonusBall, ball, lives, livesText, ballOnSlider);
        }
      }
    },

    setNext: function(next){
        this.next = next;
        return next;
    }
}

function DoubleBallHandler(next){
  this.next = next;
}

DoubleBallHandler.prototype = {
    handleRequest: function(request, slider, game, speedUp, dualBallIsActive, isBonusBallLive, bonusBall, ball, lives, livesText, ballOnSlider){
      if(request === 'DualBall'){
        
        console.log(request+" ball double");
        
        dualBallIsActive = true;
     //   new addBonusBall(game, isBonusBallLive, bonusBall, ball, lives, livesText, ballOnSlider, slider);

      }
      else
      {
        if(this.next!=null)
        {
          this.next.handleRequest(request, slider, game,  speedUp, dualBallIsActive, isBonusBallLive, bonusBall, ball, lives, livesText, ballOnSlider);
        }
      }
    },

    setNext: function(next){
        this.next = next;
        return next;
    }
}

function Chain(game, speedUp, dualBallIsActive, isBonusBallLive, bonusBall, ball, lives, livesText, ballOnSlider){
  this.speedUp = speedUp;
  this.dualBallIsActive = dualBallIsActive;
  this.isBonusBallLive =isBonusBallLive;
  this.bonusBall=bonusBall;
  this.ball = ball;
  this.lives = lives;
  this.livesText = livesText;
  this.ballOnSlider = ballOnSlider;
}

Chain.prototype = {
  handleAllRequests: function(request, slider,game, speedUp,  dualBallIsActive, isBonusBallLive, bonusBall, ball, lives, livesText, ballOnSlider ){
    var c1 = new SliderIncreaseSizeHandler();
    var c2 = new SliderDecreaseSizeHandler();
    var c3 = new BallSpeedUpHandler();
    var c4 = new DoubleBallHandler();

    console.log("step2");

    c1.setNext(c2).setNext(c3).setNext(c4);
    return c1.handleRequest(request, slider,game, speedUp, dualBallIsActive, isBonusBallLive, bonusBall, ball, lives, livesText, ballOnSlider);
  },

  powerUpHitSlider: function(_objectPowerUp,_slider){
    _objectPowerUp.body.velocity.y = 0;
    var objectType = _objectPowerUp.type;
    _objectPowerUp.kill();
    console.log(objectType);
    console.log("step1");

    new Chain().handleAllRequests(objectType, _slider, game, this.speedUp, this.dualBallIsActive, this.isBonusBallLive, this.bonusBall, this.ball, this.lives, this.livesText, this.ballOnSlider);
  }
}

//new Chain().handleAllRequests("DualBall");
//new Chain().powerUpHitSlider("DualBall","");
