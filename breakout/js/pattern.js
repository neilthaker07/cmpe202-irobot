var images = ['redapple','greenapple','custardapple','orange','peru','watermelon','banana','blackberry'];
var tripleHit=['hitTwo','hitOne'];
var image1 = Math.floor(Math.random() * (7 - 0)) + 0;
var image2 = Math.floor(Math.random() * (7 - 0)) + 0;

function singleHit(x,y,bricks,inside_brick,imgnum){
    inside_brick = new BrickStateManager(x, y, bricks, inside_brick, images[imgnum], 0);
    return inside_brick;
}

function doubleHit(x,y,bricks,inside_brick){
    inside_brick = new BrickStateManager(x, y, bricks, inside_brick, tripleHit[0], 1);
    return inside_brick;
}
function trippleHit(x,y,bricks,inside_brick){
    inside_brick = new BrickStateManager(x, y, bricks, inside_brick, tripleHit[1], 2);
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
                        inside_brick = singleHit(x,y,bricks,inside_brick,image1)
                    }

                }
            }
            else{
                for (var x = 0; x < 15; x++)
                {
                    if(x%2!=0){
                        inside_brick = trippleHit(x,y,bricks,inside_brick)
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
                            inside_brick = singleHit(x,y,bricks,inside_brick,image1)
                     }
                     else{
                         if((y==2&(x==2||x==7||x==12))){
                             inside_brick = trippleHit(x,y,bricks,inside_brick)
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
                        inside_brick = singleHit(x,y,bricks,inside_brick,image1)
                     }




        }
    }
    return inside_brick;
}

function pattern4(bricks){
    var inside_brick;
    for (var y = 0; y < 5; y++)
    {
        for (var x = 0; x < 15; x++)
        {
                if( (y==0&(x==0||x==1||x==13||x==14))||
                    (y==1&(x==1||x==2||x==7||x==12||x==13)) ||
                    (y==2&(x==2||x==3||x==6||x==7||x==8||x==11||x==12)) ||
                    (y==3&(x==3||x==4||x==5||x==6||x==8||x==9||x==10||x==11)) ||
                    (y==4&(x==4||x==5||x==9||x==10))
                     ){
                        inside_brick = singleHit(x,y,bricks,inside_brick,image1)
                     }




        }
    }
    return inside_brick;
}

function pattern5(bricks){
    var inside_brick;
    for (var y = 0; y < 5; y++)
        {
            if(y%2==0){
                for (var x = 0; x < 15; x++)
                {
                    if(x%2==0){
                        inside_brick = singleHit(x,y,bricks,inside_brick,image1)
                    }

                }
            }
            else{
                for (var x = 0; x < 15; x++)
                {
                    if(x%2!=0){
                        inside_brick = trippleHit(x,y,bricks,inside_brick)
                    }
                }
            }

        }
    return inside_brick;
}

function pattern6(bricks){
    var inside_brick;
    for (var y = 0; y < 5; y++)
        {
                for (var x = 0; x < 15; x++)
                {

                            if((y==0 && (x!=5 && x!=6 && x!=7 && x!= 8 && x!= 9))
                                || (y==1&&(x!=1 && x!=2 && x!=6 && x!=7 && x!=8 && x!=12 && x!=13))
                                || (y==2)
                                || (y==3&&(x!=1 && x!=2 && x!=6 && x!=7 && x!=8 && x!=12 && x!=13))
                                || (y==4)&& (x!=5 && x!=6 && x!=7 && x!= 8 && x!= 9))
                            {
                                //var type = Math.floor(Math.random() * (100 - 1)) + 1;
                                if(y!=2){
                                    inside_brick = singleHit(x,y,bricks,inside_brick,image1)
                                }
                                else{
                                    if(x%2==0){
                                        inside_brick = trippleHit(x,y,bricks,inside_brick)
                                    }
                                    else{
                                        inside_brick = doubleHit(x,y,bricks,inside_brick)
                                    }

                                }

                            }



                }
            }


    return inside_brick;
}

function pattern7(bricks){
    var inside_brick;
    for (var y = 0; y < 5; y++)
        {
                for (var x = 0; x < 15; x++)
                {

                            if((y%2==0 && x%2==1 )||(y%2==1 && x%2==0))
                            {
                                //var type = Math.floor(Math.random() * (100 - 1)) + 1;
                                if((x%2==0 && (y==0 || y==1) ) || (x%2==1 && (y==3 || y==4))){
                                    inside_brick = singleHit(x,y,bricks,inside_brick,image1)
                                }
                                else if((x%2==1 && (y==0 || y==1) ) || (x%2==0 && (y==3 || y==4))){
                                    inside_brick = singleHit(x,y,bricks,inside_brick,image2)
                                }
                                else{
                                    if(x%3==0){
                                        inside_brick = trippleHit(x,y,bricks,inside_brick)
                                    }
                                    else{
                                        inside_brick = doubleHit(x,y,bricks,inside_brick)
                                    }

                                }

                            }



                }
            }


    return inside_brick;
}
