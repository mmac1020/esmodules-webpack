let clickCounter = 0;

function win() {
  alert('You won!!!!');
  reset();
}

function reset() {
  clickCounter = 0;
}

let updateCounter;

export default updateCounter = function() {
  clickCounter++;
  console.log(clickCounter);
  if (clickCounter === 10) {
    win();
  }
}

/**
 
export updateCounter;

export default function updateCounter() {
  clickCounter++;
  console.log(clickCounter);
  if (clickCounter === 10) {
    win();
  }
}
*/