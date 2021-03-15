let clickCounter = 0;

function win() {
  alert('You won!!!!');
  reset();
}

function reset() {
  clickCounter = 0;
}

export const updateCounter = function () {
  clickCounter++;
  console.log(clickCounter);
  if (clickCounter === 10) {
    win();
  }
};
