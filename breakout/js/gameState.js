function PauseGame(state){
    state = this.state;
}
PauseGame.prototype = {
    pause: function(){
        var manager = new GameState();
        manager.setState(new PauseGame());
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
    }
}


function ManageGameState(){
}

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
