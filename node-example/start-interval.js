const startInterval = function () {
  setInterval(function () {
    console.log('Logging something every two seconds');
  }, 2000);
};

module.exports = { startInterval };
