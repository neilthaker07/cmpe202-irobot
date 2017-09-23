## Research status:  

- [x] **WebGL** - This API is for rendering advanced 2D/3D graphics without the help of other 3rd party plug-ins. Pure WebGL is like an assembly language of the web graphics programming, very useful to build something extremely custom but takes much more time for development. There are great alternatives like Three.js, phaser.io, playcanvas and many more to make something highly customized and fast in pure JavaScript. :x: 
- [x] **webRTC** - It is being used where we need real time communication in the form of audio or video. :x:
- [x] **WebSocket** - This API can be used to send message to the server and receive an event driven response without polling from the server. It is prefer for multiplayer gaming action and chat services. This can be implemented an extra feature for a game. It is not needed for a model development. :thought_balloon:

**Issue#8**: We will use 3rd party javascript plugins for rendering advanced 2D/3D graphics and we can use websocket API to provide an extra features. webRTC is not required for our project. **Status: Closed**

## **Select the game engine or javascript library (Issue#9):**

- [x] **Three.js** - A higher level OpenGL library for 3D rendering. It is for someone who wants to build something highly customization and fast in pure JavaScript. It abstracts meany lines of code from pure WebGL but still provides great control over graphics. It even has graphical editor. Very popular on the Github. [https://github.com/mrdoob/three.js] :white_check_mark:
- [x] **Babylon.js** - An opensource Javascript framework for building 3D games with WebGL and HTML5. It is one of the popular game engine used by the developer.[https://github.com/BabylonJS/Babylon.js] :white_check_mark:
- [x] **Phaser** - HTML5 game framework/engine which uses customed version of pixi.js for WebGL and canvas rendering and supported on mobile and desktop browsers. It supports Javascript and typescript language for development. If you want to develop nice 2D games and applications, phaser is a library to work with. :x:
- [x] **playcanvas** - An opensource fully featured 3D game development engine with features like WebGL based 3D renderer, Collision & physics, Audio , Input support from touch, keyboard, mouse and many others. It has an online editor and nice documentation.[https://github.com/playcanvas/engine] :white_check_mark:
- [x] **pixi.js** - A rendering library which allows to create an interactive, rich  graphics and cross platform applications with full support of WebGL and falls back to HTML5's canvas as needed. :x:
- [x] **melon.js** - It is 2D sprite-based game development framework library with the support of modern HTML5, WebGL and WebAudio. Also provide native integration support for other 3rd party plugins/tools like cordova/phonegap, Tiled and many more.:x:

As we have decided to develop a model of pong based game inspired from **cubeslam** [http://www.cubslam.com], which looks an amazing in 3D graphics.   
  
After doing research on above mentioned libraries/frameworks came to know that **pixi.js, phaser, and melon.js** support only 2D rendering.  

So we have following options:  
1. Three.js  
2. Babylon.js  
3. playcanvas  

**three.js** is good general purpose web animation like logo design and modeling application while **babylon.js** is very popular in web-based game development with features like collision and antialising (a technique which adds realism in the digital image by smoothing edges), plenty of tutorials/examples, active community and simple to use. **Playcanvas** requires subscription for somefeatures, has lots of issues and bad version control support.  

Finally, I have decided to move ahead with **Babylon.js**.✅


