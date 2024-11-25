// let x = {};
// let x = new Object();

// new String(); // '',"", ``
// new Boolean(); // true, false
// new Number(); // 0, 1, -1, 1234567890, Infinity, -Infinity, NaN

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log('Draw with radius: ', this.radius);
  };
}

//The next 2 lines create the same result. The new object created
//Will determine the context of 'this'
Circle.call({}, 1, 2, 3);
const another = new Circle(1);

//If you don't use the new expresion, 'this' would reference to the Window object
Circle.call(Window, 1);
const anothe2 = Circle(1);

//Same result as line 17 but with the apply() method we can pass an array as a parameter
Circle.apply({}, [1, 2, 3]);
