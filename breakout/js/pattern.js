var images = ['redapple','greenapple','custardapple','orange','peru','watermelon','banana','blackberry']
var image = Math.floor(Math.random() * (7 - 0)) + 0;
var image1 = Math.floor(Math.random() * (7 - 0)) + 0;
var image2 = Math.floor(Math.random() * (7 - 0)) + 0;

function pattern0(bricks){
   
    var inside_brick;
    for (var y = 0; y < 5; y++)
    {
        for (var x = 0; x < 15; x++)
        {
            inside_brick = bricks.create(100 + (x * 56), 80 + (y * 72), images[image]);
            inside_brick.scale.setTo(.08, .08);
            inside_brick.body.bounce.set(1);
            inside_brick.body.immovable = true;
        }
    }
    return inside_brick;    
}
function pattern1(bricks){
    var inside_brick;
    for (var y = 0; y < 5; y++)
        {
            if(y%2==0){
                for (var x = 0; x < 15; x++)
                {
                    if(x%2==0){
                        inside_brick = bricks.create(100 + (x * 56), 80 + (y * 72), images[image]);
                        inside_brick.scale.setTo(.08, .08);
                        inside_brick.body.bounce.set(1);
                        inside_brick.body.immovable = true;
                    }
                   
                }
            }
            else{
                for (var x = 0; x < 15; x++)
                {
                    if(x%2!=0){
                        inside_brick = bricks.create(100 + (x * 56), 80 + (y * 72), images[image]);
                        inside_brick.scale.setTo(.08, .08);
                        inside_brick.body.bounce.set(1);
                        inside_brick.body.immovable = true;
                    }
                }
            }
           
        }
    return inside_brick;    
}
function pattern2(bricks){
    var inside_brick;
    for (var y = 0; y < 5; y++)
    {
        for (var x = 0; x < 15; x++)
        {
                if( (y==0&(x==2||x==7||x==12))||
                    (y==1&(x==1||x==6||x==11||x==3||x==8||x==13)) ||
                    (y==2&(x==0||x==5||x==10||x==4||x==9||x==14)) ||
                    (y==3&(x==1||x==6||x==11||x==3||x==8||x==13)) ||
                    (y==4&(x==2||x==7||x==12))
                     ){
                        inside_brick = bricks.create(100 + (x * 56), 80 + (y * 72), images[image]);
                        inside_brick.scale.setTo(.08, .08);
                        inside_brick.body.bounce.set(1);
                        inside_brick.body.immovable = true;
                     }
                     else{
                         if((y==2&(x==2||x==7||x==12))){
                            inside_brick = bricks.create(100 + (x * 56), 80 + (y * 72), images[image1]);
                            inside_brick.scale.setTo(.08, .08);
                            inside_brick.body.bounce.set(1);
                            inside_brick.body.immovable = true; 
                         }
                     }
               
            
           
        }
    }
    return inside_brick;    
}
function pattern3(bricks){
    var inside_brick;
    for (var y = 0; y < 5; y++)
    {
        for (var x = 0; x < 15; x++)
        {
                if( (y==0&(x==0||x==4||x==5||x==9||x==10 ||x==14))||
                    (y==1&( x!=2 & x!=7 & x!=12)) ||
                    (y==2) ||
                    (y==3&(x!=2 & x!=7 & x!=12)) ||
                    (y==4&(x==0||x==4 ||x==5||x==9||x==10||x==14))
                     ){
                        inside_brick = bricks.create(100 + (x * 56), 80 + (y * 72), images[image]);
                        inside_brick.scale.setTo(.08, .08);
                        inside_brick.body.bounce.set(1);
                        inside_brick.body.immovable = true;
                     }
                    
               
            
           
        }
    }
    return inside_brick;    
}
