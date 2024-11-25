// function Circle(radius) {
//   this.radius = radius;

//   let defaultLocation = { x: 0, y: 0 };

//   this.draw = function () {
//     console.log('Draw with radius: ', this.radius);
//   };

//   Object.defineProperty(this, 'dafaultLocaiton', {
//     get: function () {
//       return defaultLocation;
//     },
//     set: function (value) {
//       return defaultLocation = value;
//     },
//   });
// }

// const circle = new Circle(10);
// console.log(circle.defaultLocation);

function StopWatch() {
  let duration = 0;
  let startTime = 0;
  let endTime = 0;
  let running = false;

  this.start = function () {
    if (running) {
      throw new Error('StopWach is running');
    }
    startTime = new Date();
    running = true;
  };

  this.stop = function () {
    if (!running) {
      throw new Error('StopWach is not running');
    }
    endTime = new Date();
    seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    duration += seconds;
    running = false;
  };

  this.reset = function () {
    duration = 0;
  };

  Object.defineProperty(this, 'duration', {
    get: function () {
      return duration;
    },
  });
}

const stopWatch = new StopWatch();
