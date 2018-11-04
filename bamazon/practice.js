// Created a series of questions
inquirer.prompt([

    {
      type: "input",
      name: "name",
      message: "Who are you???"
    },
  
    {
      type: "list",
      name: "doingWhat",
      message: "What are you doing in my house??",
      choices: ["I made you cookies!", "No lie dude. I'm here to rob you.", "Uh. This is my house... Who are YOU???"]
    },
  
    {
      type: "checkbox",
      name: "carryingWhat",
      message: "What are you carrying in your hands??",
      choices: ["TV", "Slice of Toast", "Butter Knife"]
    },
  
    {
      type: "confirm",
      name: "canLeave",
      message: "Can you leave now?"
    },
  
    {
      type: "password",
      name: "myPassword",
      message: "Okay fine. You can stay. But only if you say the magic password."
    }
])
.then(function(inquirerResponse) {
  // If the inquirerResponse confirms, we displays the inquirerResponse's username and pokemon from the answers.
  if (inquirerResponse.confirm) {
    console.log("\nWelcome " + inquirerResponse.username);
    console.log("Your " + inquirerResponse.pokemon + " is ready for battle!\n");
  }
  else {
    console.log("\nThat's okay " + inquirerResponse.username + ", come again when you are more sure.\n");
  }
});


// __________________________________________________________

// ===========================================================================================================



// Set initial health amounts.
var userHealth = 70;
var zombieHealth = 15;

//update this function to check DB and see if product has plenty of avail. 
function checkRound() {

  console.log("");
  console.log("");

  // If the user has less than 0 health.... then the user lost.
  if (userHealth <= 0) {

    console.log("###############################################");
    console.log("");
    console.log("Game over dude. It looks like you're dead.");
    console.log("");
    console.log("###############################################");

    // Exit the game
    process.exit();
  }

  // If the zombie has less than 0 health.... then the user won.
  if (zombieHealth <= 0) {

    console.log("###############################################");
    console.log("");
    console.log("Victory! You defeated the zombie and survived!");
    console.log("");
    console.log("###############################################");

    // Exit the game
    process.exit();
  }

  // After performing the "check", the next round is initiated.
  startBamazon();

}


// This function holds the game logic
function startBamazon() {

  // We create a list prompt. Specifying that the user must pick a random number between 1 and 5.
  inquirer.prompt([
    {
      type: "list",
      name: "byproduct",
      message: "Please select a product you would like to buy from the list below",
      choices: ["By product name", "By price", "By Department"]
    }

  ]).then(function(purchase) {

   

// Starts the game!
startBamazon();


