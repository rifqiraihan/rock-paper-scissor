let result_div = document.querySelector(".result");

let body = window.document.styleSheets[0];
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const newEl = document.createElement("div");

function getCPUchoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randNum = Math.floor(Math.random() * 3); // Generate random # between 0-2.
  return choices[randNum]; // Returns value of array slot based on randNum
}
function win(userChoice, cpuChoice) {
  //body.deleteRule('body { background: red; transition: all 0.5s ease;}'); -- Gets rid of css rules and slowly destroys the page, FUN!
  // body.insertRule('body {background-color: #003300; transition: all 0.7s ease;}', body.cssRules.length);
  // body.insertRule('#user-label {background: green; transition: all 0.5s ease;}', body.cssRules.length);

  result_div.innerHTML = `<div class="player-win">
  <p>PLAYER 1 WIN</p>
</div>`;

  // result_div.innerHTML =  userChoice + " beats " + cpuChoice + ". You win!";
  //result_div = "10 Wins?! Let's go champ!";
}
function lose(userChoice, cpuChoice) {
  // body.insertRule('body {background-color: #990000; transition: all 0.7s ease;}', body.cssRules.length);
  // body.insertRule('#user-label {background: red; transition: all 0.5s ease;}', body.cssRules.length);

  result_div.innerHTML = `<div class="com-win">
  <p>COM WIN</p>
</div>`;
}
function draw(userChoice, cpuChoice) {
  result_div.innerHTML = `<div class="draw">
  <p>DRAW</p>
</div>`;
  // body.insertRule('body {background: #292C34; transition: all 1s ease;}', body.cssRules.length);
  // body.insertRule('#user-label {background: #E2584D; transition: all 0.5s ease;}',
  // body.cssRules.length);
}

function game(userChoice) {
  const cpuChoice = getCPUchoice();
  // console.log("user choice " + userChoice);
  // console.log("cpu choice " + cpuChoice);
  switch (userChoice + cpuChoice) {
    case "RockScissors":
    case "PaperRock":
    case "ScissorsPaper":
      win(userChoice, cpuChoice);
      break;
    case "RockPaper":
    case "PaperScissors":
    case "ScissorsRock":
      lose(userChoice, cpuChoice);
      break;
    case "RockRock":
    case "PaperPaper":
    case "ScissorsScissors":
      draw(userChoice, cpuChoice);
      break;
  }
}

function reloadGame() {
  location.reload();
}

function main() {
  rock_div.addEventListener("click", function () {
    game("Rock");
  });
  paper_div.addEventListener("click", function () {
    game("Paper");
  });
  scissors_div.addEventListener("click", function () {
    game("Scissors");
  });
}

// First one to 20!
// if (cpuScore === 20){
//   cpuScore = 0;
//   result_div.innerHTML = `Round Over! CPU wins!`;
//   break;
// }
// else{
//   cpuScore++;
// }

// if (userScore === 20){
//   userScore = 0;
// }
// else{
//   userScore++;
// }

main();
