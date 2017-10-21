This wiki page is about how the team is following Extreme Programming(XP)'s core value **Simplicity**.  
## What is Simplicity?  
Simplicity is the key of Extreme programming. It promotes to keep things as simple as possible by never adding functionality before it is scheduled. The simple design takes less time to finish than a complex one. If we find something is complex replace it with something simple and it's always faster and cheaper to replace a complex part of the code without wasting a lot more time on it.  
  
## How we have planned to follow simplicity?
* Simplicity is very subjective quality because it differs from person to person eg. for one person's simple is another person's complex. So, we try to achieve simplicity, using recommended four subjective qualities: **Testable, Understandable, Browsable and Explainable** (**TUBE**).   
* Another recommended a measure of simplicity is use principle "**once and only once**". Express all the intentions of the code even if it means duplication.  
**Example**: If we want to convert a fraction into percentage we multiply it with 100 and to convert meters into centimeters we also multiply it with 100. To achieve this two requirements do we need only single function convertToPercentOrCentiMeters(x)? The answer is No, not even if it removes some duplication, We should use two methods one for converting to percentage convertToPercent(x) and another for converting to centimeters convertToCentiMeters(x).  
* Simple design develops over the time it requires the knowledge, not information.

## Week 1 (17th Sep to 23rd Sep): MOM
* In the team meeting, every team member shared their ideas about project and requirements.
* We discussed different technologies such as game engines, libraries, and tools that are used in game development.
* Every member has decided to start work on the development of the model for few games using his/her choice of the framework/library(like WebGL, OpenGL, melon.js, phaser.io, etc) and technologies(Javascript, Java) so that after first 2 weeks of individuals research and based on the developed prototype/model we can finalize the development platform.
* As this was the first week of the project and we are doing a feasibility study and decided to develop the model of the game, over next 2 weeks, which serve the basic requirements. During this phase, we will not consider any extra features that we can provide in the game. So this how we try to achieve simplicity.

**What's your Contribution?**
* I gave web-based game ideas like chess, air-hockey. Also shared views about which web technologies we can use for development.
* I have decided to develop the model of the [CubeSlam a pong game with bear](http://www.cubeslam.com) in Javascript. 
* I researched on technologies like WebGL, webRTC, WebSocket and JavaScript libraries/frameworks such as melon.js, phaser, pixi.js, babylon.js, three.js and playcanvas can serve the requirement.   

**What is the plan for the coming week?**  
I have completed my research on javascript libraries/web technologies and have selected **Babylon.Js** library for the prototype creation. So I  will start developing the model of the pong game.  
  
**What are current blockers/challenges I am facing?**  
As we are doing research and feasibility study for our model. So, there is no issue which is hindering my progress.  

## Week 2 (24th Sep to 30th Sep): MOM
* In the team meeting, every member shared their progress on the research task and views about the chosen game engine for the model.
* Also decided to move forward with the JavaScript-based game engines like phaser.js and babylon.js because Java-based engines are good for the cross-platform and standalone games.
* At the end, we finalized to work on the model by keeping the simplicity principle in the mind so we can decide the game engine by the end of the week and we will have some boilerplate in terms of a model to start working on development.

**What's your Contribution?**  
* I learned basics of babylon.js and created the very simple model of the pong game using babylon.js and came to know that it will be very difficult and complex to develop a game using Babylon.js.


**What is the plan for the coming week?**  
As of this weeks work, I learned that babylon.js is a bit complex to develop a game than phaser.js and having the main focus of the project to implement design patterns. So will start learning **Phaser.js** and working on the game development which will be decided by the team.
  
**What are current blockers/challenges I am facing?**    
As of now, I am not facing any challenges in my task.

## Week 3 (1st October to 7th October):
* According to the plan all team members came up with their prototype of the game and told which engine they used and why.  
* As a team we discussed pros and cons of the each engine like phaser, babylon and decided to move forward with the phaser.io   because having nice documentation, examples and large community.  
* Once the game library was finalized, next we chose the game **'breakout'**.  
* We listed various components/functionalities of the game and assigned each individual a component Such as movement of the slider, collision of ball with object, etc. When assigning or selection of the component we consider the simplicity value and requested every body to follow simplicity in their task while designing/implementing the functionality by considering what is currently needed and scheduled not on the bases of the future requirements or scheduled tasks.
