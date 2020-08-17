import updateCounter from './game';

const button = document.getElementById('clickme');

button.addEventListener('click', function() {
  updateCounter();
});

// import { stuff } from './whatever';

// stuff();