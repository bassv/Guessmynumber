'use strict';

var score = 20;
var highscore = 0;
let number = Math.trunc(Math.random() * 20 + 1);
var flag = 0;
document.querySelector('.check').addEventListener('click', check);

document.querySelector('.again').addEventListener('click', again);

function again() {
  document.querySelector('.score').textContent = 20;
  document.querySelector('.message').textContent = 'start guessing...';
  document.querySelector('body').style.background = '#222';
  document.querySelector('.number').textContent = '?';
  number = Math.trunc(Math.random() * 20 + 1);
  score = 20;
}

function check() {
  if (flag == 0) {
    let guess = Number(document.querySelector('.guess').value);
    
    if (guess <= 0 || guess > 20) {
      document.querySelector('.message').textContent = 'Enter a valid number';
    } else if (guess > number) {
      if (score > 0) {
        document.querySelector('.message').textContent = ' Too High';
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.message').textContent = 'Game over !';
      }
    } else if (guess < number) {
      if (score > 0) {
        document.querySelector('.message').textContent = 'Too low';
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.message').textContent = 'Game over !';
      }
    } else {
      flag = 1;
      document.querySelector('.message').textContent = 'correct number';
      document.querySelector('body').style.background = 'green';
      document.querySelector('.number').textContent = number;
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    }
  } else {
    flag = 0;
    again();
  }
}
