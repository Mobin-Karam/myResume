//! use mode strict 
'use strict'


// document.querySelector('.message').textContent = '🎉Correct Number!';
// document.querySelector('.number').textContent = 15;
// document.querySelector('.score').textContent = 17;
// document.querySelector('.guess').value = 10;
// console.log(document.querySelector('.guess').value)

// Make SecretNumber for Game
const secretNumber = Math.trunc(Math.random() * 20 + 1);
// store data in code not the DOM.
let score = 20;
// Make addEventListener with Click event for Check Button.
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    // Make if/else statement for check number of box that is match with secretNumber or not.
    if (!guess) {
        document.querySelector('.message').textContent = '🛑 No number!';
    } else if (secretNumber === guess) {
        document.querySelector('.message').textContent = '🎉 Correct Number!';
        document.querySelector('.number').textContent = `${secretNumber}`;
    } else if (secretNumber < guess) {
        if (score > 0) {
            document.querySelector('.message').textContent = "📈 Too high!";
            score--;
            document.querySelector('.score').textContent = score
        } else {
            document.querySelector('.message').textContent = "💥 You Lose!"
        }
    } else if (secretNumber > guess) {
        if (score > 0) {
            document.querySelector('.message').textContent = `📉 Too Low!`;
            score--;
            document.querySelector('.score').textContent = score
        } else {
            document.querySelector('.message').textContent = "💥 You Lose!"
        }
    }

});

