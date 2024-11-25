//Factory Function
function createCirle(radius) {
  return {
    radius,
    draw: function () {
      console.log('Draw');
    },
  };
}

const circle = createCirle(1);

//Constructor function
function Circle(radius) {
  console.log('this', this);
  this.radius = radius;
  this.draw = function () {
    console.log('Draw with radius: ' + this.radius);
  };
}

const anotherCirle = new Circle(1);
//When Creating a new Object (In this case: Cirle) we are doing 3 things:
//1. Create an empty Object
//2. It would set (this) to point to that object (Previously poiting to Window)
//3. Finally it would return an Object from the Contructor function (Line 14) (Is like returning 'this')

anotherCirle.draw();
