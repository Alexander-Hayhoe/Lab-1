var mathLib = require('./myMath')

function init() {
  console.log('Hello World!');

  let age = 32;
  console.log("My age is: " + age);

  let name = "Havoc";
  console.log("My name is: " + name);

  mathLib.sayHello("a parameter val");
  var res = mathLib.sum(21,21);
  console.log(res);

  var g = mathLib.greater(92920, 2902892);
  console.log(g);

  console.log(mathLib.greater(-1, -2));

  console.log("Is even: " +mathLib.isEven(42));
  console.log("Is even: " +mathLib.isEven(33));
  console.log("Is even: " +mathLib.isEven(0));
}

init();
