// CommonJS syntax
// works but don't do this
// const { timeout } = require('./main');

// ES6 syntax
import { timeout } from 'main';

timeout();

let clickCounter = 0;

function win() {
  alert('You won!!!!');
  reset();
}

function reset() {
  clickCounter = 0;
}

function updateCounter() {
  clickCounter++;
  console.log(clickCounter);
  if (clickCounter === 10) {
    win();
  }
}

const button = document.getElementById('clickme');
button.addEventListener('click', () => {
  console.log('I was clicked!');
  updateCounter();
});
