'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const msg = document.querySelector('.message');
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage('⛔No Number');
  } else if (secretNumber === guess) {
    msg.textContent = '✔ Correct Number';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈TOO HIGH';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😕YOU LOST THE GAME';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉TOO LOW';
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😕YOU LOST THE GAME';
      document.querySelector('.score').textContent = 0;
    }
    document.querySelector('.guess').value = '';
    document.querySelector('.again').addEventListener('click', function () {
      secretNumber = Math.trunc(Math.random() * 20) + 1;
      score = 20;
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent = 'Start guessing...';
      document.querySelector('.number').textContent = '?';
      document.querySelector('.guess').value = '';
      document.querySelector('body').style.backgroundColor = '#222';
      document.querySelector('.number').width = '15rem';
    });
  }
});
