var compImg = document.querySelector(".box-2");
var humImg = document.querySelector(".rock-r");
let rockButton = document.querySelector(".rock");
let scissorButton = document.querySelector(".scissors");
let paperButton = document.querySelector(".paper");
let scoreHuman = document.querySelector(".score-1");
let scoreComp = document.querySelector(".score-2");
// let rockHand = document.querySelector('.rock-r');

let buttonRock=document.querySelector(".rock")
let buttonPaper=document.querySelector(".paper")
let buttonScissors=document.querySelector(".scissors")

let secondImg = document.querySelector(".comp-imgg");
let rockClick = false;
let paperClick = false;
let scissorClick = false;
let scoreh = 0;
let scorec = 0;
let wonMessage = document.querySelector(".won");
let playAgainButton = document.querySelector(".play-again");
let value;

function compRandom() {
  value = Math.ceil(Math.random() * 3);

  switch (value) {
    case 1:
      secondImg.setAttribute("src", "./assets/paper-hand.png");
      break;

    case 2:
      secondImg.setAttribute("src", "./assets/rock-hand.png");
      break;

    case 3:
      secondImg.setAttribute("src", "./assets/scissors-hand.png");
      break;
  }
}
paperButton.addEventListener("click", () => {
  humImg.setAttribute("src", "./assets/paper-hand.png");
  compRandom();

  if (value == 2) {
    scoreh++;
    scoreHuman.innerHTML = scoreh;
  } else if (value == 3) {
    scorec++;
    scoreComp.innerHTML = scorec;
  }
  gameEnd();
});
rockButton.addEventListener("click", () => {
  humImg.setAttribute("src", "./assets/rock-hand.png");
  compRandom();

  if (value == 1) {
    scorec++;
    scoreComp.innerHTML = scorec;
  } else if (value == 3) {
    scoreh++;
    scoreHuman.innerHTML = scoreh;
  }
  gameEnd();
});
console.log(scoreHuman);
console.log(scoreComp);
scissorButton.addEventListener("click", () => {
  humImg.setAttribute("src", "./assets/scissors-hand.png");
  compRandom();
  if (value == 1) {
    scoreh++;
    scoreHuman.innerHTML = scoreh;
  } else if (value == 2) {
    scorec++;
    scoreComp.innerHTML = scorec;
  }
  gameEnd();
});

function gameEnd() {
    if(scorec==3 || scoreh==3){
        buttonRock.disabled = true;
       buttonPaper.disabled = true;
       buttonScissors.disabled = true;
    }
    

  if (scorec === 3) {
    wonMessage.innerHTML = "Computer won ";
    playAgainButton.style.display = "block";
   
  } else if (scoreh ===3) {
    wonMessage.innerHTML = "You Won";
    playAgainButton.style.display = "block";
    
  }
  playAgainButton.addEventListener("click", () => {
    window.open("second.html", "_self");
  });
}















// rockButton.addEventListener("click", () => {
//     if (!isGameOver()) {
//         rockHand.setAttribute("src", "./assets/rock-hand.png");
//         rockClick = true;
//         paperClick = false;
//         scissorClick = false;
//         changeCompImg();
//     }
// });

// paperButton.addEventListener("click", () => {
//     if (!isGameOver()) {
//         rockHand.setAttribute("src", "./assets/paper-hand.png");
//         paperClick = true;
//         rockClick = false;
//         scissorClick = false;
//         changeCompImg();
//     }

// });

// scissorButton.addEventListener("click", () => {
//     if (!isGameOver()) {
//         rockHand.setAttribute("src", "./assets/scissors-hand.png");
//         scissorClick = true;
//         rockClick = false;
//         paperClick = false;
//         changeCompImg();
//     }
// });

// const changeCompImg = () => {
//     let random = Math.ceil(Math.random() * 3);
//     if (random == 1) {
//         secondImg.setAttribute("src", "./assets/rock-hand.png");
//         if (rockClick) {
//             // Tie
//         } else if (scissorClick) {
//             scoreComp++;
//             scoreComp.innerHTML = compScore;
//         } else if (paperClick) {
//             humanScore++;
//             scoreHuman.innerHTML = humanScore;
//         }
//     } else if (random == 2) {
//         secondImg.setAttribute("src", "./assets/paper-hand.png");
//         if (paperClick) {
//             // Tie
//         } else if (rockClick) {
//             compScore++;
//             scoreComp.innerHTML = compScore;
//         } else if (scissorClick) {
//             humanScore++;
//             scoreHuman.innerHTML = humanScore;
//         }
//     } else {
//         secondImg.setAttribute("src", "./assets/scissors-hand.png");
//         if (scissorClick) {
//             // Tie
//         } else if (rockClick) {
//             humanScore++;
//             scoreHuman.innerHTML = humanScore;
//         } else if (paperClick) {
//             compScore++;
//             scoreComp.innerHTML = compScore;
//         }
//     }

//     checkWinner();
// };

// function checkWinner() {
//     if (humanScore === 5) {
//         wonMessage.textContent = 'You Won the game';
//         wonMessage.style.display = 'block';
//         playAgainButton.style.display = 'block';
//         disableIcons();
//     } else if (compScore === 5) {
//         wonMessage.textContent = 'Computer Won the game';
//         wonMessage.style.display = 'block';
//         playAgainButton.style.display = 'block';
//         disableIcons();
//     }
// }

// function disableIcons() {
//     rockButton.disabled = true;
//     paperButton.disabled = true;
//     scissorButton.disabled = true;
// }

// playAgainButton.addEventListener('click', () => {
//     resetGame();
// });

// function resetGame() {
//     humanScore = 0;
//     compScore = 0;
//     scoreHuman.innerHTML = 0;
//     scoreComp.innerHTML = 0;
//     wonMessage.textContent = '';
//     wonMessage.style.display = 'none';
//     playAgainButton.style.display = 'none';
//     rockButton.disabled = false;
//     paperButton.disabled = false;
//     scissorButton.disabled = false;
// }

// function isGameOver() {
//     return humanScore === 5 || compScore === 5;
// }
