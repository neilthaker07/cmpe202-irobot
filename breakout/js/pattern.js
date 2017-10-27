var images = ['redapple','greenapple','custardapple','orange','peru','watermelon','banana','blackberry']
var image = Math.floor(Math.random() * (7 - 0)) + 0;
function pattern0(bricks){
   
    var inside_brick;
    for (var y = 0; y < 4; y++)
    {
        for (var x = 0; x < 12; x++)
        {
            inside_brick = bricks.create(110 + (x * 46), 100 + (y * 62), images[image]);
            inside_brick.scale.setTo(.08, .08);
            inside_brick.body.bounce.set(1);
            inside_brick.body.immovable = true;
        }
    }
    return inside_brick;    
}
function pattern1(bricks){
    var inside_brick;
    for (var y = 0; y < 4; y++)
        {
            if(y%2==0){
                for (var x = 0; x < 12; x++)
                {
                    if(x%2==0){
                        inside_brick = bricks.create(110 + (x * 46), 100 + (y * 62), images[image]);
                        inside_brick.scale.setTo(.08, .08);
                        inside_brick.body.bounce.set(1);
                        inside_brick.body.immovable = true;
                    }
                   
                }
            }
            else{
                for (var x = 0; x < 12; x++)
                {
                    if(x%2!=0){
                        inside_brick = bricks.create(110 + (x * 46), 100 + (y * 62), images[image]);
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
    for (var y = 0; y < 4; y++)
        {
            for (var x = 0; x < 12; x++)
            {
                inside_brick = bricks.create(110 + (x * 56), 70 + (y * 72), images[image]);
                inside_brick.scale.setTo(.08, .08);
                inside_brick.body.bounce.set(1);
                inside_brick.body.immovable = true;
            }
        }
    return inside_brick;    
}
function pattern3(bricks){
    var inside_brick;
    for (var y = 0; y < 4; y++)
        {
            for (var x = 0; x < 15; x++)
            {
                inside_brick = bricks.create(110 + (x * 36), 100 + (y * 52), 'breakout', 'brick_' + (y+1) + '_1.png');
                inside_brick.body.bounce.set(1);
                inside_brick.body.immovable = true;
            }
        }
    return inside_brick;    
}
function pattern4(bricks){
    var inside_brick;
    for (var y = 0; y < 4; y++)
        {
            for (var x = 0; x < 15; x++)
            {
                inside_brick = bricks.create(120 + (x * 36), 100 + (y * 52), 'breakout', 'brick_' + (y+1) + '_1.png');
                inside_brick.body.bounce.set(1);
                inside_brick.body.immovable = true;
            }
        }
    return inside_brick;    
}
function pattern5(bricks){
    var inside_brick;
    for (var y = 0; y < 4; y++)
        {
            for (var x = 0; x < 15; x++)
            {
                inside_brick = bricks.create(120 + (x * 36), 100 + (y * 52), 'breakout', 'brick_' + (y+1) + '_1.png');
                inside_brick.body.bounce.set(1);
                inside_brick.body.immovable = true;
            }
        }
    return inside_brick;    
}