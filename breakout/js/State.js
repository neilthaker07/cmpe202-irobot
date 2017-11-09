function GameState(){
    var playState = new PlayGame();
    var pauseState = new PauseGame();
    var currentState = pauseState;
}
GameState.prototype = {
    play: function(){
        this.currentState.PlayGame();
    },
    pause: function(){
        this.currentState.PauseGame();
    },
    
    setState: function(state){
        this.currentState = state;
    }
}


function PauseGame(state){
    state = this.state;
}
PauseGame.prototype = {
    pause: function(){
        var manageState = new GameState();
        manageState.setState(new PauseGame());
        console.log("Game is Paused");
    },
    play: function(){
        console.log("Game is in play state");
    }
}

function PlayGame(state){
    state = this.state;
}
PlayGame.prototype = {
    pause: function(){
        console.log("Game is Paused");
    },
    play: function(){
        var manageState = new GameState();
        manageState.setState(new PlayGame());
        console.log("Game is in play state");
    },
    gameOver : function(){

    }
}


function ManageGameState(){
}
ManageGameState.prototype = {
    ManageState: function(){

    
        {
            var state = new ManageGameState();

            if(state.paused){
                state.paused = false;
                document.getElementById("playPauseButton").value = "Pause";

                manageState.setState(new PauseGame()); // original state
                manageState.PlayGame(); // state change
            } else if(state.paused != true ){
                state.paused = true;
                 document.getElementById("playPauseButton").value = "Play";

                manager.setState(new PlayGame()); // original state
                manager.PauseGame(); // state change
            }
            else
            {
                 ball.body.velocity.setTo(0, 0);
                speedMultiplier = 10;
                introText.text = 'Game Over!';
                introText.visible = true;

                // Once the game is over, restarting the game after 3 seconds
                setTimeout(restartGame, 3000);
            }
        }
   
    }
}
