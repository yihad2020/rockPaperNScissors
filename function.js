const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
var results1 = document.querySelector('.results')
var results2 = document.querySelector('.results2')
var results3 = document.querySelector('.results3')

let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = userChoice
  generateComputerChoice()
  getResult()
  userChoiceBackground()
  fight()
}))

function userChoiceBackground(){
  if (userChoice == 'rock'){
    userChoiceDisplay.style.background="url(img/rock.png)"
  }

    if (userChoice == 'scissors'){
    userChoiceDisplay.style.background="url(img/scissors.png)"
  }

    if (userChoice == 'paper'){
    userChoiceDisplay.style.background="url(img/paper.png)"
  }
}

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1 // or you can use possibleChoices.length
  
  if (randomNumber === 1) {
    computerChoice = 'rock'
    computerChoiceDisplay.style.background="url(img/rock.png)"
  }
  if (randomNumber === 2) {
    computerChoice = 'scissors'
    computerChoiceDisplay.style.background="url(img/scissors.png)"
  }
  if (randomNumber === 3) {
    computerChoice = 'paper'
    computerChoiceDisplay.style.background="url(img/paper.png)"
  }
  computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
  if (computerChoice === userChoice) {
    result = '¡ES UN EMPATE!'
    resultDisplay.style.color="orange";
  }
  if (computerChoice === 'rock' && userChoice === "paper") {
    result = '¡GANASTE!'
    resultDisplay.style.color="green";
  }
  if (computerChoice === 'rock' && userChoice === "scissors") {
    result = '¡PERDISTE!'
    resultDisplay.style.color="red";
  }
  if (computerChoice === 'paper' && userChoice === "scissors") {
    result = '¡GANASTE!'
    resultDisplay.style.color="green";
  }
  if (computerChoice === 'paper' && userChoice === "rock") {
    result = '¡PERDISTE!'
    resultDisplay.style.color="red";
  }
  if (computerChoice === 'scissors' && userChoice === "rock") {
    result = '¡GANASTE!'
    resultDisplay.style.color="green";
  }
  if (computerChoice === 'scissors' && userChoice === "paper") {
    result = '¡PERDISTE!'
    resultDisplay.style.color="red";
  }
  resultDisplay.innerHTML = result
}

function fight(){
results1.style.left="0";
results2.style.left="50%";
results3.style.top="300px"
}

function reload(){
  location.reload();
}