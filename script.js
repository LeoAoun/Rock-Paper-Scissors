const textBot = document.getElementById("botChoiceText");

const playerImg = document.getElementById("player-img");
const botImg = document.getElementById("bot-img");

const buttonPlay = document.getElementById("buttonPlay");
const buttonGameOver = document.getElementById("buttonGameOver");

const FINISH_OPTIONS = {
  WIN: "YOU WIN!",
  DRAW: "DRAW!",
  DEFEAT: "DEFEAT",
};

// VERIFY IF THE PLAYER CHOSE ANY OPTION
let choiced = false;

// PLAYER MOVES
let player = ["rock", "paper", "scissors"];

// BOT MOVES
let bot = ["rock", "paper", "scissors"];

// GET THE INPUT VALUE THAT THE PLAYER CHOSE
function choice() {
  choiced = true;
  selector = document.getElementById("selector").value;
  document.getElementById("playerChoiceText").innerHTML = selector;

  switch (selector) {
    case "Rock":
      playerImg.setAttribute("src", "./Images/Rock-Player.png");
      break;

    case "Paper":
      playerImg.setAttribute("src", "./Images/Paper-Player.png");
      break;

    case "Scissors":
      playerImg.setAttribute("src", "./Images/Scissors-Player.png");
      break;
  }
}

// PLAY THE GAME
function play() {

  // CHECK THE PLAYER CHOICE
  if (!choiced) return;
  else {
    if (selector == "Rock") {
      movePlayer = player[0];
    }
    if (selector == "Paper") {
      movePlayer = player[1];
    }
    if (selector == "Scissors") {
      movePlayer = player[2];
    }

    // GENERATES A RANDOM NUMBER FROM 1 TO 3
    p2 = Math.floor(Math.random() * 3);
    moveBot = bot[p2];

    // INPUT AN IMAGE OF THE BOT PLAY ON THE SCREEN
    switch (moveBot) {
      case "rock":
        botImg.setAttribute("src", "./Images/Rock-Bot.png");
        textBot.textContent = "Rock";
        break;

      case "paper":
        botImg.setAttribute("src", "./Images/Paper-Bot.png");
        textBot.textContent = "Paper";
        break;

      case "scissors":
        botImg.setAttribute("src", "./Images/Scissors-Bot.png");
        textBot.textContent = "Scissors";
        break;
    }

    // VERIFY THE WINNER
    if (movePlayer == moveBot) {
      document.getElementById("result").textContent = FINISH_OPTIONS.DRAW;
      drawAudio();
    }

    if (movePlayer == "rock" && moveBot == "scissors") {
      document.getElementById("result").textContent = FINISH_OPTIONS.WIN;
      winAudio();
    }
    if (movePlayer == "paper" && moveBot == "rock") {
      document.getElementById("result").textContent = FINISH_OPTIONS.WIN;
      winAudio();
    }
    if (movePlayer == "scissors" && moveBot == "paper") {
      document.getElementById("result").textContent = FINISH_OPTIONS.WIN;
      winAudio();
    }

    if (movePlayer == "rock" && moveBot == "paper") {
      document.getElementById("result").textContent = FINISH_OPTIONS.DEFEAT;
      loseAudio();
    }
    if (movePlayer == "paper" && moveBot == "scissors") {
      document.getElementById("result").textContent = FINISH_OPTIONS.DEFEAT;
      loseAudio();
    }
    if (movePlayer == "scissors" && moveBot == "rock") {
      document.getElementById("result").textContent = FINISH_OPTIONS.DEFEAT;
      loseAudio();
    }

    setTimeout(function screenGameOver() {
      document.getElementById("gameover").style.display = "flex";
    }, 100);
  }
}

// BUTTON SOUND
function buttonSound() {
  audio = document.getElementById("buttonSound");
  audio.volume = 0.7;
  audio.play();
}

// PLAY THE WIN AUDIO
function winAudio() {
  audio = document.getElementById("winAudio");
  audio.volume = 0.5;
  audio.play();
}

// PLAY THE DRAW AUDIO
function drawAudio() {
  audio = document.getElementById("drawAudio");
  audio.volume = 0.5;
  audio.play();
}

// PLAY THE LOSE AUDIO
function loseAudio() {
  audio = document.getElementById("loseAudio");
  audio.volume = 0.5;
  audio.play();
}

// RESTART THE GAME
function restart() {
  window.location.reload();
}

buttonPlay.addEventListener("click", buttonSound);
buttonGameOver.addEventListener("click", buttonSound);

buttonPlay.addEventListener("click", play);

buttonGameOver.addEventListener("click", restart);
