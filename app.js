let home = 0
let away = 0

// this function take the home variable and adds one 
function homePoints() {
  // console.log('this is home score right now', home);

  // grab home variable and use js to add 1
  home += 1;
  // Log whenever you change or update a variable
  // did the variable change as expected? Log it
  console.log(`home score: ${home}`);
  // if the above console is working as intended, now show the change visibly on the page

  // define an element that Im going to use to put this score on the page

  // homeScoreElement 
  // const userInputElement = document.getElementById('homePoints')
  // userInputElement.innerText = home
  drawPoints()
}

// This function just talks to my index and puts the variables where they should go based on the Id's
function drawPoints() {
  const homeScoreElm = document.getElementById('homePoints')
  homeScoreElm.innerText = home

  const awayScoreElm = document.getElementById('awayPoints')
  awayScoreElm.innerText = away
}


function awayPoints() {
  away += 1;
  console.log(`away score: ${away}`);
  // const userInputElement = document.getElementById('awayPoints')
  // userInputElement.innerText = away
  drawPoints()
}

function homePointsThree() {
  home += 3;
  // ALWAYS log this variable before putting stuff on the page
  console.log(`home score: ${home}`);
  drawPoints()
}

function awayPointsThree() {
  home += 3;
  console.log(`away score: ${away}`);
  const userInputElement = document.getElementById('awayPointsThree')
  userInputElement.innerText = away
}


// function selectFoodItem(foodItem) {
//   userInput += foodItem
//   console.log('Selected Food Item!', userInput);
//   updateUserInput()
// }