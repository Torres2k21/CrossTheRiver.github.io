/**
 * Self-adjusting interval to account for drifting
 *
 * @param {function} workFunc  Callback containing the work to be done
 *                             for each interval
 * @param {int}      interval  Interval speed (in milliseconds)
 * @param {function} errorFunc (Optional) Callback to run if the drift
 *                             exceeds interval
 */
function AdjustingInterval(workFunc, interval, errorFunc) {
  var that = this;
  var expected, timeout;
  this.interval = interval;

  this.start = function () {
    expected = Date.now() + this.interval;
    timeout = setTimeout(step, this.interval);
  };

  this.stop = function () {
    clearTimeout(timeout);
  };
  
  let time = `Tiempo 00:`;
  let minutes = 0;

  function step() {
    if (justSomeNumber == 59) {
      minutes++;
      time = `Tiempo 0${minutes}:`;
      justSomeNumber = -1;
    }
    if (justSomeNumber >= 9)
      document.getElementById("time-game").textContent = `${time}${
        justSomeNumber + 1
      }`;
    else
      document.getElementById("time-game").textContent = `${time}0${
        justSomeNumber + 1
      }`;
    var drift = Date.now() - expected;
    if (drift > that.interval) {
      // You could have some default stuff here too...
      if (errorFunc) errorFunc();
    }
    workFunc();
    expected += that.interval;
    timeout = setTimeout(step, Math.max(0, that.interval - drift));
  }
}

// For testing purposes, we'll just increment
// this and send it out to the console.
var justSomeNumber = 0;

// Define the work to be done
var doWork = function () {
  console.log(++justSomeNumber);
};

// Define what to do if something goes wrong
var doError = function () {
  console.warn("The drift exceeded the interval.");
};

// (The third argument is optional)
var game = new AdjustingInterval(doWork, 1000, doError);

// You can start or stop your timer at will
// game.stop
// game.stop();

// You can also change the interval while it's in progress
game.interval = 1000;
