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

## Week 3 (1st October to 7th October): MOM
* According to the plan all team members came up with their prototype of the game and told which engine they used and why.  
* As a team we discussed pros and cons of the each engine like phaser, babylon and decided to move forward with the phaser.io   because having nice documentation, examples and large community.  
* Once the game library was finalized, next we chose the game **'breakout'**.  
* We listed various components/functionalities of the game and assigned each individual a component Such as movement of the slider, collision of ball with object, etc. When assigning or selection of the component we consider the simplicity value and requested every body to follow simplicity in their task while designing/implementing the functionality by considering what is currently needed and scheduled not on the bases of the future requirements or scheduled tasks.

## Week 4 (15th October to 21st October): MOM
* Every one shared status of their task and blockers.
* Each member has selected a topic from the given list of "Project Deliverables".
* From the next week will follow scrum practice and we followed kanaban practice for the first 4 weeks.
* Each member has been assigned a new task to enhance their existing task like I have implemented feature of collision detection between ball and objects. New task assigned for me to update score and create dynaic falling objects when collision occurrs to add extra features like change the size of slider and spedd of the ball.
* We have decided to discuss with professor to clerify our doubts about design pattern implementation.

## Week 5 (22nd October to 28th October): MOM
* Every one shared status of their task.
* We discussed about solution's folder structure and how we should integrate individual's work and in which order to achieve simplicity. 
* Discussed on features and prioritize them. Decided to complete Slider size update and ball speed update features by the end of the week.
* Discussed about few patterns which we can implement and asked every one to do research on this. so, we can implement paatterns in next week.


## Week 6 (29th October to 4th November): MOM
* We do stand up meetings as a part of the scrum, every one shares the status and blockers about tasks. Also discuss about future tasks. Also log the daily hours in the burndown sheet.
* We discussed which patterns can be implemented in their respected functionalities.
* To achive simplicity we decided to split the code into other files as modules so code becomes more understandable and readable. 
* We discussed that how we should integrate patterns so that game remains in the working state.

## Week 7 (5th November to 11th November): MOM
* Everyone shared the status, progress and blockers of their task in the meeting.
* We discussed which other patterns can be implemented in the game and extra features can be added to the game. Patterns like state pattern for the type of bricks, volume mute and unmute, etc and features like bonus point and bullet powerup.
* Each member will perform testing of their functionality, fix the issues and code refactoring.
* Most of the features of the game are implemented and integrated. So we can start testing as a whole game from the next week.

## Week 8 (12th November to 18th November): MOM
* Everyone shared the status, progress and blockers of their task in the meeting.
* Everyone has successfully completed their assigned tasks like design pattern, game fetures development, etc and integrated with the game.
* In this week, we will perform code refactoring, validation of the game and resolve the issues without affecting exicting modules.
* In last 8 weeks, we used software development practicies Kanban and Scrum for the game development by keeping one of the XP value Simplicity in the mindset and successfully developed a game within timelimits.

