<<<<<<< Updated upstream
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


=======
>>>>>>> Stashed changes
function PauseGame(state){
    state = this.state;
}
PauseGame.prototype = {
    pause: function(){
<<<<<<< Updated upstream
        var manageState = new GameState();
        manageState.setState(new PauseGame());
=======
        var manager = new GameState();
        manager.setState(new PauseGame());
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
        console.log("Game is Paused");
    },
    play: function(){
        var manageState = new GameState();
        manageState.setState(new PlayGame());
        console.log("Game is in play state");
    },
    gameOver : function(){

=======
        console.log("Game Paused");
    },
    play: function(){
        var manager = new GameState();
        manager.setState(new PlayGame());
        console.log("Game is in play state");
    },
    gameOver : function(){
        console.log("Game Over");
    }
}

function GameOver(state){
    state = this.state;
}
GameOver.prototype = {
    gameOver: function(){
        var manager = new GameState();
        manager.setState(new GameOver());
        console.log("Game Over");
    },
    play: function(){

        console.log("Game is in play state");
    }
}


function GameStateManager(){
    var playState = new PlayGame();
    var pauseState = new PauseGame();
    var gameOverState = new GameOver();
    var currentState = pauseState;
}
GameStateManager.prototype = {
    playGame: function(){
        this.currentState.play();
    },
    pauseGame: function(){
        this.currentState.pause();
    },
    gameOverGame: function(){
        this.currentState.gameOver();
    },
    setState: function(state){
        this.currentState = state;
>>>>>>> Stashed changes
    }
}


function ManageGameState(){
}
<<<<<<< Updated upstream
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
=======

ManageGameState.prototype= {

    processing: function(game){
    
            var manager = new VolumeStateManager();

            if(game.paused){
                game.paused = false;
                document.getElementById("playPauseButton").value = "Pause";

                manager.setState(new PauseGame()); // original state
                manager.playGame(); // state change
            } else{
                game.paused = true;
                document.getElementById("playPauseButton").value = "Play";

                manager.setState(new PlayGame()); // original state
                manager.pauseGame(); // state change
            }
    }
}
   


>>>>>>> Stashed changes
