function UnMute(state){
    state = this.state;
}
UnMute.prototype = {
    doMute: function(){
        var manager = new VolumeStateManager();
        manager.setState(new Mute());
        console.log("BackgroundMusic Mute State.");
    },
    doUnMute: function(){
        console.log("Volume already in UnMute State.");
    }
}

function Mute(state){
    state = this.state;
}
Mute.prototype = {
    doMute: function(){
        console.log("Volume already in Mute State.");
    },
    doUnMute: function(){
        var manager = new VolumeStateManager();
        manager.setState(new UnMute());
        console.log("BackgroundMusic UnMute State.");
    }
}

function VolumeStateManager(){
    var muteState = new Mute();
    var unMuteState = new UnMute();
    var currentState = unMuteState;
}
VolumeStateManager.prototype = {
    mute: function(){
        this.currentState.doMute();
    },
    unMute: function(){
        this.currentState.doUnMute();
    },
    setState: function(state){
        this.currentState = state;
    }
}

function ProcessVolume(){
}
ProcessVolume.prototype = {
    processing: function(game, soundButton, backgroundMusic, isBackgroundMusicOn){

    soundButton = game.add.button(900, 10, 'volumeButton', function()
        {
            var manager = new VolumeStateManager();

            if(isBackgroundMusicOn == true){
                backgroundMusic.pause();
                isBackgroundMusicOn = false;
                soundButton.loadTexture('muteButton');

                manager.setState(new UnMute()); // original state
                manager.mute(); // state change
            } else{
                backgroundMusic.resume();
                isBackgroundMusicOn = true;
                soundButton.loadTexture('volumeButton');

                manager.setState(new Mute()); // original state
                manager.unMute(); // state change
            }
        }
    , this);
    soundButton.name = "Mute";
    soundButton.scale.set(1, 1);
    soundButton.smoothed = false;

    //var soundInfo = [soundButton, backgroundMusic, isBackgroundMusicOn];
    return soundButton;
    }
}
