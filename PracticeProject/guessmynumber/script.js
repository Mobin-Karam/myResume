'use strict'

// ?Task #1 : we should make function for check button 

let secretNumber = Math.trunc(Math.random() * 20 + 1)
console.log(secretNumber)
let score = 20;
let highscore = 0;

// display Message function 
const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
    let guess = Number(document.querySelector('.guess').value)

    // ?Task #2 if your input is empty and dont have number it should telling you the message , they dont have any number in input 
    // when input is empty
    if (!guess) {
        displayMessage('🛑 No Number');
        // when is win
    } else if (guess === secretNumber) {
        displayMessage('🎉 Correct Number');
        document.querySelector('.number').textContent = `${secretNumber}`;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '20rem';
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        } else if (score < highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
        // when is to high or to low
    } else if (guess !== secretNumber) {
        displayMessage(guess > secretNumber ? '📈 Too High' : '📉 Too Low');
        score--;
        document.querySelector('.score').textContent = score;
        if (score === 0) {
            displayMessage('💥 You Lose Game')
            document.querySelector('body').style.backgroundColor = 'red'
        }
    }
});

document.querySelector('.again').addEventListener('click', function () {
    secretNumber = Math.trunc(Math.random() * 20 + 1);
    console.log(secretNumber);
    score = 20;
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';
});