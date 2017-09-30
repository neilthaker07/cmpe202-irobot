// Global variables
var canvas, engine, scene, camera;

/**
* Load the scene when the canvas is fully loaded
*/
document.addEventListener("DOMContentLoaded", function () {
    if (BABYLON.Engine.isSupported()) {
        initScene();
    }
}, false);

/**
 * Creates a new BABYLON Engine and initialize the scene
 */
function initScene() {
    //select the canvas
    canvas = document.getElementById("renderCanvas");

    //loads the engine into canvas
    engine = new BABYLON.Engine(canvas, true);  

    // Create scene
    createScene(engine);

    engine.runRenderLoop(function(){
        scene.render();
    });

    //create basic game environment like box racquet and ball and apply physics.
    initGame();
}

// createScene function
function createScene() {
    
        // create a scene object
        scene = new BABYLON.Scene(engine);
    
        // Change the scene background color to green.
        scene.clearColor = new BABYLON.Color3(0.13, 0.11, 0.15);
        
        camera = new BABYLON.ArcRotateCamera("Camera", 0, 0, 0, new BABYLON.Vector3(0,100,0), scene);

        camera.setPosition(new BABYLON.Vector3(0, 100, 450));

        // This creates and positions a free camera
        camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 4, -10), scene);
    
        // This targets the camera to scene origin
        camera.setTarget(BABYLON.Vector3.Zero());
    
        // This attaches the camera to the canvas
        camera.attachControl(canvas);
        
        //create hemisphericLight
        var light0 = new BABYLON.HemisphericLight("Hemi0", new BABYLON.Vector3(0, 1, 0), scene);
        //color settings
        light0.diffuse = new BABYLON.Color3(1, 1, 1);
        light0.specular = new BABYLON.Color3(1, 1, 1);
        light0.groundColor = new BABYLON.Color3(.4, .4, .4);
        //intensity updated
        light0.intensity = 0.9;
    
};  // End of createScene function

function initGame(){
    // Let's try our built-in 'sphere' shape. Params: name, subdivisions, size, scene
    var pi = Math.PI; //for rotation
    var ground, backWall, frontWall, ball, racquet, ceiling, rightWall, leftWall

    //function to create ball
    var createBall = function(){
        ball = BABYLON.Mesh.CreateSphere("ball", 16, 10, scene);
        var redMat = new BABYLON.StandardMaterial("ballMaterial", scene);
        redMat.diffuseColor = new BABYLON.Color3(0.4, 0.4, 0.4);
        redMat.specularColor = new BABYLON.Color3(0.4, 0.4, 0.4);
        redMat.emissiveColor = BABYLON.Color3.Red();
        ball.material = redMat;
        ball.position.y = 20;
        ball.position.x -= 0;
        return ball;
    }

    //function to create reaquet
    var createPaddle = function(){
        racquet = BABYLON.Mesh.CreatePlane("racquet", 20, scene);
        var racquetMat = new BABYLON.StandardMaterial("racquetMat", scene);
        racquetMat.diffuseColor = new BABYLON.Color3(0.28,1.43,1.43);
        racquetMat.alpha = 0.3;
        racquet.material = racquetMat;
        racquet.position.z = 190; 
        racquet.position.y = 75; 
        racquet.rotation = new BABYLON.Vector3(0, Math.PI, 0);
        return racquet;
    }

    //function will create Box 
    function createTable(){
                     
        ground = BABYLON.Mesh.CreateBox("ground", 400, scene);
        var groundMaterial = new BABYLON.StandardMaterial("wallMat", scene);
        groundMaterial.diffuseColor = new BABYLON.Color3(0.820, 0.753, 0.467);
        groundMaterial.specularColor = BABYLON.Color3.Black();
        ground.material = groundMaterial;
        ground.scaling.x = 0.5;
        ground.scaling = new BABYLON.Vector3(0.5, 0.005, 1);
        
        backWall = BABYLON.Mesh.CreatePlane("backWall", 200, scene);
        var backWallMaterial = new BABYLON.StandardMaterial("wallMat", scene);
        backWallMaterial.diffuseColor = new BABYLON.Color3(1, 1, 1);
        backWallMaterial.specularColor = BABYLON.Color3.Black();
        backWall.material = backWallMaterial;
        backWall.position.y = 100;
        backWall.position.z = -200;
        backWall.rotation = new BABYLON.Vector3(0, Math.PI, 0);
        
        frontWall = BABYLON.Mesh.CreateBox("frontwall", 200, scene); //invisible from backface
        var frontWallMaterial = new BABYLON.StandardMaterial("wallMat", scene);
        frontWallMaterial.alpha = 0;
        frontWall.material = frontWallMaterial;
        frontWall.scaling.z = 0.01;
        frontWall.position.y = 100;
        frontWall.position.z = 200;
        // frontWall.visibility = 0;

        var sideWallMaterial = new BABYLON.StandardMaterial("wallMat", scene);
        sideWallMaterial.diffuseColor = new BABYLON.Color3(0.900, 0.900, 0.900);
        sideWallMaterial.specularColor = BABYLON.Color3.Black();

        //leftWall = BABYLON.MeshBuilder.CreatePlane("leftWall", {width:400,height:200, sideOrientation: BABYLON.Mesh.DOUBLESIDE}, scene);
        leftWall = BABYLON.MeshBuilder.CreateBox("leftwall", {width:400,height:200, depth:2}, scene);
        leftWall.material = sideWallMaterial;
        leftWall.position = new BABYLON.Vector3(100, 100, 0);
        leftWall.rotation = new BABYLON.Vector3(0, pi/2, 0);

        //var rightWall = BABYLON.MeshBuilder.CreatePlane("rightWall", {width:400,height:200, sideOrientation: BABYLON.Mesh.DOUBLESIDE}, scene);
        rightWall =  BABYLON.MeshBuilder.CreateBox("rightwall", {width: 400, height: 200, depth: 2}, scene);
        rightWall.material = sideWallMaterial;
        rightWall.position = new BABYLON.Vector3(-100, 100, 0);
        rightWall.rotation = new BABYLON.Vector3(0, pi/2, 0);

        //var ceiling = BABYLON.MeshBuilder.CreatePlane("ceiling", {width:200,height:400, sideOrientation: BABYLON.Mesh.DOUBLESIDE}, scene);
        ceiling = BABYLON.MeshBuilder.CreateBox("ceiling", {width:200, height:400, depth:2}, scene);
        ceiling.material = sideWallMaterial;
        ceiling.position = new BABYLON.Vector3(0, 200, 0);
        ceiling.rotation.x = pi/2;
    }

    //This will set physics of every object to determine collision
    function setPhysics(){
        scene.enablePhysics(new BABYLON.Vector3(0,-9.81, 0), BABYLON.OimoJSPlugin());
        // scene.enablePhysics(new BABYLON.Vector3(0,-9.81, 0), BABYLON.CannonJSPlugin());

        ground.physicsImpostor = new BABYLON.PhysicsImpostor(
            ground, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, restitution: 0.8 }, scene);
            
        backWall.physicsImpostor = new BABYLON.PhysicsImpostor(
            backWall, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, restitution: 0.8 }, scene);
                        
        frontWall.physicsImpostor = new BABYLON.PhysicsImpostor(
            frontWall, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, restitution: 0.8 }, scene);

        leftWall.physicsImpostor = new BABYLON.PhysicsImpostor(
            leftWall, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, restitution: 0.8 }, scene);

        rightWall.physicsImpostor = new BABYLON.PhysicsImpostor(
            rightWall, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, restitution: 0.8 }, scene);

        ceiling.physicsImpostor = new BABYLON.PhysicsImpostor(
            ceiling, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, restitution: 0.8 }, scene);

        racquet.physicsImpostor = new BABYLON.PhysicsImpostor(
            racquet, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, restitution: 0.8 }, scene);

        ball.physicsImpostor = new BABYLON.PhysicsImpostor(
            ball, BABYLON.PhysicsImpostor.SphereImpostor, { mass: 1, restitution: 1.25 }, scene);
            
        ball.physicsImpostor.setLinearVelocity(new BABYLON.Vector3(1, 0, -2));  
        ball.physicsImpostor.applyImpulse(new BABYLON.Vector3(0.5, 6, 15), ball.getAbsolutePosition());
    }

    createBall();
    createPaddle();
    createTable();
    setPhysics();

    var currentMesh;
    var startingPoint;


    var getGroundPosition = function () {
        var pickinfo = scene.pick(scene.pointerX, scene.pointerY, (mesh) =>{ return mesh == frontWall;});
        if (pickinfo.hit) {
            return pickinfo.pickedPoint;
        }

        return null;
    }

    //raquet movement down functions
    var onPointerDown = function (evt) {
        if (evt.button !== 0) {
            return;
        }

        var pickInfo = scene.pick(scene.pointerX, scene.pointerY, (mesh)=> { return mesh !== frontWall && mesh == racquet;});
        if (pickInfo.hit) {
            currentMesh = pickInfo.pickedMesh;
            startingPoint = getGroundPosition();

        }
    }

    //raquet movement up functions
    var onPointerUp = function () {
        if (startingPoint) {
            startingPoint = null;
            return;
        }
    }

    //raquet move in sides functions
    var onPointerMove = function () {
        if (!startingPoint) {
            return;
        }

        var current = getGroundPosition();

        if (!current) {
            return;
        }

        var diffX = current.x - startingPoint.x;
        var diffY = current.y - startingPoint.y;
        currentMesh.position.x += diffX;
        currentMesh.position.y += diffY;
        
        startingPoint = current;

    }

    //event listeners for pointer movements
    canvas.addEventListener("pointerdown", onPointerDown, false);
    canvas.addEventListener("pointerup", onPointerUp, false);
    canvas.addEventListener("pointermove", onPointerMove, false);


    //will change the color of the ball to BLUE if ball will collide with the front wall on the player side 
    scene.registerBeforeRender(function () {

        //Balloon 1 intersection -- Precise = false
        if (ball.intersectsMesh(frontWall, false)) {
            ball.material.emissiveColor = new BABYLON.Color3(0, 0, 1);
        } 
    });
}

//listen canvas resize event
window.addEventListener("resize", function () {
    engine.resize();
});
