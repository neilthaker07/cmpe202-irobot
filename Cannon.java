import greenfoot.*;  // (World, Actor, GreenfootImage, Greenfoot and MouseInfo)

/**
 * Write a description of class Cannon here.
 * 
 * @author (your name) 
 * @version (a version number or a date)
 */
public class Cannon extends Actor
{
    /**
     * Act - do whatever the Cannon wants to do. This method is called whenever
     * the 'Act' or 'Run' button gets pressed in the environment.
     */
    
    double dy = 0;
    double g = 1.3;
    double speed =-4;
    public void act() 
    {
         
        if( getOneIntersectingObject(Bubble.class) != null){
       
        }
        
        
        if( getOneIntersectingObject(Bubble.class) != null){
        DispGameover();
        }
        
        setLocation(getX(),(int)(getY()+dy));
        
        if(Greenfoot.isKeyDown("up")== true)
        {
         dy= speed;
        }
        
        
       if(Greenfoot.isKeyDown("right")== true)
        {
         move(5);
        } 
        
        if(Greenfoot.isKeyDown("left")== true)
        {
         move(-5);
        } 
        
        if(getY() > getWorld().getHeight()){
        DispGameover();
        }
          dy = dy+g;
    } 

    private void DispGameover(){
       
         GameOver gameOver = new GameOver();
         getWorld().addObject(gameOver, getWorld().getWidth()/2, getWorld().getHeight()/2);
         Greenfoot.stop();
        
    
    }
}
