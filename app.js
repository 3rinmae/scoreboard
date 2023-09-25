let home = 0
let away = 0

function homePoints() {
  home += 1;
  console.log(`home score: ${home}`);
  const userInputElement = document.getElementById('homePoints')
  userInputElement.innerText = home
}

function awayPoints() {
  away += 1;
  console.log(`away score: ${away}`);
  const userInputElement = document.getElementById('awayPoints')
  userInputElement.innerText = away
}

function homePointsThree() {
  home += 3;
  console.log(`home score: ${home}`);
  const userInputElement = document.getElementById('homePointsThree')
  userInputElement.innerText = home
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