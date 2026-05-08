let userName = "shaching";
let count = 1000;

// when need to annotate tyeps

// function parameter and return function have to annotate types

function add(a: number, b: number) {
  return a + b;
}

// console.log(add(200, 100));

// empty initialization -> you should also annotate when type is not obvious
let maybe: string | number;
maybe = 1000;
// console.log(maybe);

let unknowType: number | string;

unknowType = Math.random() * 20 > 5 ? "test" : 10;

console.log(unknowType);
