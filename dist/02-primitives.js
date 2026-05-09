"use strict";
let fullname = "mongswe";
let age = 25;
let isStudent = true;
let bigNumber = 2n ** 63n - 1n;
const compare = Symbol("a") !== Symbol("b");
// console.log(compare);
const big = 22n * 100n;
// console.log(typeof big);
const createString = new String("hello james");
// console.log(typeof createString);
const TOKEN = Symbol("TOKEN"); // unique symbol
// function parameter and return function also annotate types
function monthsTodDay(months) {
    return months * 30;
}
console.log(monthsTodDay(5));
