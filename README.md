# yahtzee

Original file structure:
/  
├── index.html // Landing page (start button, rules modal, username input)  
├── game-board.html // Game page (scorecard, dice, etc.)  
├── css/  
 ├── landing.css // Styles specific to the landing page  
 ├── game-board.css // Styles specific to the game page  
 └── global.css // Shared styles  
├── js/  
 ├── landing.js // Handles landing page interactions  
 ├── game-board.js // Bootstraps the game page logic  
 └── modules/  
 ├── GameManager.js // Manages overall game flow and state  
 ├── Dice.js // Dice behavior (rolling, holding)  
 ├── ScoreCard.js // Score calculation and display logic  
 ├── Modal.js // Modal functionality for rules  
 └── DataStore.js // Data persistence (user scores, localStorage, etc.)  
└── assets/  
 ├── images/ // Images or icons  
 ├── dice_1.png  
 ├── dice_2.png  
 ├── dice_3.png  
 ├── dice_4.png  
 ├── dice_5.png
└── dice_6.png
