# PamelaSohWY-TGC9VueProject2Gameversion2

URL: https://github.com/PamelaSohWY/TGC9VueProject2Game
by Soh Wei- Yi Pamela 

**Scope**    
The scope of this project is to create a math game for primary school students focusing on the concept of addition.    
In this game, students will practise the following skills/abilities:   
1) recognize numbers    
2) count (1 to 12)   
There is an element of luck embedded in the game, as the ending of the game is triggered only when students are able to    
form a horizontal, vertical or diagonal set of numbers.    
**Strategy**     

**User Goals:**    
**Target Group of Users:**   
Students who want to have practise of addition in an interactive environment. 
They would want to have a record of their attempts to track their own improvement, and also allow    
for their teachers and parents to view their attempts. 
General pain point of users:      
Students have to practise their mathematical skills on their own. If they are working on paper based worksheets,    
they will not get immediate feedback. So this game allows them to know instantly, if their addition and substraction skills are wrong or correct. 
They are able to pause the game to view resources to deepen their knowledge. 
**Site Owner Goals** 
Goal of the Site Owner:
To provide a learning game where students can practise their mathematical skills in a non-threatening and interactice environment. 
It also captures the students attempts, so that their practise interaction can be analysed. 

**User Story 1**   
User Profile:    
Student who has just learnt the concept of addition, and wants to just practicise to improve on 
mental calculation and speed.    
Age: Primary 1    
Goal:     
To reinforce learning through practise.      

**Features**    
![Player View](/MockupImages/PlayerView1.JPG)   
The game has three parts:     
**1) User Information (eg Player 1 Section)**     
In this section, the game will display:      
a) Details of last attempt (timing and scoring)     
b) Updated history of last 3 attempts within the game     
c) Time taken to play game      
d) Track number of attempts with correct answers     
e) Options to pause and resume game      


**2)Dice Board**     
In this section, game will display:    
a) 2 randomized dice and a button to roll the dice (it will be disable after 1 click)      
b) Input field for student to provide answer.      
c) Feedback when students are not able to complete the answer.      
   Students will miss a turn when they get their answer wrong      
     
**3) Number Board**      
In this section, game will display:     
a) all the possible answers of the addition of the dice 
b) Students will be able to click on the numbers which match their answer. 
For numbers which do not match, they will not be able to click on them. 
Feedback will be given if they click on the right numbers. 
The game will end when they attain a vertical, horizontal or diagonal row of numbers. 

**Sample Collections**      
Refer to folder data for sample mongo collects and documents. 

**Algorithms attempted** 

| Algorithms          | Feature                                            | File Location/codeline  |    
| -----------         | ----------------------------------------------- ---|-------------------------|     
| 2D Array Traverse   | Checking of row completion on number board         |                         |     
| Finite State Machine| 2 player mode, start, stop, pause, resume, end game|                         |     
| Stack               | Show last 3 attempts in the player dashboard       |                         |    
| State Variables     | Show attempts, update number of attempts           |                         |     
| Queue               | Turn taking between players                        |                         |     
??? Filtering, reducing and mapping? Queue 

//This table to be completed at the end of project 

**Acknowledgement of code and other content that are not produced by you**
1. Game (Four in a Row Add)
www.makingmathmorefun.com 
www.math-board-games.com
