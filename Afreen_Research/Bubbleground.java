import greenfoot.*;  // (World, Actor, GreenfootImage, Greenfoot and MouseInfo)

/**
 * Write a description of class background here.
 * 
 * @author (your name) 
 * @version (a version number or a date)
 */
public class Bubbleground extends World
{

    /**
     * Constructor for objects of class background.
     * 
     */
    public Bubbleground()
    {    
        // Create a new world with 600x400 cells with a cell size of 1x1 pixels.
        super(600, 600, 1); 
        
        Cannon Cn= new Cannon();
        
        addObject(Cn, getHeight()/2, getHeight()-100);
        
        
    }
    
    public void act()
    {
        
    }
        
}
