let x = { value: 10 };

// Since object are Refence Types
// What I'm doing here is copying the reference address not the actual value of the object
let y = x;

x.value = 20;

let obj = { value: 1 };

function increase(obj) {
  obj.value++;
}
increase(obj);
console.log(obj);
