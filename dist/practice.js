"use strict";
let value = new String("Hello");
// console.log(typeof value);
let data1 = "Hello";
// if (typeof data1 === "string") {
//   console.log(data1.toUpperCase());
// }
let color1 = "red";
let color = "red";
function getStatus(s) {
    console.log(s);
}
// getStatus("error")
let value1 = "hello";
// console.log((value1 as string).toUpperCase());
function printId(id) {
    if (typeof id === "string") {
        return id.toUpperCase();
    }
    else {
        return "this is a number ";
    }
}
// printId("13213");
// console.log(printId(4234));
// type User = {
//   name: string;
// };
// type Admin = {
//   permissions: string[];
// };
// type AdminUser = User & Admin;
// const findRole: AdminUser = {
//   name: "Shaching",
//   permissions: ["User"],
// };
// Create an array that only stores numbers.
const numArray = [12, 33, 45, 56, 77, 88];
function greet(name) {
    const getName = name ?? "not a string";
    return getName;
}
console.log(greet("Sha"));
