//! use mode strict 
'use strict'


// document.querySelector('.message').textContent = '🎉Correct Number!';
// document.querySelector('.number').textContent = 15;
// document.querySelector('.score').textContent = 17;
// document.querySelector('.guess').value = 10;
// console.log(document.querySelector('.guess').value)

const number = Math.trunc(Math.random() * 20 + 1);

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    console.log(guess, typeof guess);

    if (!guess) {
        document.querySelector('.message').textContent = '🛑 هیچ عددی وجود ندارد!';
    } else {
        if (number === guess) {
            document.querySelector('.message').textContent = '🎉 Correct Number!';
            document.querySelector('.number').textContent = `${number}`;
        } else {
            document.querySelector('.message').textContent = `❌ Wrong Number!`;
        }
    }
});

