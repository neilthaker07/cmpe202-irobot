function ballLost(ball, isBonusBallLive, lives, livesText, ballOnSlider, slider) 
{
	
	if(isBonusBallLive == false)
    {
        lives--;
        livesText.text = 'lives: ' + lives;

        if (lives === 0)
        {
           // gameOver(); LEFT
        }
        else
        {
            ballOnSlider = true;

            ball.reset(slider.body.x + 16, slider.y - 16);
            
            ball.animations.stop();
        }
    } else {
    	isBonusBallLive = false;
    }
}