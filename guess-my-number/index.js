//! use mode strict 
'use strict'


// document.querySelector('.message').textContent = '🎉Correct Number!';
// document.querySelector('.number').textContent = 15;
// document.querySelector('.score').textContent = 17;
// document.querySelector('.guess').value = 10;
// console.log(document.querySelector('.guess').value)

//* Make Guess Number Game 




// Make SecretNumber for Game
let secretNumber = Math.trunc(Math.random() * 20 + 1);
console.log(secretNumber)

// store data in code not the DOM.
let score = 20;
let highscore = 0;

// Make addEventListener with Click event for Check Button.
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    // Make if/else statement for check number of box that is match with secretNumber or not.

    //when the input is empty
    if (!guess) {
        document.querySelector('.message').textContent = '🛑 No number!';

        //when player win 
    } else if (secretNumber === guess) {
        document.querySelector('.message').textContent = '🎉 Correct Number!';
        document.querySelector('.number').textContent = `${secretNumber}`;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem'

        // Make highscore save each time
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;

        }
        if (score < highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

        //when guess number wrong
    } else if (guess !== secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = secretNumber < guess ? "📈 Too high!" : `📉 Too Low!`;
            score--;
            document.querySelector('.score').textContent = score
        } else {
            document.querySelector('.message').textContent = "💥 You Lose The Game!";
            document.querySelector('.score').textContent = 0;

            // } else if (secretNumber < guess) {
            //     if (score > 1) {
            //         document.querySelector('.message').textContent = "📈 Too high!";
            //         score--;
            //         document.querySelector('.score').textContent = score
            //     } else {
            //         document.querySelector('.message').textContent = "💥 You Lose The Game!";
            //         document.querySelector('.score').textContent = 0;
            //     }

            //when the guess number is Low
            // } else if (secretNumber > guess) {
            //     if (score > 1) {
            //         document.querySelector('.message').textContent = `📉 Too Low!`;
            //         score--;
            //         document.querySelector('.score').textContent = score
            //     } else {
            //         document.querySelector('.message').textContent = "💥 You Lose The Game!";
            //         document.querySelector('.score').textContent = 0;
            //     }
            // }

        };
    };
});


// Function for Again Button
document.querySelector('.again').addEventListener('click', function () {
    score = 20
    secretNumber = Math.trunc(Math.random() * 20 + 1);
    console.log(secretNumber);
    document.querySelector('.guess').value = '';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
});



