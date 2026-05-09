"use strict";
//  union types
let title;
title = undefined;
//  void : when function does not return usefull values
function printMsg(msg) {
    console.log(msg);
}
// never returns: never
function errorMsg(msg) {
    throw new Error(msg);
}
//  do not use any -- try to ignore as much as possible
function fetchFromAPI() {
    fetch(``);
}
let data = fetchFromAPI();
if (typeof data === "string") {
    console.log(data.toUpperCase()); // OK
}
// data.toUpperCase(); // Error: Object is of type 'unknown'
